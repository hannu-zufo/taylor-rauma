/**
 * HeroSection — Taylor Rauma Tattoo
 * Design: Clean Minimal — Black & White
 * Full-viewport hero: left-aligned typographic lockup, right-side image split
 */

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/tr-hero-nTACETNH8yWBjLTWxTtYQi.webp";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col md:flex-row pt-14 md:pt-16">
      {/* Left — text */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 md:py-0 border-r border-black/8">
        <p className="section-label mb-6">Vancouver, BC</p>

        <h1 className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.95] text-black mb-8">
          Taylor<br />Rauma
        </h1>

        <div className="w-8 h-px bg-black mb-8" />

        <p className="font-body text-sm text-[#555] leading-relaxed max-w-xs mb-10 font-light">
          Traditional tattooing out of Vancouver.
          Bold, clean, designed to last.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#booking"
            onClick={(e) => { e.preventDefault(); scrollTo("#booking"); }}
            className="font-body text-xs tracking-[0.15em] uppercase px-7 py-3.5 bg-black text-white hover:bg-[#222] transition-colors duration-200 text-center"
          >
            Book a Session
          </a>
          <a
            href="https://www.instagram.com/taylorrauma/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-[0.15em] uppercase px-7 py-3.5 border border-black text-black hover:bg-black hover:text-white transition-all duration-200 text-center"
          >
            View Work
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex items-center gap-3 mt-auto pt-16 pb-4">
          <div className="w-px h-10 bg-black/20" />
          <span className="section-label">Scroll</span>
        </div>
      </div>

      {/* Right — image */}
      <div className="w-full md:w-[52%] lg:w-[55%] relative overflow-hidden min-h-[50vw] md:min-h-0">
        <img
          src={HERO_IMG}
          alt="Tattoo machine close-up"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Subtle right-side fade for text legibility on mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent md:hidden pointer-events-none" />
      </div>
    </section>
  );
}
