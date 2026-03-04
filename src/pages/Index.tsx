import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductsSection from "@/components/ProductsSection";
import EventSection from "@/components/EventSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SocialProof from "@/components/SocialProof";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <BenefitsSection />
      <ProductsSection />
      <EventSection />
      <HowItWorksSection />
      <SocialProof />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
