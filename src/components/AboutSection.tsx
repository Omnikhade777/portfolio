import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-alt-bg">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading title="About" />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <div className="max-w-2xl space-y-3 text-muted-foreground leading-relaxed text-[0.935rem]">
            <p>
              B.Tech IT student at SVKM IOT Dhule (DBATU) with hands-on React.js and Node.js experience. Currently a GTM Engineer Intern — translating business requirements into scalable software for finance teams.
            </p>
            <p>
              Focused on AI-driven workflows, automation, and systems that deliver real business impact.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
