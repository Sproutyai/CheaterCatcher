import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-4 py-6">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-lg">👀</span>
          <span className="font-bold text-sm text-[#1a1a1a]">AWDTSG Checker</span>
        </div>
        <p className="text-[10px] text-gray-400 mb-1">
          © 2026 AWDTSG Checker. All rights reserved.
        </p>
        <p className="text-[10px] text-gray-400 mb-4">
          Not affiliated with Facebook or any AWDTSG group.
        </p>
        <div className="flex items-center justify-center gap-4 text-[11px] text-gray-500">
          <Link href="/privacy" className="hover:text-[#1877f2] transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-[#1877f2] transition-colors">
            Terms
          </Link>
          <a href="mailto:support@awdtsgchecker.com" className="hover:text-[#1877f2] transition-colors">
            Support
          </a>
          <Link href="/cancel" className="hover:text-[#1877f2] transition-colors">
            Cancel Subscription
          </Link>
        </div>
      </div>
    </footer>
  );
}
