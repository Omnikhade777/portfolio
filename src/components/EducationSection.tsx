import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Information Technology",
    institution: "SVKM IOT Dhule – DBATU University",
    score: "CGPA: 7.8 / 10 (Till Date)",
    period: "Current",
  },
  {
    degree: "HSC",
    institution: "Mahatma Jyotirao Phule Junior College, Paras (Akola)",
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

        <div className="space-y-6 max-w-3xl">
          {education.map((edu, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="flex gap-4 p-5 rounded-xl bg-card border border-border card-shadow">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground font-medium">{edu.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">{edu.institution}</p>
                  <p className="text-accent text-sm font-medium mt-1">{edu.score}</p>
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
