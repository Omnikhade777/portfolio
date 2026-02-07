import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Code2 } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding section-alt-bg">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading title="Contact" />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="max-w-md space-y-5">
            <div className="space-y-2.5">
              <a
                href="mailto:om.nikhade93226@gmail.com"
                className="flex items-center gap-3 p-3.5 rounded-lg bg-card border border-border card-shadow group hover:border-accent/30 transition-colors"
              >
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-foreground font-medium truncate">om.nikhade93226@gmail.com</span>
              </a>

              <a
                href="tel:+919322422586"
                className="flex items-center gap-3 p-3.5 rounded-lg bg-card border border-border card-shadow group hover:border-accent/30 transition-colors"
              >
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-foreground font-medium">+91 9322422586</span>
              </a>
            </div>

            <div className="flex gap-2">
              <a href="https://github.com/Omnikhade777" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
              </a>
              <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
              </a>
              <a href="https://leetcode.com/your-username" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  <Code2 className="w-4 h-4" />
                  LeetCode
                </Button>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
