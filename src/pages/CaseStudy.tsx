import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Mail } from "lucide-react";

const caseStudy = {
  title: "CFO Intent Radar",
  overview:
    "AI-powered intent detection platform for CFOs and finance teams — surfaces buying intent signals to drive go-to-market decisions.",
  problem:
    "Finance and sales teams struggle to identify real buying intent from large volumes of unstructured data, leading to missed opportunities and slow decision-making.",
  solution:
    "Built an end-to-end system with React.js dashboards, Node.js services, and AI-driven automation to detect, analyze, and surface intent signals aligned with business goals.",
  role: [
    "Designed and built frontend dashboards",
    "Developed backend APIs and workflows",
    "Implemented AI automation for intent classification",
    "Collaborated with product and sales teams",
  ],
  architecture: [
    { label: "Frontend", detail: "React.js + TypeScript + Tailwind CSS" },
    { label: "Backend", detail: "Node.js + Express.js" },
    { label: "Database", detail: "PostgreSQL + Prisma ORM" },
    { label: "AI Layer", detail: "Intent detection & classification" },
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
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-gradient-to-br from-accent/10 to-accent/[0.02] blur-3xl opacity-50" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl opacity-50" />
      
      <nav className="sticky top-0 z-50 glass backdrop-blur-xl border-b border-accent/10">
        <div className="section-container flex items-center h-14">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-all duration-300 hover:gap-3">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </Link>
        </div>
      </nav>

      <article className="section-container py-10 md:py-16 relative z-10">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <div className="mb-10">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Case Study</span>
              <h1 className="text-2xl md:text-4xl font-bold text-foreground mt-2 mb-3">
                {caseStudy.title}
              </h1>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={80}>
            <div className="flex flex-wrap gap-1.5 mb-10 pb-8 border-b border-border">
              {caseStudy.techStack.map((t) => (
                <span key={t} className="px-2.5 py-0.5 text-xs font-medium bg-accent/8 text-accent rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={120}>
            <section className="mb-8">
              <h2 className="text-lg font-bold text-foreground mb-2">Problem</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{caseStudy.problem}</p>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={160}>
            <section className="mb-8">
              <h2 className="text-lg font-bold text-foreground mb-2">Solution</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{caseStudy.solution}</p>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <section className="mb-8">
              <h2 className="text-lg font-bold text-foreground mb-2">My Role</h2>
              <ul className="space-y-1.5">
                {caseStudy.role.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={240}>
            <section className="mb-8">
              <h2 className="text-lg font-bold text-foreground mb-3">Architecture</h2>
              <div className="grid grid-cols-2 gap-3">
                {caseStudy.architecture.map((item, i) => (
                  <div key={i} className="p-3 rounded-lg bg-card border border-border card-shadow">
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-muted-foreground text-xs">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={280}>
            <section className="mb-8">
              <h2 className="text-lg font-bold text-foreground mb-2">Key Features</h2>
              <ul className="space-y-1.5">
                {caseStudy.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={320}>
            <section className="mb-8">
              <h2 className="text-lg font-bold text-foreground mb-3">Impact</h2>
              <div className="space-y-2">
                {caseStudy.impact.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-accent/5 border border-accent/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <p className="text-foreground text-sm font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={360}>
            <div className="flex flex-wrap gap-2.5 pt-6 border-t border-border">
              <Link to="/#contact">
                <Button variant="hero" size="default">
                  <Mail className="w-3.5 h-3.5" />
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
