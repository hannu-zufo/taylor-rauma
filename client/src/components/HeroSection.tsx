/**
 * HeroSection — Iron & Tide Tattoo
 * Design: Pacific Northwest Gothic — Dark Coastal Americana
 * Full-viewport cinematic hero with parallax background, centered typographic lockup
 */
import { useEffect, useRef } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/hero-bg-QWs6JKaSTGp6vJPUHWCaLi.webp";

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
        }}
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.11_0.006_60/0.55)] via-[oklch(0.11_0.006_60/0.45)] to-[oklch(0.11_0.006_60/0.90)]" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow label */}
        <p
          className="font-label text-xs tracking-[0.4em] uppercase text-[oklch(0.72_0.12_85)] mb-6 opacity-0 animate-[fadeInUp_0.8s_0.2s_ease_forwards]"
        >
          Gastown · Vancouver, BC
        </p>

        {/* Main title */}
        <h1
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold italic text-[oklch(0.92_0.03_80)] leading-none mb-4 opacity-0 animate-[fadeInUp_0.9s_0.4s_ease_forwards]"
        >
          Iron &amp; Tide
        </h1>

        {/* Subtitle */}
        <p
          className="font-display text-2xl md:text-3xl italic text-[oklch(0.72_0.12_85)] mb-8 opacity-0 animate-[fadeInUp_0.9s_0.6s_ease_forwards]"
        >
          Traditional Tattooing
        </p>

        {/* Gold rule */}
        <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-[fadeInUp_0.9s_0.7s_ease_forwards]">
          <div className="h-px w-16 bg-[oklch(0.72_0.12_85)]" />
          <svg width="18" height="18" viewBox="0 0 24 24" fill="oklch(0.72 0.12 85)">
            <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z"/>
          </svg>
          <div className="h-px w-16 bg-[oklch(0.72_0.12_85)]" />
        </div>

        {/* Body text */}
        <p
          className="font-body text-base md:text-lg text-[oklch(0.70_0.015_80)] max-w-xl mx-auto leading-relaxed mb-10 opacity-0 animate-[fadeInUp_0.9s_0.8s_ease_forwards]"
        >
          Bold lines. Solid colour. Designs built to last a lifetime.
          <br />
          Walk-ins welcome. Custom work by appointment.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[fadeInUp_0.9s_1s_ease_forwards]"
        >
          <a
            href="#booking"
            onClick={(e) => { e.preventDefault(); document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" }); }}
            className="font-label text-sm tracking-[0.2em] uppercase px-8 py-3.5 bg-[oklch(0.72_0.12_85)] text-[oklch(0.10_0.005_60)] hover:bg-[oklch(0.80_0.14_85)] transition-all duration-300 w-full sm:w-auto text-center"
          >
            Book a Session
          </a>
          <a
            href="#portfolio"
            onClick={(e) => { e.preventDefault(); scrollToPortfolio(); }}
            className="font-label text-sm tracking-[0.2em] uppercase px-8 py-3.5 border border-[oklch(0.92_0.03_80/0.5)] text-[oklch(0.92_0.03_80)] hover:border-[oklch(0.72_0.12_85)] hover:text-[oklch(0.72_0.12_85)] transition-all duration-300 w-full sm:w-auto text-center"
          >
            View Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-label text-[10px] tracking-[0.3em] uppercase text-[oklch(0.60_0.015_80)]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[oklch(0.72_0.12_85)] to-transparent animate-pulse" />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
