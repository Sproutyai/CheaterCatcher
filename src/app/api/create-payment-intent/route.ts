import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createServiceClient } from '@/lib/supabase';
import { PRICING, type PlanKey } from '@/lib/constants';

export async function POST(request: NextRequest) {
  try {
    const { plan, email, searchId } = await request.json();

    if (!plan || !email) {
      return NextResponse.json(
        { error: 'Plan and email are required' },
        { status: 400 }
      );
    }

    if (!['single', 'weekly', 'monthly'].includes(plan)) {
      return NextResponse.json(
        { error: 'Invalid plan. Must be single, weekly, or monthly' },
        { status: 400 }
      );
    }

    const planKey = plan as PlanKey;
    const pricing = PRICING[planKey];
    const supabase = createServiceClient();

    // Check if Stripe is configured
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    const isStripeConfigured = stripeKey && !stripeKey.includes('placeholder');

    if (isStripeConfigured) {
      // Dynamic import to avoid errors when Stripe key is placeholder
      const Stripe = (await import('stripe')).default;
      const stripe = new Stripe(stripeKey!);

      if (plan === 'single') {
        // One-time payment
        const paymentIntent = await stripe.paymentIntents.create({
          amount: pricing.amountCents,
          currency: 'usd',
          receipt_email: email,
          metadata: { plan, email, searchId: searchId || '' },
          automatic_payment_methods: { enabled: true },
        });

        // Log to payments table
        await supabase.from('payments').insert({
          email,
          stripe_payment_intent_id: paymentIntent.id,
          amount: pricing.amountCents,
          currency: 'usd',
          plan,
          status: 'pending',
        });

        return NextResponse.json({
          clientSecret: paymentIntent.client_secret,
          paymentIntentId: paymentIntent.id,
          type: 'payment',
        });
      } else {
        // Subscription (weekly or monthly)
        const PRICE_IDS: Record<string, string> = {
          weekly: process.env.STRIPE_PRICE_WEEKLY || '',
          monthly: process.env.STRIPE_PRICE_MONTHLY || '',
        };

        const priceId = PRICE_IDS[plan];
        if (!priceId) {
          return NextResponse.json(
            { error: 'Stripe price ID not configured for this plan' },
            { status: 500 }
          );
        }

        // Find or create customer
        const customers = await stripe.customers.list({ email, limit: 1 });
        let customerId: string;
        if (customers.data.length > 0) {
          customerId = customers.data[0].id;
        } else {
          const customer = await stripe.customers.create({ email });
          customerId = customer.id;
        }

        // Create subscription with incomplete payment
        const subscription = await stripe.subscriptions.create({
          customer: customerId,
          items: [{ price: priceId }],
          payment_behavior: 'default_incomplete',
          payment_settings: {
            save_default_payment_method: 'on_subscription',
          },
          expand: ['latest_invoice.payment_intent'],
          metadata: { email, searchId: searchId || '' },
        });

        const invoice = subscription.latest_invoice as unknown as Record<string, unknown>;
        const paymentIntent = invoice.payment_intent as Stripe.PaymentIntent;

        // Log to payments table
        await supabase.from('payments').insert({
          email,
          stripe_payment_intent_id: paymentIntent.id,
          amount: pricing.amountCents,
          currency: 'usd',
          plan,
          status: 'pending',
        });

        return NextResponse.json({
          clientSecret: paymentIntent.client_secret,
          subscriptionId: subscription.id,
          type: 'subscription',
        });
      }
    }

    // Fallback: Stripe not configured — return placeholder
    await supabase.from('payments').insert({
      email,
      stripe_payment_intent_id: `placeholder_${Date.now()}`,
      amount: pricing.amountCents,
      currency: 'usd',
      plan,
      status: 'pending',
    });

    return NextResponse.json({
      clientSecret: 'pi_placeholder_secret',
      paymentIntentId: 'pi_placeholder',
      type: plan === 'single' ? 'payment' : 'subscription',
      message: 'Stripe not configured — using placeholder',
    });
  } catch (err) {
    console.error('Payment intent error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
