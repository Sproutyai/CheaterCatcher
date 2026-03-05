import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    const stripeKey = process.env.STRIPE_SECRET_KEY;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    const isStripeConfigured =
      stripeKey &&
      !stripeKey.includes('placeholder') &&
      webhookSecret &&
      !webhookSecret.includes('placeholder');

    if (!isStripeConfigured) {
      return NextResponse.json(
        { error: 'Stripe webhook not configured' },
        { status: 503 }
      );
    }

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      );
    }

    const Stripe = (await import('stripe')).default;
    const stripe = new Stripe(stripeKey!);

    let event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret!);
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }

    const supabase = createServiceClient();

    // Use `as any` for event data since Stripe SDK types can lag behind actual webhook payloads
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const obj = event.data.object as any;

    switch (event.type) {
      case 'payment_intent.succeeded': {
        await supabase
          .from('payments')
          .update({ status: 'succeeded' })
          .eq('stripe_payment_intent_id', obj.id);
        break;
      }

      case 'customer.subscription.created': {
        const email: string = obj.metadata?.email || '';
        const periodEnd: number | undefined = obj.current_period_end;

        await supabase.from('subscriptions').insert({
          email,
          stripe_subscription_id: obj.id,
          plan: obj.metadata?.plan || null,
          status: obj.status,
          current_period_end: periodEnd
            ? new Date(periodEnd * 1000).toISOString()
            : null,
          cancel_at_period_end: obj.cancel_at_period_end ?? false,
        });

        if (email) {
          await supabase
            .from('profiles')
            .update({
              subscription_status: 'active',
              subscription_plan: obj.metadata?.plan || null,
              updated_at: new Date().toISOString(),
            })
            .eq('email', email);
        }
        break;
      }

      case 'customer.subscription.updated': {
        const periodEnd: number | undefined = obj.current_period_end;
        await supabase
          .from('subscriptions')
          .update({
            status: obj.status,
            current_period_end: periodEnd
              ? new Date(periodEnd * 1000).toISOString()
              : null,
            cancel_at_period_end: obj.cancel_at_period_end ?? false,
            updated_at: new Date().toISOString(),
          })
          .eq('stripe_subscription_id', obj.id);
        break;
      }

      case 'customer.subscription.deleted': {
        await supabase
          .from('subscriptions')
          .update({
            status: 'canceled',
            updated_at: new Date().toISOString(),
          })
          .eq('stripe_subscription_id', obj.id);

        const email: string = obj.metadata?.email;
        if (email) {
          await supabase
            .from('profiles')
            .update({
              subscription_status: 'canceled',
              updated_at: new Date().toISOString(),
            })
            .eq('email', email);
        }
        break;
      }

      case 'invoice.payment_failed': {
        const subId =
          typeof obj.subscription === 'string'
            ? obj.subscription
            : obj.subscription?.id;

        if (subId) {
          await supabase
            .from('subscriptions')
            .update({
              status: 'past_due',
              updated_at: new Date().toISOString(),
            })
            .eq('stripe_subscription_id', subId);
        }
        break;
      }

      default:
        break;
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error('Webhook error:', err);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}
