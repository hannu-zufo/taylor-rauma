/**
 * Footer — Taylor Rauma Tattoo
 * Design: Clean Minimal — Black & White
 * Minimal footer with wordmark, nav links, social, and legal
 */

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-black/8 bg-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl text-black mb-2">Taylor Rauma</p>
            <p className="section-label mb-6">Traditional Tattooing · Vancouver, BC</p>
            <p className="font-body text-xs text-[#aaa] leading-relaxed font-light max-w-[200px]">
              Bold lines, solid colour, designs built to last a lifetime.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/taylorrauma/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 border border-black/12 flex items-center justify-center text-[#aaa] hover:border-black hover:text-black transition-all duration-200"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="mailto:hello@taylorrauma.com"
                aria-label="Email"
                className="w-8 h-8 border border-black/12 flex items-center justify-center text-[#aaa] hover:border-black hover:text-black transition-all duration-200"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <polyline points="22,4 12,13 2,4"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label mb-5">Navigate</p>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Portfolio", href: "#portfolio" },
                { label: "About", href: "#about" },
                { label: "Shop", href: "#shop" },
                { label: "FAQ", href: "#faq" },
                { label: "Book a Session", href: "#booking" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="font-body text-xs text-[#aaa] hover:text-black transition-colors duration-200 font-light"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-5">Visit</p>
            <div className="space-y-4 text-xs">
              <div>
                <p className="section-label mb-1.5">Address</p>
                <p className="font-body text-[#666] font-light leading-relaxed">
                  312 Water Street<br />
                  Vancouver, BC<br />
                  V6B 1B6
                </p>
              </div>
              <div>
                <p className="section-label mb-1.5">Hours</p>
                <p className="font-body text-[#666] font-light">
                  Tuesday – Saturday<br />
                  12:00 PM – 8:00 PM
                </p>
              </div>
              <div>
                <p className="section-label mb-1.5">Contact</p>
                <a href="mailto:hello@taylorrauma.com" className="font-body text-[#666] font-light block hover:text-black transition-colors">
                  hello@taylorrauma.com
                </a>
                <a href="tel:+16045550182" className="font-body text-[#666] font-light block hover:text-black transition-colors">
                  +1 (604) 555-0182
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/8">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-[10px] text-[#ccc] font-light">
            © {new Date().getFullYear()} Taylor Rauma Tattoo. All rights reserved.
          </p>
          <p className="font-body text-[10px] text-[#ccc] font-light">
            Vancouver, BC · Traditional American Tattooing
          </p>
        </div>
      </div>
    </footer>
  );
}
