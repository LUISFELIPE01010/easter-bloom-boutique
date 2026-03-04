import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import EventSection from "@/components/EventSection";
import SocialProof from "@/components/SocialProof";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProductsSection />
      <EventSection />
      <SocialProof />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
