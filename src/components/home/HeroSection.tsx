'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const target = 847293;

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white rounded-3xl mx-4 md:mx-6 mt-4 py-16 md:py-24 border border-[#1a1a1a] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#e7f0fd] rounded-full px-4 py-2 mb-6 border border-[#1a1a1a]">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-[#1a1a1a]">Live scanning active</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-[#1a1a1a] mb-6">
          Been posted in{' '}
          <span className="text-[#1877f2]">AWDTSG</span>?
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Search hundreds of &ldquo;Are We Dating the Same Guy?&rdquo; Facebook groups
          with AI-powered facial recognition. Find out in minutes.
        </p>

        <button
          onClick={() => router.push('/search')}
          className="bg-[#1877f2] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-colors inline-flex items-center gap-3 border border-[#1a1a1a]"
        >
          Check all platforms now
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-[#1877f2]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </button>

        <p className="mt-6 text-sm text-gray-500">
          <span className="font-bold text-[#1a1a1a]">{count.toLocaleString()}</span>{' '}
          searches done – find the truth 👆
        </p>
      </div>
    </section>
  );
}
