import avecLogo from "@/assets/avec-logo.png";

const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () =>
<nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(25_55%_18%/0.9)] backdrop-blur-md border-b border-gold/10">
    <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-center">
      <img src={avecLogo} alt="Avec" className="h-10" />
    </div>





  
  </nav>;


export default Navbar;