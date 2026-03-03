'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function CancelPage() {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In production: call /api/cancellation-request
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8 px-4 md:px-6">
        <div className="max-w-lg mx-auto bg-white rounded-3xl p-8 border border-[#1a1a1a]">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-2xl font-black text-[#1a1a1a] mb-2">Request Received</h2>
              <p className="text-gray-600">
                We&apos;ll process your cancellation within 24 hours and send a confirmation to your email.
              </p>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-black uppercase tracking-tight text-[#1a1a1a] mb-6 text-center">
                Cancel Subscription
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-[#1a1a1a] mb-2">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email used during signup"
                    className="w-full px-4 py-3 rounded-xl border border-[#1a1a1a] focus:ring-2 focus:ring-[#1877f2] outline-none text-[#1a1a1a]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1a1a1a] mb-2">Reason (optional)</label>
                  <textarea
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Tell us why you're canceling..."
                    className="w-full px-4 py-3 rounded-xl border border-[#1a1a1a] focus:ring-2 focus:ring-[#1877f2] outline-none text-[#1a1a1a] h-24 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-3 rounded-full font-bold hover:bg-red-600 transition-colors border border-[#1a1a1a]"
                >
                  Cancel My Subscription
                </button>
              </form>
              <p className="text-xs text-gray-400 text-center mt-4">
                Need help? Contact{' '}
                <a href="mailto:support@awdtsgchecker.com" className="text-[#1877f2] hover:underline">
                  support@awdtsgchecker.com
                </a>
              </p>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
