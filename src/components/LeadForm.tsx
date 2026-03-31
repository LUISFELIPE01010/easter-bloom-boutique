import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, ShieldCheck, Users, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/27011460/un5ogym/";

interface LeadFormProps {
  id?: string;
  variant?: "default" | "hero";
}

const LeadForm = ({ id = "lead-form", variant = "default" }: LeadFormProps) => {
  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Abre o link imediatamente (no contexto do clique) para evitar bloqueio de popup no mobile
      window.open("https://grupovipavec.avecaromas.com/entrar-no-grupo/", "_blank");

      fetch(ZAPIER_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp,
          timestamp: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
        }),
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", whatsapp: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      toast({
        title: "Erro",
        description: "Não foi possível enviar seus dados. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isHero = variant === "hero";

  const inputClass = isHero
    ? "w-full pl-12 pr-5 py-4 rounded-2xl bg-black/10 backdrop-blur-sm border border-black/15 font-body text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-black/40 focus:shadow-[0_0_0_3px_rgba(0,0,0,0.08)] transition-all duration-300"
    : "w-full pl-12 pr-5 py-4 rounded-2xl bg-warm-white/80 backdrop-blur-sm border border-gold-light/25 font-body text-foreground placeholder:text-chocolate-light/40 focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_hsl(38_70%_52%/0.1)] transition-all duration-300";

  const iconClass = isHero ? "text-foreground z-10" : "text-chocolate-light/30";

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
        disabled={submitted || isLoading}
        className={`w-full mt-2 py-4 rounded-2xl font-body text-lg font-semibold tracking-wide transition-all duration-500 ${
          submitted
            ? "bg-sage-deep text-white"
            : isHero
              ? "bg-chocolate text-white font-bold shadow-[0_8px_25px_-8px_rgba(0,0,0,0.3)] hover:brightness-95"
              : "bg-chocolate text-white shadow-[0_8px_25px_-8px_hsl(25_55%_25%/0.35)] hover:shadow-[0_12px_35px_-8px_hsl(25_55%_25%/0.45)]"
        }`}
      >
        {submitted ? "✨ Cadastro realizado!" : isLoading ? "Enviando..." : "Receber acesso VIP"}
      </motion.button>

      <div className={`grid grid-cols-3 gap-4 mt-4 ${isHero ? "text-foreground/50" : "text-chocolate-light/50"}`}>
        {[
          { icon: Sparkles, label: "Gratuito" },
          { icon: ShieldCheck, label: "Dados seguros" },
          { icon: Users, label: "+1700 pessoas" },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-1.5 py-2 text-center">
            <item.icon size={15} strokeWidth={1.5} />
            <span className="font-body text-xs tracking-wide whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>
    </form>
  );
};

export default LeadForm;
