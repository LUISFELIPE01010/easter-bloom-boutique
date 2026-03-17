import { motion } from "framer-motion";
import watercolorBg from "@/assets/watercolor-garden-cta.png";

const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

const CTASection = () =>
<section className="relative py-16 md:py-24 overflow-hidden">
    {/* Watercolor garden background */}
    <div className="absolute inset-0">
      <img src={watercolorBg} alt="" loading="lazy" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(25_55%_15%/0.55)] via-[hsl(25_40%_20%/0.45)] to-[hsl(30_30%_15%/0.65)]" />
    </div>
    
    {/* Ambient blobs */}
    <div className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full bg-gold/8 blur-[130px]" />
    <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-sage/10 blur-[100px]" />

    <div className="max-w-lg mx-auto px-4 sm:px-6 relative z-10">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center">
      
        <span className="font-elegant text-base tracking-[0.3em] text-cream uppercase">Última chance</span>
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-warm-white mt-3 leading-tight">
          As vagas estão<br />
          <span className="italic">acabando</span>
        </h2>
        <p className="font-elegant text-lg text-cream/70 mt-3">
          Não perca a chance de garantir acesso antecipado, brindes e os melhores preços da coleção de Páscoa.
        </p>

        <motion.button
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        onClick={scrollToForm}
        className="mt-8 px-10 py-4 rounded-full bg-warm-white text-chocolate font-display text-lg tracking-wide shadow-[0_8px_30px_-8px_hsl(25_55%_25%/0.4)] hover:shadow-[0_14px_40px_-8px_hsl(25_55%_25%/0.5)] transition-all duration-300">
        
          Garantir minha vaga 
        </motion.button>
      </motion.div>
    </div>
  </section>;


export default CTASection;