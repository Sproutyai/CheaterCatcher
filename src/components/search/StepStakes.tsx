'use client';

export default function StepStakes() {
  return (
    <div className="space-y-5">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#1a1a1a]">Here&apos;s what&apos;s at stake...</h2>
        <p className="text-gray-500 text-sm mt-1">AWDTSG posts can have a real impact on dating life.</p>
      </div>

      <div className="space-y-3">
        <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3">
          <span className="text-2xl">👀</span>
          <div>
            <p className="font-bold text-lg text-[#1a1a1a]">1 in 3 women</p>
            <p className="text-xs text-gray-500">check AWDTSG before a first date</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3">
          <span className="text-2xl">📋</span>
          <div>
            <p className="font-bold text-lg text-[#1a1a1a]">500K+ posts monthly</p>
            <p className="text-xs text-gray-500">shared about men across all AWDTSG groups</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3">
          <span className="text-2xl">💔</span>
          <div>
            <p className="font-bold text-lg text-[#1a1a1a]">1 in 5 men</p>
            <p className="text-xs text-gray-500">have been posted without knowing</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <p className="text-sm text-gray-700 leading-relaxed">
          🤯 <span className="font-semibold">Think about it:</span> That sudden ghosting? The date who seemed interested then went cold? She may have found a post.
        </p>
      </div>
    </div>
  );
}
