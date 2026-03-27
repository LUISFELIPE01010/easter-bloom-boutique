import { motion } from "framer-motion";
import ProductCarousel from "@/components/ProductCarousel";
import chocoCrunchKitImg from "@/assets/choco-crunch-kit.png";
import chocoCrunchCandleImg from "@/assets/choco-crunch-candle.png";
import chocoCrunchDropsImg from "@/assets/choco-crunch-drops.png";
import chocoCrunchSprayImg from "@/assets/choco-crunch-spray.png";
import saltedBlissImg from "@/assets/salted-bliss.png";
import saltedBlissKitImg from "@/assets/salted-bliss-kit.png";
import saltedBlissCandleImg from "@/assets/salted-bliss-candle.png";
import saltedBlissDropsImg from "@/assets/salted-bliss-drops.png";
import saltedBlissSprayImg from "@/assets/salted-bliss-spray.png";

const VIP_LINK = "https://grupovipavec.avecaromas.com/entrar-no-grupo/";

const products = [
  {
    name: "Choco Crunch",
    note: "Chocolate Belga · Avelã · Baunilha",
    tagline: "O abraço quente do cacau belga com a crocância da avelã.",
    description:
      "Uma experiência sensorial única que transporta para uma confeitaria europeia. As notas de topo de chocolate amargo se misturam com a avelã torrada, enquanto a base de baunilha bourbon cria uma atmosfera acolhedora e envolvente.",
    details: ["Duração: +40 horas", "Cera de soja 100% natural", "Pavio de algodão ecológico"],
    images: [
      { src: chocoCrunchKitImg, alt: "Choco Crunch - Kit Completo" },
      { src: chocoCrunchCandleImg, alt: "Choco Crunch - Vela" },
      { src: chocoCrunchDropsImg, alt: "Choco Crunch - Essência" },
      { src: chocoCrunchSprayImg, alt: "Choco Crunch - Spray" },
    ],
  },
  {
    name: "Salted Bliss",
    note: "Caramelo Salgado · Flor de Sal · Âmbar",
    tagline: "A sofisticação do caramelo com toques de flor de sal e âmbar dourado.",
    description:
      "Um equilíbrio perfeito entre doce e salgado. O caramelo artesanal se encontra com cristais de flor de sal, enquanto o âmbar dourado confere profundidade e elegância. Uma fragrância que transforma qualquer espaço.",
    details: ["Duração: +40 horas", "Cera de soja 100% natural", "Pavio de algodão ecológico"],
    images: [
      { src: saltedBlissImg, alt: "Salted Bliss" },
      { src: saltedBlissCandleImg, alt: "Salted Bliss - Vela" },
      { src: saltedBlissDropsImg, alt: "Salted Bliss - Essência" },
      { src: saltedBlissKitImg, alt: "Salted Bliss - Kit Completo" },
      { src: saltedBlissSprayImg, alt: "Salted Bliss - Spray" },
    ],
  },
];

const ProductsSection = () => (
  <section id="produtos" className="relative py-16 md:py-28 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-cream via-blush/30 to-peach/40" />

    <div className="absolute top-10 right-0 w-[400px] h-[400px] rounded-full bg-lavender/20 blur-[120px]" />
    <div className="absolute bottom-10 left-0 w-[350px] h-[350px] rounded-full bg-sage/15 blur-[100px]" />

    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 md:mb-20"
      >
        <span className="font-elegant text-base tracking-[0.3em] text-gold uppercase">Coleção Páscoa</span>
        <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-chocolate mt-3">
          Os aromas que vão <span className="italic text-gold">derreter seu coração</span>
        </h2>
      </motion.div>

      <div className="space-y-16 md:space-y-24">
        {products.map((p, i) => {
          const isReversed = i % 2 !== 0;
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center"
            >
              {/* Image */}
              <div className={`${isReversed ? "md:order-2" : "md:order-1"}`}>
                {p.images.length > 1 ? (
                  <ProductCarousel images={p.images} />
                ) : (
                  <div className="relative group">
                    <div className="overflow-hidden rounded-3xl border border-chocolate/10 shadow-[0_20px_60px_-15px_hsl(25_55%_25%/0.15)] group-hover:shadow-[0_30px_80px_-15px_hsl(25_55%_25%/0.25)] transition-shadow duration-500">
                      <img
                        src={p.images[0].src}
                        alt={p.images[0].alt}
                        loading="lazy"
                        className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className={`${isReversed ? "md:order-1 md:text-right" : "md:order-2"} flex flex-col justify-center pt-6 md:pt-0`}>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-chocolate">{p.name}</h3>
                <p className="font-elegant text-sm text-gold tracking-[0.2em] mt-2 uppercase">{p.note}</p>

                <p className="font-body text-lg text-chocolate/70 mt-4 leading-relaxed italic">{p.tagline}</p>

                <p className="font-body text-base text-chocolate-light/60 mt-4 leading-relaxed">{p.description}</p>

                {/* Details chips */}
                <div className={`flex flex-wrap gap-2 mt-6 ${isReversed ? "md:justify-end" : ""}`}>
                  {p.details.map((d, j) => (
                    <span
                      key={j}
                      className="inline-block px-4 py-1.5 rounded-full bg-cream-deep/60 border border-chocolate/8 font-body text-sm text-chocolate/60"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                <div className={`mt-8 ${isReversed ? "md:flex md:justify-end" : ""}`}>
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => window.open(VIP_LINK, "_blank")}
                    className="px-8 py-3.5 rounded-full bg-chocolate text-primary-foreground font-body font-semibold tracking-wide shadow-[0_8px_30px_-8px_hsl(25_55%_25%/0.4)] hover:shadow-[0_14px_40px_-8px_hsl(25_55%_25%/0.5)] transition-all duration-300"
                  >
                    Quero garantir o meu →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProductsSection;
