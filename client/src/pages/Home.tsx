/**
 * Home — Iron & Tide Tattoo
 * Design: Pacific Northwest Gothic — Dark Coastal Americana
 * Assembles all sections: Hero → Portfolio → Flash → About → Testimonials → Care → Booking → Footer
 */
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import FlashSection from "@/components/FlashSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CareSection from "@/components/CareSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.11_0.006_60)] text-[oklch(0.92_0.03_80)]">
      <Navigation />
      <HeroSection />
      <PortfolioSection />
      <FlashSection />
      <AboutSection />
      <TestimonialsSection />
      <CareSection />
      <BookingSection />
      <Footer />
    </div>
  );
}
