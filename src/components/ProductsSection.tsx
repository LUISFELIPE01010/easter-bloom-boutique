import { motion } from "framer-motion";
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
    img: chocoCrunchImg,
  },
  {
    name: "Salted Bliss",
    note: "Caramelo Salgado · Flor de Sal · Âmbar",
    tagline: "A sofisticação do caramelo com toques de flor de sal e âmbar dourado.",
    img: saltedBlissImg,
  },
];

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
          Os aromas que vão <span className="italic text-shimmer">derreter seu coração</span>
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
            className="group rounded-3xl overflow-hidden border border-secondary/10 bg-warm-white/70 shadow-[0_10px_40px_-15px_hsl(210_35%_43%/0.1)] hover:shadow-[0_20px_60px_-15px_hsl(210_35%_43%/0.2)] transition-all duration-500"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
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
