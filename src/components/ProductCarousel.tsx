import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductCarouselProps {
  images: { src: string; alt: string }[];
}

const ProductCarousel = ({ images }: ProductCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // Reset index if images array shrinks
  const safeIndex = current >= images.length ? 0 : current;
  if (safeIndex !== current) setCurrent(safeIndex);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + images.length) % images.length);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-3xl border border-chocolate/10 shadow-[0_20px_60px_-15px_hsl(25_55%_25%/0.15)] group-hover:shadow-[0_30px_80px_-15px_hsl(25_55%_25%/0.25)] transition-shadow duration-500">
        <div className="relative aspect-square max-w-[500px] mx-auto bg-cream-deep/30">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.img
              key={current}
              src={images[current].src}
              alt={images[current].alt}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-warm-white/80 backdrop-blur-sm border border-chocolate/10 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-warm-white"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-chocolate" />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-warm-white/80 backdrop-blur-sm border border-chocolate/10 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-warm-white"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-chocolate" />
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setDirection(idx > current ? 1 : -1); setCurrent(idx); }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === current
                  ? "bg-warm-white w-6 shadow-md"
                  : "bg-warm-white/50 hover:bg-warm-white/70"
              }`}
              aria-label={`Ir para foto ${idx + 1}`}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default ProductCarousel;
