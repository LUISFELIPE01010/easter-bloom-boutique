import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import SocialProof from "@/components/SocialProof";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CountdownTimer />
      <HeroSection />
      <ProductsSection />
      <SocialProof />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
