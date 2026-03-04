import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section className="mt-4 space-y-3">
      {TESTIMONIALS.map((t, i) => (
        <div key={i} className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <span className="font-bold text-sm text-[#1a1a1a]">{t.name}</span>
              <div className="flex gap-0.5">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-xs">★</span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed mb-2">
            &ldquo;{t.text}&rdquo;
          </p>
          <span className="text-[10px] text-gray-400">{t.time}</span>
        </div>
      ))}
    </section>
  );
}
