import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const education = [
  {
    degree: "B.Tech in Information Technology",
    institution: "SVKM IOT Dhule – DBATU University",
    score: "CGPA: 7.8 / 10",
    period: "Current",
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

        <div className="space-y-3 max-w-2xl">
          {education.map((edu, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="flex items-baseline justify-between gap-4 py-3 border-b border-border last:border-0">
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground text-sm">{edu.degree}</h3>
                  <p className="text-muted-foreground text-xs mt-0.5">{edu.institution}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-xs font-medium text-accent">{edu.score}</span>
                  <p className="text-xs text-muted-foreground">{edu.period}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
