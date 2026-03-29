import { motion } from "framer-motion";
import { Flame, Sparkles, Gift, Leaf } from "lucide-react";
import avecProducts from "@/assets/avec-products.png";

const VIP_LINK = "https://grupovipavec.avecaromas.com/entrar-no-grupo/";

const features = [
  {
    icon: Flame,
    title: "Velas Artesanais Premium",
    desc: "Cada vela é despejada à mão com cera de soja 100% vegetal e pavios de algodão trançado.",
  },
  {
    icon: Sparkles,
    title: "Fragrâncias Exclusivas",
    desc: "Desenvolvidas por perfumistas especialistas, nossas notas são únicas desta coleção.",
  },
  {
    icon: Gift,
    title: "Embalagem Presenteável",
    desc: "Caixa artesanal com elementos de Páscoa, perfeita para presentear quem você ama.",
  },
  {
    icon: Leaf,
    title: "Sustentável & Vegano",
    desc: "Zero crueldade animal, ingredientes naturais e embalagens recicláveis.",
  },
];

const EventSection = () => (
  <section id="evento" className="relative py-28 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-cream/40 via-background to-lavender/20" />
    
    {/* Soft ambient */}
    <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-sage/15 blur-[100px]" />
    <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-blush/15 blur-[80px]" />

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
          className="space-y-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex gap-5 items-start rounded-2xl p-6 bg-warm-white/50 border border-gold-light/15 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl border border-gold-light/30 flex items-center justify-center text-gold shrink-0">
                <feature.icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-chocolate mb-1">{feature.title}</h3>
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
          <div className="rounded-3xl overflow-hidden border border-gold-light/20 shadow-[0_25px_80px_-20px_hsl(25_55%_25%/0.15)]">
            <img src={avecProducts} alt="Formatos disponíveis Avec" loading="lazy" className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-44 h-44 rounded-full bg-sage/20 blur-3xl" />
          <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full bg-blush/20 blur-3xl" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <button
          onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
          className="px-10 py-4 rounded-full bg-chocolate text-primary-foreground font-display tracking-wide shadow-lg hover:shadow-xl hover:bg-chocolate-light transition-all duration-300"
        >
          Participar do evento →
        </button>
      </motion.div>
    </div>
  </section>
);

export default EventSection;
