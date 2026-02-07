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
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "Prisma", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Thinkory.com – Blogging Platform",
    description: "Blog platform with a clean writing interface, powered by serverless APIs for fast, scalable performance.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Cloudflare Workers", "Hono.js"],
    link: "#",
  },
  {
    title: "Digital Wallet App",
    description: "Paytm-inspired wallet enabling registration, balance management, and secure money transfers.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    link: "#",
  },
  {
    title: "YouTube Clone",
    description: "Video streaming platform with config-driven UI, using APIs to dynamically render categories and content.",
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
          <div className="mb-8 p-5 md:p-6 rounded-xl bg-card border-2 border-accent/20 card-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-[3rem]" />
            <div className="relative">
              <div className="flex items-center gap-1.5 mb-3">
                <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">Featured</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                {featuredProject.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mb-4">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {featuredProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 text-xs font-medium bg-accent/8 text-accent rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link to="/case-study/cfo-intent-radar">
                <Button variant="hero-accent" size="default">
                  View Case Study
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Other projects grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {otherProjects.map((project, i) => (
            <AnimatedSection key={i} delay={150 + i * 80}>
              <div className="group p-4 md:p-5 rounded-xl bg-card border border-border card-shadow h-full flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors p-0.5 flex-shrink-0"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed flex-1 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[0.65rem] font-medium text-muted-foreground bg-secondary rounded"
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
