import { motion } from "framer-motion";
import heroImg from "@/assets/hero-watercolor.jpg";
import avecTextLogo from "@/assets/avec-text-logo.png";
import LeadForm from "./LeadForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-start lg:items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover object-[center_20%] lg:object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(25_55%_18%/0.55)] via-[hsl(25_40%_20%/0.4)] to-[hsl(30_30%_15%/0.7)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-8 lg:pt-28 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left">
            
            {/* Badge */}
            









            

            <h1 className="font-display font-black leading-[1.05] mb-3 lg:mb-6">
              <img src={avecTextLogo} alt="Avec" className="block h-16 md:h-24 lg:h-36 w-auto" />
              <span className="block text-2xl md:text-4xl lg:text-5xl text-cream/90 font-semibold mt-2">
                Aromas que contam
              </span>
              <span className="block text-2xl md:text-4xl lg:text-5xl italic text-shimmer mt-1 pb-2">
                histórias de Páscoa
              </span>
            </h1>

            <p className="font-elegant text-base md:text-xl text-cream/70 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Velas artesanais feitas com amor. Entre no grupo VIP e seja a primeira a garantir os cheirinhos mais desejados!
            
            </p>

            {/* Trust signals */}
            








            
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
            
            <div className="rounded-3xl p-8 bg-warm-white/95 backdrop-blur-lg shadow-[0_25px_80px_-15px_hsl(25_55%_15%/0.4)] border border-gold-light/20">
              <div className="text-center mb-6">
                <h2 className="font-display text-2xl font-bold text-chocolate">Entre para o Grupo VIP</h2>
                <p className="font-elegant text-base text-chocolate-light/60 mt-1">
                  Receba acesso antecipado e brindes
                </p>
              </div>
              <LeadForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default HeroSection;