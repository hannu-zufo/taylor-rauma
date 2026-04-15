/**
 * HeroSection — Taylor Rauma Tattoo
 * Design: Clean Minimal — Black & White
 * Full-viewport hero: title + logo side by side, both filling the screen height
 */

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/taylogo_ef859444.jpeg";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="h-screen flex flex-col md:flex-row overflow-hidden"
    >
      {/* Left panel — title + CTA */}
      <div className="flex flex-col justify-between px-6 md:px-12 lg:px-20 pt-20 pb-10 md:w-1/2 shrink-0">
        <p className="section-label">Vancouver, BC</p>

        <h1 className="font-display text-[clamp(3.5rem,9vw,9rem)] leading-[0.88] text-black">
          Taylor<br />Rauma<br />Tattoo
        </h1>

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
      </div>

      {/* Right panel — logo fills full height */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-12">
        <img
          src={LOGO_URL}
          alt="Taylor Rauma Tattoo logo"
          className="w-full h-full object-contain max-h-[85vh]"
        />
      </div>
    </section>
  );
}
