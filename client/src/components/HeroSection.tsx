/**
 * HeroSection — Taylor Rauma Tattoo
 * Design: Clean Minimal — Black & White
 * Full-viewport hero: full-width typographic lockup, no image
 */

export default function HeroSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-14 md:pt-16">
      <p className="section-label mb-6">Vancouver, BC</p>

      <h1 className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.9] text-black mb-8">
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
          className="font-body text-xs tracking-[0.15em] uppercase px-7 py-3.5 bg-black text-white hover:bg-[#222] transition-colors duration-200 text-center w-fit"
        >
          Book a Session
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex items-center gap-3 mt-auto pt-16 pb-4">
        <div className="w-px h-10 bg-black/20" />
        <span className="section-label">Scroll</span>
      </div>
    </section>
  );
}
