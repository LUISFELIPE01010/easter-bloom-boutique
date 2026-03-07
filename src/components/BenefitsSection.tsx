import { motion } from "framer-motion";
import { Crown, Clock, Tag, Gift } from "lucide-react";

const benefits = [
  {
    icon: Crown,
    title: "Acesso antes de todo mundo",
    desc: "Receba os links de compra direto no WhatsApp, antes de qualquer pessoa.",
  },
  {
    icon: Tag,
    title: "Descontos que ninguém tem",
    desc: "Preços exclusivos que só quem é VIP consegue. Não rola melhor que isso.",
  },
  {
    icon: Gift,
    title: "Brindes surpresa",
    desc: "Cada lançamento vem com mimos exclusivos para quem é do grupo.",
  },
  {
    icon: Clock,
    title: "Lançamentos em primeira mão",
    desc: "A gente avisa você primeiro. Sem chance de ficar de fora do que é bom.",
  },
];

const BenefitsSection = () => (
  <section className="relative py-24 overflow-hidden">
    {/* Rich warm background */}
    <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80" />
    
    {/* Ambient glows */}
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[150px]" />
    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blush/5 blur-[120px]" />

    <div className="max-w-5xl mx-auto px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="font-elegant text-base tracking-[0.3em] text-primary uppercase">Por que entrar?</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mt-3 leading-tight">
          O que o <span className="italic text-primary">Grupo VIP</span> te dá
        </h2>
        <p className="font-elegant text-lg text-cream/50 mt-3 max-w-lg mx-auto">
          Não é só um grupo. É o seu atalho para os melhores aromas, antes de todo mundo.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="flex gap-4 items-start p-6 rounded-2xl bg-warm-white/5 border border-gold/10 hover:bg-warm-white/10 hover:border-gold/25 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl border border-gold/25 flex items-center justify-center text-gold shrink-0">
              <b.icon size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-cream mb-1">{b.title}</h3>
              <p className="font-body text-cream/50 leading-relaxed text-[0.95rem]">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
