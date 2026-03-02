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
          <div className="max-w-md space-y-3">
            <div className="space-y-3">
              <a
                href="mailto:om.nikhade93226@gmail.com"
                className="flex items-center gap-3.5 p-4 rounded-2xl modern-card group transition-all duration-300"
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
                className="flex items-center gap-3.5 p-4 rounded-2xl modern-card group transition-all duration-300"
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
              <a
                href="https://www.linkedin.com/in/om-nikhade-91a8a0257/?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="rounded-xl border border-accent/20 hover:border-accent/60 hover:text-accent hover:bg-accent/5 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
              </a>
              <a href="https://leetcode.com/your-username" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="rounded-xl border border-accent/20 hover:border-accent/60 hover:text-accent hover:bg-accent/5 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
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
