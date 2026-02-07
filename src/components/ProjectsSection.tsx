import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Star, ExternalLink } from "lucide-react";

const featuredProject = {
  title: "CFO Intent Radar",
  description:
    "AI-powered intent detection platform for CFOs and finance teams — surfaces buying intent signals to support go-to-market decisions.",
  tech: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "AI Automation"],
};

const otherProjects = [
  {
    title: "Naukri.com – Job Portal",
    description: "Full-stack job portal with role-based access. Admins manage listings and track applications; candidates apply, save jobs, and get recommendations.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Thinkory.com – Blogging Platform",
    description: "Blog platform with clean writing interface, powered by serverless APIs for fast, scalable performance.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Cloudflare Workers", "Hono.js"],
    link: "#",
  },
  {
    title: "Digital Wallet App",
    description: "Paytm-inspired digital wallet enabling registration, balance management, and secure money transfers.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    link: "#",
  },
  {
    title: "YouTube Clone",
    description: "Video streaming platform with config-driven UI, dynamically rendering categories and content via APIs.",
    tech: ["React.js", "Tailwind CSS"],
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            title="Projects"
            subtitle="Real-world applications built with modern tech."
          />
        </AnimatedSection>

        {/* Featured project */}
        <AnimatedSection delay={100}>
          <div className="mb-8 p-6 md:p-8 rounded-2xl bg-card border border-accent/15 card-shadow card-glow relative overflow-hidden">
            {/* Gradient accent strip */}
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'var(--gradient-accent)' }} />
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/[0.04] rounded-bl-[5rem]" />

            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Featured Project</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                {featuredProject.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mb-5">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {featuredProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-semibold bg-accent/[0.08] text-accent rounded-full border border-accent/[0.1]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link to="/case-study/cfo-intent-radar">
                <Button variant="hero-accent" size="lg">
                  View Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Other projects grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {otherProjects.map((project, i) => (
            <AnimatedSection key={i} delay={150 + i * 80}>
              <div className="group p-5 rounded-2xl bg-card border border-border card-shadow h-full flex flex-col transition-all duration-300 hover:border-accent/20">
                <div className="flex items-start justify-between mb-2.5">
                  <h3 className="text-sm font-bold text-foreground group-hover:text-accent transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors p-1 flex-shrink-0 opacity-0 group-hover:opacity-100"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[0.68rem] font-medium text-muted-foreground bg-secondary rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
