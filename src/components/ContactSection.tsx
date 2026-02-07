import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Code2 } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding section-alt-bg">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading title="Get in Touch" subtitle="Open to discussing opportunities and collaborations." />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="max-w-md space-y-5">
            <div className="space-y-3">
              <a
                href="mailto:om.nikhade93226@gmail.com"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-card border border-border card-shadow group hover:border-accent/25 transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-accent/[0.08] flex items-center justify-center group-hover:bg-accent/[0.12] transition-colors">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground font-semibold">Email</p>
                  <p className="text-sm text-foreground font-medium">om.nikhade93226@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919322422586"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-card border border-border card-shadow group hover:border-accent/25 transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-accent/[0.08] flex items-center justify-center group-hover:bg-accent/[0.12] transition-colors">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground font-semibold">Phone</p>
                  <p className="text-sm text-foreground font-medium">+91 9322422586</p>
                </div>
              </a>
            </div>

            <div className="flex gap-2.5 pt-1">
              <a href="https://github.com/Omnikhade777" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="rounded-xl hover:border-accent/30 hover:text-accent transition-colors">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
              </a>
              <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="rounded-xl hover:border-accent/30 hover:text-accent transition-colors">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
              </a>
              <a href="https://leetcode.com/your-username" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="rounded-xl hover:border-accent/30 hover:text-accent transition-colors">
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
