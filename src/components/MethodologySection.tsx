
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function MethodologySection() {
  const titleReveal = useScrollReveal();
  const dashboardReveal = useScrollReveal({ delay: 300 });
  
  return (
    <section id="methodology" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div
          ref={titleReveal.ref as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 ${
            titleReveal.isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Methodology</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Our research approach focused on gathering and analyzing student perspectives on AI in education.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Data Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <p>91 second and third-year undergraduate students surveyed through targeted social media outreach.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Used Excel pivot tables and statistical methods to analyze responses and generate insights.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Visualization</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Created comprehensive dashboards with charts and graphs to present findings clearly.</p>
              </CardContent>
            </Card>
          </div>

          <div 
            ref={dashboardReveal.ref as React.RefObject<HTMLDivElement>}
            className={`mt-8 transition-all duration-700 ${
              dashboardReveal.isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-card rounded-lg shadow-lg overflow-hidden border">
              <div className="aspect-video bg-white dark:bg-gray-800 p-4">
                <img 
                  src="/lovable-uploads/6a3f4c9a-1919-4058-a1c7-180c7a07e15e.png" 
                  alt="AI in Education Research Dashboard"
                  className="w-full h-full object-contain rounded"
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://www.canva.com/design/DAGlh-BLYCY/QBMthFfaFP-pFnD-oyXOJQ/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Read the Full Report →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
