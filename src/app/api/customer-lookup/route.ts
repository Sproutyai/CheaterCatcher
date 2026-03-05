import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const supabase = createServiceClient();

    // Look up profile
    const { data: profile } = await supabase
      .from('profiles')
      .select('id, subscription_status, subscription_plan, stripe_customer_id, searches_remaining')
      .eq('email', email)
      .single();

    // Look up past searches
    const { data: searches } = await supabase
      .from('searches')
      .select('id, target_name, target_city, search_mode, results_count, status, created_at')
      .eq('email', email)
      .order('created_at', { ascending: false })
      .limit(20);

    // Look up active subscription
    const { data: subscription } = await supabase
      .from('subscriptions')
      .select('id, plan, status, current_period_end, cancel_at_period_end')
      .eq('email', email)
      .eq('status', 'active')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    const isActive =
      (profile?.subscription_status === 'active') ||
      (subscription?.status === 'active');

    return NextResponse.json({
      exists: !!profile,
      active: isActive,
      plan: subscription?.plan || profile?.subscription_plan || null,
      searchesRemaining: profile?.searches_remaining || 0,
      subscription: subscription || null,
      searches: searches || [],
    });
  } catch (err) {
    console.error('Customer lookup error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
