import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const supabase = createServiceClient();

    const { data: profile } = await supabase
      .from('profiles')
      .select('id, subscription_status, subscription_plan, stripe_customer_id')
      .eq('email', email)
      .single();

    if (profile && profile.subscription_status === 'active') {
      return NextResponse.json({
        exists: true,
        active: true,
        plan: profile.subscription_plan,
      });
    }

    return NextResponse.json({ exists: false, active: false });
  } catch (err) {
    console.error('Customer lookup error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
