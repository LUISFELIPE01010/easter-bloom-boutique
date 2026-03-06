import avecLogo from "@/assets/avec-logo.png";

const Footer = () => (
  <footer className="py-10 bg-[hsl(25_55%_15%)] border-t border-gold/10">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <img src={avecLogo} alt="Avec" className="h-8 w-auto mx-auto mb-3 opacity-50 brightness-200" />
      <p className="font-elegant text-sm text-cream/30 tracking-wide">
        © 2026 Avec · Todos os direitos reservados
      </p>
    </div>
  </footer>
);

export default Footer;
