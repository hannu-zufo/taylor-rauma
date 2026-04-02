/**
 * Home — Taylor Rauma Tattoo
 * Design: Clean Minimal — Black & White
 * Sections: Hero → Portfolio → About → Shop → FAQ → Booking → Footer
 */
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ShopSection from "@/components/ShopSection";
import FaqSection from "@/components/FaqSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ShopSection />
      <FaqSection />
      <BookingSection />
      <Footer />
    </div>
  );
}
