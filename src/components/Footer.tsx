
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted py-6 border-t">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <p className="text-muted-foreground mb-4 md:mb-0">
          © 2024 | Made by John Megwe
        </p>
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
