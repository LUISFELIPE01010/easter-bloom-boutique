import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import chocoCrunchImg from "@/assets/choco-crunch.png";
import saltedBlissImg from "@/assets/salted-bliss.png";

const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

const products = [
  {
    name: "Choco Crunch",
    note: "Chocolate Belga · Avelã · Baunilha",
    tagline: "O abraço quente do cacau belga com a crocância da avelã.",
    images: [chocoCrunchImg, null, null],
  },
  {
    name: "Salted Bliss",
    note: "Caramelo Salgado · Flor de Sal · Âmbar",
    tagline: "A sofisticação do caramelo com toques de flor de sal e âmbar dourado.",
    images: [saltedBlissImg, null, null],
  },
];

const ProductCarousel = ({ images, name }: { images: (string | null)[]; name: string }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="relative aspect-[4/3] overflow-hidden">
      {images[current] ? (
        <img
          src={images[current]!}
          alt={`${name} - foto ${current + 1}`}
          loading="lazy"
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      ) : (
        <div className="w-full h-full bg-chocolate/5 flex items-center justify-center">
          <span className="font-elegant text-sm text-chocolate/30 tracking-widest uppercase">Em breve</span>
        </div>
      )}

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-warm-white/80 border border-chocolate/10 shadow flex items-center justify-center text-chocolate/60 hover:text-chocolate transition-colors"
        aria-label="Foto anterior"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-warm-white/80 border border-chocolate/10 shadow flex items-center justify-center text-chocolate/60 hover:text-chocolate transition-colors"
        aria-label="Próxima foto"
      >
        <ChevronRight size={16} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "w-5 h-2 bg-gold" : "w-2 h-2 bg-warm-white/60"
            }`}
            aria-label={`Foto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const ProductsSection = () => (
  <section id="produtos" className="relative py-16 md:py-24 overflow-hidden">
    {/* Warm cream/blush gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-cream via-blush/30 to-peach/40" />
    
    {/* Ambient */}
    <div className="absolute top-10 right-0 w-[400px] h-[400px] rounded-full bg-lavender/20 blur-[120px]" />
    <div className="absolute bottom-10 left-0 w-[350px] h-[350px] rounded-full bg-sage/15 blur-[100px]" />

    <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="font-elegant text-base tracking-[0.3em] text-gold uppercase">Coleção Páscoa</span>
        <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-chocolate mt-3">
          Os aromas que vão <span className="italic text-gold">derreter seu coração</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            className="group rounded-3xl overflow-hidden border border-chocolate/10 bg-warm-white/70 shadow-[0_10px_40px_-15px_hsl(25_55%_25%/0.1)] hover:shadow-[0_20px_60px_-15px_hsl(25_55%_25%/0.2)] transition-all duration-500"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="font-display text-2xl font-bold text-chocolate">{p.name}</h3>
              <p className="font-elegant text-sm text-gold tracking-widest mt-1 uppercase">{p.note}</p>
              <p className="font-body text-chocolate-light/60 mt-2 text-[0.95rem] leading-relaxed">{p.tagline}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <button
          onClick={scrollToForm}
          className="btn-glow px-10 py-4 rounded-full bg-chocolate text-primary-foreground font-display tracking-wide shadow-[0_8px_30px_-8px_hsl(25_55%_25%/0.4)] hover:shadow-[0_14px_40px_-8px_hsl(25_55%_25%/0.5)] transition-all duration-300"
        >
          Garantir acesso VIP →
        </button>
      </motion.div>
    </div>
  </section>
);

export default ProductsSection;
