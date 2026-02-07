import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[92vh] flex items-center relative overflow-hidden">
      {/* Aesthetic background effects */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      <div className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-accent/[0.03] blur-3xl" />
      <div className="absolute bottom-20 left-[10%] w-56 h-56 rounded-full bg-accent/[0.02] blur-3xl" />

      <div className="section-container w-full pt-20 pb-12 md:pt-0 relative">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/[0.08] text-accent rounded-full text-xs font-semibold mb-6 animate-fade-up border border-accent/[0.12]">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              Open to opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-foreground leading-[1.1] mb-4 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Hi, I'm{" "}
              <span className="gradient-text">Om Nikhade</span>
            </h1>

            <p className="text-lg text-muted-foreground font-medium mb-3 animate-fade-up" style={{ animationDelay: "200ms" }}>
              Full-Stack Developer · GTM Engineer
            </p>

            <p className="text-muted-foreground leading-relaxed max-w-md mb-8 text-[0.9rem] animate-fade-up" style={{ animationDelay: "300ms" }}>
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
              {/* Glow effect behind image */}
              <div className="absolute -inset-3 rounded-[1.5rem] bg-gradient-to-br from-accent/20 via-accent/5 to-transparent blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-2 border-border/60 shadow-xl">
                <img
                  src={profilePhoto}
                  alt="Om Laxman Nikhade"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative corner accent */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg border-2 border-accent/30 -z-10" />
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-md bg-accent/10 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
