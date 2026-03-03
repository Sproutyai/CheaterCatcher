'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ReportPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8 px-4 md:px-6">
        <div className="max-w-lg mx-auto bg-white rounded-3xl p-8 border border-[#1a1a1a]">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">📩</div>
              <h2 className="text-2xl font-black text-[#1a1a1a] mb-2">Message Sent</h2>
              <p className="text-gray-600">We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-black uppercase tracking-tight text-[#1a1a1a] mb-6 text-center">
                Contact Support
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-[#1a1a1a] mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#1a1a1a] focus:ring-2 focus:ring-[#1877f2] outline-none text-[#1a1a1a]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1a1a1a] mb-2">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-xl border border-[#1a1a1a] focus:ring-2 focus:ring-[#1877f2] outline-none text-[#1a1a1a] h-32 resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1877f2] text-white py-3 rounded-full font-bold hover:bg-blue-600 transition-colors border border-[#1a1a1a]"
                >
                  Send Message
                </button>
              </form>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
