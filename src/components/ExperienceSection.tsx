import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const ExperienceSection = () => {
  const responsibilities = [
    "Building software solutions for CFOs and finance leaders",
    "Developing Node.js backend services and React.js dashboards",
    "AI-powered intent signal detection and automation",
    "Collaborating with product and sales teams on GTM strategies",
  ];

  return (
    <section id="experience" className="section-padding section-alt-bg">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading title="Experience" />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="max-w-2xl p-5 rounded-xl bg-card border border-border card-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
              <h3 className="text-base font-bold text-foreground">GTM Engineer Intern</h3>
              <span className="text-xs font-medium text-accent bg-accent/8 px-2 py-0.5 rounded-full w-fit">Present</span>
            </div>
            <p className="text-muted-foreground text-sm mb-3">SaleupCFO</p>

            <ul className="space-y-1.5">
              {responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExperienceSection;
