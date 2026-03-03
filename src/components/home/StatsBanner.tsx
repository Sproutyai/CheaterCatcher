export default function StatsBanner() {
  return (
    <section className="bg-[#1877f2] rounded-3xl mx-4 md:mx-6 mt-6 py-12 border border-[#1a1a1a]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-2xl">★★★★★</span>
            <span className="font-bold text-lg">500,000+ posts indexed</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
            Find the Truth
          </h3>
          <div className="flex -space-x-3">
            {[10, 11, 12, 13].map((id) => (
              <img
                key={id}
                src={`https://i.pravatar.cc/50?img=${id}`}
                alt="User"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
