/**
 * ShopSection — Taylor Rauma Tattoo
 * Design: Clean Minimal — Black & White
 * Empty shop — coming soon placeholder
 */
import { useEffect, useRef } from "react";
import InstagramBadge from "@/components/InstagramBadge";

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

export default function ShopSection() {
  const headerRef = useFadeUp();
  const bodyRef = useFadeUp(120);

  return (
    <section id="shop" className="py-24 md:py-32 border-t border-black/8">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="fade-up mb-14">
          <p className="section-label mb-3">Merch &amp; Prints</p>
          <h2 className="font-display text-5xl md:text-6xl text-black">Shop</h2>
        </div>

        {/* Coming soon + Instagram badge */}
        <div ref={bodyRef} className="fade-up flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Left: coming soon text */}
          <div className="border border-black/8 py-20 px-8 flex flex-col items-center justify-center text-center gap-4 flex-1">
            <p className="font-display text-2xl text-black">Coming Soon</p>
            <p className="font-body text-sm text-[#aaa] font-light max-w-xs leading-relaxed">
              Prints, apparel, and objects. Check back soon or follow{" "}
              <a
                href="https://www.instagram.com/taylorrauma/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black border-b border-black/30 hover:border-black transition-colors"
              >
                @taylorrauma
              </a>{" "}
              for updates.
            </p>
          </div>

          {/* Right: Instagram badge */}
          <div className="w-full md:w-auto md:min-w-[320px]">
            <InstagramBadge />
          </div>
        </div>
      </div>
    </section>
  );
}
