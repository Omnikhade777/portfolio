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
          <div className="max-w-2xl flex items-start gap-4 p-5 rounded-2xl modern-card relative overflow-hidden group\">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mt-0.5 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all\">
              <FileText className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground leading-snug mb-1">
                Enhanced Image Captioning with Deep Learning
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-2">
                Leveraging Attention Mechanism for Improved Image Description
              </p>
              <span className="text-xs font-medium text-accent bg-accent/[0.08] px-2 py-0.5 rounded-full">
                GRENZE International Journal · Vol. 11, No. 2, 2025
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ResearchSection;
