import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const education = [
  {
    degree: "B.Tech in Information Technology",
    institution: "SVKM IOT Dhule – DBATU University",
    score: "CGPA: 7.8",
    period: "Present",
  },
  {
    degree: "HSC",
    institution: "Mahatma Jyotirao Phule Junior College, Paras",
    score: "75.33%",
    period: "2022",
  },
  {
    degree: "SSC",
    institution: "Amrutkalash Vidyalaya, Akola",
    score: "86.20%",
    period: "2020",
  },
];

const EducationSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading title="Education" />
        </AnimatedSection>

        <div className="max-w-2xl relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-6">
            {education.map((edu, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="flex gap-5 relative">
                  {/* Timeline dot */}
                  <div className="relative z-10 mt-1.5">
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-accent bg-background" />
                  </div>
                  <div className="flex-1 pb-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-semibold text-foreground text-[0.9rem]">{edu.degree}</h3>
                      <span className="text-xs text-muted-foreground font-medium flex-shrink-0">{edu.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-0.5">{edu.institution}</p>
                    <span className="inline-block mt-1.5 text-xs font-semibold text-accent bg-accent/[0.08] px-2 py-0.5 rounded-full">{edu.score}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
