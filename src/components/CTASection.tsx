import { motion } from "framer-motion";
import LeadForm from "./LeadForm";
import avecQuote from "@/assets/avec-quote.png";
import gardenTop from "@/assets/watercolor-garden-top.png";
import borderBottom from "@/assets/watercolor-border-bottom.png";
import bunnyCandle from "@/assets/bunny-candle.png";

const CTASection = () => (
  <section className="relative py-28 overflow-hidden">
    {/* Soft blue-toned background matching the Avec quote image */}
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_40%_93%)] via-[hsl(230_35%_95%)] to-[hsl(200_30%_94%)]" />
    
    {/* Subtle ambient blobs */}
    <div className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full bg-[hsl(220_40%_88%/0.3)] blur-[120px]" />
    <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-[hsl(200_35%_90%/0.4)] blur-[100px]" />


    {/* Bunny decoration */}
    <div className="absolute bottom-8 right-8 opacity-40 w-32 h-32 hidden lg:block">
      <img src={bunnyCandle} alt="" className="w-full h-full object-contain" />
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
          <div className="ornate-border rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_hsl(220_40%_30%/0.2)]">
            <img src={avecQuote} alt="Avec - Magia é o que poucos criam" className="w-full h-auto" />
          </div>
          <div className="absolute inset-0 -z-10 rounded-3xl bg-[hsl(220_50%_70%/0.15)] blur-3xl scale-110" />
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

    {/* Bottom garden border */}
    <div className="absolute bottom-0 left-0 right-0 opacity-60">
      <img src={borderBottom} alt="" className="w-full h-auto" />
    </div>
  </section>
);

export default CTASection;
