'use client';

export default function StepRemoval() {
  return (
    <div className="space-y-5">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#1a1a1a]">Found something? We can help.</h2>
        <p className="text-gray-500 text-sm mt-1">If we find posts about you, our team can help get them reviewed or removed.</p>
      </div>

      <div className="bg-gradient-to-br from-[#1877f2] to-blue-600 rounded-2xl p-5 text-white">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">🛡️</span>
          <h3 className="font-bold text-lg">Free Removal Service</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold">1</span>
            </div>
            <div>
              <p className="font-semibold text-sm">We find the posts</p>
              <p className="text-xs text-blue-100">Our search identifies all AWDTSG mentions</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold">2</span>
            </div>
            <div>
              <p className="font-semibold text-sm">You review &amp; choose</p>
              <p className="text-xs text-blue-100">Select which posts you want removed</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold">3</span>
            </div>
            <div>
              <p className="font-semibold text-sm">We handle the rest</p>
              <p className="text-xs text-blue-100">Requests filed directly with group admins</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-green-700">94%</p>
          <p className="text-xs text-gray-600 mt-1">success rate</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-[#1877f2]">48-72h</p>
          <p className="text-xs text-gray-600 mt-1">average response time</p>
        </div>
      </div>
    </div>
  );
}
