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
    skills: ["Node.js (Express.js)", "Prisma", "Hono.js"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "AI & Automation",
    skills: ["Workflow automation", "Intent detection"],
  },
  {
    title: "Tools & Cloud",
    skills: ["Git", "Docker", "Postman", "AWS EC2"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding section-alt-bg">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading title="Skills" />
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, i) => (
            <AnimatedSection key={i} delay={i * 60}>
              <div className="p-4 rounded-2xl bg-card border border-border card-shadow h-full group hover:border-accent/20 transition-colors">
                <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs bg-secondary text-secondary-foreground rounded-lg font-medium"
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
