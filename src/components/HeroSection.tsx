import { motion } from "framer-motion";
import heroImg from "@/assets/hero-easter-painting.png";
import avecTextLogo from "@/assets/avec-text-logo.png";

const VIP_LINK = "https://grupovipavec.avecaromas.com/entrar-no-grupo/";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-start md:items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-16 md:pt-28 pb-8 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <h1 className="font-display font-black leading-[1.05] mb-6">
              <img src={avecTextLogo} alt="Avec" className="block h-24 md:h-28 lg:h-36 w-auto mx-auto lg:mx-0" />
              <span className="block text-2xl md:text-3xl lg:text-4xl text-white font-semibold mt-2">
                Aromas que contam
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl italic mt-1 pb-2" style={{ color: '#ECE4D2' }}>
                histórias de Páscoa
              </span>
            </h1>

            <p className="font-elegant text-lg md:text-xl text-white max-w-md mx-auto lg:mx-0 leading-relaxed">
              Velas artesanais feitas com amor. Entre no grupo VIP e seja a primeira a garantir os cheirinhos mais
              desejados!
            </p>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center"
          >
            <div className="rounded-3xl p-8 bg-black/10 backdrop-blur-sm border border-white/10 shadow-2xl text-center max-w-md w-full">
              <h2 className="font-body text-2xl font-bold text-white">Entre para o Grupo VIP</h2>
              <p className="font-body text-base text-white/60 mt-1">
                Receba acesso antecipado e brindes
              </p>
              <motion.a
                href={VIP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block w-full mt-6 py-4 rounded-2xl bg-white/90 text-chocolate font-body text-lg font-semibold tracking-wide shadow-[0_8px_25px_-8px_rgba(0,0,0,0.3)] hover:bg-white transition-all duration-300 text-center"
              >
                Entrar para o Grupo →
              </motion.a>
              <p className="text-center mt-3 font-body text-sm text-white/35">
                Vagas limitadas · Acesse agora
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
