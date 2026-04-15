/**
 * BookingSection — Taylor Rauma Tattoo
 * Design: Clean Minimal — Black & White
 * Clean contact/booking request form — wired to tRPC booking.submit
 */
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/taylogo_ef859444.jpeg";

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

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  type: "custom",
  placement: "",
  size: "",
  description: "",
  budget: "",
};

export default function BookingSection() {
  const headerRef = useFadeUp();
  const formRef = useFadeUp(100);
  const infoRef = useFadeUp(60);

  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = trpc.booking.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setForm(EMPTY_FORM);
    },
    onError: (err) => {
      toast.error("Something went wrong. Please try again or email taylorraumatattoo@gmail.com directly.");
      console.error("[Booking] Submit error:", err);
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate({
      name: form.name,
      email: form.email,
      phone: form.phone || undefined,
      placement: form.placement || undefined,
      size: form.size || undefined,
      description: form.description,
      availability: form.budget ? `Budget: ${form.budget}` : undefined,
    });
  };

  return (
    <section id="booking" className="border-t border-black/8">
      <div className="grid md:grid-cols-2 min-h-[70vh]">
        {/* Left — info panel */}
        <div ref={infoRef} className="fade-up flex flex-col justify-center px-8 md:px-12 lg:px-16 py-20 bg-black text-white">
          <p className="section-label mb-6 text-white/40">Get Tattooed</p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-8 leading-tight">
            Book a<br />Session
          </h2>
          <div className="w-8 h-px bg-white/30 mb-8" />

          <p className="font-body text-sm text-white/60 leading-relaxed mb-8 font-light max-w-xs">
            Fill out the form and Taylor will get back to you within 3–5 business days.
            The more detail you provide, the better.
          </p>

          <div className="space-y-6 text-sm">
            {[
              { label: "Custom work", value: "By appointment only — deposit required" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <p className="font-body text-white/30 font-light w-28 shrink-0 text-xs tracking-wide uppercase">{item.label}</p>
                <p className="font-body text-white/70 font-light">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form or confirmation */}
        <div ref={formRef} className="fade-up flex flex-col justify-center px-8 md:px-12 lg:px-16 py-20 border-l border-black/8">
          {submitted ? (
            <div className="max-w-md flex flex-col items-start gap-8">
              <img
                src={LOGO_URL}
                alt="Taylor Rauma Tattoo"
                className="w-24 h-24 object-contain"
              />
              <div>
                <h3 className="font-display text-3xl md:text-4xl text-black mb-4 leading-tight">
                  Request Received
                </h3>
                <div className="w-8 h-px bg-black/20 mb-6" />
                <p className="font-body text-sm text-[#555] leading-relaxed mb-6 font-light">
                  Thanks for reaching out. Taylor will review your request and get back to you within 3–5 business days.
                </p>
                <p className="font-body text-[11px] text-[#aaa] tracking-wide uppercase">
                  taylorraumatattoo@gmail.com
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="font-body text-[10px] tracking-[0.2em] uppercase border-b border-black/30 pb-0.5 hover:border-black transition-colors duration-200"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
            {/* Name + Email */}
            <div className="grid grid-cols-2 gap-4">
              <Field label="Name" name="name" type="text" value={form.name} onChange={handleChange} required placeholder="Your name" />
              <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@email.com" />
            </div>

            {/* Phone + Type */}
            <div className="grid grid-cols-2 gap-4">
              <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Optional" />
              <div>
                <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-[#888] mb-2">
                  Type
                </label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full border-b border-black/20 bg-transparent text-[#333] font-body text-sm py-2.5 focus:outline-none focus:border-black transition-colors duration-200 appearance-none"
                >
                  <option value="custom">Custom</option>
                  <option value="flash">Flash</option>
                  <option value="coverup">Cover-Up</option>
                  <option value="touchup">Touch-Up</option>
                </select>
              </div>
            </div>

            {/* Placement + Size */}
            <div className="grid grid-cols-2 gap-4">
              <Field label="Placement" name="placement" type="text" value={form.placement} onChange={handleChange} required placeholder="e.g. Left forearm" />
              <Field label="Size" name="size" type="text" value={form.size} onChange={handleChange} placeholder="e.g. 4 inches" />
            </div>

            {/* Description */}
            <div>
              <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-[#888] mb-2">
                Description <span className="text-black">*</span>
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Describe your idea — subject matter, references, anything relevant..."
                className="w-full border-b border-black/20 bg-transparent text-[#333] font-body text-sm py-2.5 focus:outline-none focus:border-black transition-colors duration-200 resize-none placeholder:text-[#ccc]"
              />
            </div>

            {/* Budget */}
            <Field label="Budget (CAD)" name="budget" type="text" value={form.budget} onChange={handleChange} placeholder="e.g. $300–$500" />

            {/* Submit */}
            <button
              type="submit"
              disabled={submitMutation.isPending}
              className="w-full font-body text-xs tracking-[0.15em] uppercase py-4 bg-black text-white hover:bg-[#222] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 mt-2"
            >
              {submitMutation.isPending ? "Sending…" : "Send Request"}
            </button>

            <p className="font-body text-[10px] text-[#bbb] leading-relaxed">
              Submitting this form does not guarantee an appointment.
              Taylor reviews all requests and will reach out to discuss your project.
            </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type, value, onChange, required, placeholder,
}: {
  label: string; name: string; type: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean; placeholder?: string;
}) {
  return (
    <div>
      <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-[#888] mb-2">
        {label} {required && <span className="text-black">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full border-b border-black/20 bg-transparent text-[#333] font-body text-sm py-2.5 focus:outline-none focus:border-black transition-colors duration-200 placeholder:text-[#ccc]"
      />
    </div>
  );
}
