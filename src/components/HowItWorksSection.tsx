import { motion } from "framer-motion";
import { PenLine, Flower2, PackageCheck } from "lucide-react";
import lifestyleImg from "@/assets/lifestyle-candle.jpg";

const steps = [
  { num: "01", title: "Cadastre-se", desc: "Preencha o formulário com seus dados para garantir acesso antecipado.", icon: PenLine },
  { num: "02", title: "Escolha seus aromas", desc: "Selecione entre Choco Crunch, Salted Bliss ou leve a coleção completa.", icon: Flower2 },
  { num: "03", title: "Receba em casa", desc: "Sua coleção chega em embalagem premium, pronta para presentear.", icon: PackageCheck },
];

const HowItWorksSection = () => (
  <section className="relative py-28 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        {/* Steps */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-elegant text-base tracking-[0.3em] text-secondary uppercase">Como funciona</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate mt-4 mb-12">
              Simples como <span className="italic">acender uma vela</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="flex gap-6 items-start"
              >
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-warm-white border border-secondary/30 flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-secondary">{step.num}</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-display text-xl font-semibold text-chocolate mb-1 flex items-center gap-2">
                    <step.icon size={18} strokeWidth={1.5} className="text-gold" />
                    {step.title}
                  </h3>
                  <p className="font-body text-chocolate-light/70 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lifestyle image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="rounded-[2rem] overflow-hidden border border-gold-light/20 shadow-[0_25px_80px_-20px_hsl(25_55%_25%/0.15)]">
            <img src={lifestyleImg} alt="Acendendo vela Avec" className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-peach/40 blur-[80px]" />
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-lavender/30 blur-[80px]" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
