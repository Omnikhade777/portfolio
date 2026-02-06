import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Code2 } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding section-alt-bg">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            title="Get in Touch"
            subtitle="Let's discuss your next project or opportunity."
          />
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="max-w-2xl space-y-6">
            {/* Contact info */}
            <div className="space-y-4">
              <a
                href="mailto:om.nikhade93226@gmail.com"
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border card-shadow group hover:border-accent/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">om.nikhade93226@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919322422586"
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border card-shadow group hover:border-accent/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">+91 9322422586</p>
                </div>
              </a>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://github.com/Omnikhade777" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <Github className="w-5 h-5" />
                  GitHub
                </Button>
              </a>
              <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Button>
              </a>
              <a href="https://leetcode.com/your-username" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <Code2 className="w-5 h-5" />
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
