/**
 * FaqSection — Taylor Rauma Tattoo
 * Design: Clean Minimal — Black & White
 * Full-width accordion FAQ, clean typographic layout
 */
import { useEffect, useRef, useState } from "react";

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

const faqs = [
  {
    q: "How do I book a custom tattoo?",
    a: "Fill out the booking request form on this page with as much detail as possible — subject matter, size, placement, and any reference images. Taylor reviews all requests and responds within 3–5 business days. Custom projects require a non-refundable deposit to secure your appointment.",
  },
  {
    q: "How should I prepare for my appointment?",
    a: "Eat a full meal beforehand, stay hydrated, and wear comfortable clothing that allows easy access to the area being tattooed. Avoid alcohol for 24 hours before your session.",
  },
  {
    q: "What is the aftercare process?",
    a: "After your session, Taylor will bandage the tattoo and go over aftercare with you. Keep it clean, moisturise with unscented lotion, avoid soaking, and stay out of direct sun while healing.",
  },
  {
    q: "Do you do cover-ups?",
    a: "Cover-ups are evaluated case by case. Send a clear photo of the existing tattoo with your booking request. Not all tattoos are suitable for cover-up in the traditional style — Taylor will be honest with you about what's achievable.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "Cash and e-transfer are accepted. Deposits are non-refundable but transferable to a rescheduled appointment with 48 hours notice.",
  },
  {
    q: "Can I bring a friend to my appointment?",
    a: "The studio is a private, focused space. We ask that clients come alone to their appointments. This helps Taylor concentrate and keeps the environment calm and comfortable for you.",
  },
];

export default function FaqSection() {
  const headerRef = useFadeUp();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12 md:py-16 border-t border-black/8">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="fade-up flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="section-label mb-3">Questions</p>
            <h2 className="font-display text-5xl md:text-6xl text-black">FAQ</h2>
          </div>
          <p className="font-body text-sm text-[#888] max-w-xs leading-relaxed font-light">
            Can't find your answer here? Send a message via the booking form.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              delay={i * 40}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
  delay,
}: {
  faq: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
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
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="fade-up border-b border-black/8">
      <button
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        onClick={onToggle}
      >
        <div className="flex items-start gap-5">
          <span className="font-body text-[10px] text-[#ccc] mt-1 w-5 shrink-0 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-body text-sm text-black group-hover:text-[#555] transition-colors duration-200 leading-snug">
            {faq.q}
          </span>
        </div>
        <span
          className={`text-black text-xl leading-none shrink-0 mt-0.5 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ${
          isOpen ? "max-h-48 pb-6" : "max-h-0"
        }`}
      >
        <p className="font-body text-sm text-[#666] leading-relaxed font-light pl-10">
          {faq.a}
        </p>
      </div>
    </div>
  );
}
