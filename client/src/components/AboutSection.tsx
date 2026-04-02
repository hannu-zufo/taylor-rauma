/**
 * AboutSection — Iron & Tide Tattoo
 * Design: Pacific Northwest Gothic — Dark Coastal Americana
 * Artist bio with portrait, asymmetric layout, gold accents
 */
import { useEffect, useRef } from "react";

const ARTIST_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/artist-portrait-CrYEJGZff2WYBSpeokamNB.webp";
const GASTOWN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/gastown-exterior-3ADsc7w4hmeUXK8KsXCdTE.webp";

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

export default function AboutSection() {
  const headerRef = useFadeUp();
  const leftRef = useFadeUp(100);
  const rightRef = useFadeUp(200);
  const studioRef = useFadeUp(100);

  return (
    <section id="about" className="py-24 md:py-32 bg-[oklch(0.11_0.006_60)]">
      <div className="container">
        {/* Section header */}
        <div ref={headerRef} className="fade-up text-center mb-16">
          <p className="font-label text-xs tracking-[0.4em] uppercase text-[oklch(0.72_0.12_85)] mb-3">
            The Artist
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold italic text-[oklch(0.92_0.03_80)] mb-4">
            About
          </h2>
          <div className="gold-rule max-w-xs mx-auto mt-4" />
        </div>

        {/* Artist bio — asymmetric layout */}
        <div className="grid md:grid-cols-5 gap-12 items-start mb-24">
          {/* Portrait — 2 cols */}
          <div ref={leftRef} className="fade-up md:col-span-2 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-[oklch(0.72_0.12_85/0.25)]" />
            <img
              src={ARTIST_IMG}
              alt="Tattoo artist portrait"
              className="w-full h-auto object-cover relative z-10"
              loading="lazy"
            />
            {/* Name badge */}
            <div className="relative z-10 bg-[oklch(0.14_0.007_60)] border-t border-[oklch(0.72_0.12_85/0.3)] p-4">
              <p className="font-display text-2xl italic text-[oklch(0.92_0.03_80)]">Marlowe Reid</p>
              <p className="font-label text-xs tracking-[0.2em] uppercase text-[oklch(0.72_0.12_85)] mt-1">
                Traditional Tattoo Artist
              </p>
            </div>
          </div>

          {/* Bio text — 3 cols */}
          <div ref={rightRef} className="fade-up md:col-span-3 pt-4">
            <h3 className="font-display text-3xl md:text-4xl font-bold italic text-[oklch(0.92_0.03_80)] mb-6 leading-tight">
              Fifteen Years Under the Needle
            </h3>
            <div className="h-px w-12 bg-[oklch(0.72_0.12_85)] mb-8" />

            <p className="font-body text-[oklch(0.70_0.015_80)] leading-relaxed mb-5">
              Marlowe Reid has been tattooing out of Gastown since 2010, having apprenticed
              under some of the most respected traditional artists on the West Coast. Her work
              is rooted in the American Traditional canon — bold black outlines, a limited
              palette of solid colours, and subject matter drawn from the golden age of
              tattooing: eagles, roses, daggers, ships, and the creatures of the deep.
            </p>
            <p className="font-body text-[oklch(0.70_0.015_80)] leading-relaxed mb-5">
              She believes that a tattoo should be readable from across the room and still
              look sharp in thirty years. That means no shortcuts: every line is pulled
              with intention, every colour packed to last. She draws all her own flash and
              takes on a limited number of custom projects each month.
            </p>
            <p className="font-body text-[oklch(0.70_0.015_80)] leading-relaxed mb-8">
              Iron &amp; Tide is a private studio — one artist, one client at a time. No walk-in
              chaos, no assembly line. Just focused, deliberate work in a space that respects
              both the art form and the person sitting in the chair.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-[oklch(1_0_0/0.08)] pt-8">
              {[
                { number: "15+", label: "Years Tattooing" },
                { number: "3,000+", label: "Pieces Completed" },
                { number: "1", label: "Artist, Full Focus" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-display text-3xl md:text-4xl font-bold text-[oklch(0.72_0.12_85)]">
                    {stat.number}
                  </p>
                  <p className="font-label text-[10px] tracking-[0.15em] uppercase text-[oklch(0.55_0.012_80)] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Studio section */}
        <div ref={studioRef} className="fade-up">
          <div className="gold-rule mb-16" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="font-label text-xs tracking-[0.4em] uppercase text-[oklch(0.72_0.12_85)] mb-3">
                The Studio
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold italic text-[oklch(0.92_0.03_80)] mb-6">
                Heart of Gastown
              </h3>
              <div className="h-px w-12 bg-[oklch(0.72_0.12_85)] mb-6" />
              <p className="font-body text-[oklch(0.70_0.015_80)] leading-relaxed mb-5">
                Iron &amp; Tide sits on Water Street in the heart of Gastown — Vancouver's oldest
                neighbourhood, a cobblestone district of Victorian brick buildings, steam clocks,
                and the kind of history that suits traditional tattooing perfectly.
              </p>
              <p className="font-body text-[oklch(0.70_0.015_80)] leading-relaxed mb-6">
                The studio is a private, appointment-preferred space. The walls are covered in
                original flash. The equipment is top-of-the-line and sterilised to medical
                standards. You'll be comfortable, informed, and in good hands.
              </p>
              {/* Address */}
              <div className="border border-[oklch(0.72_0.12_85/0.2)] p-5">
                <p className="font-label text-xs tracking-[0.2em] uppercase text-[oklch(0.72_0.12_85)] mb-3">
                  Find Us
                </p>
                <p className="font-body text-[oklch(0.80_0.020_80)]">
                  312 Water Street<br />
                  Gastown, Vancouver, BC<br />
                  V6B 1B6
                </p>
                <div className="h-px w-full bg-[oklch(1_0_0/0.08)] my-4" />
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-label text-[10px] tracking-[0.15em] uppercase text-[oklch(0.55_0.012_80)] mb-1">Hours</p>
                    <p className="font-body text-[oklch(0.70_0.015_80)]">Tue – Sat</p>
                    <p className="font-body text-[oklch(0.70_0.015_80)]">12:00 – 8:00 PM</p>
                  </div>
                  <div>
                    <p className="font-label text-[10px] tracking-[0.15em] uppercase text-[oklch(0.55_0.012_80)] mb-1">Contact</p>
                    <p className="font-body text-[oklch(0.70_0.015_80)]">info@irontide.ca</p>
                    <p className="font-body text-[oklch(0.70_0.015_80)]">+1 (604) 555-0182</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gastown exterior image */}
            <div className="relative">
              <img
                src={GASTOWN_IMG}
                alt="Iron & Tide Tattoo studio exterior in Gastown"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-[oklch(0.72_0.12_85/0.2)] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
