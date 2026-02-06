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
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(174_60%_40%/0.05),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(220_20%_12%/0.03),_transparent_50%)]" />

      <div className="section-container w-full pt-24 pb-16 md:pt-0">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Om Laxman<br />
              <span className="gradient-text">Nikhade</span>
            </h1>

            <p className="text-lg text-muted-foreground font-medium mb-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
              Node.js & React.js Developer | GTM Engineer Intern
            </p>

            <p className="text-muted-foreground leading-relaxed max-w-lg mb-8 animate-fade-up" style={{ animationDelay: "300ms" }}>
              Node.js & React.js Developer working on real-world SaaS products for finance teams. Experienced in building frontend interfaces, backend systems, and AI-driven automation to solve business problems.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "400ms" }}>
              <Button variant="hero" size="lg" onClick={scrollToProjects}>
                View Projects
                <ArrowDown className="w-4 h-4" />
              </Button>
              <a href="/resume.pdf" download>
                <Button variant="hero-outline" size="lg">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
              <Button variant="ghost" size="lg" onClick={scrollToContact}>
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden card-shadow border border-border">
                <img
                  src={profilePhoto}
                  alt="Om Laxman Nikhade - Node.js & React.js Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-xl bg-accent/10 -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-xl border-2 border-accent/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
