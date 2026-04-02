/**
 * PortfolioSection — Taylor Rauma Tattoo
 * Design: Clean Minimal — Black & White
 * Gallery grid using real images sourced from @taylorrauma Instagram
 */
import { useEffect, useRef, useState } from "react";

const INSTAGRAM_URL = "https://www.instagram.com/taylorrauma/";

// Real images from @taylorrauma Instagram
const portfolioItems = [
  {
    id: 1,
    title: "Globe & Lantern",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/bdRAeTXzc0Sm_c3896918.jpg",
    span: "row-span-2",
  },
  {
    id: 2,
    title: "Hannya Mask",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/CWKIdt1qMhaI_c25efb9d.jpg",
    span: "",
  },
  {
    id: 3,
    title: "Dagger & Rose",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/HB0pBpGM26gV_b60b77a4.jpg",
    span: "",
  },
  {
    id: 4,
    title: "Hand Piece",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/RjBCRrs44lXx_ff823968.jpg",
    span: "",
  },
  {
    id: 5,
    title: "Skull Cherries",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/NBdZw7XSfe0y_98489dd7.jpg",
    span: "row-span-2",
  },
  {
    id: 6,
    title: "Black & White Flash",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/dgAQU6utpaTJ_3309563b.jpg",
    span: "",
  },
  {
    id: 7,
    title: "Traditional Flash",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/L3lNzBaHc00G_051b9cdf.jpg",
    span: "",
  },
  {
    id: 8,
    title: "Plant & Vase",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/cssDp4bViwp4_4e409546.jpg",
    span: "",
  },
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
  const [lightbox, setLightbox] = useState<{ img: string; title: string } | null>(null);

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
            <GalleryItem
              key={item.id}
              item={item}
              delay={i * 60}
              onClick={() => setLightbox({ img: item.img, title: item.title })}
            />
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

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm p-6"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.img}
              alt={lightbox.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="flex items-center justify-between mt-4">
              <p className="font-display text-lg text-black">{lightbox.title}</p>
              <button
                onClick={() => setLightbox(null)}
                className="font-body text-xs tracking-[0.15em] uppercase text-[#888] hover:text-black transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function GalleryItem({
  item,
  delay,
  onClick,
}: {
  item: { id: number; title: string; img: string; span: string };
  delay: number;
  onClick: () => void;
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
      className={`fade-up group relative overflow-hidden cursor-pointer bg-[#f5f5f5] ${item.span}`}
      onClick={onClick}
    >
      <img
        src={item.img}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/15 transition-all duration-400" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="font-display text-base text-white drop-shadow-sm">{item.title}</p>
      </div>
    </div>
  );
}
