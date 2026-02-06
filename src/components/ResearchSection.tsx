import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { FileText } from "lucide-react";

const ResearchSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading title="Research & Publication" />
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="max-w-3xl p-6 md:p-8 rounded-xl bg-card border border-border card-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">
                  Enhanced Image Captioning with Deep Learning: Leveraging Attention Mechanism for Improved Image Description
                </h3>
                <p className="text-muted-foreground text-sm mb-1">
                  Published in GRENZE International Journal of Engineering & Technology
                </p>
                <p className="text-muted-foreground text-sm">
                  Vol. 11, No. 2, 2025
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ResearchSection;
