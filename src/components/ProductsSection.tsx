import { motion } from "framer-motion";
import chocoCrunchImg from "@/assets/choco-crunch.jpg";
import saltedBlissImg from "@/assets/salted-bliss.jpg";

const products = [
  {
    name: "Choco Crunch",
    image: chocoCrunchImg,
    tagline: "O abraço do chocolate",
    description: "Uma sinfonia de chocolate 70%, bolo de cenoura caseiro e baunilha bourbon. Feita para quem acredita que a Páscoa merece todos os sentidos.",
    notes: [
      { name: "Chocolate 70%", icon: "🍫" },
      { name: "Bolo de Cenoura", icon: "🥕" },
      { name: "Baunilha Bourbon", icon: "🌿" },
    ],
    bgClass: "from-peach to-blush/30",
    accentClass: "bg-peach",
    duration: "40h de queima",
    weight: "200g",
  },
  {
    name: "Salted Bliss",
    image: saltedBlissImg,
    tagline: "Sofisticação em cada nota",
    description: "Caramelo salgado encontra flor de sal do Algarve e um fundo amadeirado de âmbar. Para momentos de pura indulgência.",
    notes: [
      { name: "Caramelo Salgado", icon: "🧂" },
      { name: "Flor de Sal", icon: "✿" },
      { name: "Âmbar & Madeira", icon: "🪵" },
    ],
    bgClass: "from-lavender/30 to-sage/20",
    accentClass: "bg-lavender",
    duration: "40h de queima",
    weight: "200g",
  },
];

const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

const ProductsSection = () => (
  <section id="produtos" className="relative py-28 overflow-hidden">
    {/* Wave separator */}
    <div className="wave-top">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
        <path d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,0 L0,0 Z" fill="hsl(var(--cream))" />
      </svg>
    </div>

    <div className="absolute inset-0 bg-gradient-to-b from-cream via-background to-cream/50" />

    <div className="max-w-7xl mx-auto px-6 relative">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <span className="font-elegant text-base tracking-[0.3em] text-gold uppercase">Coleção Exclusiva</span>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-chocolate mt-4">
          Os aromas da <span className="italic text-shimmer">Páscoa</span>
        </h2>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-gold-light" />
          <span className="font-elegant text-gold text-lg">Duas fragrâncias irresistíveis</span>
          <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-gold-light" />
        </div>
      </motion.div>

      {/* Product cards */}
      <div className="space-y-24">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
          >
            {/* Image */}
            <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${product.bgClass} -rotate-3 scale-105`} />
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_25px_60px_-15px_hsl(25_55%_25%/0.2)] ornate-border">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              {/* Floating badge */}
              <div className={`absolute -bottom-4 ${i % 2 === 0 ? "-right-4" : "-left-4"} glass-card rounded-xl px-5 py-3 shadow-lg`}>
                <p className="font-elegant text-sm text-chocolate-light">{product.duration}</p>
                <p className="font-display text-lg font-bold text-gold">{product.weight}</p>
              </div>
            </div>

            {/* Content */}
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <span className={`inline-block px-4 py-1.5 rounded-full ${product.accentClass}/50 font-elegant text-sm tracking-[0.15em] text-chocolate-light uppercase mb-4`}>
                {product.tagline}
              </span>
              <h3 className="font-display text-4xl md:text-5xl font-bold text-chocolate mb-5">{product.name}</h3>
              <p className="font-body text-lg text-chocolate-light/75 leading-relaxed mb-8">{product.description}</p>

              {/* Notes */}
              <div className="space-y-3 mb-8">
                <p className="font-elegant text-sm tracking-[0.2em] text-gold uppercase">Notas olfativas</p>
                <div className="flex flex-wrap gap-3">
                  {product.notes.map((note) => (
                    <div key={note.name} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-warm-white border border-gold-light/20 shadow-sm">
                      <span className="text-lg">{note.icon}</span>
                      <span className="font-elegant text-base text-chocolate">{note.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <button
          onClick={scrollToForm}
          className="btn-glow px-10 py-5 rounded-full bg-gold text-warm-white font-display text-lg tracking-wide shadow-[0_8px_32px_-8px_hsl(38_70%_52%/0.5)] hover:shadow-[0_14px_40px_-8px_hsl(38_70%_52%/0.6)] transition-all duration-300"
        >
          🌸 Quero na minha Pré-Venda
        </button>
      </motion.div>
    </div>
  </section>
);

export default ProductsSection;
