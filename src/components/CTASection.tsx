import { motion } from "framer-motion";
import LeadForm from "./LeadForm";

const scrollToTop = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

const CTASection = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-cream/50 via-blush/20 to-lavender/20" />
    
    <div className="absolute top-20 right-20 w-[350px] h-[350px] rounded-full bg-sage/10 blur-[100px]" />
    <div className="absolute bottom-10 left-10 w-[250px] h-[250px] rounded-full bg-blush/15 blur-[80px]" />

    <div className="max-w-lg mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <span className="font-elegant text-base tracking-[0.3em] text-gold uppercase">Última chance</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-chocolate mt-3 leading-tight">
          Não fique de fora do<br />
          <span className="italic text-shimmer">Grupo VIP</span>
        </h2>
        <p className="font-elegant text-lg text-chocolate-light/60 mt-3">
          Cadastre-se agora e receba o acesso prioritário à coleção de Páscoa.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        <LeadForm id="lead-form-bottom" />
      </motion.div>
    </div>
  </section>
);

export default CTASection;
