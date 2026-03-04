export default function FeaturesGrid() {
  const features = [
    {
      icon: '🔍',
      title: 'Search AWDTSG Groups',
      description:
        'Scan hundreds of "Are We Dating the Same Guy?" Facebook groups aggregated in one place for posts, warnings, and reviews.',
    },
    {
      icon: '🤳',
      title: 'Facial Recognition Match',
      description:
        'Upload a photo and our AI compares it to profile photos shared in posts — finding matches even without a name.',
    },
    {
      icon: '🛡️',
      title: 'Take Control',
      description:
        "Know what's being said so you can address misunderstandings, or avoid someone with a track record of red flags.",
    },
  ];

  return (
    <section className="mt-4 bg-white rounded-2xl p-5 shadow-sm">
      <h2 className="text-xl font-black text-[#1a1a1a] mb-4">
        Use AWDTSG Checker to
      </h2>
      <div className="space-y-3">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-[#f7f7f7] rounded-2xl p-4 flex gap-3"
          >
            <div className="w-11 h-11 bg-[#e7f0fd] rounded-xl flex items-center justify-center text-xl shrink-0">
              {feature.icon}
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#1a1a1a] mb-0.5">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
