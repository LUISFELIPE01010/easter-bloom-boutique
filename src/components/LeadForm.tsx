import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone } from "lucide-react";

const LeadForm = ({ id = "lead-form" }: { id?: string }) => {
  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", whatsapp: "" });
  };

  const inputClass =
    "w-full pl-12 pr-5 py-4 rounded-2xl bg-warm-white/80 backdrop-blur-sm border border-secondary/25 font-body text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-secondary focus:shadow-[0_0_0_3px_hsl(210_35%_43%/0.1)] transition-all duration-300";

  return (
    <form id={id} onSubmit={handleSubmit} className="w-full space-y-3">
      <div className="relative">
        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-chocolate-light/30" strokeWidth={1.5} />
        <input
          type="text"
          placeholder="Seu nome"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClass}
        />
      </div>
      <div className="relative">
        <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-chocolate-light/30" strokeWidth={1.5} />
        <input
          type="tel"
          placeholder="WhatsApp"
          required
          value={formData.whatsapp}
          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
          className={inputClass}
        />
      </div>
      <div className="relative">
        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-chocolate-light/30" strokeWidth={1.5} />
        <input
          type="email"
          placeholder="E-mail"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClass}
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={submitted}
        className={`w-full mt-2 py-4 rounded-2xl font-display text-lg tracking-wide transition-all duration-500 shadow-[0_8px_25px_-8px_hsl(25_55%_25%/0.35)] hover:shadow-[0_12px_35px_-8px_hsl(25_55%_25%/0.45)] ${
          submitted
            ? "bg-sage-deep text-warm-white"
            : "bg-chocolate text-primary-foreground"
        }`}
      >
        {submitted ? "✨ Cadastro realizado!" : "Entrar para o Grupo VIP →"}
      </motion.button>

      <p className="text-center mt-3 font-elegant text-sm text-chocolate-light/40">
        Seus dados estão seguros · Vagas limitadas
      </p>
    </form>
  );
};

export default LeadForm;
