export default function LogoBanner() {
  const platforms = [
    '📘 Facebook',
    '📸 Instagram',
    '🧠 Facial AI',
    '𝕏 Twitter',
    '🌐 Web',
    '📘 Facebook',
    '📸 Instagram',
    '🧠 Facial AI',
    '𝕏 Twitter',
    '🌐 Web',
  ];

  return (
    <section className="mt-4 overflow-hidden scroll-fade-x">
      <div className="flex gap-4 animate-scroll-left w-max">
        {[...platforms, ...platforms].map((p, i) => (
          <span
            key={i}
            className="bg-white px-4 py-2 rounded-full text-xs font-semibold text-[#1a1a1a] whitespace-nowrap shadow-sm"
          >
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}
