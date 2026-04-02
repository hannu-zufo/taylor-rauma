/**
 * PortfolioSection — Taylor Rauma Tattoo
 * Design: Clean Minimal — Black & White
 * Masonry-style grid of real portfolio images with lightbox
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
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

const IMAGES = [
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/tayrose_7412bbe9.jpeg", alt: "Rose tattoo" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/taysacredheart_511fe188.jpeg", alt: "Sacred heart tattoo" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/taytombstone_4449a380.jpeg", alt: "Tombstone tattoo" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/tayheartface_b9bc2d41.jpeg", alt: "Heart face tattoo" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/tayskull_e01b9061.jpeg", alt: "Skull fire tattoo" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/taygoldfish_98d349ca.jpeg", alt: "Goldfish tattoo" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/tay38_15538bda.jpeg", alt: "38 tattoo" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/tayolives_31113831.jpeg", alt: "Olive tattoo" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/taysnake_397b4260.jpeg", alt: "Snake tattoo" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/ffc35c18-1fd7-47d6-843d-b1258bf30806_21257477.jpg", alt: "Coffin pins tattoo" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/taycowgirl_2e54a407.jpeg", alt: "Cowgirl tattoo" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/taycowboyskull_332c0ca7.jpeg", alt: "Cowboy skull tattoo" },
];

export default function PortfolioSection() {
  const headerRef = useFadeUp();
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Close lightbox on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => i !== null ? (i + 1) % IMAGES.length : null);
      if (e.key === "ArrowLeft") setLightbox((i) => i !== null ? (i - 1 + IMAGES.length) % IMAGES.length : null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section id="portfolio" className="py-24 md:py-32 border-t border-black/8">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="fade-up flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <h2 className="font-display text-5xl md:text-6xl text-black">Portfolio</h2>
          </div>
          <a
            href="https://www.instagram.com/taylorrauma/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-[0.15em] uppercase text-[#888] hover:text-black transition-colors duration-200 flex items-center gap-2 group"
          >
            <span>@taylorrauma</span>
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
          </a>
        </div>

        {/* Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {IMAGES.map((img, i) => (
            <PortfolioItem key={i} img={img} index={i} onClick={() => setLightbox(i)} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-6 text-white/60 hover:text-white text-3xl font-light transition-colors"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-3xl px-3 py-6 transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + IMAGES.length) % IMAGES.length); }}
          >
            ‹
          </button>
          <img
            src={IMAGES[lightbox].src}
            alt={IMAGES[lightbox].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-3xl px-3 py-6 transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % IMAGES.length); }}
          >
            ›
          </button>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-body text-xs text-white/30 tracking-widest">
            {lightbox + 1} / {IMAGES.length}
          </p>
        </div>
      )}
    </section>
  );
}

function PortfolioItem({ img, index, onClick }: { img: { src: string; alt: string }; index: number; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), index * 40);
          obs.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="fade-up break-inside-avoid cursor-pointer group overflow-hidden"
      onClick={onClick}
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-auto block group-hover:opacity-85 transition-opacity duration-300"
        loading="lazy"
      />
    </div>
  );
}
