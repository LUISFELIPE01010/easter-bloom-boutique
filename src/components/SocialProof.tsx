import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Tiago M.",
    badge: "+50 Produtos",
    text: "Eu encontrei Avec por acaso. Comprei uma vela e um home spray e desde então fui fisgado. Produtos incríveis!",
  },
  {
    name: "Maria Eduarda",
    badge: "+150 Produtos",
    text: "Sou alucinada na Avec! Me faltam elogios pra expressar de fato o quão incrível é essa marca.",
  },
  {
    name: "Carolina S.",
    badge: "Cliente VIP",
    text: "Entrar para o grupo VIP foi a melhor decisão. Sempre fico sabendo antes e garanto os melhores aromas!",
  },
];

const SocialProof = () => (
  <section id="depoimentos" className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-sage/10 to-background" />

    <div className="max-w-5xl mx-auto px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="font-elegant text-base tracking-[0.3em] text-gold uppercase">Depoimentos</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-chocolate mt-3">
          Quem já é <span className="italic text-shimmer">VIP</span> aprova
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            className="rounded-2xl p-6 bg-warm-white/50 border border-gold-light/15"
          >
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, s) => (
                <Star key={s} size={14} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="font-body text-chocolate-light/70 leading-relaxed mb-4 text-[0.95rem]">"{t.text}"</p>
            <div className="flex items-center justify-between">
              <span className="font-display font-semibold text-chocolate">{t.name}</span>
              <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold-light/20 font-elegant text-xs text-gold tracking-wide">
                {t.badge}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
