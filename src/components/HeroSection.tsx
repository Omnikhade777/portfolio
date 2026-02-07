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
    <section className="min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(221_83%_53%/0.04),_transparent_50%)]" />

      <div className="section-container w-full pt-20 pb-12 md:pt-0">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-14 items-center">
          {/* Text content */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/8 text-accent rounded-full text-xs font-medium mb-5 animate-fade-up">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              Open to opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.15] mb-3 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Om Laxman<br />
              <span className="gradient-text">Nikhade</span>
            </h1>

            <p className="text-base text-muted-foreground font-medium mb-3 animate-fade-up" style={{ animationDelay: "200ms" }}>
              Full-Stack Developer · GTM Engineer Intern
            </p>

            <p className="text-muted-foreground leading-relaxed max-w-md mb-6 text-[0.925rem] animate-fade-up" style={{ animationDelay: "300ms" }}>
              Building SaaS products for finance teams — frontend interfaces, backend systems, and AI-driven automation.
            </p>

            <div className="flex flex-wrap gap-2.5 animate-fade-up" style={{ animationDelay: "400ms" }}>
              <Button variant="hero" size="default" onClick={scrollToProjects}>
                View Projects
                <ArrowDown className="w-3.5 h-3.5" />
              </Button>
              <a href="/resume.pdf" download>
                <Button variant="hero-outline" size="default">
                  <Download className="w-3.5 h-3.5" />
                  Resume
                </Button>
              </a>
              <Button variant="ghost" size="default" onClick={scrollToContact}>
                <Mail className="w-3.5 h-3.5" />
                Contact
              </Button>
            </div>
          </div>

          {/* Profile image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="relative">
              <div className="w-52 h-52 sm:w-60 sm:h-60 lg:w-64 lg:h-64 rounded-2xl overflow-hidden card-shadow border border-border">
                <img
                  src={profilePhoto}
                  alt="Om Laxman Nikhade - Full-Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-14 h-14 rounded-xl bg-accent/8 -z-10" />
              <div className="absolute -top-2 -left-2 w-10 h-10 rounded-lg border-2 border-accent/15 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
