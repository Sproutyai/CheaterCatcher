import { SEARCH_SOURCES } from '@/lib/constants';

export default function SearchSources() {
  return (
    <section className="bg-[#1a1a1a] rounded-3xl mx-4 md:mx-6 mt-6 py-12 md:py-16 text-white border border-[#1a1a1a]">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 tracking-tight uppercase flex items-center justify-center gap-3 flex-wrap">
          <span className="italic">our</span>
          <span className="bg-[#1877f2] text-white px-4 py-1 rounded-lg border-2 border-white not-italic">
            search
          </span>
          <span>sources</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {SEARCH_SOURCES.map((source, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-[#1877f2] rounded-full flex items-center justify-center mb-4 border-2 border-white">
                <div className="text-4xl">{source.icon}</div>
              </div>
              <span className="text-white font-medium text-sm md:text-base leading-tight">
                {source.label}
              </span>
              <span className="text-white/60 text-xs mt-1">{source.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
