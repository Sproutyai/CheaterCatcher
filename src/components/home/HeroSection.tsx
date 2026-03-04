'use client';

import { useRouter } from 'next/navigation';
import { RED_FLAGS } from '@/lib/constants';

export default function HeroSection() {
  const router = useRouter();

  const col1 = RED_FLAGS.slice(0, 4);
  const col2 = RED_FLAGS.slice(4, 8);

  return (
    <section className="mt-4">
      {/* White card */}
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        {/* Platform badges */}
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-[#e7f0fd] text-xs font-semibold px-3 py-1.5 rounded-full text-[#1877f2]">
            📘 Facebook
          </span>
          <span className="bg-[#fce7f3] text-xs font-semibold px-3 py-1.5 rounded-full text-pink-600">
            📸 Instagram
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-black text-[#1a1a1a] leading-tight mb-3">
          check if you&apos;ve been{' '}
          <span className="wavy-underline">posted</span> 📋
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Find out if you&apos;ve been posted in any Are We Dating the Same Guy?
          Facebook group. Know what&apos;s being said so you can address it. 👀
        </p>

        {/* Social proof */}
        <div className="flex items-center gap-2 mb-5">
          <div className="flex -space-x-2">
            {[47, 68, 45, 32].map((id) => (
              <img
                key={id}
                src={`https://i.pravatar.cc/32?img=${id}`}
                alt=""
                className="w-7 h-7 rounded-full border-2 border-white"
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 font-medium">
            100,000+ searches done
          </span>
        </div>

        {/* Red flag marquee */}
        <div className="h-[220px] overflow-hidden scroll-fade-mask mb-5">
          <div className="flex gap-3">
            {/* Column 1 - scrolls up */}
            <div className="flex-1 overflow-hidden">
              <div className="animate-marquee-up">
                {[...col1, ...col1].map((flag, i) => (
                  <div
                    key={i}
                    className="bg-red-50 border border-red-100 rounded-xl p-3 mb-3 flex items-start gap-2"
                  >
                    <span className="text-lg shrink-0">{flag.emoji}</span>
                    <span className="text-xs font-semibold text-red-800 leading-tight">
                      {flag.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Column 2 - scrolls down */}
            <div className="flex-1 overflow-hidden">
              <div className="animate-marquee-down">
                {[...col2, ...col2].map((flag, i) => (
                  <div
                    key={i}
                    className="bg-orange-50 border border-orange-100 rounded-xl p-3 mb-3 flex items-start gap-2"
                  >
                    <span className="text-lg shrink-0">{flag.emoji}</span>
                    <span className="text-xs font-semibold text-orange-800 leading-tight">
                      {flag.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA area */}
        <div className="text-center">
          <h2 className="text-xl font-black text-[#1a1a1a] mb-1">
            Have you been posted?
          </h2>
          <p className="text-sm text-gray-500 mb-4">Find out in seconds</p>

          {/* Pill badges */}
          <div className="flex items-center justify-center gap-2 mb-5 flex-wrap">
            <span className="bg-gray-100 text-xs font-semibold px-3 py-1.5 rounded-full">
              🔒 Anonymous
            </span>
            <span className="bg-gray-100 text-xs font-semibold px-3 py-1.5 rounded-full">
              ⚡ Instant
            </span>
            <span className="bg-gray-100 text-xs font-semibold px-3 py-1.5 rounded-full">
              🎯 94% Accurate
            </span>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => router.push('/search')}
            className="w-full bg-[#1877f2] text-white py-4 rounded-full font-bold text-base hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 animate-pulse-glow"
          >
            <span>Check now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
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
          <p className="text-xs text-gray-400 mt-2">
            Get your report in 3 min
          </p>

          <p className="mt-4 text-xs text-gray-500">
            100,000+ searches done – find the truth 👆
          </p>
        </div>
      </div>
    </section>
  );
}
