'use client';

import { useState } from 'react';

const CANCEL_REASONS = [
  'Found what I needed',
  'Too expensive',
  'Not accurate',
  'Other',
];

export default function CancelPage() {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [step, setStep] = useState<'form' | 'offer' | 'done'>('form');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStep('offer');
  };

  const confirmCancel = async () => {
    setLoading(true);
    // In production: call /api/cancellation-request
    await new Promise((r) => setTimeout(r, 1000));
    setStep('done');
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center gap-2 border-b border-gray-200">
        <a href="/" className="text-lg font-bold text-[#1a1a1a]">🔍 AWDTSG Checker</a>
      </div>

      <main className="px-4 py-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          {step === 'done' ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-xl font-black text-[#1a1a1a] mb-2">
                Subscription Canceled
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                We&rsquo;re sorry to see you go. Your cancellation has been processed and
                you&rsquo;ll receive a confirmation email shortly. Your access continues
                until the end of your current billing period.
              </p>
              <a
                href="/"
                className="inline-block mt-6 bg-[#1877f2] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-blue-600 transition-colors"
              >
                Back to Home
              </a>
            </div>
          ) : step === 'offer' ? (
            <div className="text-center py-4">
              <div className="text-5xl mb-4">💔</div>
              <h2 className="text-xl font-black text-[#1a1a1a] mb-2">
                We&rsquo;re sorry to see you go
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Before you cancel, we&rsquo;d like to offer you something special.
              </p>

              {/* Retention offer */}
              <div className="bg-[#e7f0fd] rounded-2xl p-5 mb-6 border border-[#1877f2]/20">
                <p className="text-lg font-black text-[#1877f2] mb-1">50% OFF</p>
                <p className="text-sm text-[#1a1a1a] font-semibold">
                  Would a 50% discount change your mind?
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Stay subscribed at half the price. Your next billing cycle will be
                  discounted automatically.
                </p>
                <button className="mt-4 bg-[#1877f2] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-blue-600 transition-colors w-full">
                  🎉 Keep my subscription at 50% off
                </button>
              </div>

              <button
                onClick={confirmCancel}
                disabled={loading}
                className="w-full bg-red-500 text-white py-3 rounded-full font-bold text-sm hover:bg-red-600 transition-colors disabled:opacity-50"
              >
                {loading ? 'Canceling…' : 'No thanks, cancel my subscription'}
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <h1 className="text-xl font-black text-[#1a1a1a] mb-1">
                  Cancel Subscription
                </h1>
                <p className="text-sm text-gray-500">
                  Enter your email to look up your subscription
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-[#1a1a1a] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email used during signup"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1877f2] focus:border-[#1877f2] outline-none text-[#1a1a1a] text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#1a1a1a] mb-1.5">
                    Why are you canceling?
                  </label>
                  <select
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1877f2] focus:border-[#1877f2] outline-none text-[#1a1a1a] text-sm bg-white"
                  >
                    <option value="">Select a reason…</option>
                    {CANCEL_REASONS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={!email.trim()}
                  className="w-full bg-red-500 text-white py-3 rounded-full font-bold text-sm hover:bg-red-600 transition-colors disabled:opacity-50"
                >
                  Continue
                </button>
              </form>

              <p className="text-xs text-gray-400 text-center mt-4">
                Need help?{' '}
                <a
                  href="mailto:support@awdtsgchecker.com"
                  className="text-[#1877f2] hover:underline"
                >
                  support@awdtsgchecker.com
                </a>
              </p>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
