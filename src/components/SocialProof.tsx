import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Tiago M.",
    badge: "+50 Produtos",
    text: "Encontrei a Avec por acaso e desde a primeira vela, viciei. Cada aroma é uma experiência diferente. Não largo mais!",
  },
  {
    name: "Maria Eduarda",
    badge: "+150 Produtos",
    text: "Sou completamente apaixonada pela Avec. Faltam palavras pra descrever o quão especial cada produto é. Incrível demais!",
  },
  {
    name: "Carolina S.",
    badge: "Membro VIP",
    text: "Entrar pro grupo VIP mudou tudo. Garanto os lançamentos antes de esgotar e ainda ganho brindes. Melhor decisão!",
  },
];

const SocialProof = () => (
  <section id="depoimentos" className="relative py-24 overflow-hidden">
    {/* Deep sage/chocolate background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(148_20%_18%)] via-[hsl(148_15%_14%)] to-[hsl(25_30%_12%)]" />
    
    {/* Ambient glows */}
    <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-sage/5 blur-[130px]" />
    <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-gold/3 blur-[100px]" />

    <div className="max-w-5xl mx-auto px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="font-elegant text-base tracking-[0.3em] text-gold uppercase">Quem ama, recomenda</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mt-3">
          +2.000 pessoas já são <span className="italic text-gold">VIP</span>
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
            className="rounded-2xl p-6 bg-warm-white/5 border border-gold/10 hover:bg-warm-white/10 transition-all"
          >
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, s) => (
                <Star key={s} size={14} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="font-body text-cream/65 leading-relaxed mb-4 text-[0.95rem]">"{t.text}"</p>
            <div className="flex items-center justify-between">
              <span className="font-display font-semibold text-cream">{t.name}</span>
              <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 font-elegant text-xs text-gold tracking-wide">
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
