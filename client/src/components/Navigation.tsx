/**
 * Navigation — Taylor Rauma Tattoo
 * Design: Clean Minimal — Black & White
 * Fixed top nav, American Purpose wordmark, DM Sans labels, black border on scroll
 */
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Work", href: "#portfolio" },
  { label: "Shop", href: "#shop" },
  { label: "FAQ", href: "#faq" },
  { label: "Book", href: "#booking" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "border-b border-black/10" : ""
      }`}
    >
      <div className="container flex items-center justify-between h-14 md:h-16">
        {/* Wordmark */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          className="font-display text-base md:text-lg tracking-wide text-black hover:opacity-60 transition-opacity duration-200"
        >
          Taylor Rauma
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="font-body text-xs tracking-[0.12em] uppercase text-[#888] hover:text-black transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={(e) => { e.preventDefault(); handleNavClick("#booking"); }}
            className="font-body text-xs tracking-[0.12em] uppercase px-5 py-2 bg-black text-white hover:bg-[#333] transition-colors duration-200"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-5 h-px bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-black/10 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col py-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="font-body text-xs tracking-[0.12em] uppercase px-6 py-3 text-[#888] hover:text-black hover:bg-[#f5f5f5] transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 pt-2 pb-4">
            <a
              href="#booking"
              onClick={(e) => { e.preventDefault(); handleNavClick("#booking"); }}
              className="block font-body text-xs tracking-[0.12em] uppercase text-center px-5 py-3 bg-black text-white hover:bg-[#333] transition-colors duration-200"
            >
              Book Now
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
