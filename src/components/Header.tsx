
import { useState } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md border-b z-50 transition-all">
      <div className="container flex items-center justify-between py-3">
        {/* Logo and title */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            AI in Education: Student Perceptions
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("findings")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Findings
          </button>
          <button
            onClick={() => scrollToSection("methodology")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Methodology
          </button>
          <a
            href="https://www.kaggle.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            Dataset Source: Kaggle
          </a>
          <div className="flex items-center space-x-3">
            <a
              href="mailto:johnmwangimegwe@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-3 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("findings")}
              className="text-foreground hover:text-primary py-2 transition-colors"
            >
              Findings
            </button>
            <button
              onClick={() => scrollToSection("methodology")}
              className="text-foreground hover:text-primary py-2 transition-colors"
            >
              Methodology
            </button>
            <a
              href="https://www.kaggle.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary py-2 transition-colors"
            >
              Dataset Source: Kaggle
            </a>
            <div className="flex items-center space-x-6 py-2">
              <a
                href="mailto:johnmwangimegwe@gmail.com"
                aria-label="Email"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
