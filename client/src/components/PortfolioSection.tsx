/**
 * PortfolioSection — Iron & Tide Tattoo
 * Design: Pacific Northwest Gothic — Dark Coastal Americana
 * 3-column masonry-style portfolio grid with gold hover states and lightbox
 */
import { useEffect, useRef, useState } from "react";

// Portfolio items using Unsplash for variety (traditional tattoo work)
const portfolioItems = [
  {
    id: 1,
    title: "Eagle & Banner",
    style: "American Traditional",
    img: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80",
  },
  {
    id: 2,
    title: "Rose & Dagger",
    style: "American Traditional",
    img: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&q=80",
  },
  {
    id: 3,
    title: "Panther Head",
    style: "American Traditional",
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
  },
  {
    id: 4,
    title: "Swallow in Flight",
    style: "American Traditional",
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80&fit=crop&crop=top",
  },
  {
    id: 5,
    title: "Nautical Anchor",
    style: "American Traditional",
    img: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80&crop=entropy",
  },
  {
    id: 6,
    title: "Ship & Waves",
    style: "American Traditional",
    img: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80&fit=crop&crop=center",
  },
  {
    id: 7,
    title: "Skull & Roses",
    style: "American Traditional",
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80&crop=faces",
  },
  {
    id: 8,
    title: "Lighthouse",
    style: "American Traditional",
    img: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&q=80&crop=entropy",
  },
  {
    id: 9,
    title: "Serpent & Sword",
    style: "American Traditional",
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80&fit=crop&crop=top&crop=entropy",
  },
];

// Use the generated tattoo closeup as the hero portfolio image
const FEATURED_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/tattoo-closeup-f4LdkHafpKmB4fFkWLPjtf.webp";
const FLASH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/flash-sheet-6FSWiggqFNWWFmwTpSXG6Q.webp";

function useFadeUp(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

export default function PortfolioSection() {
  const sectionRef = useFadeUp();
  const [lightbox, setLightbox] = useState<{ img: string; title: string } | null>(null);

  const portfolioImages = [
    { id: 1, title: "Eagle & Banner", img: FEATURED_IMG },
    { id: 2, title: "Flash Sheet", img: FLASH_IMG },
    ...portfolioItems.slice(0, 7).map((item) => ({ id: item.id + 2, title: item.title, img: item.img })),
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[oklch(0.11_0.006_60)]">
      <div className="container">
        {/* Section header */}
        <div ref={sectionRef} className="fade-up text-center mb-16">
          <p className="font-label text-xs tracking-[0.4em] uppercase text-[oklch(0.72_0.12_85)] mb-3">
            The Work
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold italic text-[oklch(0.92_0.03_80)] mb-4">
            Portfolio
          </h2>
          <div className="gold-rule max-w-xs mx-auto mt-4" />
          <p className="font-body text-[oklch(0.60_0.015_80)] mt-6 max-w-lg mx-auto leading-relaxed">
            Every piece is drawn and executed with the same commitment to bold outlines,
            solid colour, and designs that age with grace. Traditional work done right.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {portfolioImages.map((item, i) => (
            <PortfolioCard
              key={item.id}
              item={item}
              delay={i * 80}
              onClick={() => setLightbox({ img: item.img, title: item.title })}
            />
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <p className="font-body text-[oklch(0.60_0.015_80)] text-sm mb-4">
            More work on Instagram
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-label text-sm tracking-[0.15em] uppercase text-[oklch(0.72_0.12_85)] border border-[oklch(0.72_0.12_85/0.4)] px-6 py-2.5 hover:border-[oklch(0.72_0.12_85)] hover:bg-[oklch(0.72_0.12_85/0.08)] transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            @irontide.tattoo
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.img}
              alt={lightbox.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="flex items-center justify-between mt-3">
              <p className="font-display text-lg italic text-[oklch(0.92_0.03_80)]">{lightbox.title}</p>
              <button
                onClick={() => setLightbox(null)}
                className="font-label text-xs tracking-[0.2em] uppercase text-[oklch(0.60_0.015_80)] hover:text-[oklch(0.72_0.12_85)] transition-colors"
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

function PortfolioCard({
  item,
  delay,
  onClick,
}: {
  item: { id: number; title: string; img: string };
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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="fade-up group relative overflow-hidden aspect-square cursor-pointer"
      onClick={onClick}
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[oklch(0.10_0.005_60/0)] group-hover:bg-[oklch(0.10_0.005_60/0.65)] transition-all duration-400 flex items-end p-4">
        <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <p className="font-display text-lg italic text-[oklch(0.92_0.03_80)]">{item.title}</p>
          <div className="h-px w-8 bg-[oklch(0.72_0.12_85)] mt-1" />
        </div>
      </div>
      {/* Gold border on hover */}
      <div className="absolute inset-0 border border-[oklch(0.72_0.12_85/0)] group-hover:border-[oklch(0.72_0.12_85/0.5)] transition-all duration-400 pointer-events-none" />
    </div>
  );
}
