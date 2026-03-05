import Stripe from 'stripe';

// Server-side Stripe instance
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Price IDs — replace with real Stripe price IDs when created
export const PRICE_IDS = {
  single: process.env.STRIPE_PRICE_SINGLE || 'price_single_placeholder',
  weekly: process.env.STRIPE_PRICE_WEEKLY || 'price_weekly_placeholder',
  monthly: process.env.STRIPE_PRICE_MONTHLY || 'price_monthly_placeholder',
} as const;

// Coupon ID for 50% off retention offer
export const RETENTION_COUPON_ID = process.env.STRIPE_RETENTION_COUPON || 'coupon_50_off_placeholder';
