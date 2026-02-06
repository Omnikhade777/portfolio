import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";

const caseStudy = {
  title: "CFO Intent Radar",
  overview:
    "AI-powered intent detection platform designed for CFOs and finance teams to identify buying intent signals and support go-to-market decision-making.",
  problem:
    "Finance and sales teams struggle to identify real buying intent signals from large volumes of unstructured data. Manual analysis is time-consuming and often results in missed opportunities.",
  solution:
    "Built an end-to-end system using React.js dashboards, Node.js backend services, and AI-driven automation to detect, analyze, and surface intent signals aligned with business requirements.",
  role: [
    "Designed and built frontend dashboards",
    "Developed backend APIs and workflows",
    "Implemented AI automation for intent classification",
    "Worked closely with product and sales teams",
  ],
  architecture: [
    { label: "Frontend", detail: "React.js with TypeScript and Tailwind CSS" },
    { label: "Backend", detail: "Node.js with Express.js" },
    { label: "Database", detail: "PostgreSQL with Prisma ORM" },
    { label: "AI Layer", detail: "Automation layer for intent detection and classification" },
  ],
  features: [
    "CFO intent signal detection",
    "Automated data processing workflows",
    "Business-focused insights dashboard",
    "Scalable backend services",
  ],
  impact: [
    "Improved visibility into CFO buying intent",
    "Enabled faster GTM decision-making",
    "Reduced manual analysis through automation",
  ],
  techStack: [
    "React.js",
    "Tailwind CSS",
    "TypeScript",
    "Node.js",
    "Prisma",
    "PostgreSQL",
    "AI Automation",
  ],
};

const CaseStudy = () => {
  const scrollToContact = () => {
    // Navigate to home page contact section
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Top bar */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md nav-shadow">
        <div className="section-container flex items-center h-16">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      <article className="section-container py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <AnimatedSection>
            <div className="mb-12">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Case Study</span>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                {caseStudy.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>
          </AnimatedSection>

          {/* Tech Stack pills */}
          <AnimatedSection delay={100}>
            <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-border">
              {caseStudy.techStack.map((t) => (
                <span key={t} className="px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Problem */}
          <AnimatedSection delay={150}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Problem Statement</h2>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.problem}</p>
            </section>
          </AnimatedSection>

          {/* Solution */}
          <AnimatedSection delay={200}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
            </section>
          </AnimatedSection>

          {/* My Role */}
          <AnimatedSection delay={250}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">My Role</h2>
              <ul className="space-y-2">
                {caseStudy.role.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </AnimatedSection>

          {/* Architecture */}
          <AnimatedSection delay={300}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Architecture</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {caseStudy.architecture.map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-card border border-border card-shadow">
                    <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-muted-foreground text-sm">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* Key Features */}
          <AnimatedSection delay={350}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
              <ul className="space-y-2">
                {caseStudy.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </AnimatedSection>

          {/* Impact */}
          <AnimatedSection delay={400}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Impact</h2>
              <div className="space-y-3">
                {caseStudy.impact.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 border border-accent/10">
                    <span className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <p className="text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* CTAs */}
          <AnimatedSection delay={450}>
            <div className="flex flex-wrap gap-3 pt-8 border-t border-border">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
              <Link to="/#contact">
                <Button variant="hero-outline" size="lg">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </article>
    </main>
  );
};

export default CaseStudy;
