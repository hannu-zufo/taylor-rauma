/**
 * Navigation — Iron & Tide Tattoo
 * Design: Pacific Northwest Gothic — Dark Coastal Americana
 * Fixed top nav, Oswald font labels, gold accent on active/hover, transparent → solid on scroll
 */
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Work", href: "#portfolio" },
  { label: "Flash", href: "#flash" },
  { label: "About", href: "#about" },
  { label: "Care", href: "#care" },
  { label: "Book", href: "#booking" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.11_0.006_60/0.97)] backdrop-blur-sm border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          className="flex flex-col leading-none group"
        >
          <span
            className="font-display text-xl md:text-2xl font-bold italic text-[oklch(0.72_0.12_85)] tracking-wide group-hover:text-[oklch(0.85_0.14_85)] transition-colors duration-300"
          >
            Iron &amp; Tide
          </span>
          <span className="font-label text-[10px] tracking-[0.3em] text-[oklch(0.60_0.015_80)] uppercase">
            Tattoo · Gastown
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="font-label text-sm tracking-[0.15em] uppercase text-[oklch(0.70_0.015_80)] hover:text-[oklch(0.72_0.12_85)] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={(e) => { e.preventDefault(); handleNavClick("#booking"); }}
            className="font-label text-sm tracking-[0.15em] uppercase px-5 py-2 border border-[oklch(0.72_0.12_85)] text-[oklch(0.72_0.12_85)] hover:bg-[oklch(0.72_0.12_85)] hover:text-[oklch(0.10_0.005_60)] transition-all duration-300"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[oklch(0.72_0.12_85)] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[oklch(0.72_0.12_85)] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[oklch(0.72_0.12_85)] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[oklch(0.11_0.006_60/0.98)] backdrop-blur-sm border-t border-white/10`}
      >
        <nav className="flex flex-col py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="font-label text-sm tracking-[0.15em] uppercase px-6 py-3 text-[oklch(0.70_0.015_80)] hover:text-[oklch(0.72_0.12_85)] hover:bg-white/5 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 pt-2 pb-4">
            <a
              href="#booking"
              onClick={(e) => { e.preventDefault(); handleNavClick("#booking"); }}
              className="block font-label text-sm tracking-[0.15em] uppercase text-center px-5 py-3 border border-[oklch(0.72_0.12_85)] text-[oklch(0.72_0.12_85)] hover:bg-[oklch(0.72_0.12_85)] hover:text-[oklch(0.10_0.005_60)] transition-all duration-300"
            >
              Book Now
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
