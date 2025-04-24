
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function MethodologySection() {
  const titleReveal = useScrollReveal();
  const timelineReveal = useScrollReveal({ delay: 300 });
  const dashboardReveal = useScrollReveal({ delay: 600 });
  
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
            Our research approach combined rigorous data collection with detailed analysis to ensure reliable insights.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div 
            ref={timelineReveal.ref as React.RefObject<HTMLDivElement>}
            className={`relative border-l border-primary/30 pl-8 pb-10 space-y-10 transition-all duration-700 ${
              timelineReveal.isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Data Collection */}
            <div className="relative">
              <div className="absolute -left-11 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Data Collection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    An online survey was distributed through targeted social media groups to 91 second and third-year undergraduate students at the Faculty of Cybernetics, Statistics, and Economic Informatics.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Data Cleaning */}
            <div className="relative">
              <div className="absolute -left-11 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Data Cleaning & Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Likert scales were recoded into numerical values (1-5) for statistical consistency. Excel pivot tables and percentage calculations were used to normalize and analyze data across different groups.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Dashboard Development */}
            <div className="relative">
              <div className="absolute -left-11 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Data Visualization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Various visualizations were created including column charts, stacked bar charts, donut charts, funnel charts, and scatter plots to present findings. A comprehensive Excel dashboard was built to provide a unified view.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div 
            ref={dashboardReveal.ref as React.RefObject<HTMLDivElement>}
            className={`mt-16 transition-all duration-700 ${
              dashboardReveal.isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Dashboard Preview</h3>
            <div className="bg-card rounded-lg shadow-lg overflow-hidden border">
              <div className="aspect-video bg-white dark:bg-gray-800 p-2">
                <img 
                  src="/lovable-uploads/092dab02-4204-461a-aa3e-bb61ce6d8582.png" 
                  alt="AI in Education Dashboard"
                  className="w-full h-full object-contain rounded"
                />
              </div>
            </div>
            <div className="mt-4 text-center text-muted-foreground">
              <p>Our Excel dashboard features color-coded sections with interactive slicers for data filtering.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
