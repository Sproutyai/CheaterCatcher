'use client';

import { useRouter } from 'next/navigation';

export default function CTASection() {
  const router = useRouter();

  return (
    <section className="py-20 px-4 md:px-6">
      <div className="bg-[#1877f2] rounded-3xl max-w-4xl mx-auto p-8 md:p-12 text-center relative overflow-hidden border border-[#1a1a1a]">
        <svg className="absolute top-4 left-4 w-12 h-12 text-white/20" viewBox="0 0 100 100">
          <path d="M20 50 Q35 20 50 50 T80 50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
        </svg>
        <svg className="absolute bottom-4 right-4 w-12 h-12 text-white/20" viewBox="0 0 100 100">
          <path d="M20 50 Q35 20 50 50 T80 50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
        </svg>

        <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-white">
          Ready to find out?
        </h2>
        <p className="text-white/80 mb-8 text-lg">
          Search AWDTSG groups &amp; social media with facial recognition. Takes 3 minutes. 100% confidential.
        </p>
        <button
          onClick={() => router.push('/search')}
          className="bg-white text-[#1877f2] px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-3 border border-[#1a1a1a]"
        >
          Check all platforms now
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1877f2] text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
}
