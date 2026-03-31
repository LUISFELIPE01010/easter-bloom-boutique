import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import feedbackNew1 from "@/assets/feedback-new-1.png";
import feedbackNew2 from "@/assets/feedback-new-2.png";
import feedbackNew3 from "@/assets/feedback-new-5.png";
import feedbackNew4 from "@/assets/feedback-new-4.png";
import feedback3 from "@/assets/feedback-3.jpg";

const feedbacks = [
  {
    src: feedbackNew1,
    name: "Cliente Avec",
    product: "Salted Bliss & Choco Crunch",
    quote: "Finalmente abri minha caixinha! Agora entendi porque falaram tanto da Salted. O salgado dá um toque muito diferente. A de Choco também, que delícia! 😍",
    stars: 5,
  },
  {
    src: feedbackNew2,
    name: "Apaixonada por velas",
    product: "Choco Crunch",
    quote: "Boa noite com a maioralll ✨ A Choco Crunch acesa é puro aconchego!",
    stars: 5,
  },
  {
    src: feedbackNew3,
    name: "Kelly Mohsen",
    product: "Salted Bliss",
    quote: "E esperar mais um ano pela Salted é fora de cogitação. Meu cheirinho preferido até agora. Acendi no café da manhã de domingo, com uns croissants, bolinho ❤️",
    stars: 5,
  },
  {
    src: feedbackNew4,
    name: "Fã da Salted",
    product: "Salted Bliss",
    quote: "O que é a Salted? A Salted é uma MARAVILHA! 🥰🥰🥰 Enfim chegaram!",
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

const variants = {
  enter: (d: number) => ({ x: d > 0 ? 400 : -400, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? -400 : 400, opacity: 0 }),
};

const SocialProof = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + feedbacks.length) % feedbacks.length);
    },
    []
  );

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => go(1), 5000);
    return () => clearInterval(timer);
  }, [go]);

  const fb = feedbacks[current];

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
            QUEM SENTIU, NÃO ESQUECEU
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-chocolate mt-3">
            O que dizem sobre a <span className="italic text-gold">Coleção de Páscoa</span>
          </h2>
        </motion.div>

        {/* Carousel container */}
        <div className="relative group">
          <div className="overflow-hidden rounded-3xl border border-chocolate/5 shadow-[0_20px_60px_-15px_hsl(25_55%_25%/0.12)]">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={fb.src}
                    alt={fb.quote}
                    loading="lazy"
                    className="w-full aspect-square md:aspect-auto md:h-full object-cover"
                    draggable={false}
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center p-8 md:p-12 bg-warm-white/60">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: fb.stars }).map((_, s) => (
                      <span key={s} className="text-gold text-lg">★</span>
                    ))}
                  </div>
                  <blockquote className="font-body text-lg md:text-xl text-chocolate/80 leading-relaxed italic mb-6">
                    "{fb.quote}"
                  </blockquote>
                  <div>
                    <p className="font-body font-semibold text-chocolate">{fb.name}</p>
                    <p className="font-elegant text-sm text-gold tracking-wider uppercase">{fb.product}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-warm-white/80 backdrop-blur-sm border border-chocolate/10 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-warm-white"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-chocolate" />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-warm-white/80 backdrop-blur-sm border border-chocolate/10 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-warm-white"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-chocolate" />
          </button>

          {/* Dots */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {feedbacks.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > current ? 1 : -1);
                  setCurrent(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === current
                    ? "bg-gold w-6 shadow-md"
                    : "bg-chocolate/20 hover:bg-chocolate/40"
                }`}
                aria-label={`Ir para depoimento ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
