import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mariana S.",
    text: "A vela Choco Crunch deixou minha casa com um cheirinho incrível de chocolate! Parecia Páscoa todos os dias 🍫",
    role: "Cliente desde 2024",
  },
  {
    name: "Camila R.",
    text: "Presenteei minha mãe com a coleção completa. Ela amou! A embalagem é um charme à parte.",
    role: "Cliente desde 2025",
  },
  {
    name: "Juliana M.",
    text: "O aroma da Salted Bliss é viciante. Sofisticado e aconchegante ao mesmo tempo. Já quero a de Páscoa!",
    role: "Cliente desde 2024",
  },
];

const SocialProof = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-elegant text-lg text-gold tracking-widest uppercase">O que dizem</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate mt-3">
            Quem prova, se apaixona
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-warm-white rounded-2xl p-8 shadow-card border border-border/50 relative"
            >
              <div className="absolute -top-4 left-8 text-4xl">🌸</div>
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-gold text-lg">★</span>
                ))}
              </div>
              <p className="font-body text-foreground/75 italic leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-display font-semibold text-chocolate">{t.name}</p>
                <p className="font-elegant text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-12 mt-16"
        >
          {[
            { value: "2.500+", label: "Velas entregues" },
            { value: "98%", label: "Satisfação" },
            { value: "4.9", label: "Avaliação média" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-bold text-gold">{stat.value}</p>
              <p className="font-elegant text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
