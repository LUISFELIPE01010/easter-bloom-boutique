import avecLogo from "@/assets/avec-logo.png";

const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-gold-light/20">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#" className="block">
        <img src={avecLogo} alt="Avec" className="h-10 w-auto" />
      </a>
      <div className="hidden md:flex items-center gap-8 font-elegant text-lg text-chocolate-light">
        <a href="#produtos" className="hover:text-gold transition-colors">Produtos</a>
        <a href="#evento" className="hover:text-gold transition-colors">O Evento</a>
        <a href="#depoimentos" className="hover:text-gold transition-colors">Depoimentos</a>
      </div>
      <button
        onClick={scrollToForm}
        className="px-6 py-2.5 rounded-full bg-chocolate text-primary-foreground font-elegant text-base tracking-wide hover:bg-chocolate-light transition-colors"
      >
        Pré-venda
      </button>
    </div>
  </nav>
);

export default Navbar;
