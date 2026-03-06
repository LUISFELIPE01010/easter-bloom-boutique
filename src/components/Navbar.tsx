import avecLogo from "@/assets/avec-logo.png";

const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/90 backdrop-blur-sm border-b border-gold-light/15">
    <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
      <a href="#" className="block">
        <img src={avecLogo} alt="Avec" className="h-9 w-auto" />
      </a>
      <button
        onClick={scrollToForm}
        className="px-6 py-2 rounded-full bg-chocolate text-primary-foreground font-elegant text-base tracking-wide hover:bg-chocolate-light transition-colors"
      >
        Entrar no Grupo VIP
      </button>
    </div>
  </nav>
);

export default Navbar;
