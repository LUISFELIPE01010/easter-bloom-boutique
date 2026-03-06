import { motion } from "framer-motion";
import heroImg from "@/assets/hero-watercolor.jpg";
import LeadForm from "./LeadForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-white/80 via-warm-white/50 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-gold-light/30 bg-warm-white/70 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="font-elegant text-base tracking-[0.15em] text-chocolate-light uppercase">
                Páscoa 2026 · Grupo VIP
              </span>
            </motion.div>

            <h1 className="font-display font-black leading-[1.1] mb-6">
              <span className="block text-4xl md:text-5xl lg:text-6xl text-chocolate">
                Garanta acesso
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl italic text-shimmer mt-1 pb-2">
                prioritário
              </span>
            </h1>

            <p className="font-elegant text-lg md:text-xl text-chocolate-light/70 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Entre para o nosso grupo VIP e receba em primeira mão os lançamentos exclusivos da coleção de Páscoa, com condições especiais.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
              {["100% Gratuito", "Sem compromisso", "Vagas limitadas"].map((item) => (
                <span key={item} className="px-4 py-1.5 rounded-full bg-warm-white/60 border border-gold-light/20 font-elegant text-sm text-chocolate-light tracking-wide">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-card rounded-3xl p-8 shadow-[0_20px_60px_-15px_hsl(25_55%_25%/0.12)]">
              <div className="text-center mb-6">
                <h2 className="font-display text-2xl font-bold text-chocolate">Entre para o Grupo VIP</h2>
                <p className="font-elegant text-base text-chocolate-light/60 mt-1">Receba o link de acesso prioritário</p>
              </div>
              <LeadForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
