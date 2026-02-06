import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-alt-bg">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading title="About Me" />
        </AnimatedSection>
        <AnimatedSection delay={150}>
          <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              I am a B.Tech Information Technology student at SVKM IOT Dhule (DBATU University) with hands-on experience in React.js and Node.js development.
            </p>
            <p>
              I currently work as a GTM Engineer Intern, collaborating with product and sales teams to translate business and finance requirements into scalable software solutions.
            </p>
            <p>
              My focus is on automation, AI-driven workflows, and building systems that create real business impact.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
