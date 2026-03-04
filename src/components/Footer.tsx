import avecLogo from "@/assets/avec-logo.png";

const Footer = () => (
  <footer className="relative py-16 bg-cream overflow-hidden">
    {/* Soft ambient */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-light/30 to-transparent" />
    <div className="absolute bottom-10 left-[10%] w-40 h-40 rounded-full bg-blush/15 blur-[80px]" />
    <div className="absolute top-10 right-[15%] w-32 h-32 rounded-full bg-sage/10 blur-[60px]" />
    
    <div className="max-w-4xl mx-auto px-6 text-center relative">
      <img src={avecLogo} alt="Avec" className="h-12 w-auto mx-auto mb-4" />
      <p className="font-elegant text-lg text-chocolate-light/50 mb-8">
        Aromas que contam histórias
      </p>
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-light/30" />
        <span className="text-gold-light/40 text-sm">✦</span>
        <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-light/30" />
      </div>
      <div className="flex flex-wrap justify-center gap-6 font-elegant text-chocolate-light/40 text-sm">
        <span>© 2026 Avec Aromas</span>
        <span>·</span>
        <span>Feito com amor e cera vegetal</span>
        <span>·</span>
        <span>São Paulo, Brasil</span>
      </div>
    </div>
  </footer>
);

export default Footer;
