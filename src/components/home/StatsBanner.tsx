export default function StatsBanner() {
  return (
    <section className="mt-4 bg-[#1877f2] rounded-2xl p-5 shadow-sm text-white text-center">
      <div className="flex items-center justify-center gap-1 mb-2">
        <span className="text-yellow-300 text-lg">★★★★★</span>
        <span className="text-xs font-semibold text-white/90">
          500,000+ posts indexed
        </span>
      </div>
      <h3 className="text-2xl font-black tracking-tight mb-3">
        Find the Truth
      </h3>
      <div className="flex justify-center -space-x-2">
        {[10, 11, 12, 13].map((id) => (
          <img
            key={id}
            src={`https://i.pravatar.cc/40?img=${id}`}
            alt=""
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        ))}
      </div>
    </section>
  );
}
