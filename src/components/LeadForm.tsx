import { useState } from "react";
import { motion } from "framer-motion";

const LeadForm = ({ id = "lead-form" }: { id?: string }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <motion.form
      id={id}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto space-y-4"
    >
      <input
        type="text"
        placeholder="Seu nome"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full px-5 py-3.5 rounded-lg bg-warm-white border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all"
      />
      <input
        type="email"
        placeholder="Seu melhor e-mail"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full px-5 py-3.5 rounded-lg bg-warm-white border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all"
      />
      <input
        type="tel"
        placeholder="WhatsApp (opcional)"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full px-5 py-3.5 rounded-lg bg-warm-white border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all"
      />
      <button
        type="submit"
        className="w-full py-4 rounded-lg bg-chocolate font-display text-lg tracking-wide text-primary-foreground hover:opacity-90 transition-all shadow-card hover:shadow-elevated"
      >
        {submitted ? "✨ Cadastro realizado!" : "🐣 Garantir minha Pré-Venda"}
      </button>
      <p className="text-center text-sm text-muted-foreground font-body">
        Vagas limitadas · Sem compromisso
      </p>
    </motion.form>
  );
};

export default LeadForm;
