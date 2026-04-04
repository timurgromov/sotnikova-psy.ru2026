import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import PathSection from "@/components/PathSection";
import TherapistAvatar from "@/components/TherapistAvatar";
import BentoSection from "@/components/BentoSection";
import BenefitsSection from "@/components/BenefitsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ServicesSection from "@/components/ServicesSection";
import FaqSection from "@/components/FaqSection";
import PricingSection from "@/components/PricingSection";
import CertificatesSection from "@/components/CertificatesSection";
import AboutSection from "@/components/AboutSection";
import ConfidentialitySection from "@/components/ConfidentialitySection";
import FooterSection from "@/components/FooterSection";
import BookingOverlay from "@/components/BookingOverlay";
import FloatingContact from "@/components/FloatingContact";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleBookClick = () => setBookingOpen(true);

  return (
    <>
      <main>
        <HeroSection onBookClick={handleBookClick} />
        <PathSection />
        <TherapistAvatar />
        <BentoSection />
        <BenefitsSection />
        <ExpertiseSection />
        <ServicesSection onBookClick={handleBookClick} />
        <FaqSection />
        <PricingSection onBookClick={handleBookClick} />
        <CertificatesSection />
        <AboutSection />
        <ConfidentialitySection />
        <FooterSection />
      </main>

      <FloatingContact onBookClick={handleBookClick} />
      <BookingOverlay open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
};

export default Index;
