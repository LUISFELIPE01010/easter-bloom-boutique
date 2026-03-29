import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductCarouselProps {
  images: { src: string; alt: string }[];
  autoPlayInterval?: number;
}

const ProductCarousel = ({ images, autoPlayInterval = 4000 }: ProductCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const safeIndex = current >= images.length ? 0 : current;
  if (safeIndex !== current) setCurrent(safeIndex);

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + images.length) % images.length);
  }, [images.length]);

  // Auto-rotation
  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    const timer = setInterval(() => go(1), autoPlayInterval);
    return () => clearInterval(timer);
  }, [go, isPaused, autoPlayInterval, images.length]);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (Math.abs(diff) > threshold) {
      go(diff > 0 ? 1 : -1);
    }
    setTimeout(() => setIsPaused(false), 3000);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="w-full max-w-[500px] mx-auto overflow-hidden rounded-3xl border border-chocolate/10 shadow-[0_20px_60px_-15px_hsl(25_55%_25%/0.15)] group-hover:shadow-[0_30px_80px_-15px_hsl(25_55%_25%/0.25)] transition-shadow duration-500"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative aspect-square bg-cream-deep/30">
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
              loading={current === 0 ? "eager" : "lazy"}
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
