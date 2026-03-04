import { useState } from "react";
import { motion } from "framer-motion";

const LeadForm = ({ id = "lead-form" }: { id?: string }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <motion.form
      id={id}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-lg mx-auto"
    >
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Seu nome completo"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-6 py-4 rounded-xl bg-warm-white/80 backdrop-blur-sm border-2 border-gold-light/30 font-body text-foreground placeholder:text-chocolate-light/40 focus:outline-none focus:border-gold focus:shadow-[0_0_0_4px_hsl(38_70%_52%/0.1)] transition-all duration-300"
          />
        </div>
        <div className="relative">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-6 py-4 rounded-xl bg-warm-white/80 backdrop-blur-sm border-2 border-gold-light/30 font-body text-foreground placeholder:text-chocolate-light/40 focus:outline-none focus:border-gold focus:shadow-[0_0_0_4px_hsl(38_70%_52%/0.1)] transition-all duration-300"
          />
        </div>
        <div className="relative">
          <input
            type="tel"
            placeholder="WhatsApp (opcional)"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-6 py-4 rounded-xl bg-warm-white/80 backdrop-blur-sm border-2 border-gold-light/30 font-body text-foreground placeholder:text-chocolate-light/40 focus:outline-none focus:border-gold focus:shadow-[0_0_0_4px_hsl(38_70%_52%/0.1)] transition-all duration-300"
          />
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={submitted}
        className={`w-full mt-6 py-5 rounded-xl font-display text-lg tracking-wide transition-all duration-500 shadow-[0_8px_30px_-8px_hsl(25_55%_25%/0.4)] hover:shadow-[0_14px_40px_-8px_hsl(25_55%_25%/0.5)] ${
          submitted
            ? "bg-sage-deep text-warm-white"
            : "bg-chocolate text-primary-foreground"
        }`}
      >
        {submitted ? "✨ Cadastro realizado com sucesso!" : "🐣 Garantir minha Pré-Venda Exclusiva"}
      </motion.button>

      <p className="text-center mt-4 font-elegant text-sm text-chocolate-light/50">
        🔒 Seus dados estão seguros · Vagas limitadas · Sem compromisso
      </p>
    </motion.form>
  );
};

export default LeadForm;
