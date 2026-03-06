import { motion } from "framer-motion";
import LeadForm from "./LeadForm";
import watercolorBg from "@/assets/watercolor-garden-cta.jpg";

const CTASection = () => (
  <section className="relative py-24 overflow-hidden">
    {/* Watercolor garden background */}
    <div className="absolute inset-0">
      <img src={watercolorBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(25_55%_15%/0.55)] via-[hsl(25_40%_20%/0.45)] to-[hsl(30_30%_15%/0.65)]" />
    </div>
    
    {/* Ambient blobs */}
    <div className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full bg-gold/8 blur-[130px]" />
    <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-sage/10 blur-[100px]" />

    <div className="max-w-lg mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <span className="font-elegant text-base tracking-[0.3em] text-chocolate-light uppercase">Última chance</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-chocolate mt-3 leading-tight">
          As vagas estão<br />
          <span className="italic text-shimmer">acabando</span>
        </h2>
        <p className="font-elegant text-lg text-chocolate-light/60 mt-3">
          Não perca a chance de garantir acesso antecipado, brindes e os melhores preços da coleção de Páscoa.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="bg-warm-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gold-light/20 shadow-[0_20px_60px_-20px_hsl(25_55%_25%/0.12)]"
      >
        <LeadForm id="lead-form-bottom" />
      </motion.div>
    </div>
  </section>
);

export default CTASection;
