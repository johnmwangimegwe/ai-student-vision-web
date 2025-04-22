
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function HeroSection() {
  const titleReveal = useScrollReveal();
  const subtitleReveal = useScrollReveal({ delay: 200 });
  const buttonsReveal = useScrollReveal({ delay: 400 });
  const previewReveal = useScrollReveal({ delay: 600 });
  
  const scrollToFindings = () => {
    const element = document.getElementById("findings");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-emerald-500/10 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-teal-500/10 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-emerald-500/10 to-transparent"></div>
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-teal-500/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animation placeholder - would integrate with a real Lottie animation */}
          <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center animate-pulse-gentle">
            <span className="text-4xl text-white">AI + EDU</span>
          </div>

          <h1 
            ref={titleReveal.ref as React.RefObject<HTMLHeadingElement>}
            className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent transition-all duration-700 ${
              titleReveal.isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            How Do Students Perceive AI in Education?
          </h1>

          <p 
            ref={subtitleReveal.ref as React.RefObject<HTMLParagraphElement>}
            className={`text-xl md:text-2xl mb-8 text-muted-foreground transition-all duration-700 ${
              subtitleReveal.isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            Exploring student attitudes, knowledge levels, and emotional responses to AI integration in academic environments.
          </p>

          <div 
            ref={buttonsReveal.ref as React.RefObject<HTMLDivElement>}
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
              buttonsReveal.isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button onClick={scrollToFindings} size="lg" className="gap-2">
              Explore Findings <ArrowDown className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Read Full Report
            </Button>
          </div>

          {/* Preview section */}
          <div 
            ref={previewReveal.ref as React.RefObject<HTMLDivElement>}
            className={`mt-16 transition-all duration-700 ${
              previewReveal.isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-2xl font-semibold mb-4">Preview Report</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="aspect-video bg-card rounded-lg shadow-lg overflow-hidden border"
                >
                  <div className="h-full w-full bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-800/20 flex items-center justify-center">
                    <span className="text-lg font-medium text-muted-foreground">
                      Report Screenshot {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
