import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone } from "lucide-react";

interface LeadFormProps {
  id?: string;
  variant?: "default" | "hero";
}

const LeadForm = ({ id = "lead-form", variant = "default" }: LeadFormProps) => {
  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", whatsapp: "" });
  };

  const isHero = variant === "hero";

  const inputClass = isHero
    ? "w-full pl-12 pr-5 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 font-body text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.08)] transition-all duration-300"
    : "w-full pl-12 pr-5 py-4 rounded-2xl bg-warm-white/80 backdrop-blur-sm border border-gold-light/25 font-body text-foreground placeholder:text-chocolate-light/40 focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_hsl(38_70%_52%/0.1)] transition-all duration-300";

  const iconClass = isHero ? "text-white/30" : "text-chocolate-light/30";

  return (
    <form id={id} onSubmit={handleSubmit} className="w-full space-y-3">
      <div className="relative">
        <User size={18} className={`absolute left-4 top-1/2 -translate-y-1/2 ${iconClass}`} strokeWidth={1.5} />
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
        <Phone size={18} className={`absolute left-4 top-1/2 -translate-y-1/2 ${iconClass}`} strokeWidth={1.5} />
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
        <Mail size={18} className={`absolute left-4 top-1/2 -translate-y-1/2 ${iconClass}`} strokeWidth={1.5} />
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
        style={!submitted && isHero ? { backgroundColor: '#ECE4D2' } : undefined}
        className={`w-full mt-2 py-4 rounded-2xl font-body text-lg font-semibold tracking-wide transition-all duration-500 ${
          submitted
            ? "bg-sage-deep text-warm-white"
            : isHero
              ? "text-chocolate font-bold shadow-[0_8px_25px_-8px_rgba(0,0,0,0.3)] hover:brightness-105"
              : "bg-chocolate text-primary-foreground shadow-[0_8px_25px_-8px_hsl(25_55%_25%/0.35)] hover:shadow-[0_12px_35px_-8px_hsl(25_55%_25%/0.45)]"
        }`}
      >
        {submitted ? "✨ Cadastro realizado!" : "Entrar para o Grupo"}
      </motion.button>

      <p className={`text-center mt-3 font-body text-sm ${isHero ? "text-white/35" : "text-chocolate-light/40"}`}>
        Seus dados estão seguros · Vagas limitadas
      </p>
    </form>
  );
};

export default LeadForm;
