import avecLogo from "@/assets/avec-logo.png";

const Footer = () => (
  <footer className="py-10 bg-cream/50 border-t border-gold-light/10">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <img src={avecLogo} alt="Avec" className="h-8 w-auto mx-auto mb-3 opacity-60" />
      <p className="font-elegant text-sm text-chocolate-light/40 tracking-wide">
        © 2026 Avec · Todos os direitos reservados
      </p>
    </div>
  </footer>
);

export default Footer;
