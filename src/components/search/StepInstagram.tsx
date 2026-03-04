'use client';

interface Props {
  instagram: string;
  setInstagram: (handle: string) => void;
}

export default function StepInstagram({ instagram, setInstagram }: Props) {
  return (
    <div className="space-y-5">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#1a1a1a]">What&apos;s your Instagram? (optional)</h2>
        <p className="text-gray-500 text-sm mt-1">This helps match posts that tag or mention your social media</p>
      </div>

      <div>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">📸</span>
          <input
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            placeholder="@username"
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1877f2] focus:border-[#1877f2] outline-none transition-all text-[#1a1a1a] text-base"
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">You can skip this step if you prefer</p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="font-semibold text-sm text-[#1877f2] mb-1">📲 Why this helps</p>
        <p className="text-xs text-gray-600">Many AWDTSG posts include Instagram handles or screenshots. Adding yours increases match accuracy by up to 60%.</p>
      </div>
    </div>
  );
}
