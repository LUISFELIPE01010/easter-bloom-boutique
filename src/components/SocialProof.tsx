import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import feedback1 from "@/assets/feedback-1.jpg";
import feedback2 from "@/assets/feedback-2.jpg";
import feedback3 from "@/assets/feedback-3.jpg";

const feedbacks = [
  { src: feedback1, caption: "Salted Bliss — o aroma que conquista à primeira vela 🕯️" },
  { src: feedback2, caption: "Choco Crunch — irresistível do início ao fim 🍫" },
  { src: feedback3, caption: "\"Vou comprar mais vezes com toda certeza!\" ❤️" },
];

const SocialProof = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + feedbacks.length) % feedbacks.length);
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 4000);
    return () => clearInterval(timer);
  }, [paginate]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0, scale: 0.95 })
  };

  // Swipe support
  const handleDragEnd = (_: any, info: {offset: {x: number;};}) => {
    if (info.offset.x < -50) paginate(1);else
    if (info.offset.x > 50) paginate(-1);
  };

  return (
    <section id="depoimentos" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-background to-cream-deep/40" />

      <div className="max-w-3xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12">
          
          <span className="font-elegant text-sm md:text-base tracking-[0.3em] text-gold uppercase">
            Quem ama, recomenda
          </span>
          

          
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="relative flex items-center justify-center">
            {/* Prev button */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-0 md:-left-6 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-warm-white/80 border border-gold-light/20 shadow-md flex items-center justify-center text-chocolate hover:bg-warm-white transition-colors"
              aria-label="Anterior">
              <ChevronLeft size={20} />
            </button>

            {/* Slide container */}
            <div className="relative w-full max-w-lg overflow-hidden rounded-3xl">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.3}
                  onDragEnd={handleDragEnd}
                  className="w-full cursor-grab active:cursor-grabbing">
                  <img
                    src={feedbacks[current].src}
                    alt={feedbacks[current].caption}
                    loading="lazy"
                    className="w-full object-cover rounded-3xl" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next button */}
            <button
              onClick={() => paginate(1)}
              className="absolute right-0 md:-right-6 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-warm-white/80 border border-gold-light/20 shadow-md flex items-center justify-center text-chocolate hover:bg-warm-white transition-colors"
              aria-label="Próximo">
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Caption below image */}
          <p className="text-center mt-4 font-elegant text-sm md:text-base text-chocolate/80 italic min-h-[2.5rem]">
            {feedbacks[current].caption}
          </p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2.5 mt-6">
          {feedbacks.map((_, i) =>
          <button
            key={i}
            onClick={() => {setDirection(i > current ? 1 : -1);setCurrent(i);}}
            className={`rounded-full transition-all duration-300 ${
            i === current ?
            "w-8 h-2.5 bg-gold" :
            "w-2.5 h-2.5 bg-chocolate/20 hover:bg-chocolate/40"}`
            }
            aria-label={`Slide ${i + 1}`} />

          )}
        </div>
      </div>
    </section>);

};

export default SocialProof;