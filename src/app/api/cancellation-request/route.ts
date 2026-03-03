import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { email, reason } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const supabase = createServiceClient();

    const { error } = await supabase.from('cancellation_requests').insert({
      email,
      reason: reason || null,
      status: 'pending',
    });

    if (error) {
      console.error('Insert error:', error);
      return NextResponse.json({ error: 'Failed to submit request' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Cancellation request submitted' });
  } catch (err) {
    console.error('Cancellation request error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
