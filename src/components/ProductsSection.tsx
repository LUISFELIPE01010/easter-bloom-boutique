import { motion } from "framer-motion";
import chocoCrunchImg from "@/assets/choco-crunch.jpg";
import saltedBlissImg from "@/assets/salted-bliss.jpg";

const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

const products = [
  {
    name: "Choco Crunch",
    note: "Chocolate Belga · Avelã · Baunilha",
    img: chocoCrunchImg,
  },
  {
    name: "Salted Bliss",
    note: "Caramelo Salgado · Flor de Sal · Âmbar",
    img: saltedBlissImg,
  },
];

const ProductsSection = () => (
  <section id="produtos" className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-lavender/15 via-background to-blush/10" />
    
    <div className="max-w-5xl mx-auto px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="font-elegant text-base tracking-[0.3em] text-gold uppercase">Coleção Páscoa</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-chocolate mt-3">
          Conheça os <span className="italic text-shimmer">aromas</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-8">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            className="group rounded-3xl overflow-hidden border border-gold-light/15 bg-warm-white/40 hover:shadow-xl transition-all duration-500"
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
              <p className="font-elegant text-base text-chocolate-light/60 mt-1 tracking-wide">{p.note}</p>
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
          className="px-10 py-4 rounded-full bg-chocolate text-primary-foreground font-display tracking-wide shadow-lg hover:shadow-xl hover:bg-chocolate-light transition-all duration-300"
        >
          Quero acesso VIP →
        </button>
      </motion.div>
    </div>
  </section>
);

export default ProductsSection;
