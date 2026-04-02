/**
 * BookingSection — Iron & Tide Tattoo
 * Design: Pacific Northwest Gothic — Dark Coastal Americana
 * Booking inquiry form with FAQ accordion
 */
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

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
    a: "Fill out the inquiry form below with as much detail as possible about your idea — subject matter, size, placement, and any reference images. Marlowe reviews all inquiries and responds within 3–5 business days. Custom projects require a non-refundable deposit to secure your appointment.",
  },
  {
    q: "What is your minimum charge?",
    a: "The studio minimum is $100 CAD. Flash designs start at $120 depending on size. Custom work is quoted based on size, complexity, and placement. All pricing is discussed before any commitment is made.",
  },
  {
    q: "Do you do walk-ins?",
    a: "Yes — walk-ins are welcome for flash designs during studio hours (Tuesday through Saturday, 12–8 PM). For custom work, an appointment is required. Call ahead to confirm availability.",
  },
  {
    q: "How should I prepare for my appointment?",
    a: "Eat a full meal beforehand, stay hydrated, and wear comfortable clothing that allows easy access to the area being tattooed. Avoid alcohol for 24 hours before your session. If you're nervous, that's completely normal — we'll talk you through everything.",
  },
  {
    q: "Do you do cover-ups?",
    a: "Cover-ups are evaluated case by case. Send a clear photo of the existing tattoo with your inquiry. Not all tattoos are suitable for cover-up in the traditional style — Marlowe will be honest with you about what's achievable.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "Cash is preferred. E-transfer and major credit cards are accepted. A 3% processing fee applies to card payments. Deposits are non-refundable but transferable to a rescheduled appointment with 48 hours notice.",
  },
];

export default function BookingSection() {
  const headerRef = useFadeUp();
  const formRef = useFadeUp(100);
  const faqRef = useFadeUp(150);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    placement: "",
    size: "",
    style: "flash",
    description: "",
    budget: "",
    referral: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Inquiry sent! Marlowe will be in touch within 3–5 business days.", {
        duration: 5000,
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        placement: "",
        size: "",
        style: "flash",
        description: "",
        budget: "",
        referral: "",
      });
    }, 1200);
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-[oklch(0.11_0.006_60)]">
      <div className="container">
        {/* Section header */}
        <div ref={headerRef} className="fade-up text-center mb-16">
          <p className="font-label text-xs tracking-[0.4em] uppercase text-[oklch(0.72_0.12_85)] mb-3">
            Get Tattooed
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold italic text-[oklch(0.92_0.03_80)] mb-4">
            Book a Session
          </h2>
          <div className="gold-rule max-w-xs mx-auto mt-4" />
          <p className="font-body text-[oklch(0.60_0.015_80)] mt-6 max-w-lg mx-auto leading-relaxed">
            Ready to get tattooed? Fill out the form below and Marlowe will get back to you
            within a few days. The more detail you provide, the better.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Booking form — 3 cols */}
          <div ref={formRef} className="fade-up lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <FormField
                  label="Full Name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone + Style */}
              <div className="grid sm:grid-cols-2 gap-5">
                <FormField
                  label="Phone (optional)"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 (604) 555-0000"
                />
                <div>
                  <label className="block font-label text-[10px] tracking-[0.2em] uppercase text-[oklch(0.60_0.015_80)] mb-2">
                    Type of Work
                  </label>
                  <select
                    name="style"
                    value={form.style}
                    onChange={handleChange}
                    className="w-full bg-[oklch(0.14_0.007_60)] border border-[oklch(1_0_0/0.12)] text-[oklch(0.80_0.020_80)] font-body text-sm px-4 py-3 focus:outline-none focus:border-[oklch(0.72_0.12_85)] transition-colors duration-200"
                  >
                    <option value="flash">Flash Design</option>
                    <option value="custom">Custom Piece</option>
                    <option value="coverup">Cover-Up</option>
                    <option value="touchup">Touch-Up</option>
                  </select>
                </div>
              </div>

              {/* Placement + Size */}
              <div className="grid sm:grid-cols-2 gap-5">
                <FormField
                  label="Placement"
                  name="placement"
                  type="text"
                  value={form.placement}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Left forearm"
                />
                <FormField
                  label="Approximate Size"
                  name="size"
                  type="text"
                  value={form.size}
                  onChange={handleChange}
                  placeholder="e.g. 4 inches wide"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block font-label text-[10px] tracking-[0.2em] uppercase text-[oklch(0.60_0.015_80)] mb-2">
                  Describe Your Idea <span className="text-[oklch(0.72_0.12_85)]">*</span>
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell Marlowe about your idea — subject matter, style references, any images you have in mind, and anything else that might help..."
                  className="w-full bg-[oklch(0.14_0.007_60)] border border-[oklch(1_0_0/0.12)] text-[oklch(0.80_0.020_80)] font-body text-sm px-4 py-3 focus:outline-none focus:border-[oklch(0.72_0.12_85)] transition-colors duration-200 resize-none placeholder:text-[oklch(0.40_0.008_80)]"
                />
              </div>

              {/* Budget + Referral */}
              <div className="grid sm:grid-cols-2 gap-5">
                <FormField
                  label="Budget (CAD)"
                  name="budget"
                  type="text"
                  value={form.budget}
                  onChange={handleChange}
                  placeholder="e.g. $300–$500"
                />
                <FormField
                  label="How did you hear about us?"
                  name="referral"
                  type="text"
                  value={form.referral}
                  onChange={handleChange}
                  placeholder="Instagram, word of mouth..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full font-label text-sm tracking-[0.2em] uppercase py-4 bg-[oklch(0.72_0.12_85)] text-[oklch(0.10_0.005_60)] hover:bg-[oklch(0.80_0.14_85)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 mt-2"
              >
                {submitting ? "Sending..." : "Send Inquiry"}
              </button>

              <p className="font-body text-[oklch(0.45_0.010_80)] text-xs text-center leading-relaxed">
                Submitting this form does not guarantee an appointment. Marlowe reviews all
                inquiries and will reach out to discuss your project before any commitment is made.
              </p>
            </form>
          </div>

          {/* FAQ — 2 cols */}
          <div ref={faqRef} className="fade-up lg:col-span-2">
            <h3 className="font-display text-2xl italic text-[oklch(0.92_0.03_80)] mb-6">
              Frequently Asked
            </h3>
            <div className="h-px w-12 bg-[oklch(0.72_0.12_85)] mb-8" />
            <div className="space-y-1">
              {faqs.map((faq, i) => (
                <FaqItem key={i} faq={faq} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type,
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block font-label text-[10px] tracking-[0.2em] uppercase text-[oklch(0.60_0.015_80)] mb-2">
        {label} {required && <span className="text-[oklch(0.72_0.12_85)]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-[oklch(0.14_0.007_60)] border border-[oklch(1_0_0/0.12)] text-[oklch(0.80_0.020_80)] font-body text-sm px-4 py-3 focus:outline-none focus:border-[oklch(0.72_0.12_85)] transition-colors duration-200 placeholder:text-[oklch(0.40_0.008_80)]"
      />
    </div>
  );
}

function FaqItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[oklch(1_0_0/0.08)]">
      <button
        className="w-full text-left py-4 flex items-start justify-between gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-body text-sm text-[oklch(0.80_0.020_80)] group-hover:text-[oklch(0.92_0.03_80)] transition-colors duration-200 leading-snug">
          {faq.q}
        </span>
        <span
          className={`text-[oklch(0.72_0.12_85)] text-lg leading-none shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ${open ? "max-h-64 pb-4" : "max-h-0"}`}
      >
        <p className="font-body text-sm text-[oklch(0.65_0.015_80)] leading-relaxed">
          {faq.a}
        </p>
      </div>
    </div>
  );
}
