'use client';

import { useMemo } from 'react';

const TWEETS = [
  {
    name: 'Sarah M.',
    handle: '@sarahm_dating',
    avatar: '#e91e63',
    text: 'I was ghosted 3 times in a row and couldn\'t figure out why. Turns out there were TWO posts about me with completely made-up stories. Thank god I found this tool. 🙏',
    date: 'Feb 14, 2026',
    views: '12.4K',
  },
  {
    name: 'Jake T.',
    handle: '@jake_reality',
    avatar: '#2196f3',
    text: 'Honestly didn\'t believe it at first but the search found a post from 2 years ago that I never knew existed. Got it removed in 48 hours. Every guy needs to check this.',
    date: 'Jan 28, 2026',
    views: '8.7K',
  },
  {
    name: 'Marcus W.',
    handle: '@marcusw',
    avatar: '#4caf50',
    text: 'The reason my dating life tanked was because of a post in AWDTSG Chicago. An ex posted lies about me and it was being shared around. Finally got answers.',
    date: 'Feb 3, 2026',
    views: '15.2K',
  },
];

export default function StepSocialProof() {
  const peopleToday = useMemo(() => Math.floor(Math.random() * 101) + 100, []);

  return (
    <div className="space-y-5">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#1a1a1a]">What people are saying</h2>
        <p className="text-gray-500 text-sm mt-1">Real stories from people who found the truth.</p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-full px-4 py-2 text-center">
        <span className="text-sm font-medium text-[#1877f2]">🧑‍🤝‍🧑 {peopleToday} people checked today</span>
      </div>

      <div className="space-y-3">
        {TWEETS.map((tweet, i) => (
          <div key={i} className="bg-[#16181c] rounded-xl p-4 text-white relative">
            {/* X logo */}
            <div className="absolute top-3 right-3">
              <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>

            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: tweet.avatar }}
              >
                {tweet.name[0]}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold">{tweet.name}</span>
                  <svg className="w-4 h-4 text-[#1d9bf0]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
                  </svg>
                </div>
                <span className="text-xs text-gray-500">{tweet.handle}</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-3 text-gray-200">{tweet.text}</p>

            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>{tweet.date}</span>
              <span>·</span>
              <span>{tweet.views} views</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
