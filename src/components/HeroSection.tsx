import { motion } from "framer-motion";
import heroImg from "@/assets/hero-easter.jpg";
import botanicalBorder from "@/assets/botanical-border.png";

const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 overlay-warm" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-warm-white/60" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[8%] text-5xl animate-float opacity-40" style={{ animationDelay: "0s" }}>🌷</div>
        <div className="absolute top-[25%] right-[10%] text-4xl animate-float-delayed opacity-35" style={{ animationDelay: "1.5s" }}>🌸</div>
        <div className="absolute bottom-[30%] left-[15%] text-4xl animate-float opacity-30" style={{ animationDelay: "3s" }}>🥕</div>
        <div className="absolute bottom-[25%] right-[12%] text-5xl animate-float-delayed opacity-35" style={{ animationDelay: "2s" }}>🍫</div>
        <div className="absolute top-[40%] left-[5%] text-3xl animate-float opacity-25" style={{ animationDelay: "4s" }}>🐣</div>
        <div className="absolute top-[60%] right-[6%] text-3xl animate-float-delayed opacity-25" style={{ animationDelay: "5s" }}>🌿</div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Ornate badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-6 py-2.5 rounded-full ornate-border bg-warm-white/80 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse-soft" />
            <span className="font-elegant text-lg tracking-[0.2em] text-chocolate-light uppercase">
              Coleção Páscoa 2026 · Edição Limitada
            </span>
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse-soft" />
          </motion.div>

          {/* Main heading */}
          <h1 className="font-display font-black leading-[0.9] mb-8">
            <span className="block text-5xl md:text-7xl lg:text-[5.5rem] text-chocolate">
              Transforme sua Páscoa
            </span>
            <span className="block text-6xl md:text-8xl lg:text-[7rem] italic text-shimmer mt-2">
              em pura magia
            </span>
          </h1>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-light" />
            <span className="text-gold text-xl">✦</span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-light" />
          </div>

          <p className="font-elegant text-xl md:text-2xl lg:text-[1.7rem] text-chocolate-light/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Velas aromáticas artesanais que trazem o aconchego do chocolate, a delicadeza das flores 
            e a alegria da Páscoa para cada cantinho do seu lar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToForm}
              className="btn-glow px-10 py-4.5 rounded-full bg-chocolate text-primary-foreground font-display text-lg tracking-wide shadow-[0_8px_32px_-8px_hsl(25_55%_25%/0.4)] hover:shadow-[0_12px_40px_-8px_hsl(25_55%_25%/0.5)] transition-all duration-300"
            >
              🕯️ Garantir minha Pré-Venda
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.03 }}
              href="#produtos"
              className="px-8 py-4 rounded-full border-2 border-gold-light/50 text-chocolate font-elegant text-lg tracking-wide hover:bg-gold-light/10 transition-all"
            >
              Descobrir os aromas →
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-chocolate-light/50">
            <span className="font-elegant text-sm tracking-widest uppercase">Explore</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-gold-light to-transparent" style={{ animation: "scroll-pulse 2s ease-in-out infinite" }} />
          </div>
        </motion.div>
      </div>

      {/* Bottom botanical border */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <img src={botanicalBorder} alt="" className="w-full h-auto opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;
