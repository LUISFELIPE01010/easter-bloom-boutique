const Footer = () => (
  <footer className="relative py-16 bg-chocolate overflow-hidden">
    {/* Subtle pattern */}
    <div className="absolute inset-0 opacity-5"
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
    />
    
    <div className="max-w-4xl mx-auto px-6 text-center relative">
      <div className="font-display text-4xl font-bold text-gold-light mb-3">✿ Avec</div>
      <p className="font-elegant text-xl text-primary-foreground/40 mb-8">
        Aromas que contam histórias
      </p>
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-light/30" />
        <span className="text-gold-light/40">✦</span>
        <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-light/30" />
      </div>
      <div className="flex flex-wrap justify-center gap-8 font-elegant text-primary-foreground/30 text-sm">
        <span>© 2026 Avec Aromas</span>
        <span>·</span>
        <span>Feito com amor e cera vegetal 🌿</span>
        <span>·</span>
        <span>São Paulo, Brasil</span>
      </div>
    </div>
  </footer>
);

export default Footer;
