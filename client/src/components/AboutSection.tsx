/**
 * AboutSection — Taylor Rauma Tattoo
 * Design: Clean Minimal — Black & White
 * Split layout: large portrait left, bio text right
 */
import { useEffect, useRef } from "react";

const ARTIST_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/tr-artist-S4kRaKAMzztFCAoyFnNFXT.webp";
const STUDIO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/tr-studio-3yHKFJ9ybhqAvJsY5k3NnW.webp";

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
  const leftRef = useFadeUp();
  const rightRef = useFadeUp(120);
  const studioRef = useFadeUp(80);

  return (
    <section id="about" className="border-t border-black/8">
      {/* Bio block */}
      <div className="grid md:grid-cols-2 min-h-[80vh]">
        {/* Portrait */}
        <div ref={leftRef} className="fade-up relative overflow-hidden bg-[#f0f0f0] min-h-[60vw] md:min-h-0">
          <img
            src={ARTIST_IMG}
            alt="Taylor Rauma"
            className="absolute inset-0 w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>

        {/* Bio text */}
        <div ref={rightRef} className="fade-up flex flex-col justify-center px-8 md:px-12 lg:px-16 py-20 border-l border-black/8">
          <p className="section-label mb-6">The Artist</p>
          <h2 className="font-display text-4xl md:text-5xl text-black mb-8 leading-tight">
            Taylor<br />Rauma
          </h2>
          <div className="w-8 h-px bg-black mb-8" />

          <p className="font-body text-sm text-[#555] leading-relaxed mb-5 font-light">
            Taylor Rauma has been tattooing out of Vancouver since 2012.
            Trained under some of the most respected traditional artists on the West Coast,
            her work is rooted in the American Traditional canon — bold outlines, a limited
            palette of solid colours, and subject matter drawn from the golden age of tattooing.
          </p>
          <p className="font-body text-sm text-[#555] leading-relaxed mb-5 font-light">
            She believes a tattoo should be readable from across the room and look just as
            sharp in thirty years. Every line is pulled with intention. Every colour packed
            to last. She draws all her own flash and takes on a limited number of custom
            projects each month.
          </p>
          <p className="font-body text-sm text-[#555] leading-relaxed mb-10 font-light">
            Iron &amp; Tide is a private studio — one artist, one client at a time.
            No walk-in chaos. Just focused, deliberate work in a space that respects
            the art form and the person in the chair.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-black/8">
            {[
              { n: "12+", label: "Years" },
              { n: "2,500+", label: "Pieces" },
              { n: "1", label: "Artist" },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-display text-3xl text-black">{s.n}</p>
                <p className="section-label mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Studio block */}
      <div className="border-t border-black/8 grid md:grid-cols-2">
        {/* Studio info */}
        <div ref={studioRef} className="fade-up flex flex-col justify-center px-8 md:px-12 lg:px-16 py-20 order-2 md:order-1">
          <p className="section-label mb-6">The Studio</p>
          <h3 className="font-display text-3xl md:text-4xl text-black mb-8">
            Vancouver, BC
          </h3>
          <div className="w-8 h-px bg-black mb-8" />

          <p className="font-body text-sm text-[#555] leading-relaxed mb-8 font-light">
            The studio sits on Water Street in Vancouver — a historic district of brick buildings and the kind of character that suits traditional tattooing perfectly.
          </p>

          <div className="space-y-5 text-sm">
            <div className="flex gap-6">
              <div>
                <p className="section-label mb-1.5">Address</p>
                <p className="font-body text-[#444] font-light">312 Water Street<br />Vancouver, BC V6B 1B6</p>
              </div>
            </div>
            <div className="flex gap-10">
              <div>
                <p className="section-label mb-1.5">Hours</p>
                <p className="font-body text-[#444] font-light">Tue – Sat<br />12:00 – 8:00 PM</p>
              </div>
              <div>
                <p className="section-label mb-1.5">Contact</p>
                <a href="mailto:taylorraumatattoo@gmail.com" className="font-body text-[#444] font-light block hover:text-black transition-colors">taylorraumatattoo@gmail.com</a>
                <a href="tel:+16045550182" className="font-body text-[#444] font-light block hover:text-black transition-colors">+1 (604) 555-0182</a>
              </div>
            </div>
          </div>
        </div>

        {/* Studio image */}
        <div className="relative overflow-hidden bg-[#f0f0f0] min-h-[50vw] md:min-h-0 order-1 md:order-2 border-l border-black/8">
          <img
            src={STUDIO_IMG}
            alt="Studio interior"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
