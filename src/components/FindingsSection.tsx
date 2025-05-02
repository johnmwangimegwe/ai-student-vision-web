
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { BarChart } from "./charts/BarChart";
import { PieChart } from "./charts/PieChart";
import { FunnelChart } from "./charts/FunnelChart";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function FindingsSection() {
  const [activeTab, setActiveTab] = useState("knowledge");
  const titleReveal = useScrollReveal();
  const tabsReveal = useScrollReveal({ delay: 300 });

  // Data for charts
  const knowledgeSourcesData = [
    { name: "Internet", value: 44 },
    { name: "Scientific Books", value: 19 },
    { name: "Social Media", value: 24 },
    { name: "Family & Friends", value: 11 },
  ];

  const societalEffectsData = [
    { name: "Problem Solving", value: 66 },
    { name: "Job Replacement", value: 35 },
    { name: "AI Ruling Society", value: 8 },
  ];

  const economicImpactsData = [
    { name: "Economic Growth", value: 36 },
    { name: "Job Loss Concerns", value: 31 },
    { name: "Economic Crisis Fears", value: 9 },
  ];

  const sectorImpactData = [
    { name: "Medicine", value: 80 },
    { name: "Education", value: 67 },
    { name: "Construction", value: 55 },
    { name: "Agriculture", value: 51 },
    { name: "Marketing", value: 36 },
    { name: "Arts", value: 13 },
  ];

  const selfReportedAwarenessData = [
    { name: "Rating 10", value: 7 },
    { name: "Rating 9", value: 10 },
    { name: "Rating 8", value: 19 },
    { name: "Rating 7", value: 19 },
    { name: "Rating 6", value: 19 },
    { name: "Rating 5", value: 19 },
    { name: "Rating 4", value: 3 },
    { name: "Rating 3", value: 3 },
    { name: "Rating 2", value: 0 },
    { name: "Rating 1", value: 1 },
  ];

  return (
    <section id="findings" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={titleReveal.ref as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 ${
            titleReveal.isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Key Findings</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Our research revealed 8 key insights about how students perceive AI in education.
          </p>
        </div>

        <div
          ref={tabsReveal.ref as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 ${
            tabsReveal.isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <Tabs defaultValue="knowledge" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="knowledge">Knowledge & Sources</TabsTrigger>
                <TabsTrigger value="attitudes">Societal Attitudes</TabsTrigger>
                <TabsTrigger value="economics">Economic Impact</TabsTrigger>
                <TabsTrigger value="sectors">Sector Impact</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="knowledge" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>1: Students' Level of Knowledge About AI and Common Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Self-Reported Awareness (Scale 1-10)</h3>
                      <BarChart 
                        data={selfReportedAwarenessData} 
                        title="Students' Self-Reported Awareness of AI" 
                        colors={['#10b981']}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Information Sources About AI</h3>
                      <PieChart 
                        data={knowledgeSourcesData} 
                        title="Common Sources Students Use to Learn About AI" 
                      />
                    </div>
                    <div className="md:col-span-2">
                      <div className="bg-secondary/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Key Insight</h3>
                        <p className="mb-4">
                          Most students rated their AI knowledge between 5 and 8, with 19% selecting each of the ratings 5, 6, and 7. 
                          This mid-level awareness suggests exposure but not expertise. The Internet is the primary learning source (44%), 
                          followed by social media (24%), showing a strong preference for informal digital channels over academic texts (19%).
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="attitudes" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>2: Attitudes Toward AI's Societal Effects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="md:col-span-2">
                      <BarChart 
                        data={societalEffectsData} 
                        title="Distribution of Student Opinions on the Societal Effects of AI" 
                        colors={['#0d9488']}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <div className="bg-secondary/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Key Insight</h3>
                        <p className="mb-4">
                          Students overwhelmingly (66%) fully agree that AI helps solve societal challenges, including education and healthcare. 
                          However, 35% also partially agree that robots will replace people at work, highlighting real concern about labour displacement. 
                          Only 8% fully agree that AI will "rule society," showing that students do not perceive AI as an existential threat.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="economics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>3: Perceived Economic Impacts of AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="md:col-span-2">
                      <BarChart 
                        data={economicImpactsData} 
                        title="Student Opinions on Economic Impacts of AI" 
                        colors={['#115e59']}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <div className="bg-secondary/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Key Insight</h3>
                        <p className="mb-4">
                          A solid 36% fully agree that AI will help global economic growth, while job loss remains a worry—31% partially agree. 
                          Meanwhile, concerns over a global financial crisis due to AI are low: only 9% fully agree. 
                          Students perceive AI as a long-term economic enabler rather than a destabilizer.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sectors" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>4: Areas Where Students Believe AI Will Have Biggest Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="md:col-span-2">
                      <FunnelChart 
                        data={sectorImpactData} 
                        title="Where Students Believe AI Will Make the Biggest Impact" 
                      />
                    </div>
                    <div className="md:col-span-2">
                      <div className="bg-secondary/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Key Insight</h3>
                        <p className="mb-4">
                          The funnel chart indicates Medicine (80%), Education (67%), and Constructions (55%) as top sectors for AI impact. 
                          Lower confidence in Art (13%) and Marketing (36%) reflects students' perception that AI is more suited to structured, 
                          problem-solving environments than creative domains.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
