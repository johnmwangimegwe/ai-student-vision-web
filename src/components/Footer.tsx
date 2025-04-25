
import { ArrowUp, Mail, FileText } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted py-6 border-t">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <p className="text-muted-foreground">© 2024 | Made by John Megwe</p>
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:johnmwangimegwe@gmail.com" 
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={16} className="mr-1" />
              <span className="text-sm">johnmwangimegwe@gmail.com</span>
            </a>
            <a 
              href="https://medium.com/@johnmwangimegwe/students-perceptions-and-insights-on-the-role-of-ai-in-education-02274ef5d33b" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
              aria-label="Medium Article"
            >
              <FileText size={16} className="mr-1" />
              <span className="text-sm">Read on Medium</span>
            </a>
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollToTop}
          className="rounded-full"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </footer>
  );
}
