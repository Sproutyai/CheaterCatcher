import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl">👀</span>
          <span className="font-bold text-[#1a1a1a] text-sm tracking-tight lowercase">
            awdtsg checker
          </span>
        </Link>
        <Link
          href="/search"
          className="flex items-center gap-1.5 text-sm font-semibold text-[#1a1a1a] hover:text-[#1877f2] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Login
        </Link>
      </div>
    </header>
  );
}
