import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js (Express.js)", "Prisma", "Serverless (Hono.js)"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB (CRUD)"],
  },
  {
    title: "AI & Automation",
    skills: ["AI-driven workflow automation", "Intent signal detection systems"],
  },
  {
    title: "Tools & Cloud",
    skills: ["Git", "GitHub", "Docker", "Postman", "AWS EC2"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding section-alt-bg">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            title="Skills"
            subtitle="Technologies and tools I work with."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="p-5 rounded-xl bg-card border border-border card-shadow h-full">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg font-medium"
                    >
                      {skill}
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

export default SkillsSection;
