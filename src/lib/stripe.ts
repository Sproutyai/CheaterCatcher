import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export const PRICING = {
  single: {
    amount: 4.99,
    perDay: 4.99,
    label: 'Single Report',
    period: 'one-time',
    features: ['1 search report'],
    disclaimer: 'One-time payment of $4.99. No recurring charges.',
    autoRenew: false,
  },
  weekly: {
    amount: 9.99,
    perDay: 1.43,
    label: 'Weekly',
    period: '/week',
    features: ['Unlimited searches', 'Auto-renew weekly'],
    disclaimer: 'By continuing you agree to be charged $9.99/week until canceled.',
    popular: true,
    autoRenew: true,
  },
  monthly: {
    amount: 17.99,
    perDay: 0.59,
    label: 'Monthly',
    period: '/month',
    features: ['Unlimited searches', 'Priority scanning', 'Auto-renew monthly'],
    disclaimer:
      'By continuing you agree to be charged $17.99/month. Renews at $35.98/month unless canceled before renewal date.',
    autoRenew: true,
  },
} as const;

export type PlanKey = keyof typeof PRICING;
export const DEFAULT_PLAN: PlanKey = 'weekly';
