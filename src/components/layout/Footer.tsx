import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-white mx-4 md:mx-6 rounded-t-3xl">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1877f2] rounded-lg flex items-center justify-center border border-[#1a1a1a]">
              <span className="text-lg">👀</span>
            </div>
            <span className="font-bold text-[#1a1a1a]">AWDTSG Checker</span>
          </div>
          <div className="text-center">
            <p>© 2026 AWDTSG Checker. All rights reserved.</p>
            <p className="text-xs text-gray-400 mt-1">
              Not affiliated with Facebook or any AWDTSG group.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[#1877f2] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#1877f2] transition-colors">
              Terms
            </Link>
            <Link href="/refund" className="hover:text-[#1877f2] transition-colors">
              Refund
            </Link>
            <Link href="/report" className="hover:text-[#1877f2] transition-colors">
              Support
            </Link>
            <Link href="/cancel" className="hover:text-[#1877f2] transition-colors">
              Cancel Subscription
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
