import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createServiceClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { email, reason, offerAccepted } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const supabase = createServiceClient();

    // Look up subscription ID
    const { data: subscription } = await supabase
      .from('subscriptions')
      .select('stripe_subscription_id')
      .eq('email', email)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    // Log cancellation request
    const { error } = await supabase.from('cancellation_requests').insert({
      email,
      reason: reason || null,
      subscription_id: subscription?.stripe_subscription_id || null,
      offer_accepted: offerAccepted || false,
      status: 'pending',
    });

    if (error) {
      console.error('Insert error:', error);
      return NextResponse.json(
        { error: 'Failed to submit request' },
        { status: 500 }
      );
    }

    // If offer accepted: apply 50% discount via Stripe
    if (offerAccepted && subscription?.stripe_subscription_id) {
      const stripeKey = process.env.STRIPE_SECRET_KEY;
      const isStripeConfigured = stripeKey && !stripeKey.includes('placeholder');

      if (isStripeConfigured) {
        try {
          const Stripe = (await import('stripe')).default;
          const stripe = new Stripe(stripeKey!);

          const couponId = process.env.STRIPE_RETENTION_COUPON || '';
          if (couponId && !couponId.includes('placeholder')) {
            await stripe.subscriptions.update(
              subscription.stripe_subscription_id,
              { coupon: couponId } as Stripe.SubscriptionUpdateParams
            );
          }
        } catch (stripeErr) {
          console.error('Failed to apply retention coupon:', stripeErr);
          // Don't fail the request — coupon is best-effort
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: offerAccepted
        ? 'Discount applied — your subscription continues at 50% off'
        : 'Cancellation request submitted',
      offerAccepted: !!offerAccepted,
    });
  } catch (err) {
    console.error('Cancellation request error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
