import { motion } from "framer-motion";
import { Flame, Leaf, Diamond, Gift } from "lucide-react";

const benefits = [
  { icon: Flame, value: "40h+", label: "de queima por vela", desc: "Duração premium que preenche seu lar por semanas" },
  { icon: Leaf, value: "100%", label: "cera vegetal", desc: "Sustentável, sem parafina, sem toxinas" },
  { icon: Diamond, value: "3", label: "formatos disponíveis", desc: "Vela, Home Spray e Drops — escolha o seu" },
  { icon: Gift, value: "∞", label: "momentos especiais", desc: "Presente perfeito para quem você ama" },
];

const BenefitsSection = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-cream/30 to-background" />

    <div className="max-w-6xl mx-auto px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="font-elegant text-base tracking-[0.3em] text-gold uppercase">Por que Avec?</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate mt-4">
          Cada detalhe <span className="italic">importa</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group rounded-3xl p-7 text-center bg-warm-white/60 border border-gold-light/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl border border-gold-light/30 flex items-center justify-center text-gold">
              <b.icon size={26} strokeWidth={1.5} />
            </div>
            <p className="font-display text-3xl font-bold text-shimmer mb-1">{b.value}</p>
            <p className="font-display text-sm font-semibold text-chocolate uppercase tracking-wider mb-3">{b.label}</p>
            <p className="font-body text-sm text-chocolate-light/65 leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
