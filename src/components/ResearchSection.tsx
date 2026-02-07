import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { FileText } from "lucide-react";

const ResearchSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading title="Publication" />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="max-w-2xl flex items-start gap-3 p-4 rounded-xl bg-card border border-border card-shadow">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/8 flex items-center justify-center mt-0.5">
              <FileText className="w-4 h-4 text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground leading-snug">
                Enhanced Image Captioning with Deep Learning: Leveraging Attention Mechanism for Improved Image Description
              </h3>
              <p className="text-muted-foreground text-xs mt-1">
                GRENZE International Journal of Engineering & Technology · Vol. 11, No. 2, 2025
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ResearchSection;
