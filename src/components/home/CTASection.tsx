'use client';

import { useRouter } from 'next/navigation';

export default function CTASection() {
  const router = useRouter();

  return (
    <section className="mt-4">
      <div className="bg-[#1877f2] rounded-2xl p-6 text-center relative overflow-hidden shadow-sm">
        {/* Decorative squiggles */}
        <svg className="absolute top-3 left-3 w-8 h-8 text-white/20" viewBox="0 0 100 100">
          <path d="M20 50 Q35 20 50 50 T80 50" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
        </svg>
        <svg className="absolute bottom-3 right-3 w-8 h-8 text-white/20" viewBox="0 0 100 100">
          <path d="M20 50 Q35 80 50 50 T80 50" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
        </svg>

        <h2 className="text-2xl font-black mb-2 text-white relative z-10">
          Ready to check?
        </h2>
        <p className="text-white/80 mb-5 text-sm leading-relaxed relative z-10">
          See if you&apos;ve been posted in any AWDTSG group. Takes 3 minutes. 100% confidential.
        </p>
        <button
          onClick={() => router.push('/search')}
          className="bg-white text-[#1877f2] px-6 py-3.5 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors inline-flex items-center gap-2 relative z-10"
        >
          Check all platforms now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
