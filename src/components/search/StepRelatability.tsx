'use client';

const OPTIONS = [
  { emoji: '😶', text: 'A date went great... then she suddenly went cold' },
  { emoji: '🙍', text: 'She stopped replying mid-conversation for no reason' },
  { emoji: '👀', text: 'Her friends gave you weird looks when you first met' },
  { emoji: '📱', text: 'The vibe shifted after she checked her phone' },
  { emoji: '🤷', text: 'Matches who seemed interested suddenly unmatched' },
];

interface Props {
  selectedExperiences: string[];
  setSelectedExperiences: (experiences: string[]) => void;
}

export default function StepRelatability({ selectedExperiences, setSelectedExperiences }: Props) {
  const toggle = (text: string) => {
    if (selectedExperiences.includes(text)) {
      setSelectedExperiences(selectedExperiences.filter((e) => e !== text));
    } else {
      setSelectedExperiences([...selectedExperiences, text]);
    }
  };

  return (
    <div className="space-y-5">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#1a1a1a]">Has this happened to you?</h2>
        <p className="text-gray-500 text-sm mt-1">Select any that sound familiar...</p>
      </div>

      <div className="space-y-2.5">
        {OPTIONS.map((opt) => {
          const selected = selectedExperiences.includes(opt.text);
          return (
            <button
              key={opt.text}
              type="button"
              onClick={() => toggle(opt.text)}
              className={`w-full p-3.5 rounded-xl border-2 text-left transition-all flex items-center gap-3 ${
                selected
                  ? 'border-[#1877f2] bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <span className="text-xl">{opt.emoji}</span>
              <span className="text-sm text-[#1a1a1a] font-medium">{opt.text}</span>
            </button>
          );
        })}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="text-sm text-gray-700">
          💡 <span className="font-semibold text-[#1877f2]">The connection?</span> An AWDTSG post. Let&apos;s find out.
        </p>
      </div>
    </div>
  );
}
