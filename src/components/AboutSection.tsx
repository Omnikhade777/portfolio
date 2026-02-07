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
          <div className="max-w-2xl">
            <p className="text-muted-foreground leading-[1.8] text-[0.925rem]">
              B.Tech IT student at SVKM IOT Dhule (DBATU) with hands-on experience building production-grade applications using React.js and Node.js. Currently working as a <span className="text-foreground font-medium">GTM Engineer Intern</span> — translating business requirements into scalable software for finance teams. Focused on <span className="text-foreground font-medium">AI-driven workflows</span>, automation, and systems that create real impact.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
