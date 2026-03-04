import { motion } from "framer-motion";
import avecProducts from "@/assets/avec-products.png";

const EventSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-easter-gradient">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-elegant text-lg text-chocolate/70 tracking-widest uppercase">Evento Especial</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate mt-3 leading-tight">
              Uma experiência <br />
              <span className="italic text-gold">sensorial</span> de Páscoa
            </h2>
            <p className="font-body text-foreground/75 mt-6 leading-relaxed text-lg">
              Mais do que velas — uma jornada olfativa que mistura o aconchego do chocolate com a delicadeza
              das flores de primavera. Cada vela é feita à mão com cera vegetal premium e fragrâncias exclusivas.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Cera 100% vegetal e sustentável",
                "Fragrâncias exclusivas da coleção",
                "Disponível em Vela, Home Spray e Drops",
                "Embalagem presenteável de Páscoa",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-foreground/80">
                  <span className="text-gold mt-1">✦</span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={scrollToForm}
              className="mt-10 px-10 py-4 rounded-full bg-chocolate font-display text-lg text-primary-foreground shadow-card hover:shadow-elevated hover:opacity-90 transition-all"
            >
              Participar do evento 🐰
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={avecProducts} alt="Produtos Avec Páscoa" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-blush/60 blur-2xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-lavender/50 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
