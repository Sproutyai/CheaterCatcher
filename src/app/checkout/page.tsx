'use client';

import { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import { PRICING, type PlanKey, DEFAULT_PLAN } from '@/lib/stripe';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>(DEFAULT_PLAN);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const name = searchParams.get('name') || '';
  const location = searchParams.get('location') || '';
  const plan = PRICING[selectedPlan];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);

    try {
      // In production: create Stripe PaymentIntent
      // For now, redirect to results
      const params = new URLSearchParams({
        name,
        location,
        email: email.trim(),
      });
      router.push(`/results?${params.toString()}`);
    } catch (err) {
      console.error('Payment error:', err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8 px-4 md:px-6">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-3xl p-8 border border-[#1a1a1a]">
            <div className="text-center mb-6">
              <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#1a1a1a] mb-2">
                AWDTSG Report - Checkout
              </h1>
              <p className="text-gray-600 text-sm">
                Searching for: <strong>{name}</strong> in <strong>{location}</strong>
              </p>
            </div>

            {/* Plan Selector */}
            <div className="space-y-3 mb-6">
              {(Object.entries(PRICING) as [PlanKey, typeof PRICING[PlanKey]][]).map(
                ([key, p]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedPlan(key)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                      selectedPlan === key
                        ? 'border-[#1877f2] bg-[#e7f0fd]'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-[#1a1a1a]">{p.label}</span>
                        {key === 'promo' && (
                          <span className="ml-2 bg-[#1877f2] text-white text-xs px-2 py-0.5 rounded-full">
                            BEST VALUE
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-black text-[#1a1a1a]">
                          ${p.amount}
                        </span>
                        <span className="text-xs text-gray-500 block">
                          ${p.perDay}/day
                        </span>
                      </div>
                    </div>
                  </button>
                )
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-[#1a1a1a] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#1a1a1a] focus:ring-2 focus:ring-[#1877f2] outline-none text-[#1a1a1a]"
                  required
                />
              </div>

              {/* Stripe Elements placeholder */}
              <div className="bg-[#f0f2f5] rounded-xl p-4 border border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  💳 Stripe payment form will be integrated here
                </p>
                <div className="mt-3 space-y-3">
                  <input
                    type="text"
                    placeholder="Card number"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-[#1a1a1a]"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-[#1a1a1a]"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-[#1a1a1a]"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || !email.trim()}
                className="w-full bg-[#1877f2] text-white py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-colors border border-[#1a1a1a] disabled:opacity-50"
              >
                {loading ? 'Processing...' : `Pay ${plan.label} — Get Report`}
              </button>
            </form>

            <p className="text-xs text-gray-400 text-center mt-4 leading-relaxed">
              {plan.disclaimer}
            </p>

            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-400">
              <span>🔒 SSL Encrypted</span>
              <span>💳 Powered by Stripe</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
