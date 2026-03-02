const Footer = () => {
  return (
    <footer className="py-8 border-t border-accent/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/[0.02] to-transparent pointer-events-none" />
      <div className="section-container text-center relative z-10">
        <p className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">
          © 2026 Om Nikhade · Building scalable systems for <span className="font-semibold text-foreground">real business impact</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
