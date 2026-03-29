import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ProductsSection from "@/components/ProductsSection";

const SocialProof = lazy(() => import("@/components/SocialProof"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <IntroSection />
      <ProductsSection />
      <Suspense fallback={null}>
        <SocialProof />
        <FAQSection />
        <CTASection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
