/**
 * PortfolioSection — Taylor Rauma Tattoo
 * Design: Clean Minimal — Black & White
 * Gallery grid — placeholder slots ready for your own images
 */
import { useEffect, useRef } from "react";

const INSTAGRAM_URL = "https://www.instagram.com/taylorrauma/";

const portfolioItems = [
  { id: 1, span: "row-span-2" },
  { id: 2, span: "" },
  { id: 3, span: "" },
  { id: 4, span: "" },
  { id: 5, span: "row-span-2" },
  { id: 6, span: "" },
  { id: 7, span: "" },
  { id: 8, span: "" },
];

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

export default function PortfolioSection() {
  const headerRef = useFadeUp();

  return (
    <section id="portfolio" className="py-24 md:py-32 border-t border-black/8">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="fade-up flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="section-label mb-3">The Work</p>
            <h2 className="font-display text-5xl md:text-6xl text-black">Portfolio</h2>
          </div>
          <p className="font-body text-sm text-[#888] max-w-xs leading-relaxed font-light">
            Traditional American tattooing. Every piece drawn by hand,
            executed with intention.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 auto-rows-[280px] md:auto-rows-[320px]">
          {portfolioItems.map((item, i) => (
            <PlaceholderItem key={item.id} item={item} delay={i * 60} />
          ))}
        </div>

        {/* Instagram link */}
        <div className="flex items-center justify-between mt-10 pt-8 border-t border-black/8">
          <p className="font-body text-xs text-[#aaa] tracking-wide font-light">
            More work on Instagram
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-[0.12em] uppercase text-black border-b border-black pb-0.5 hover:opacity-50 transition-opacity duration-200 flex items-center gap-2"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            @taylorrauma
          </a>
        </div>
      </div>
    </section>
  );
}

function PlaceholderItem({
  item,
  delay,
}: {
  item: { id: number; span: string };
  delay: number;
}) {
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
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`fade-up relative overflow-hidden bg-[#f0f0f0] ${item.span}`}
    >
      {/* Subtle cross-hair placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-8 h-8 opacity-20">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-black -translate-y-1/2" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black -translate-x-1/2" />
        </div>
      </div>
    </div>
  );
}
