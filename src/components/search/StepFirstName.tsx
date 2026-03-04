'use client';

interface Props {
  firstName: string;
  setFirstName: (name: string) => void;
}

export default function StepFirstName({ firstName, setFirstName }: Props) {
  return (
    <div className="space-y-5">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#1a1a1a]">What&apos;s your first name?</h2>
      </div>

      <div>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">👋</span>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1877f2] focus:border-[#1877f2] outline-none transition-all text-[#1a1a1a] text-base"
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">Or the name/nickname you use on dating apps</p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="font-semibold text-sm text-[#1877f2] mb-1">💡 Pro Tip</p>
        <p className="text-xs text-gray-600">We also search for common nicknames and name variations to ensure we don&apos;t miss any posts.</p>
      </div>
    </div>
  );
}
