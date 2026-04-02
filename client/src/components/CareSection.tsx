/**
 * CareSection — Iron & Tide Tattoo
 * Design: Pacific Northwest Gothic — Dark Coastal Americana
 * Tattoo aftercare instructions in an editorial, easy-to-read format
 */
import { useEffect, useRef } from "react";

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

const careSteps = [
  {
    day: "Day 1–2",
    title: "Leave It Alone",
    icon: "⏱",
    instructions: [
      "Keep the bandage or wrap on for 2–4 hours after leaving the studio",
      "Remove gently under lukewarm running water",
      "Wash once with unscented antibacterial soap using clean hands only",
      "Pat dry with a clean paper towel — never rub",
      "Apply a very thin layer of unscented lotion (Lubriderm, Aveeno, or similar)",
    ],
  },
  {
    day: "Day 3–7",
    title: "Keep It Clean",
    icon: "🧼",
    instructions: [
      "Wash 2–3 times daily with unscented soap",
      "Apply a thin layer of unscented lotion after each wash",
      "The tattoo will begin to peel — do not pick or scratch",
      "Wear loose, breathable clothing over the area",
      "Avoid soaking in baths, pools, or the ocean",
    ],
  },
  {
    day: "Week 2–4",
    title: "Let It Heal",
    icon: "🌿",
    instructions: [
      "Continue moisturising 2–3 times daily as needed",
      "Peeling and slight itching is normal — resist scratching",
      "Avoid direct sun exposure on the healing tattoo",
      "Do not apply sunscreen until fully healed (2–4 weeks)",
      "Avoid heavy exercise that causes excessive sweating for the first week",
    ],
  },
  {
    day: "Long Term",
    title: "Protect Your Investment",
    icon: "🛡",
    instructions: [
      "Apply SPF 50+ sunscreen whenever the tattoo is exposed to sun",
      "Keep skin moisturised year-round to maintain colour vibrancy",
      "Touch-ups are normal and available — contact the studio if needed",
      "Traditional tattoos age beautifully when properly cared for",
    ],
  },
];

const doNots = [
  "Pick, scratch, or peel the tattoo",
  "Soak in baths, pools, hot tubs, or the ocean while healing",
  "Expose to direct sunlight while healing",
  "Apply petroleum jelly (Vaseline) or thick ointments",
  "Shave over a healing tattoo",
  "Let pets lick the area",
  "Wrap tightly in plastic wrap for extended periods",
];

export default function CareSection() {
  const headerRef = useFadeUp();
  const stepsRef = useFadeUp(100);
  const doNotRef = useFadeUp(150);

  return (
    <section id="care" className="py-24 md:py-32 bg-[oklch(0.13_0.007_60)]">
      <div className="container">
        {/* Section header */}
        <div ref={headerRef} className="fade-up text-center mb-16">
          <p className="font-label text-xs tracking-[0.4em] uppercase text-[oklch(0.72_0.12_85)] mb-3">
            Protect Your Art
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold italic text-[oklch(0.92_0.03_80)] mb-4">
            Aftercare
          </h2>
          <div className="gold-rule max-w-xs mx-auto mt-4" />
          <p className="font-body text-[oklch(0.60_0.015_80)] mt-6 max-w-lg mx-auto leading-relaxed">
            A tattoo is only as good as how it heals. Follow these instructions carefully
            and your work will look sharp for decades to come.
          </p>
        </div>

        {/* Care steps */}
        <div ref={stepsRef} className="fade-up grid md:grid-cols-2 gap-6 mb-16">
          {careSteps.map((step, i) => (
            <CareCard key={i} step={step} delay={i * 80} />
          ))}
        </div>

        {/* Do not list */}
        <div ref={doNotRef} className="fade-up max-w-2xl mx-auto">
          <div className="border border-[oklch(0.42_0.18_25/0.3)] bg-[oklch(0.14_0.007_60)] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border border-[oklch(0.42_0.18_25/0.6)] flex items-center justify-center">
                <span className="text-[oklch(0.42_0.18_25)] text-lg">✕</span>
              </div>
              <h3 className="font-display text-2xl italic text-[oklch(0.92_0.03_80)]">
                What to Avoid
              </h3>
            </div>
            <div className="space-y-3">
              {doNots.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.42_0.18_25)] mt-2 shrink-0" />
                  <p className="font-body text-[oklch(0.70_0.015_80)] text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="font-body text-[oklch(0.45_0.010_80)] text-xs text-center mt-6 leading-relaxed">
            If you notice signs of infection (excessive redness, swelling, discharge, or fever),
            consult a medical professional immediately. Touch-up consultations are free — contact
            the studio if you have any concerns about your healing.
          </p>
        </div>
      </div>
    </section>
  );
}

function CareCard({
  step,
  delay,
}: {
  step: { day: string; title: string; icon: string; instructions: string[] };
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
      className="fade-up border border-[oklch(0.72_0.12_85/0.15)] hover:border-[oklch(0.72_0.12_85/0.35)] bg-[oklch(0.14_0.007_60)] p-6 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{step.icon}</span>
        <div>
          <p className="font-label text-[10px] tracking-[0.2em] uppercase text-[oklch(0.72_0.12_85)]">
            {step.day}
          </p>
          <h4 className="font-display text-xl italic text-[oklch(0.92_0.03_80)]">{step.title}</h4>
        </div>
      </div>
      <div className="h-px w-full bg-[oklch(0.72_0.12_85/0.15)] mb-4" />
      <ul className="space-y-2.5">
        {step.instructions.map((instruction, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_85)] mt-2 shrink-0" />
            <p className="font-body text-[oklch(0.68_0.015_80)] text-sm leading-relaxed">
              {instruction}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
