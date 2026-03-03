import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section className="mx-4 md:mx-6 mt-6 grid md:grid-cols-3 gap-6">
      {TESTIMONIALS.map((t, i) => (
        <div key={i} className="bg-white rounded-3xl p-6 border border-[#1a1a1a]">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-12 h-12 rounded-full object-cover border border-[#1a1a1a]"
            />
            <div>
              <span className="font-bold text-[#1a1a1a]">{t.name}</span>
              <div className="flex gap-0.5">
                {[...Array(t.rating)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            &ldquo;{t.text}&rdquo;
          </p>
          <span className="text-xs text-gray-400">{t.time}</span>
        </div>
      ))}
    </section>
  );
}
