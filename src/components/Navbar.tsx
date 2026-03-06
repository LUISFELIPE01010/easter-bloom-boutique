import avecLogo from "@/assets/avec-logo.png";

const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () =>
<nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(25_55%_18%/0.9)] backdrop-blur-md border-b border-gold/10">
    <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
      <a href="#" className="block">
        <img alt="Avec" className="h-9 w-auto brightness-200" src="/lovable-uploads/83dd04a3-6215-4f3e-9615-82154cf90e6f.png" />
      </a>
      <button
      onClick={scrollToForm}
      className="px-6 py-2 rounded-full bg-gold text-chocolate font-elegant text-base font-semibold tracking-wide hover:bg-gold-light transition-colors">
      
        Entrar no Grupo VIP
      </button>
    </div>
  </nav>;


export default Navbar;