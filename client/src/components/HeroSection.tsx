/**
 * HeroSection — Taylor Rauma Tattoo
 * Design: Clean Minimal — Black & White
 * Full-viewport hero: title+logo+CTA vertically centred in the viewport
 */

import { useRef, useEffect, useState } from "react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/taylogo_ef859444.jpeg";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [titleHeight, setTitleHeight] = useState<number | null>(null);

  useEffect(() => {
    const measure = () => {
      if (titleRef.current) {
        setTitleHeight(titleRef.current.offsetHeight);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 gap-[4.5rem]"
    >
      {/* Title + Logo row: logo height = 92% of title height, flush against title */}
      <div className="flex flex-row items-center gap-0">
        <h1
          ref={titleRef}
          className="font-display text-[clamp(3.5rem,9vw,9rem)] text-black shrink-0"
          style={{ lineHeight: 0.88 }}
        >
          Taylor<br />Rauma<br />Tattoo
        </h1>

        {titleHeight !== null && (
          <img
            src={LOGO_URL}
            alt="Taylor Rauma Tattoo logo"
            style={{ height: Math.round(titleHeight * 0.92), width: "auto" }}
            className="object-contain shrink-0 self-center"
          />
        )}
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
