import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "Qual o prazo de entrega?",
    a: "As velas da coleção de Páscoa serão enviadas a partir do dia 1º de abril. O prazo varia de 3 a 7 dias úteis dependendo da sua localização.",
  },
  {
    q: "As velas são veganas e cruelty-free?",
    a: "Sim! Todas as nossas velas são feitas com cera de soja 100% vegetal, sem ingredientes de origem animal e sem testes em animais.",
  },
  {
    q: "Quanto tempo dura cada vela?",
    a: "Cada vela de 200g tem duração aproximada de 40 horas de queima, proporcionando semanas de aroma no seu lar.",
  },
  {
    q: "Posso presentear alguém?",
    a: "Com certeza! A coleção de Páscoa vem em embalagem premium presenteável. Você também pode adicionar um cartão personalizado no momento da compra.",
  },
  {
    q: "A pré-venda tem algum custo?",
    a: "Não! O cadastro na pré-venda é totalmente gratuito e sem compromisso. Você apenas garante sua prioridade e condições especiais.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-elegant text-base tracking-[0.3em] text-gold uppercase">Dúvidas Frequentes</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate mt-4">
            Tudo que você <span className="italic">precisa saber</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-display text-lg font-semibold text-chocolate pr-4">{faq.q}</span>
                <span className={`text-gold text-2xl transition-transform duration-300 shrink-0 ${openIndex === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 font-body text-chocolate-light/70 leading-relaxed">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
