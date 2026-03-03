'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#1a1a1a]">
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#1877f2] rounded-lg flex items-center justify-center border border-[#1a1a1a]">
            <span className="text-lg">👀</span>
          </div>
          <span className="font-black text-[#1a1a1a] text-lg tracking-tight">
            AWDTSG Checker
          </span>
        </Link>
        <Link
          href="/search"
          className="bg-[#1877f2] text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-blue-600 transition-colors border border-[#1a1a1a]"
        >
          Check Now
        </Link>
      </div>
    </header>
  );
}
