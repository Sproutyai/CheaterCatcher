import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const supabase = createServiceClient();

    // Look up active subscription
    const { data: subscription } = await supabase
      .from('subscriptions')
      .select('id, stripe_subscription_id, plan, status')
      .eq('email', email)
      .eq('status', 'active')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (!subscription) {
      return NextResponse.json(
        { error: 'No active subscription found' },
        { status: 404 }
      );
    }

    // Cancel via Stripe if configured
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    const isStripeConfigured = stripeKey && !stripeKey.includes('placeholder');

    if (isStripeConfigured && subscription.stripe_subscription_id) {
      const Stripe = (await import('stripe')).default;
      const stripe = new Stripe(stripeKey!);

      await stripe.subscriptions.update(subscription.stripe_subscription_id, {
        cancel_at_period_end: true,
      });
    }

    // Update subscriptions table
    await supabase
      .from('subscriptions')
      .update({
        cancel_at_period_end: true,
        updated_at: new Date().toISOString(),
      })
      .eq('id', subscription.id);

    // Also update profile
    await supabase
      .from('profiles')
      .update({
        subscription_status: 'canceled',
        updated_at: new Date().toISOString(),
      })
      .eq('email', email);

    return NextResponse.json({
      success: true,
      message: 'Subscription will cancel at end of current billing period',
    });
  } catch (err) {
    console.error('Cancel subscription error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
