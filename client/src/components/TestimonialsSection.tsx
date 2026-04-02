/**
 * TestimonialsSection — Iron & Tide Tattoo
 * Design: Pacific Northwest Gothic — Dark Coastal Americana
 * Client testimonials with gold quote marks and editorial layout
 */
import { useEffect, useRef, useState } from "react";

function useFadeUp(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

const testimonials = [
  {
    quote: "Marlowe drew exactly what I had in my head — a traditional eagle with a banner — and executed it flawlessly. The lines are razor sharp and the colour is still vibrant three years later. Best tattoo I own.",
    name: "Declan M.",
    detail: "Eagle & Banner, Left Forearm",
  },
  {
    quote: "I've been tattooed by a dozen artists across North America and Marlowe is in a class of her own. She takes her time, explains everything, and the work speaks for itself. Iron & Tide is the real deal.",
    name: "Simone K.",
    detail: "Full Sleeve, Traditional",
  },
  {
    quote: "Walked in on a Tuesday afternoon, picked a rose flash off the wall, and walked out an hour later with the best tattoo I've ever gotten. The studio is immaculate and the vibe is exactly what you want from a traditional shop.",
    name: "Thomas R.",
    detail: "Rose Flash, Right Shoulder",
  },
  {
    quote: "I was nervous about my first tattoo but Marlowe made the whole experience completely comfortable. She talked me through every step, the aftercare instructions were clear, and the healed result is stunning.",
    name: "Priya N.",
    detail: "Swallow Flash, Wrist",
  },
];

export default function TestimonialsSection() {
  const headerRef = useFadeUp();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-28 bg-[oklch(0.14_0.007_60)] relative overflow-hidden">
      {/* Decorative background quote mark */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 font-display text-[20rem] leading-none text-[oklch(0.72_0.12_85/0.04)] pointer-events-none select-none"
        aria-hidden="true"
      >
        "
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div ref={headerRef} className="fade-up text-center mb-14">
          <p className="font-label text-xs tracking-[0.4em] uppercase text-[oklch(0.72_0.12_85)] mb-3">
            Client Words
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold italic text-[oklch(0.92_0.03_80)]">
            What People Say
          </h2>
          <div className="gold-rule max-w-xs mx-auto mt-4" />
        </div>

        {/* Active testimonial */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative min-h-[180px] flex items-center justify-center">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                  i === active
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <p className="font-display text-xl md:text-2xl italic text-[oklch(0.82_0.025_80)] leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div className="h-px w-8 bg-[oklch(0.72_0.12_85)] mb-4" />
                <p className="font-label text-sm tracking-[0.15em] uppercase text-[oklch(0.72_0.12_85)]">
                  {t.name}
                </p>
                <p className="font-body text-xs text-[oklch(0.50_0.010_80)] mt-1">{t.detail}</p>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 ${
                  i === active
                    ? "w-6 h-1.5 bg-[oklch(0.72_0.12_85)]"
                    : "w-1.5 h-1.5 rounded-full bg-[oklch(0.35_0.007_80)] hover:bg-[oklch(0.55_0.012_80)]"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
