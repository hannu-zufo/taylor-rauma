/**
 * Footer — Iron & Tide Tattoo
 * Design: Pacific Northwest Gothic — Dark Coastal Americana
 * Dark footer with logo, links, social, and legal
 */

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.09_0.005_60)] border-t border-[oklch(1_0_0/0.08)]">
      {/* Main footer content */}
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="font-display text-2xl font-bold italic text-[oklch(0.72_0.12_85)]">
                Iron &amp; Tide
              </span>
              <p className="font-label text-[10px] tracking-[0.3em] uppercase text-[oklch(0.50_0.010_80)] mt-0.5">
                Tattoo · Gastown · Vancouver
              </p>
            </div>
            <p className="font-body text-sm text-[oklch(0.55_0.012_80)] leading-relaxed max-w-xs">
              Traditional American tattooing in the heart of Gastown. Bold lines,
              solid colour, and designs built to last a lifetime.
            </p>
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 border border-[oklch(1_0_0/0.12)] flex items-center justify-center text-[oklch(0.55_0.012_80)] hover:border-[oklch(0.72_0.12_85)] hover:text-[oklch(0.72_0.12_85)] transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="mailto:info@irontide.ca"
                aria-label="Email"
                className="w-9 h-9 border border-[oklch(1_0_0/0.12)] flex items-center justify-center text-[oklch(0.55_0.012_80)] hover:border-[oklch(0.72_0.12_85)] hover:text-[oklch(0.72_0.12_85)] transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <polyline points="22,4 12,13 2,4"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-label text-[10px] tracking-[0.25em] uppercase text-[oklch(0.72_0.12_85)] mb-5">
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Portfolio", href: "#portfolio" },
                { label: "Flash Designs", href: "#flash" },
                { label: "About", href: "#about" },
                { label: "Aftercare", href: "#care" },
                { label: "Book a Session", href: "#booking" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="font-body text-sm text-[oklch(0.55_0.012_80)] hover:text-[oklch(0.72_0.12_85)] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-label text-[10px] tracking-[0.25em] uppercase text-[oklch(0.72_0.12_85)] mb-5">
              Visit
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-label text-[10px] tracking-[0.15em] uppercase text-[oklch(0.45_0.010_80)] mb-1">Address</p>
                <p className="font-body text-sm text-[oklch(0.55_0.012_80)] leading-relaxed">
                  312 Water Street<br />
                  Gastown, Vancouver, BC<br />
                  V6B 1B6
                </p>
              </div>
              <div>
                <p className="font-label text-[10px] tracking-[0.15em] uppercase text-[oklch(0.45_0.010_80)] mb-1">Hours</p>
                <p className="font-body text-sm text-[oklch(0.55_0.012_80)]">
                  Tuesday – Saturday<br />
                  12:00 PM – 8:00 PM
                </p>
              </div>
              <div>
                <p className="font-label text-[10px] tracking-[0.15em] uppercase text-[oklch(0.45_0.010_80)] mb-1">Contact</p>
                <a href="mailto:info@irontide.ca" className="font-body text-sm text-[oklch(0.55_0.012_80)] hover:text-[oklch(0.72_0.12_85)] transition-colors block">
                  info@irontide.ca
                </a>
                <a href="tel:+16045550182" className="font-body text-sm text-[oklch(0.55_0.012_80)] hover:text-[oklch(0.72_0.12_85)] transition-colors block">
                  +1 (604) 555-0182
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[oklch(1_0_0/0.06)]">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-[oklch(0.40_0.008_80)]">
            © {new Date().getFullYear()} Iron &amp; Tide Tattoo. All rights reserved.
          </p>
          <p className="font-body text-xs text-[oklch(0.35_0.007_80)]">
            Gastown, Vancouver · Traditional American Tattooing
          </p>
        </div>
      </div>
    </footer>
  );
}
