'use client';

import { useMemo } from 'react';

interface Props {
  city: string;
}

export default function StepAreaStats({ city }: Props) {
  const stats = useMemo(() => ({
    posts: Math.floor(Math.random() * 81) + 40,
    members: Math.floor(Math.random() * 36) + 15,
    hoursAgo: Math.floor(Math.random() * 6) + 1,
  }), []);

  return (
    <div className="space-y-5">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#1a1a1a]">AWDTSG is active in this area</h2>
        <p className="text-gray-500 text-sm mt-1">
          Here&apos;s what&apos;s happening in <span className="font-bold text-[#1a1a1a]">{city}</span>
        </p>
      </div>

      <div className="space-y-3">
        <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3">
          <span className="text-2xl">📝</span>
          <div>
            <p className="font-bold text-lg text-[#1a1a1a]">{stats.posts} new posts</p>
            <p className="text-xs text-gray-500">added this week in your area&apos;s AWDTSG groups</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3">
          <span className="text-2xl">👥</span>
          <div>
            <p className="font-bold text-lg text-[#1a1a1a]">{stats.members},000+ members</p>
            <p className="text-xs text-gray-500">in your city&apos;s AWDTSG group</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3">
          <span className="text-2xl">⏰</span>
          <div>
            <p className="font-bold text-lg text-[#1a1a1a]">{stats.hoursAgo} hours ago</p>
            <p className="text-xs text-gray-500">last post submitted in your area</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 justify-center">
        <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs text-gray-500">Groups update in real-time</span>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="font-semibold text-sm text-[#1877f2] mb-1">💡 Did you know?</p>
        <p className="text-xs text-gray-600">AWDTSG groups exist in over 3,000 cities worldwide. Each group has thousands of active members posting and sharing information daily.</p>
      </div>
    </div>
  );
}
