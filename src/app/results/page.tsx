'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

function ResultsContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Unknown';
  const location = searchParams.get('location') || '';

  // Demo results - in production these come from the API
  const demoResults = [
    {
      id: '1',
      type: 'text_match',
      groupName: `AWDTSG — ${location || 'Miami'}`,
      postDate: '2 days ago',
      content: `Has anyone dated ${name}? Met him on Hinge last week and something feels off. He says he's single but his Instagram has sus comments...`,
      source: 'awdtsg_facebook',
    },
    {
      id: '2',
      type: 'text_match',
      groupName: `AWDTSG — ${location || 'Fort Lauderdale'}`,
      postDate: '1 week ago',
      content: `⚠️ WARNING about ${name}. Dated him for 3 months, found out he was talking to at least 4 other women the entire time. Screenshots in comments.`,
      source: 'awdtsg_facebook',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Results Summary */}
          <div className="bg-white rounded-3xl p-8 border border-[#1a1a1a] mb-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚠️</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#1a1a1a] mb-2">
                AWDTSG Posts Found
              </h1>
              <p className="text-gray-600">
                We found <strong className="text-red-500">{demoResults.length} posts</strong>{' '}
                mentioning <strong>{name}</strong> in AWDTSG groups near{' '}
                <strong>{location}</strong>
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-[#f0f2f5] rounded-xl p-4 text-center border border-gray-200">
                <div className="text-2xl font-black text-[#1a1a1a]">247</div>
                <div className="text-xs text-gray-500">Groups Scanned</div>
              </div>
              <div className="bg-[#f0f2f5] rounded-xl p-4 text-center border border-gray-200">
                <div className="text-2xl font-black text-red-500">{demoResults.length}</div>
                <div className="text-xs text-gray-500">Posts Found</div>
              </div>
              <div className="bg-[#f0f2f5] rounded-xl p-4 text-center border border-gray-200">
                <div className="text-2xl font-black text-[#1a1a1a]">0</div>
                <div className="text-xs text-gray-500">Face Matches</div>
              </div>
            </div>
          </div>

          {/* Individual Results */}
          <div className="space-y-4">
            {demoResults.map((result) => (
              <div
                key={result.id}
                className="bg-white rounded-2xl p-6 border border-[#1a1a1a]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#1877f2] rounded-lg flex items-center justify-center">
                      <span className="text-sm">📘</span>
                    </div>
                    <div>
                      <span className="font-bold text-sm text-[#1a1a1a]">
                        {result.groupName}
                      </span>
                      <span className="text-xs text-gray-400 block">{result.postDate}</span>
                    </div>
                  </div>
                  <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full">
                    AWDTSG Post
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{result.content}</p>
              </div>
            ))}
          </div>

          {/* Monitor CTA */}
          <div className="bg-[#1877f2] rounded-3xl p-8 mt-6 text-center text-white border border-[#1a1a1a]">
            <h3 className="text-xl font-black uppercase mb-2">
              Get Alerts for New Posts
            </h3>
            <p className="text-white/80 text-sm mb-4">
              We continuously monitor for new activity and send you email alerts whenever
              new posts matching your profile are detected.
            </p>
            <button className="bg-white text-[#1877f2] px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors border border-[#1a1a1a]">
              Enable Monitoring
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading results...</div>}>
      <ResultsContent />
    </Suspense>
  );
}
