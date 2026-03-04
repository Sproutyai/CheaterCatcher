'use client';

interface Props {
  searchMode: string;
  setSearchMode: (mode: string) => void;
}

export default function StepSearchMode({ searchMode, setSearchMode }: Props) {
  return (
    <div className="space-y-5">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#1a1a1a]">Who are you searching for?</h2>
        <p className="text-gray-500 text-sm mt-1">Tell us who you want to check in the AWDTSG groups</p>
      </div>

      <div className="space-y-3">
        <button
          type="button"
          onClick={() => setSearchMode('self')}
          className={`w-full p-4 rounded-2xl border-2 text-left transition-all ${
            searchMode === 'self'
              ? 'border-[#1877f2] bg-blue-50'
              : 'border-gray-200 bg-white hover:border-gray-300'
          }`}
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔍</span>
            <div className="flex-1">
              <p className="font-bold text-[#1a1a1a]">I&apos;m checking myself</p>
              <p className="text-sm text-gray-500 mt-0.5">Check if you&apos;ve been posted in any AWDTSG group</p>
            </div>
            {searchMode === 'self' && (
              <div className="w-6 h-6 rounded-full bg-[#1877f2] flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>
        </button>

        <button
          type="button"
          onClick={() => setSearchMode('other')}
          className={`w-full p-4 rounded-2xl border-2 text-left transition-all ${
            searchMode === 'other'
              ? 'border-[#1877f2] bg-blue-50'
              : 'border-gray-200 bg-white hover:border-gray-300'
          }`}
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">👀</span>
            <div className="flex-1">
              <p className="font-bold text-[#1a1a1a]">I&apos;m searching for someone else</p>
              <p className="text-sm text-gray-500 mt-0.5">Search if someone you&apos;re dating has been posted by other women</p>
            </div>
            {searchMode === 'other' && (
              <div className="w-6 h-6 rounded-full bg-[#1877f2] flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>
        </button>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
        <span className="text-lg">🔒</span>
        <div>
          <p className="font-semibold text-sm text-[#1877f2]">100% Anonymous</p>
          <p className="text-xs text-gray-600 mt-0.5">Your identity is never revealed. No one will know you searched.</p>
        </div>
      </div>
    </div>
  );
}
