/**
 * HeroSection — Taylor Rauma Tattoo
 * Design: Clean Minimal — Black & White
 * Full-viewport hero: title with logo directly to its right, CTA below
 */

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/taylogo_ef859444.jpeg";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-between px-6 md:px-12 lg:px-20 pt-20 pb-10"
    >
      <p className="section-label">Vancouver, BC</p>

      {/* Title + Logo side by side, logo aligned to right of title */}
      <div className="flex flex-row items-center gap-6 md:gap-10">
        <h1 className="font-display text-[clamp(3.5rem,9vw,9rem)] leading-[0.88] text-black shrink-0">
          Taylor<br />Rauma<br />Tattoo
        </h1>
        <img
          src={LOGO_URL}
          alt="Taylor Rauma Tattoo logo"
          className="w-[clamp(180px,22vw,420px)] h-[clamp(180px,22vw,420px)] object-contain shrink-0"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="w-8 h-px bg-black" />
        <a
          href="#booking"
          onClick={(e) => { e.preventDefault(); scrollTo("#booking"); }}
          className="font-body text-xs tracking-[0.15em] uppercase px-7 py-3.5 bg-black text-white hover:bg-[#222] transition-colors duration-200 text-center w-fit"
        >
          Book a Session
        </a>
      </div>
    </section>
  );
}
