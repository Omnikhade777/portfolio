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
          <div className="max-w-2xl p-5 md:p-6 rounded-2xl modern-card relative overflow-hidden\">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.08] via-transparent to-accent/[0.04] pointer-events-none" />
            <p className="text-muted-foreground leading-[1.7] text-sm relative z-10\">
              B.Tech IT student at SVKM IOT Dhule (DBATU) with hands-on experience building production-grade applications using React.js and Node.js. Currently working as a <span className="text-foreground font-semibold bg-gradient-to-r from-accent/20 to-transparent px-1.5 py-0.5 rounded\">GTM Engineer Intern</span> — translating business requirements into scalable software for finance teams. Focused on <span className="text-foreground font-semibold bg-gradient-to-r from-accent/20 to-transparent px-1.5 py-0.5 rounded\">AI-driven workflows</span>, automation, and systems that create real impact.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
