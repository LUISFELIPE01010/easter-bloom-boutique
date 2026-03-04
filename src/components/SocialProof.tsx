import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mariana S.",
    avatar: "🌸",
    text: "A vela Choco Crunch deixou minha casa com um cheirinho tão incrível de chocolate que meus vizinhos vieram perguntar se eu estava fazendo bolo! Parecia Páscoa todos os dias.",
    role: "Cliente desde 2024",
    rating: 5,
    product: "Choco Crunch",
  },
  {
    name: "Camila R.",
    avatar: "🌺",
    text: "Presenteei minha mãe com a coleção completa. Ela ligou chorando de emoção! A embalagem é um charme à parte, parece que saiu de uma boutique parisiense.",
    role: "Cliente desde 2025",
    rating: 5,
    product: "Coleção Completa",
  },
  {
    name: "Juliana M.",
    avatar: "🌷",
    text: "O aroma da Salted Bliss é viciante. Sofisticado e aconchegante ao mesmo tempo. Toda vez que acendo, me sinto em um spa cinco estrelas.",
    role: "Cliente desde 2024",
    rating: 5,
    product: "Salted Bliss",
  },
  {
    name: "Fernanda L.",
    avatar: "🌻",
    text: "Comprei como presente de Páscoa pra mim mesma — zero culpa! A duração é impressionante e a fragrância preenche a casa toda. Já estou na lista de espera da próxima coleção.",
    role: "Cliente desde 2025",
    rating: 5,
    product: "Choco Crunch",
  },
];

const stats = [
  { value: "2.500+", label: "Velas vendidas", icon: "🕯️" },
  { value: "98%", label: "Satisfação", icon: "💛" },
  { value: "4.9/5", label: "Avaliação média", icon: "⭐" },
  { value: "500+", label: "Avaliações 5★", icon: "✨" },
];

const SocialProof = () => (
  <section id="depoimentos" className="relative py-28 bg-cream overflow-hidden">
    <div className="absolute top-0 left-0 w-full">
      <div className="divider-floral" />
    </div>
    
    {/* Ambient blobs */}
    <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-blush/25 blur-[100px]" />
    <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-sage/20 blur-[80px]" />

    <div className="max-w-7xl mx-auto px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="font-elegant text-base tracking-[0.3em] text-gold uppercase">Prova Social</span>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-chocolate mt-4">
          Quem prova, <span className="italic text-shimmer">se apaixona</span>
        </h2>
        <p className="font-elegant text-xl text-chocolate-light/60 mt-4 max-w-lg mx-auto">
          Milhares de lares já foram transformados pelo aroma Avec
        </p>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-center glass-card rounded-2xl py-8 px-4">
            <span className="text-3xl mb-3 block">{stat.icon}</span>
            <p className="font-display text-3xl md:text-4xl font-bold text-shimmer">{stat.value}</p>
            <p className="font-elegant text-base text-chocolate-light/60 mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Testimonial cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="glass-card rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative"
          >
            {/* Quote mark */}
            <div className="absolute top-4 right-6 font-display text-6xl text-gold-light/20 leading-none">"</div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-cream-deep flex items-center justify-center text-2xl border border-gold-light/30">
                {t.avatar}
              </div>
              <div>
                <p className="font-display font-semibold text-chocolate">{t.name}</p>
                <p className="font-elegant text-sm text-chocolate-light/50">{t.role}</p>
              </div>
              <div className="ml-auto">
                <span className="inline-block px-3 py-1 rounded-full bg-cream-deep text-xs font-elegant text-chocolate-light border border-gold-light/20">
                  {t.product}
                </span>
              </div>
            </div>

            <div className="flex gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, j) => (
                <span key={j} className="text-gold text-sm">★</span>
              ))}
            </div>

            <p className="font-body text-chocolate-light/75 leading-relaxed italic">"{t.text}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
