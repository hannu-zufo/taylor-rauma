/**
 * FlashSection — Iron & Tide Tattoo
 * Design: Pacific Northwest Gothic — Dark Coastal Americana
 * Displays available flash designs with parchment-paper aesthetic
 */
import { useEffect, useRef } from "react";

const FLASH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/flash-sheet-6FSWiggqFNWWFmwTpSXG6Q.webp";

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

const flashDesigns = [
  { icon: "🦅", name: "Eagle", price: "$200–$350" },
  { icon: "🌹", name: "Rose", price: "$150–$250" },
  { icon: "⚓", name: "Anchor", price: "$150–$250" },
  { icon: "🐦", name: "Swallow", price: "$120–$200" },
  { icon: "🗡️", name: "Dagger", price: "$150–$280" },
  { icon: "🐆", name: "Panther", price: "$250–$400" },
  { icon: "⛵", name: "Ship", price: "$300–$500" },
  { icon: "💀", name: "Skull", price: "$180–$320" },
];

export default function FlashSection() {
  const headerRef = useFadeUp();
  const contentRef = useFadeUp(150);
  const cardsRef = useFadeUp(250);

  return (
    <section id="flash" className="py-24 md:py-32 bg-[oklch(0.13_0.007_60)]">
      <div className="container">
        {/* Section header */}
        <div ref={headerRef} className="fade-up text-center mb-16">
          <p className="font-label text-xs tracking-[0.4em] uppercase text-[oklch(0.72_0.12_85)] mb-3">
            Ready to Wear
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold italic text-[oklch(0.92_0.03_80)] mb-4">
            Flash Designs
          </h2>
          <div className="gold-rule max-w-xs mx-auto mt-4" />
          <p className="font-body text-[oklch(0.60_0.015_80)] mt-6 max-w-lg mx-auto leading-relaxed">
            Flash is the lifeblood of traditional tattooing. These designs are drawn, ready,
            and waiting for the right person. Walk in and pick one off the wall.
          </p>
        </div>

        {/* Main flash sheet + description */}
        <div ref={contentRef} className="fade-up grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Flash sheet image */}
          <div className="relative">
            <div className="absolute -inset-3 border border-[oklch(0.72_0.12_85/0.2)]" />
            <img
              src={FLASH_IMG}
              alt="Traditional tattoo flash sheet"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[oklch(0.13_0.007_60)] to-transparent pointer-events-none" />
          </div>

          {/* Text content */}
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-bold italic text-[oklch(0.92_0.03_80)] mb-6">
              Walk In, Walk Out Tattooed
            </h3>
            <div className="h-px w-12 bg-[oklch(0.72_0.12_85)] mb-6" />
            <p className="font-body text-[oklch(0.70_0.015_80)] leading-relaxed mb-6">
              Flash designs are a cornerstone of traditional tattooing — bold, iconic images
              that have been refined over decades. Every design on our wall is drawn by hand
              and ready to be tattooed the same day.
            </p>
            <p className="font-body text-[oklch(0.70_0.015_80)] leading-relaxed mb-8">
              No appointment needed for flash. Come in, browse the sheets, and leave with
              a piece of art that will look just as sharp in 30 years as it does today.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_85)]" />
                <span className="font-body text-[oklch(0.70_0.015_80)] text-sm">Walk-ins welcome during studio hours</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_85)]" />
                <span className="font-body text-[oklch(0.70_0.015_80)] text-sm">New flash added regularly — follow Instagram for updates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_85)]" />
                <span className="font-body text-[oklch(0.70_0.015_80)] text-sm">Sizing adjustments available at no extra charge</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_85)]" />
                <span className="font-body text-[oklch(0.70_0.015_80)] text-sm">Cash preferred — card accepted with 3% processing fee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Flash design cards */}
        <div ref={cardsRef} className="fade-up">
          <h3 className="font-display text-2xl italic text-[oklch(0.72_0.12_85)] mb-6 text-center">
            Current Flash — Starting Prices
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {flashDesigns.map((design, i) => (
              <FlashCard key={i} design={design} delay={i * 60} />
            ))}
          </div>
          <p className="font-body text-[oklch(0.50_0.010_80)] text-xs text-center mt-6">
            Prices vary based on size and placement. Minimum charge $100. All prices in CAD.
          </p>
        </div>
      </div>
    </section>
  );
}

function FlashCard({
  design,
  delay,
}: {
  design: { icon: string; name: string; price: string };
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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="fade-up group border border-[oklch(0.72_0.12_85/0.15)] hover:border-[oklch(0.72_0.12_85/0.5)] bg-[oklch(0.14_0.007_60)] hover:bg-[oklch(0.16_0.008_60)] transition-all duration-300 p-5 text-center"
    >
      <div className="text-3xl mb-3">{design.icon}</div>
      <p className="font-display text-lg italic text-[oklch(0.92_0.03_80)] mb-1">{design.name}</p>
      <p className="font-label text-xs tracking-[0.1em] text-[oklch(0.72_0.12_85)]">{design.price}</p>
    </div>
  );
}
