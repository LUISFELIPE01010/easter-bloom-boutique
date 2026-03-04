import { motion } from "framer-motion";
import avecProducts from "@/assets/avec-products.png";
import bunnyCandle from "@/assets/bunny-candle.png";

const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

const EventSection = () => (
  <section id="evento" className="relative py-28 overflow-hidden">
    {/* Soft watercolor-inspired background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(145_20%_94%)] via-[hsl(220_25%_96%)] to-[hsl(260_20%_95%)]" />
    
    {/* Subtle ambient */}
    <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[hsl(220_30%_88%/0.25)] blur-[100px]" />
    <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-[hsl(145_25%_85%/0.2)] blur-[80px]" />

    {/* Decorative bunny */}
    <div className="absolute top-12 left-8 w-20 h-20 opacity-25 hidden lg:block">
      <img src={bunnyCandle} alt="" className="w-full h-full object-contain" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="font-elegant text-base tracking-[0.3em] text-gold uppercase">Evento Especial</span>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-chocolate mt-4 leading-tight">
          Uma Páscoa que encanta<br />
          <span className="italic text-shimmer">todos os sentidos</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Features */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="space-y-8"
        >
          {[
            {
              icon: "🕯️",
              title: "Velas Artesanais Premium",
              desc: "Cada vela é despejada à mão com cera de soja 100% vegetal e pavios de algodão trançado.",
            },
            {
              icon: "🌺",
              title: "Fragrâncias Exclusivas",
              desc: "Desenvolvidas por perfumistas especialistas, nossas notas são únicas desta coleção.",
            },
            {
              icon: "🎁",
              title: "Embalagem Presenteável",
              desc: "Caixa artesanal com elementos de Páscoa, perfeita para presentear quem você ama.",
            },
            {
              icon: "🌿",
              title: "Sustentável & Vegano",
              desc: "Zero crueldade animal, ingredientes naturais e embalagens recicláveis.",
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex gap-5 items-start glass-card rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-cream-deep flex items-center justify-center text-2xl shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-chocolate mb-1">{feature.title}</h3>
                <p className="font-body text-chocolate-light/70 leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="ornate-border rounded-3xl overflow-hidden shadow-[0_25px_80px_-20px_hsl(25_55%_25%/0.2)]">
            <img src={avecProducts} alt="Formatos disponíveis Avec" className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-44 h-44 rounded-full bg-[hsl(220_30%_88%/0.3)] blur-3xl" />
          <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full bg-[hsl(145_25%_85%/0.3)] blur-3xl" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <button
          onClick={scrollToForm}
          className="px-10 py-5 rounded-full bg-chocolate text-primary-foreground font-display text-lg tracking-wide shadow-lg hover:shadow-xl hover:bg-chocolate-light transition-all duration-300"
        >
          Participar do evento 🐰
        </button>
      </motion.div>
    </div>
  </section>
);

export default EventSection;
