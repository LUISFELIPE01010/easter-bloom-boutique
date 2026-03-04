import { motion } from "framer-motion";
import LeadForm from "./LeadForm";
import avecQuote from "@/assets/avec-quote.png";

const CTASection = () => {
  return (
    <section className="py-24 bg-blush/40 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-lavender/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-sage/30 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-elevated max-w-md mx-auto"
          >
            <img src={avecQuote} alt="Avec - Magia é o que poucos criam" className="w-full h-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate leading-tight mb-4">
              Garanta sua vela <br />
              <span className="italic text-gold">antes que acabe</span>
            </h2>
            <p className="font-elegant text-xl text-foreground/70 mb-10 max-w-md">
              A coleção de Páscoa é limitada. Cadastre-se agora para garantir sua pré-venda com condições exclusivas.
            </p>
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
