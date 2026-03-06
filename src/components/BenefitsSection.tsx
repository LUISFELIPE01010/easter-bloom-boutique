import { motion } from "framer-motion";
import { Crown, Clock, Tag, Gift } from "lucide-react";

const benefits = [
  {
    icon: Crown,
    title: "Acesso Prioritário",
    desc: "Receba os links das promoções antes de todo mundo, direto no seu WhatsApp.",
  },
  {
    icon: Tag,
    title: "Preços Exclusivos",
    desc: "Condições especiais e descontos que só membros VIP têm acesso.",
  },
  {
    icon: Gift,
    title: "Brindes Especiais",
    desc: "Brindes exclusivos para membros do grupo em cada lançamento.",
  },
  {
    icon: Clock,
    title: "Novidades em Primeira Mão",
    desc: "Fique sabendo dos lançamentos e novidades antes de qualquer pessoa.",
  },
];

const BenefitsSection = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-cream/30 to-background" />
    
    <div className="max-w-5xl mx-auto px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="font-elegant text-base tracking-[0.3em] text-gold uppercase">Por que entrar?</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-chocolate mt-3 leading-tight">
          O que você ganha no <span className="italic text-shimmer">Grupo VIP</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="flex gap-4 items-start p-6 rounded-2xl bg-warm-white/50 border border-gold-light/15 hover:shadow-md hover:border-gold-light/30 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl border border-gold-light/30 flex items-center justify-center text-gold shrink-0">
              <b.icon size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-chocolate mb-1">{b.title}</h3>
              <p className="font-body text-chocolate-light/65 leading-relaxed text-[0.95rem]">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
