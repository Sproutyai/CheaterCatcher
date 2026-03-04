'use client';

import { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { PRICING, type PlanKey, DEFAULT_PLAN } from '@/lib/stripe';

function BackArrow() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="p-2 -ml-2" aria-label="Go back">
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>(DEFAULT_PLAN);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const name = searchParams.get('name') || sessionStorage?.getItem('searchName') || 'Someone';
  const city = searchParams.get('location') || searchParams.get('city') || sessionStorage?.getItem('searchCity') || 'your area';
  const postsFound = searchParams.get('posts') || sessionStorage?.getItem('postsFound') || '6';

  const plan = PRICING[selectedPlan];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);

    try {
      const params = new URLSearchParams({
        name,
        location: city,
        email: email.trim(),
        plan: selectedPlan,
      });
      router.push(`/report?${params.toString()}`);
    } catch (err) {
      console.error('Payment error:', err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center gap-3 border-b border-gray-200">
        <BackArrow />
        <span className="text-lg font-bold text-[#1a1a1a]">🔍 AWDTSG Checker</span>
      </div>

      <main className="px-4 py-6 space-y-5">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-2xl font-black text-[#1a1a1a] mb-1">Unlock your full report</h1>
          <p className="text-gray-500 text-sm">
            See all posts mentioning &lsquo;{name}&rsquo; near {city}
          </p>
        </div>

        {/* Summary Card */}
        <div className="bg-[#1877f2] rounded-2xl p-5 text-white">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">📋</span>
            <span className="font-bold text-lg">Report ready</span>
          </div>
          <p className="text-blue-100 text-sm font-semibold mb-4">
            {postsFound} AWDTSG posts found
          </p>
          <div className="space-y-2.5">
            {[
              'Full post text & screenshots',
              'Facebook group identification',
              'Facial recognition matches',
              'Instagram & Twitter/X mentions',
              'Free post removal assistance',
              'Ongoing monitoring alerts',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm">
                <span className="text-green-300 mt-0.5 shrink-0">✅</span>
                <span className="text-white/95">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="space-y-3">
          {(Object.entries(PRICING) as [PlanKey, (typeof PRICING)[PlanKey]][]).map(
            ([key, p]) => (
              <button
                key={key}
                onClick={() => setSelectedPlan(key)}
                className={`w-full rounded-2xl p-4 text-left transition-all relative border-2 ${
                  selectedPlan === key
                    ? 'border-[#1877f2] bg-[#e7f0fd]'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {'popular' in p && p.popular && (
                  <span className="absolute -top-2.5 right-4 bg-[#1877f2] text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wide">
                    Popular
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-[#1a1a1a] text-base">{p.label}</div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {p.features[0]}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-black text-[#1a1a1a]">
                      ${p.amount}
                    </div>
                    <div className="text-[11px] text-gray-400">{p.period}</div>
                  </div>
                </div>
                {p.features.length > 1 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.features.slice(1).map((f) => (
                      <span key={f} className="text-[11px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                )}
              </button>
            )
          )}
        </div>

        {/* Payment Form */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-[#1a1a1a] mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1877f2] focus:border-[#1877f2] outline-none text-[#1a1a1a] text-sm"
                required
              />
            </div>

            {/* Stripe Card Element placeholder */}
            <div>
              <label className="block text-sm font-bold text-[#1a1a1a] mb-1.5">
                Card Details
              </label>
              <div className="bg-[#f8f9fa] rounded-xl p-4 border border-gray-200 space-y-3">
                <input
                  type="text"
                  placeholder="Card number"
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-[#1a1a1a] bg-white"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="MM / YY"
                    className="px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-[#1a1a1a] bg-white"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-[#1a1a1a] bg-white"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !email.trim()}
              className="w-full bg-[#1877f2] text-white py-4 rounded-full font-bold text-base hover:bg-blue-600 transition-colors disabled:opacity-50 animate-pulse-glow"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Processing…
                </span>
              ) : (
                `🔒 Pay securely — $${plan.amount}`
              )}
            </button>
          </form>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-400">
            <span>🔒 SSL Encrypted</span>
            <span>💳 Secure Payment</span>
            <span>🔄 Cancel Anytime</span>
          </div>

          <p className="text-[11px] text-gray-400 text-center mt-3 leading-relaxed">
            7-day money-back guarantee. {plan.disclaimer}
          </p>
        </div>
      </main>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-gray-500">
          Loading…
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
