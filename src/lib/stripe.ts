import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export const PRICING = {
  weekly: {
    amount: 9.99,
    perDay: 1.39,
    label: '$9.99/wk',
    disclaimer: 'By continuing you agree to be charged $9.99/week until canceled',
  },
  monthly: {
    amount: 17.99,
    perDay: 0.59,
    label: '$17.99/mo',
    disclaimer: 'By continuing you agree to be charged $17.99/month until canceled',
  },
  promo: {
    amount: 17.99,
    perDay: 0.59,
    label: '$17.99/mo',
    disclaimer:
      "We've automatically applied a discount to your first subscription price. The subscription will automatically renew at $35.98/month unless canceled before the renewal date.",
  },
} as const;

export type PlanKey = keyof typeof PRICING;
export const DEFAULT_PLAN: PlanKey = 'promo';
