import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Briefcase } from "lucide-react";

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
          <div className="max-w-2xl p-4 md:p-5 rounded-2xl modern-card card-glow relative overflow-hidden\">
            {/* Subtle accent strip */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent\" />

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/[0.08] flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-0.5">
                  <h3 className="text-base font-bold text-foreground">GTM Engineer Intern</h3>
                  <span className="text-xs font-semibold text-accent bg-accent/[0.08] px-2.5 py-0.5 rounded-full w-fit border border-accent/[0.12]">Present</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">SaleupCFO</p>

                <ul className="space-y-2">
                  {responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-muted-foreground text-sm leading-relaxed">
                      <span className="accent-dot mt-1.5" />
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
