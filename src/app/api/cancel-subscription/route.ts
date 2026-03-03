import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const supabase = createServiceClient();

    // Look up user
    const { data: profile } = await supabase
      .from('profiles')
      .select('id, stripe_customer_id, subscription_id')
      .eq('email', email)
      .single();

    if (!profile) {
      return NextResponse.json({ error: 'No subscription found' }, { status: 404 });
    }

    // TODO: Cancel Stripe subscription
    /*
    if (profile.subscription_id) {
      await stripe.subscriptions.cancel(profile.subscription_id);
    }
    */

    // Update profile
    await supabase
      .from('profiles')
      .update({ subscription_status: 'canceled' })
      .eq('id', profile.id);

    return NextResponse.json({ success: true, message: 'Subscription canceled' });
  } catch (err) {
    console.error('Cancel subscription error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
