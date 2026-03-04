import { motion } from "framer-motion";
import heroImg from "@/assets/hero-easter.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Páscoa aromática" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-white/70 via-cream/50 to-background/90" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block mb-6 px-5 py-2 rounded-full bg-blush/80 backdrop-blur-sm text-secondary-foreground font-elegant text-lg tracking-wider border border-secondary"
          >
            🌸 Coleção de Páscoa 2026
          </motion.span>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-chocolate text-shadow-warm mb-6">
            A Páscoa mais
            <span className="block italic text-gold">aromática</span>
            que você já viveu
          </h1>

          <p className="font-elegant text-xl md:text-2xl text-foreground/80 max-w-xl mx-auto mb-10 leading-relaxed">
            Velas artesanais feitas com amor, que transformam seu lar em um jardim de chocolate e flores.
          </p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToForm}
            className="px-10 py-4 rounded-full bg-chocolate font-display text-lg text-primary-foreground shadow-elevated hover:opacity-90 transition-all"
          >
            Quero garantir minha vela 🕯️
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute bottom-10 left-10 text-4xl animate-float opacity-60">🌷</div>
      <div className="absolute top-20 right-16 text-3xl animate-float opacity-50" style={{ animationDelay: "2s" }}>🥕</div>
      <div className="absolute bottom-32 right-20 text-3xl animate-float opacity-50" style={{ animationDelay: "4s" }}>🍫</div>
    </section>
  );
};

export default HeroSection;
