'use client';

import { useState } from 'react';

export default function RefundPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center gap-2 border-b border-gray-200">
        <a href="/" className="text-lg font-bold text-[#1a1a1a]">🔍 AWDTSG Checker</a>
      </div>

      <main className="px-4 py-6 space-y-5">
        {/* Refund Policy */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h1 className="text-xl font-black text-[#1a1a1a] mb-4">Refund Policy</h1>

          <div className="bg-[#e7f0fd] rounded-xl p-4 mb-5 flex items-start gap-3">
            <span className="text-2xl">💰</span>
            <div>
              <p className="text-sm font-bold text-[#1877f2]">7-Day Money-Back Guarantee</p>
              <p className="text-xs text-gray-600 mt-0.5">
                Not satisfied? Get a full refund within 7 days of purchase — no questions asked.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <div>
              <h3 className="font-bold text-[#1a1a1a] mb-1">Eligibility</h3>
              <p>
                You are eligible for a full refund if you request one within 7 days of your
                initial purchase. This applies to both one-time reports and subscription plans.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#1a1a1a] mb-1">How to Request a Refund</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use the form below to submit a refund request</li>
                <li>
                  Or email{' '}
                  <a href="mailto:support@awdtsgchecker.com" className="text-[#1877f2] hover:underline">
                    support@awdtsgchecker.com
                  </a>{' '}
                  with your order email
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#1a1a1a] mb-1">Processing Time</h3>
              <p>
                Refunds are typically processed within 3–5 business days. The refund will
                appear on the original payment method used during purchase.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#1a1a1a] mb-1">Subscriptions</h3>
              <p>
                For recurring subscriptions, cancellation takes effect at the end of the
                current billing period. If you cancel within 7 days of your first charge,
                you&rsquo;ll receive a full refund.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#1a1a1a] mb-1">Exceptions</h3>
              <p>
                Refunds may be denied in cases of abuse, fraud, or repeated refund requests.
                We reserve the right to refuse service to users who attempt to misuse the
                refund policy.
              </p>
            </div>
          </div>
        </div>

        {/* Refund Request Form */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          {submitted ? (
            <div className="text-center py-6">
              <div className="text-4xl mb-3">📩</div>
              <h2 className="text-lg font-black text-[#1a1a1a] mb-1">Refund Request Submitted</h2>
              <p className="text-sm text-gray-500">
                We&rsquo;ll review your request and respond within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <h2 className="font-bold text-[#1a1a1a] mb-3">Request a Refund</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-[#1a1a1a] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email used during purchase"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1877f2] focus:border-[#1877f2] outline-none text-[#1a1a1a] text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={!email.trim()}
                  className="w-full bg-[#1877f2] text-white py-3 rounded-full font-bold text-sm hover:bg-blue-600 transition-colors disabled:opacity-50"
                >
                  Submit Refund Request
                </button>
              </form>
            </>
          )}
        </div>

        {/* Footer links */}
        <div className="text-center text-xs text-gray-400 pb-6 space-x-3">
          <a href="/privacy" className="hover:underline">Privacy</a>
          <span>•</span>
          <a href="/terms" className="hover:underline">Terms</a>
          <span>•</span>
          <a href="/cancel" className="hover:underline">Cancel</a>
        </div>
      </main>
    </div>
  );
}
