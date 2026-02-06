import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Star, ExternalLink } from "lucide-react";

const featuredProject = {
  title: "CFO Intent Radar",
  description:
    "AI-powered intent detection platform designed for CFOs and finance teams to identify buying intent signals and support go-to-market decision-making.",
  tech: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "AI Automation"],
  featured: true,
};

const otherProjects = [
  {
    title: "Naukari.com – Job Portal",
    description: "A job portal platform connecting employers with job seekers, featuring search, filtering, and application management.",
    tech: ["React.js", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Thinkory.com – Blogging Platform",
    description: "A modern blogging platform with rich text editing, user authentication, and content management.",
    tech: ["React.js", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Digital Wallet App",
    description: "A digital wallet application for managing transactions, balances, and payment workflows.",
    tech: ["React.js", "Node.js", "Prisma"],
    link: "#",
  },
  {
    title: "YouTube Clone",
    description: "A video streaming platform clone with search, playback, and responsive UI.",
    tech: ["React.js", "Tailwind CSS", "API Integration"],
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
            subtitle="Real-world applications built with modern technologies."
          />
        </AnimatedSection>

        {/* Featured project */}
        <AnimatedSection delay={150}>
          <div className="mb-10 p-6 md:p-8 rounded-xl bg-card border-2 border-accent/20 card-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[4rem]" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">Featured Project</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                {featuredProject.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mb-6">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
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
        <div className="grid sm:grid-cols-2 gap-5">
          {otherProjects.map((project, i) => (
            <AnimatedSection key={i} delay={200 + i * 100}>
              <div className="group p-5 md:p-6 rounded-xl bg-card border border-border card-shadow h-full flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors p-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-medium text-muted-foreground bg-secondary rounded-md"
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
