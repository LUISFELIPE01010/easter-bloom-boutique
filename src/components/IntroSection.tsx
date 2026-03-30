import { motion } from "framer-motion";
import flatlayImg from "@/assets/flatlay-easter.jpg";
import experienciaImg from "@/assets/experiencia-sensorial.png";

const VIP_LINK = "https://grupovipavec.avecaromas.com/entrar-no-grupo/";

const IntroSection = () =>
<section className="relative py-28 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative">
        
          <div className="rounded-3xl overflow-hidden border border-gold-light/20 shadow-[0_20px_60px_-15px_hsl(25_55%_25%/0.15)]">
            <img alt="Coleção de Páscoa Avec" loading="lazy" className="w-full h-auto" src={experienciaImg} />
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-blush/40 blur-3xl" />
          <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-sage/40 blur-3xl" />
          {/* Badge overlay */}
          


        
        </motion.div>

        {/* Text side */}
        <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
        
          <span className="font-elegant text-base tracking-[0.3em] text-gold uppercase">Uma experiência sensorial</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold mt-4 leading-[1.1] italic text-shimmer">
            Quando o aroma<br />
            conta uma história
          </h2>
          
          <div className="mt-8 space-y-6">
            <p className="font-body text-lg text-chocolate-light/80 leading-relaxed">
              A coleção de Páscoa Avec não é apenas sobre velas é sobre criar momentos. Cada fragrância foi cuidadosamente desenvolvida para despertar memórias e sensações que só a Páscoa traz.
            

          </p>
            



          
          </div>

          {/* Feature pills */}
          <div className="mt-10 flex flex-wrap gap-3">
            {["100% Artesanal", "Cera Vegetal", "Edição Limitada", "Perfuma de Verdade"].map((item) =>
          <span key={item} className="px-5 py-2.5 rounded-full bg-warm-white/60 border border-gold-light/20 font-elegant text-base text-chocolate-light tracking-wide">
                {item}
              </span>
          )}
          </div>

          <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-10 px-8 py-4 rounded-full bg-chocolate text-primary-foreground font-display tracking-wide shadow-lg hover:shadow-xl hover:bg-chocolate-light transition-all duration-300">
            Receber acesso VIP →
          </button>
        </motion.div>
      </div>
    </div>
  </section>;


export default IntroSection;