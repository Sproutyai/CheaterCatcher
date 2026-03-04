'use client';

interface Props {
  age: string;
  setAge: (age: string) => void;
}

export default function StepAge({ age, setAge }: Props) {
  return (
    <div className="space-y-5">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#1a1a1a]">How old are you?</h2>
      </div>

      <div>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🎂</span>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
            min={18}
            max={99}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1877f2] focus:border-[#1877f2] outline-none transition-all text-[#1a1a1a] text-base"
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">We&apos;ll search posts mentioning ages within ±3 years</p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="font-semibold text-sm text-[#1877f2] mb-1">🤔 Why we ask</p>
        <p className="text-xs text-gray-600">AWDTSG posts often mention age. By knowing yours, we can accurately match posts that reference your age range and filter out false positives.</p>
      </div>
    </div>
  );
}
