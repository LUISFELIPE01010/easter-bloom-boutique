import { motion } from "framer-motion";
import chocoCrunchImg from "@/assets/choco-crunch.jpg";
import saltedBlissImg from "@/assets/salted-bliss.jpg";

const products = [
  {
    name: "Choco Crunch",
    image: chocoCrunchImg,
    description: "Notas de chocolate 70%, bolo de cenoura e um toque de baunilha. Um abraço em forma de aroma.",
    notes: ["Chocolate 70%", "Bolo de Cenoura", "Baunilha"],
    color: "bg-blush",
  },
  {
    name: "Salted Bliss",
    image: saltedBlissImg,
    description: "Caramelo salgado, flor de sal e um fundo amadeirado. Sofisticação que acalma.",
    notes: ["Caramelo Salgado", "Flor de Sal", "Âmbar"],
    color: "bg-lavender",
  },
];

const ProductsSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-warm-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-elegant text-lg text-gold tracking-widest uppercase">Coleção Exclusiva</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate mt-3">
            Os aromas da Páscoa
          </h2>
          <p className="font-elegant text-xl text-muted-foreground mt-4 max-w-lg mx-auto">
            Duas fragrâncias criadas especialmente para tornar sua Páscoa inesquecível
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className={`rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow ${product.color}/30`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-3xl font-bold text-chocolate mb-3">{product.name}</h3>
                <p className="font-body text-foreground/75 mb-5 leading-relaxed">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.notes.map((note) => (
                    <span key={note} className="px-3 py-1 text-sm rounded-full bg-cream font-elegant text-chocolate border border-border">
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <button
            onClick={scrollToForm}
            className="px-10 py-4 rounded-full bg-gold font-display text-lg text-warm-white shadow-card hover:shadow-elevated hover:opacity-90 transition-all"
          >
            Quero na minha pré-venda 🌸
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
