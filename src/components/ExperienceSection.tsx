import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const responsibilities = [
    "Building software solutions for CFOs and finance leaders",
    "Developing Node.js backend services and React.js dashboards",
    "Working on AI-powered tools to detect CFO intent signals",
    "Automating business workflows using AI and data pipelines",
    "Collaborating with product and sales teams to support go-to-market strategies",
  ];

  return (
    <section id="experience" className="section-padding section-alt-bg">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading title="Experience" />
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="max-w-3xl p-6 md:p-8 rounded-xl bg-card border border-border card-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="text-xl font-bold text-foreground">GTM Engineer Intern</h3>
                  <span className="text-sm font-medium text-accent">Present</span>
                </div>
                <p className="text-muted-foreground font-medium mb-4">SaleupCFO</p>

                <ul className="space-y-2.5">
                  {responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExperienceSection;
