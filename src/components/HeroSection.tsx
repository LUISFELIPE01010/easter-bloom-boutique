import { motion } from "framer-motion";
import heroImg from "@/assets/hero-watercolor.jpg";
import avecLogo from "@/assets/avec-logo-new.png";
import LeadForm from "./LeadForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(25_55%_18%/0.55)] via-[hsl(25_40%_20%/0.4)] to-[hsl(30_30%_15%/0.7)]" />
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
              className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-gold/30 bg-[hsl(38_50%_98%/0.15)] backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-soft" />
              <span className="font-elegant text-base tracking-[0.15em] text-cream uppercase">
                Edição Limitada · Páscoa 2026
              </span>
            </motion.div>

            <h1 className="font-display font-black leading-[1.05] mb-6">
              <img src={avecLogo} alt="Avec" className="h-32 md:h-44 lg:h-56 w-auto drop-shadow-lg mt-4 lg:-ml-2" />
              <span className="block text-3xl md:text-4xl lg:text-5xl text-cream/90 font-semibold mt-2">
                Aromas que contam
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl italic text-gold mt-1 pb-2">
                histórias de Páscoa
              </span>
            </h1>

            <p className="font-elegant text-lg md:text-xl text-cream/70 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Velas artesanais feitas com amor. Entre no grupo VIP e seja a primeira a garantir 
              os cheirinhos mais desejados — com preço especial e brindes exclusivos.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
              {["100% Gratuito", "Sem compromisso", "Vagas limitadas"].map((item) => (
                <span key={item} className="px-4 py-1.5 rounded-full bg-warm-white/10 border border-gold/20 font-elegant text-sm text-cream/80 tracking-wide backdrop-blur-sm">
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
            <div className="rounded-3xl p-8 bg-warm-white/95 backdrop-blur-lg shadow-[0_25px_80px_-15px_hsl(25_55%_15%/0.4)] border border-gold-light/20">
              <div className="text-center mb-6">
                <h2 className="font-display text-2xl font-bold text-chocolate">Entre para o Grupo VIP</h2>
                <p className="font-elegant text-base text-chocolate-light/60 mt-1">Receba acesso antecipado e brindes</p>
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
