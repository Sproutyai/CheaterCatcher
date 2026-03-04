'use client';

export default function StepViralSpread() {
  return (
    <div className="space-y-5">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#1a1a1a]">One post. Thousands of eyes.</h2>
        <p className="text-gray-500 text-sm mt-1">Here&apos;s how quickly an AWDTSG post spreads...</p>
      </div>

      {/* Concentric circles visual */}
      <div className="flex items-center justify-center py-6">
        <div className="relative w-56 h-56">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-red-200 opacity-60" />
          {/* Middle ring */}
          <div className="absolute inset-6 rounded-full border-2 border-dashed border-orange-300 opacity-70" />
          {/* Inner ring */}
          <div className="absolute inset-12 rounded-full border-2 border-dashed border-blue-300" />
          {/* Center */}
          <div className="absolute inset-[4.5rem] rounded-full bg-[#1877f2] flex items-center justify-center">
            <span className="text-white text-[10px] font-bold text-center leading-tight px-1">AWDTSG<br />Post</span>
          </div>
          {/* Floating avatars */}
          {[
            { top: '8%', left: '60%', bg: '#e91e63' },
            { top: '20%', left: '15%', bg: '#9c27b0' },
            { top: '70%', left: '10%', bg: '#ff9800' },
            { top: '75%', left: '70%', bg: '#4caf50' },
            { top: '10%', left: '80%', bg: '#2196f3' },
            { top: '85%', left: '45%', bg: '#f44336' },
          ].map((a, i) => (
            <div
              key={i}
              className="absolute w-6 h-6 rounded-full opacity-80"
              style={{ top: a.top, left: a.left, backgroundColor: a.bg }}
            />
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-3">
        <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-bold text-[#1877f2]">1m</span>
          </div>
          <div>
            <p className="font-bold text-sm text-[#1a1a1a]">MINUTE 1: She posts about him</p>
            <p className="text-xs text-gray-500">Photo + name + dating app</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-bold text-orange-600">1h</span>
          </div>
          <div>
            <p className="font-bold text-sm text-[#1a1a1a]">HOUR 1: Members in your city see it</p>
            <p className="text-xs text-gray-500">+5K 👀</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-bold text-red-600">1d</span>
          </div>
          <div>
            <p className="font-bold text-sm text-[#1a1a1a]">DAY 1: Screenshots spread to other groups</p>
            <p className="text-xs text-gray-500">+50K 👀</p>
          </div>
        </div>
      </div>
    </div>
  );
}
