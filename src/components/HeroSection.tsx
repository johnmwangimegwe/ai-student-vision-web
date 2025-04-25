
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function HeroSection() {
  const titleReveal = useScrollReveal();
  const subtitleReveal = useScrollReveal({ delay: 200 });
  const buttonsReveal = useScrollReveal({ delay: 400 });
  
  const scrollToFindings = () => {
    const element = document.getElementById("findings");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Animated background waves */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className="from-emerald-500/20" />
                <stop offset="100%" className="to-teal-500/20" />
              </linearGradient>
              <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className="from-teal-500/20" />
                <stop offset="100%" className="to-emerald-500/20" />
              </linearGradient>
            </defs>
            <path
              d="M0,64 C320,96 480,0 640,48 C800,96 960,32 1120,48 L1120,192 L0,192 Z"
              fill="url(#wave1)"
              className="animate-wave-slow"
            />
            <path
              d="M0,96 C160,128 320,64 480,80 C640,96 800,144 960,128 C1120,112 1280,64 1440,80 L1440,192 L0,192 Z"
              fill="url(#wave2)"
              className="animate-wave-fast"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 
              ref={titleReveal.ref as React.RefObject<HTMLHeadingElement>}
              className={`text-4xl md:text-6xl font-bold leading-tight transition-all duration-700 ${
                titleReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              Students' Perceptions and Insights on the Role of AI in Education
            </h1>

            <p 
              ref={subtitleReveal.ref as React.RefObject<HTMLParagraphElement>}
              className={`text-xl md:text-2xl text-muted-foreground max-w-2xl transition-all duration-700 ${
                subtitleReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              Understanding how students perceive AI's impact on learning processes, teaching methodologies, and administrative systems in education.
            </p>

            <div 
              ref={buttonsReveal.ref as React.RefObject<HTMLDivElement>}
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
                buttonsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700"
                asChild
              >
                <a 
                  href="https://www.canva.com/design/DAGlh-BLYCY/QBMthFfaFP-pFnD-oyXOJQ/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the Report
                </a>
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToFindings}>
                Explore Findings <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative w-full aspect-square rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 animate-pulse-gentle flex items-center justify-center">
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-emerald-500/30 to-teal-500/30 animate-spin-slow" />
              <span className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                AI + EDU
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
