import { motion } from "framer-motion";

const benefits = [
  { icon: "🔥", value: "40h+", label: "de queima por vela", desc: "Duração premium que preenche seu lar por semanas" },
  { icon: "🌱", value: "100%", label: "cera vegetal", desc: "Sustentável, sem parafina, sem toxinas" },
  { icon: "💎", value: "3", label: "formatos disponíveis", desc: "Vela, Home Spray e Drops — escolha o seu" },
  { icon: "🎀", value: "∞", label: "momentos especiais", desc: "Presente perfeito para quem você ama" },
];

const BenefitsSection = () => (
  <section className="relative py-24 bg-cream overflow-hidden">
    <div className="absolute inset-0 opacity-[0.02]"
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zM0 22v2h20v-2H0zm0 4v2h20v-2H0zm0 4v2h20v-2H0zm0 4v2h20v-2H0zm0 4v2h20v-2H0z' fill='%23876a3e' fill-opacity='0.4'/%3E%3C/svg%3E")` }}
    />

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
            className="group glass-card rounded-2xl p-7 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-4xl mb-4">{b.icon}</div>
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
