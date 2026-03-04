import { motion } from "framer-motion";
import flatlayImg from "@/assets/flatlay-easter.jpg";

const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

const IntroSection = () => (
  <section className="relative py-28 overflow-hidden">
    {/* Subtle background pattern */}
    <div className="absolute inset-0 opacity-[0.03]"
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23876a3e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
    />

    <div className="max-w-7xl mx-auto px-6 relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="ornate-border rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_hsl(25_55%_25%/0.2)]">
            <img src={flatlayImg} alt="Coleção de Páscoa Avec" className="w-full h-auto" />
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-blush/40 blur-3xl" />
          <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-sage/40 blur-3xl" />
          {/* Badge overlay */}
          <div className="absolute -bottom-4 -right-4 md:bottom-6 md:right-6 glass-card rounded-2xl px-6 py-4 shadow-lg">
            <p className="font-display text-2xl font-bold text-gold">Edição Limitada</p>
            <p className="font-elegant text-chocolate-light">Páscoa 2026</p>
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-elegant text-base tracking-[0.3em] text-gold uppercase">Uma experiência sensorial</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-chocolate mt-4 leading-[1.1]">
            Quando o aroma <br />
            conta uma <span className="italic text-shimmer">história</span>
          </h2>
          
          <div className="mt-8 space-y-6">
            <p className="font-body text-lg text-chocolate-light/80 leading-relaxed">
              A coleção de Páscoa Avec não é apenas sobre velas — é sobre criar momentos. 
              Cada fragrância foi cuidadosamente desenvolvida para despertar memórias e 
              sensações que só a Páscoa traz.
            </p>
            <p className="font-body text-lg text-chocolate-light/80 leading-relaxed">
              Imagine acender uma vela e sentir o aroma envolvente de chocolate belga 
              misturado com notas sutis de bolo de cenoura. Ou deixar-se levar pela 
              sofisticação do caramelo salgado com toques florais.
            </p>
          </div>

          {/* Feature pills */}
          <div className="mt-10 flex flex-wrap gap-3">
            {["100% Artesanal", "Cera Vegetal", "Fragrância Premium", "Presenteável"].map((item) => (
              <span key={item} className="px-5 py-2.5 rounded-full bg-cream-deep/60 border border-gold-light/30 font-elegant text-base text-chocolate-light tracking-wide">
                ✦ {item}
              </span>
            ))}
          </div>

          <button
            onClick={scrollToForm}
            className="mt-10 px-8 py-4 rounded-full bg-chocolate text-primary-foreground font-display tracking-wide shadow-lg hover:shadow-xl hover:bg-chocolate-light transition-all duration-300"
          >
            Quero participar da pré-venda ✨
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default IntroSection;
