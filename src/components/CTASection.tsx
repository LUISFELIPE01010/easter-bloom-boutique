import { motion } from "framer-motion";
import LeadForm from "./LeadForm";
import avecQuote from "@/assets/avec-quote.png";
import botanicalBorder from "@/assets/botanical-border.png";

const CTASection = () => (
  <section className="relative py-28 overflow-hidden">
    {/* Rich background */}
    <div className="absolute inset-0 bg-gradient-to-br from-blush/50 via-lavender/30 to-sage/30" />
    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blush/30 blur-[120px]" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-sage/25 blur-[100px]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-lavender/20 blur-[150px]" />

    {/* Top botanical */}
    <div className="absolute top-0 left-0 right-0 opacity-50 rotate-180">
      <img src={botanicalBorder} alt="" className="w-full h-auto" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-md mx-auto lg:mx-0"
        >
          <div className="ornate-border rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_hsl(25_55%_25%/0.3)]">
            <img src={avecQuote} alt="Avec - Magia é o que poucos criam" className="w-full h-auto" />
          </div>
          {/* Glow behind */}
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gold/10 blur-3xl scale-110" />
        </motion.div>

        {/* Form side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center lg:text-left mb-10">
            <span className="font-elegant text-base tracking-[0.3em] text-gold uppercase">Últimas vagas</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-chocolate mt-4 leading-[1.1]">
              Garanta sua vela <br />
              <span className="italic text-shimmer">antes que acabe</span>
            </h2>
            <p className="font-elegant text-xl text-chocolate-light/60 mt-5 max-w-md">
              A coleção de Páscoa é limitada e exclusiva. Cadastre-se agora para condições especiais de pré-venda.
            </p>
          </div>
          <LeadForm />
        </motion.div>
      </div>
    </div>

    {/* Bottom botanical */}
    <div className="absolute bottom-0 left-0 right-0 opacity-50">
      <img src={botanicalBorder} alt="" className="w-full h-auto" />
    </div>
  </section>
);

export default CTASection;
