import { motion } from "framer-motion";
import feedback1 from "@/assets/feedback-1.jpg";
import feedback2 from "@/assets/feedback-2.jpg";
import feedback3 from "@/assets/feedback-3.jpg";

const feedbacks = [
  {
    src: feedback1,
    name: "Cliente VIP",
    product: "Salted Bliss",
    quote: "O aroma que conquista à primeira vela. Minha casa nunca mais foi a mesma! 🕯️",
    stars: 5,
  },
  {
    src: feedback2,
    name: "Apaixonada por velas",
    product: "Choco Crunch",
    quote: "Irresistível do início ao fim. O cheirinho de chocolate belga preenche todos os ambientes. 🍫",
    stars: 5,
  },
  {
    src: feedback3,
    name: "Fã da Avec",
    product: "Coleção Páscoa",
    quote: "Vou comprar mais vezes com toda certeza! A qualidade e a embalagem são impecáveis. ❤️",
    stars: 5,
  },
];

const SocialProof = () => {
  return (
    <section id="depoimentos" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-background to-cream-deep/40" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="font-elegant text-sm md:text-base tracking-[0.3em] text-gold uppercase">
            Quem ama, recomenda
          </span>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-chocolate mt-3">
            O que dizem sobre a <span className="italic text-gold">Avec</span>
          </h2>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {feedbacks.map((fb, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center ${
                  isReversed ? "md:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <div className={`${isReversed ? "md:order-2" : "md:order-1"}`}>
                  <div className="overflow-hidden rounded-3xl shadow-[0_15px_50px_-15px_hsl(25_55%_25%/0.15)]">
                    <img
                      src={fb.src}
                      alt={fb.quote}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className={`${isReversed ? "md:order-1 md:text-right" : "md:order-2"} flex flex-col justify-center`}>
                  <div className="flex gap-1 mb-3" style={{ justifyContent: isReversed ? "flex-end" : "flex-start" }}>
                    {Array.from({ length: fb.stars }).map((_, s) => (
                      <span key={s} className="text-gold text-lg">★</span>
                    ))}
                  </div>
                  <blockquote className="font-body text-lg md:text-xl text-chocolate/80 leading-relaxed italic mb-4">
                    "{fb.quote}"
                  </blockquote>
                  <div>
                    <p className="font-body font-semibold text-chocolate">{fb.name}</p>
                    <p className="font-elegant text-sm text-gold tracking-wider uppercase">{fb.product}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
