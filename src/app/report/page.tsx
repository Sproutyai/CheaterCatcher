'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

/* ---------- Demo data ---------- */
const DEMO_POSTS = [
  {
    source: 'fb',
    group: 'AWDTSG Miami 🌴',
    time: '3 days ago',
    text: 'Ladies has anyone dated this guy? Met him on Hinge, seemed great at first but then started getting weird vibes. He was texting other girls while we were on a date. Just want to warn everyone 🚩',
    reactions: 47,
    comments: 23,
  },
  {
    source: 'fb',
    group: 'AWDTSG South Florida',
    time: '1 week ago',
    text: 'UPDATE on my post from last month — turns out he had 3 different girls he was seeing at the same time. If you matched with this person on Bumble or Tinder in the Fort Lauderdale area, be careful!',
    reactions: 112,
    comments: 54,
  },
  {
    source: 'fb',
    group: 'AWDTSG Fort Lauderdale',
    time: '2 weeks ago',
    text: 'Anyone know this person? My friend went on a date with him and he lied about basically everything — his job, his age, even his name. Just want to put this out there so no one else falls for it.',
    reactions: 89,
    comments: 31,
  },
  {
    source: 'ig',
    group: 'Instagram mention',
    time: '5 days ago',
    text: 'Tagged in a story by @dating_red_flags account. Post has been shared 200+ times.',
    reactions: 0,
    comments: 0,
  },
];

const SOURCE_ICONS: Record<string, string> = {
  fb: '📘',
  ig: '📸',
  x: '𝕏',
};

function RiskBadge({ level }: { level: 'Low' | 'Medium' | 'High' }) {
  const colors = {
    Low: 'bg-green-100 text-green-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    High: 'bg-red-100 text-red-700',
  };
  return (
    <span className={`text-xs font-bold px-3 py-1 rounded-full ${colors[level]}`}>
      {level} Risk
    </span>
  );
}

function ReportContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Unknown';
  const city = searchParams.get('location') || searchParams.get('city') || 'Unknown';
  const age = searchParams.get('age') || '—';
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const postsFound = DEMO_POSTS.length;
  const groupsChecked = 147;
  const riskLevel: 'Low' | 'Medium' | 'High' =
    postsFound >= 3 ? 'High' : postsFound >= 1 ? 'Medium' : 'Low';

  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center gap-2 border-b border-gray-200">
        <span className="text-lg font-bold text-[#1a1a1a]">🔍 AWDTSG Checker</span>
      </div>

      {/* Blue Banner */}
      <div className="bg-[#1877f2] px-5 py-6 text-white">
        <h1 className="text-xl font-black">Report for {name}</h1>
        <p className="text-blue-100 text-sm mt-1">
          Age {age} • {city}
        </p>
        <p className="text-blue-200 text-xs mt-1">Report generated: {today}</p>
      </div>

      <main className="px-4 py-5 space-y-4">
        {/* Overview Card */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <h2 className="font-bold text-[#1a1a1a] mb-3">Overview</h2>
          <div className="grid grid-cols-3 gap-3 text-center mb-4">
            <div>
              <div className="text-2xl font-black text-[#1877f2]">{postsFound}</div>
              <div className="text-[11px] text-gray-500">Posts Found</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#1877f2]">{groupsChecked}</div>
              <div className="text-[11px] text-gray-500">Groups Checked</div>
            </div>
            <div>
              <RiskBadge level={riskLevel} />
              <div className="text-[11px] text-gray-500 mt-1">Risk Level</div>
            </div>
          </div>
        </div>

        {/* Posts Section */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <h2 className="font-bold text-[#1a1a1a] mb-4">
            📋 Matched Posts ({postsFound})
          </h2>
          <div className="space-y-4">
            {DEMO_POSTS.map((post, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-xl p-4 bg-[#fafafa]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-base">{SOURCE_ICONS[post.source] || '🌐'}</span>
                  <span className="text-xs font-semibold text-[#1a1a1a]">
                    {post.group}
                  </span>
                  <span className="text-[10px] text-gray-400 ml-auto">{post.time}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  {post.text}
                </p>
                {post.reactions > 0 && (
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>👍 {post.reactions} reactions</span>
                    <span>💬 {post.comments} comments</span>
                  </div>
                )}
                <button
                  disabled
                  className="mt-2 text-xs text-[#1877f2] opacity-50 cursor-not-allowed"
                >
                  View original →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Facial Recognition Section */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <h2 className="font-bold text-[#1a1a1a] mb-3">🧠 Facial Recognition</h2>
          <div className="flex items-center gap-3 bg-green-50 rounded-xl p-4">
            <span className="text-2xl">✅</span>
            <div>
              <p className="text-sm font-semibold text-green-700">
                No face matches found
              </p>
              <p className="text-xs text-green-600 mt-0.5">
                No photos in AWDTSG posts matched the uploaded image.
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <h2 className="font-bold text-[#1a1a1a] mb-3">📱 Social Media Mentions</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-[#fafafa] rounded-xl">
              <span className="text-lg">📸</span>
              <div>
                <p className="text-sm font-semibold text-[#1a1a1a]">Instagram</p>
                <p className="text-xs text-gray-500">1 mention found in dating warning accounts</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#fafafa] rounded-xl">
              <span className="text-lg">𝕏</span>
              <div>
                <p className="text-sm font-semibold text-[#1a1a1a]">Twitter/X</p>
                <p className="text-xs text-gray-500">No mentions found</p>
              </div>
            </div>
          </div>
        </div>

        {/* Removal Section */}
        <div className="bg-[#e7f0fd] rounded-2xl p-5 border border-[#1877f2]/20">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🛡️</span>
            <div>
              <h2 className="font-bold text-[#1a1a1a] mb-1">Want posts removed?</h2>
              <p className="text-sm text-gray-600 mb-3">
                Our free removal assistance service can help you get posts taken down from
                AWDTSG groups. Most removals are completed within 48–72 hours.
              </p>
              <button className="bg-[#1877f2] text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-blue-600 transition-colors">
                Request Removal
              </button>
            </div>
          </div>
        </div>

        {/* Download PDF */}
        <button className="w-full bg-white text-[#1a1a1a] py-3.5 rounded-2xl font-bold text-sm border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
          📄 Download PDF Report
        </button>

        {/* Footer links */}
        <div className="text-center text-xs text-gray-400 pb-6 space-x-3">
          <a href="/privacy" className="hover:underline">Privacy</a>
          <span>•</span>
          <a href="/terms" className="hover:underline">Terms</a>
          <span>•</span>
          <a href="/cancel" className="hover:underline">Cancel</a>
          <span>•</span>
          <a href="/refund" className="hover:underline">Refund</a>
        </div>
      </main>
    </div>
  );
}

export default function ReportPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-gray-500">
          Loading report…
        </div>
      }
    >
      <ReportContent />
    </Suspense>
  );
}
