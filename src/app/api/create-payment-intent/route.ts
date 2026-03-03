import { NextRequest, NextResponse } from 'next/server';

// import Stripe from 'stripe';
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { amount, email, plan } = await request.json();

    if (!amount || !email) {
      return NextResponse.json(
        { error: 'Amount and email are required' },
        { status: 400 }
      );
    }

    // TODO: Uncomment when Stripe keys are configured
    /*
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
      receipt_email: email,
      metadata: { plan },
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
    */

    // Placeholder
    return NextResponse.json({
      clientSecret: 'pi_placeholder_secret',
      paymentIntentId: 'pi_placeholder',
      message: 'Stripe integration pending — configure STRIPE_SECRET_KEY',
    });
  } catch (err) {
    console.error('Payment intent error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
