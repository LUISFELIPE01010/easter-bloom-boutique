import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "Como funciona o Grupo VIP?",
    a: "O Grupo VIP é o nosso canal direto com você no WhatsApp. Por lá, os membros recebem acesso prioritário aos links das promoções, novidades e lançamentos exclusivos antes de todo mundo.",
  },
  {
    q: "O cadastro tem algum custo?",
    a: "Zero! Entrar para o Grupo VIP é totalmente gratuito e sem compromisso. Você só precisa se cadastrar.",
  },
  {
    q: "Quando começa a coleção de Páscoa?",
    a: "A coleção de Páscoa 2026 será lançada em breve. Membros VIP terão acesso antecipado e condições que ninguém mais vai ter.",
  },
  {
    q: "As velas são veganas?",
    a: "Sim! Todas as nossas velas são feitas com cera de soja 100% vegetal, sem testes em animais e com embalagens recicláveis.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Warm cream background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-deep/60 via-cream to-warm-white" />

      <div className="max-w-2xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-elegant text-base tracking-[0.3em] text-gold uppercase">Tire suas dúvidas</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-chocolate mt-3">
            Perguntas <span className="italic">frequentes</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl overflow-hidden bg-warm-white/80 border border-gold-light/15 shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-display text-base font-semibold text-chocolate pr-4">{faq.q}</span>
                <span className={`text-gold text-xl transition-transform duration-300 shrink-0 ${openIndex === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 pb-5 font-body text-chocolate-light/65 leading-relaxed text-[0.95rem]">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
