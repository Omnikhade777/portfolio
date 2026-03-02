import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useTypewriter } from "@/hooks/useTypewriter";

const HeroSection = () => {
  const { displayedText } = useTypewriter({
    text: "Om Nikhade",
    speed: 80,
    delay: 300,
  });
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[92vh] flex items-center relative overflow-hidden">
      {/* Subtle code grid background */}
      <div className="absolute inset-0 opacity-[0.02] code-grid-bg" />
      
      {/* Animated background effects */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      <div className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-gradient-to-br from-accent/20 to-accent/[0.02] blur-3xl animate-float" />
      <div className="absolute bottom-20 left-[10%] w-56 h-56 rounded-full bg-gradient-to-tr from-purple-500/10 via-accent/5 to-transparent blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl opacity-50" />

      <div className="section-container w-full py-12 md:py-20 relative">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/[0.08] text-accent rounded-full text-xs font-semibold mb-6 animate-fade-up border border-accent/[0.12]">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              Open to opportunities
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.1] mb-3 animate-fade-up min-h-[1.3em]" style={{ animationDelay: "100ms" }}>
              Hi, I'm{" "}
              <span className="gradient-text inline-block">
                {displayedText}
                {displayedText.length < "Om Nikhade".length && (
                  <span className="typewriter-cursor" />
                )}
              </span>
            </h1>

            <p className="text-base text-muted-foreground font-medium mb-2 animate-fade-up" style={{ animationDelay: "200ms" }}>
              Full-Stack Developer · GTM Engineer
            </p>

            <p className="text-muted-foreground leading-relaxed max-w-md mb-6 text-sm animate-fade-up" style={{ animationDelay: "300ms" }}>
              Building SaaS products for finance teams — frontend interfaces, backend systems, and AI-driven automation.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "400ms" }}>
              <Button variant="hero" size="lg" onClick={scrollToProjects}>
                View Projects
                <ArrowDown className="w-4 h-4" />
              </Button>
              <a href="/resume.pdf" download>
                <Button variant="hero-outline" size="lg">
                  <Download className="w-4 h-4" />
                  Resume
                </Button>
              </a>
              <Button variant="ghost" size="lg" onClick={scrollToContact}>
                <Mail className="w-4 h-4" />
                Contact
              </Button>
            </div>
          </div>

          {/* Profile image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="relative group">
              {/* Enhanced glow effect behind image */}
              <div className="absolute -inset-6 rounded-[1.5rem] bg-gradient-to-br from-accent/30 via-accent/10 to-transparent blur-3xl opacity-70 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
              <div className="absolute -inset-3 rounded-[1.5rem] bg-gradient-to-tr from-purple-500/20 to-accent/10 blur-2xl opacity-50 group-hover:opacity-70 transition-all duration-500" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-2 border-accent/30 shadow-2xl ring-1 ring-accent/20">
                <img
                  src={profilePhoto}
                  alt="Om Laxman Nikhade"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
              {/* Decorative corner accents */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg border-2 border-accent/50 -z-10 group-hover:border-accent transition-colors" />
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-md bg-gradient-to-br from-accent to-accent/50 -z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
