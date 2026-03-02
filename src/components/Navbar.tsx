import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X, Moon, Sun } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    const isDarkMode = savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass backdrop-blur-xl border-b border-accent/10"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-lg font-extrabold text-foreground tracking-tight hover:scale-105 transition-transform duration-300 flex items-center gap-1"
        >
          <span className="text-accent/50 text-sm">&lt;</span>
          Om<span className="gradient-text">.</span>
          <span className="text-accent/50 text-sm">/&gt;</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/50 group-hover:w-full transition-all duration-300 rounded-full" />
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 ml-2 text-muted-foreground hover:text-foreground transition-all rounded-lg hover:bg-muted/50 group"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            ) : (
              <Moon className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            )}
          </button>
          <a href="/resume.pdf" download className="ml-1">
            <Button variant="accent" size="sm" className="rounded-xl shadow-sm">
              <Download className="w-3.5 h-3.5" />
              Resume
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-border/50 animate-fade-up">
          <div className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2.5 text-muted-foreground hover:text-foreground transition-colors rounded-lg text-sm hover:bg-muted/50"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="text-left px-3 py-2.5 text-muted-foreground hover:text-foreground transition-colors rounded-lg text-sm hover:bg-muted/50 flex items-center gap-2"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
            <a href="/resume.pdf" download className="mt-2">
              <Button variant="accent" size="default" className="w-full rounded-xl">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
