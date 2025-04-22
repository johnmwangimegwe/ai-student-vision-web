
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
                  <p className="mb-4">
                    An online survey was distributed through targeted social media groups to reach our target audience.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium">Target Population:</span> Second and third-year undergraduate students at the Faculty of Cybernetics, Statistics, and Economic Informatics
                    </li>
                    <li>
                      <span className="font-medium">Sample Size:</span> 91 students completed the survey
                    </li>
                    <li>
                      <span className="font-medium">Distribution Method:</span> Social media groups focused on student communities
                    </li>
                  </ul>
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
                  <CardTitle>Data Cleaning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Qualitative responses were systematically recoded for consistent analysis.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium">Standardization:</span> Likert scales like "Strongly Agree" were converted to numerical values (1-5)
                    </li>
                    <li>
                      <span className="font-medium">Normalization:</span> All variables were standardized to ensure valid cross-comparisons
                    </li>
                    <li>
                      <span className="font-medium">Tool Used:</span> Microsoft Excel for transformation and cleaning
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Data Analysis */}
            <div className="relative">
              <div className="absolute -left-11 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Data Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Multiple analytical approaches were employed to extract meaningful insights.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium">Pivot Tables:</span> Used to summarize and structure categorical data
                    </li>
                    <li>
                      <span className="font-medium">Percentage Calculations:</span> Applied to normalize different group sizes
                    </li>
                    <li>
                      <span className="font-medium">Visualizations:</span> Column charts, stacked bar charts, donut charts, funnel charts, and scatter plots
                    </li>
                    <li>
                      <span className="font-medium">Platform:</span> Excel for statistical operations and visualization creation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Dashboard Development */}
            <div className="relative">
              <div className="absolute -left-11 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold">4</span>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Dashboard Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    A comprehensive Excel Dashboard was built to present the analyzed data visually.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium">Logic Structure:</span> Progressive flow from knowledge to impact perceptions
                    </li>
                    <li>
                      <span className="font-medium">Interactive Elements:</span> Slicers and filters for data exploration
                    </li>
                    <li>
                      <span className="font-medium">Visual Design:</span> Professional color palette with intuitive layout
                    </li>
                    <li>
                      <span className="font-medium">Narrative Focus:</span> Design supports coherent storytelling of findings
                    </li>
                  </ul>
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
              <div className="aspect-video bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-800/20 p-6 relative group">
                {/* Placeholder for dashboard image */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white text-center">
                    <p className="text-lg font-semibold">Interactive Dashboard</p>
                    <p className="text-sm">Hover to highlight interactive elements</p>
                  </div>
                </div>
                <div className="h-full w-full flex flex-col items-center justify-center">
                  <div className="w-full max-w-md">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 shadow-md">
                      <div className="text-center text-gray-800 dark:text-gray-200 font-semibold">Excel Dashboard</div>
                      <div className="mt-2 grid grid-cols-3 gap-2">
                        <div className="bg-emerald-100 dark:bg-emerald-900/30 h-16 rounded"></div>
                        <div className="bg-teal-100 dark:bg-teal-900/30 h-16 rounded"></div>
                        <div className="bg-emerald-100 dark:bg-emerald-900/30 h-16 rounded"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md h-32">
                        <div className="bg-emerald-200 dark:bg-emerald-900/60 h-6 w-24 rounded mb-2"></div>
                        <div className="space-y-2">
                          <div className="bg-emerald-100 dark:bg-emerald-900/30 h-4 rounded"></div>
                          <div className="bg-emerald-100 dark:bg-emerald-900/30 h-4 rounded"></div>
                          <div className="bg-emerald-100 dark:bg-emerald-900/30 h-4 rounded"></div>
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md h-32">
                        <div className="bg-teal-200 dark:bg-teal-900/60 h-6 w-20 rounded mb-2"></div>
                        <div className="mt-4 flex justify-center">
                          <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-teal-200 dark:bg-teal-800/60"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
