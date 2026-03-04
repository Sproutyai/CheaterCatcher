import { SEARCH_SOURCES } from '@/lib/constants';

export default function SearchSources() {
  return (
    <section className="mt-4 bg-[#1a1a1a] rounded-2xl p-5 shadow-sm text-white">
      <h2 className="text-lg font-black text-center mb-5 lowercase tracking-tight">
        <span className="italic">our</span>{' '}
        <span className="bg-[#1877f2] text-white px-2 py-0.5 rounded-md text-sm not-italic">
          search
        </span>{' '}
        sources
      </h2>
      <div className="flex justify-between gap-2">
        {SEARCH_SOURCES.map((source, i) => (
          <div key={i} className="flex flex-col items-center text-center flex-1">
            <div className="w-14 h-14 bg-[#1877f2] rounded-full flex items-center justify-center mb-2 text-2xl">
              {source.icon}
            </div>
            <span className="text-white font-semibold text-[10px] leading-tight">
              {source.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
