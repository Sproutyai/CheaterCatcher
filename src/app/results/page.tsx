'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useState, useEffect, useRef, useCallback } from 'react';

/* ─── Placeholder blurred card content ─── */
const BLURRED_POSTS = [
  { lines: ['Has anyone dated this guy from the area? Met him on', 'Hinge and he seemed really nice but then I found out he was', 'talking to like 5 other girls at the same time...'] },
  { lines: ['WARNING about this man!! He will love bomb you and then', 'ghost. Classic narcissist behavior. Ladies stay away from', 'this one he is on every dating app out there.'] },
  { lines: ['Girl RUN. I dated him for 6 months before finding out', 'he had a whole girlfriend the entire time. He is extremely', 'manipulative and will gaslight you.'] },
  { lines: ['Ladies has anyone been on a date with this person?', 'He told me he was single but his instagram says otherwise.', 'Red flags everywhere'] },
  { lines: ['Just found out the guy I have been seeing for 3 months', 'has been posted here TWICE before. Wish I checked sooner.', 'Screenshots of his messages in the comments below.'] },
  { lines: ['Be careful with this one. Super charming at first but', 'turns out he has been cycling through women on Bumble and', 'Tinder for months. Multiple women have come forward.'] },
  { lines: ['This guy is a walking red flag. He uses fake photos', 'and lies about his job. Found out from another girl he was', 'seeing that everything he told me was a lie.'] },
  { lines: ['Does anyone recognize him? He goes by different names', 'on different apps. My friend and I matched with him on the', 'same day. Absolute player behavior.'] },
];

const STATUS_MESSAGES: [number, string][] = [
  [0, 'Checking nearby city groups...'],
  [15, 'Scanning AWDTSG posts...'],
  [35, 'Running facial recognition...'],
  [55, 'Cross-referencing Instagram...'],
  [70, 'Checking Twitter/X mentions...'],
  [85, 'Compiling results...'],
];

function getStatusMessage(pct: number): string {
  let msg = STATUS_MESSAGES[0][1];
  for (const [threshold, text] of STATUS_MESSAGES) {
    if (pct >= threshold) msg = text;
  }
  return msg;
}

/* ─── Blurred Post Card ─── */
function BlurredCard({ lines, visible }: { lines: string[]; visible: boolean }) {
  return (
    <div
      className={`relative bg-white rounded-xl border border-gray-200 p-4 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* Fake post header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full bg-gray-300" />
        <div>
          <div className="h-3 w-24 bg-gray-300 rounded" />
          <div className="h-2 w-16 bg-gray-200 rounded mt-1" />
        </div>
      </div>

      {/* Blurred text lines */}
      <div className="select-none" style={{ filter: 'blur(6px)' }}>
        {lines.map((line, i) => (
          <p key={i} className="text-sm text-gray-700 leading-relaxed">
            {line}
          </p>
        ))}
      </div>

      {/* Unlock overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="bg-[#1877f2] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
          🔒 Unlock to view
        </span>
      </div>
    </div>
  );
}

/* ─── Email Capture Modal ─── */
function EmailModal({
  name,
  city,
  postCount,
  onSubmit,
}: {
  name: string;
  city: string;
  postCount: number;
  onSubmit: (email: string) => void;
}) {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    onSubmit(email);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl animate-modal-in">
        {/* Icon */}
        <div className="text-center mb-4">
          <span className="text-4xl">👀</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-black text-center text-gray-900 mb-1">
          We found {postCount} potential posts!
        </h2>
        <p className="text-sm text-gray-500 text-center mb-4">
          Unlock the full report to see what&apos;s being said
        </p>

        {/* Info box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-4">
          <p className="text-sm font-bold text-[#1877f2]">
            📋 {postCount} AWDTSG posts found
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Posts mentioning &ldquo;{name}&rdquo; near {city}
          </p>
        </div>

        {/* Email form */}
        <p className="text-sm font-semibold text-gray-700 mb-2">
          Where should we send your report?
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2.5 mb-3 focus-within:border-[#1877f2] focus-within:ring-2 focus-within:ring-blue-100 transition-all">
            <span className="text-lg mr-2">📧</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 outline-none text-sm bg-transparent"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#1877f2] hover:bg-[#1565c0] text-white font-bold py-3 rounded-xl transition-colors disabled:opacity-60"
          >
            {submitting ? 'Sending...' : 'Unlock Full Report →'}
          </button>
        </form>

        {/* Privacy */}
        <p className="text-[10px] text-gray-400 text-center mt-3 leading-tight">
          Your search and report are 100% confidential. We never share your
          information or notify the person searched.
        </p>
      </div>
    </div>
  );
}

/* ─── Main Results Content ─── */
function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read params from URL query string, fall back to sessionStorage
  const getParam = useCallback(
    (key: string): string => {
      const fromUrl = searchParams.get(key);
      if (fromUrl) return fromUrl;
      if (typeof window !== 'undefined') {
        return sessionStorage.getItem(`search_${key}`) || '';
      }
      return '';
    },
    [searchParams],
  );

  const name = getParam('name') || 'Unknown';
  const age = getParam('age') || '';
  const city = getParam('city') || getParam('location') || 'your area';
  const searchMode = getParam('searchMode') || '';
  const instagram = getParam('instagram') || '';
  const hasPhoto = getParam('hasPhoto') || '';

  // State
  const [progress, setProgress] = useState(0);
  const [visibleCards, setVisibleCards] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [postCount] = useState(() => Math.floor(Math.random() * 6) + 3); // 3-8
  const animationRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);

  const DURATION_MS = 30_000; // 30 seconds
  const TOTAL_CARDS = 8;

  useEffect(() => {
    startTimeRef.current = Date.now();

    animationRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min(100, (elapsed / DURATION_MS) * 100);
      setProgress(pct);

      // Reveal cards progressively
      const cardsToShow = Math.min(TOTAL_CARDS, Math.floor((pct / 100) * (TOTAL_CARDS + 2)));
      setVisibleCards(cardsToShow);

      if (pct >= 100) {
        if (animationRef.current) clearInterval(animationRef.current);
        // Small delay before showing modal
        setTimeout(() => setShowModal(true), 600);
      }
    }, 100);

    return () => {
      if (animationRef.current) clearInterval(animationRef.current);
    };
  }, []);

  const handleEmailSubmit = (email: string) => {
    // Store in sessionStorage
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('report_email', email);
      sessionStorage.setItem('results_count', String(postCount));
      sessionStorage.setItem('search_name', name);
      sessionStorage.setItem('search_city', city);
      sessionStorage.setItem('search_age', age);
      sessionStorage.setItem('search_searchMode', searchMode);
      sessionStorage.setItem('search_instagram', instagram);
      sessionStorage.setItem('search_hasPhoto', hasPhoto);
    }

    // Build checkout URL with all params
    const params = new URLSearchParams({
      name,
      city,
      ...(age && { age }),
      ...(searchMode && { searchMode }),
      ...(instagram && { instagram }),
      ...(hasPhoto && { hasPhoto }),
      email,
      results: String(postCount),
    });
    router.push(`/checkout?${params.toString()}`);
  };

  const statusMessage = getStatusMessage(progress);
  const displayPct = Math.round(progress);

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Go back"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          <span className="text-2xl">👀</span>
          <span className="font-bold text-gray-900 text-sm">awdtsg checker</span>
        </div>
      </header>

      {/* Blue hero banner */}
      <div className="bg-[#1877f2] text-white px-4 py-5">
        <h1 className="text-lg font-bold">Searching for {name}</h1>
        <p className="text-sm text-white/80 mt-0.5">
          {age ? `Age ${age} • ` : ''}AWDTSG groups near {city}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
          </span>
          <span className="text-xs font-medium text-white/90">Searching</span>
        </div>
      </div>

      {/* Progress Section */}
      <div className="px-4 pt-5 pb-3">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-[#1877f2] rounded-full transition-all duration-200 ease-linear"
            style={{ width: `${displayPct}%` }}
          />
        </div>

        {/* Percentage + status */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-bold text-gray-900">{displayPct}%</span>
          <span className="text-xs text-gray-500">{statusMessage}</span>
        </div>

        {/* Finding posts label */}
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-4 mb-3">
          Finding posts...
        </p>
      </div>

      {/* Blurred Post Cards */}
      <div className="px-4 pb-8 space-y-3 flex-1">
        {BLURRED_POSTS.map((post, i) => (
          <BlurredCard key={i} lines={post.lines} visible={i < visibleCards} />
        ))}
      </div>

      {/* Email Capture Modal */}
      {showModal && (
        <EmailModal
          name={name}
          city={city}
          postCount={postCount}
          onSubmit={handleEmailSubmit}
        />
      )}

      {/* Modal animation keyframes via style tag */}
      <style jsx global>{`
        @keyframes modal-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modal-in {
          animation: modal-in 0.35s ease-out;
        }
      `}</style>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#f0f2f5]">
          <div className="text-center">
            <span className="text-4xl">👀</span>
            <p className="text-sm text-gray-500 mt-2">Loading...</p>
          </div>
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
