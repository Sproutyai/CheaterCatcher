export default function FeaturesGrid() {
  const features = [
    {
      icon: '🔍',
      title: 'Search AWDTSG Groups',
      description:
        'Scan hundreds of "Are We Dating the Same Guy?" Facebook groups aggregated in one place for posts, warnings, and reviews',
    },
    {
      icon: '🤳',
      title: 'Facial Recognition Match',
      description:
        'Upload a photo and our AI compares it to profile photos shared in posts — finding matches even without a name',
    },
    {
      icon: '🛡️',
      title: 'Protect Yourself',
      description:
        'Know what\'s being said so you can address misunderstandings, or avoid someone with a track record of red flags',
    },
  ];

  return (
    <section className="bg-white rounded-3xl mx-4 md:mx-6 mt-6 py-16 md:py-20 border border-[#1a1a1a]">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 tracking-tight uppercase">
          Use AWDTSG Checker to
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-[#f0f2f5] rounded-2xl p-6 border border-[#1a1a1a]">
              <div className="w-14 h-14 bg-[#e7f0fd] rounded-xl flex items-center justify-center mb-4 text-2xl border border-[#1a1a1a]">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
