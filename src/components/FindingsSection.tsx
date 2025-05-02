
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

  const emotionalResponsesData = [
    { name: "Curiosity", value: 60 },
    { name: "Trust", value: 25 },
    { name: "Fear", value: 10 },
    { name: "Indifference", value: 5 },
  ];

  const societalEffectsData = [
    { name: "Problem Solving", value: 66 },
    { name: "Job Replacement", value: 35 },
    { name: "AI Ruling Society", value: 15 },
  ];

  const economicImpactsData = [
    { name: "Economic Growth", value: 36 },
    { name: "Job Loss Concerns", value: 31 },
    { name: "Economic Crisis Fears", value: 15 },
  ];

  const sectorImpactData = [
    { name: "Medicine", value: 80 },
    { name: "Education", value: 67 },
    { name: "Construction", value: 55 },
    { name: "Agriculture", value: 51 },
    { name: "Marketing", value: 35 },
    { name: "Arts", value: 13 },
  ];

  const usefulnessData = [
    { name: "Rating 10", value: 23 },
    { name: "Rating 9", value: 18 },
    { name: "Rating 8", value: 20 },
    { name: "Rating 7", value: 15 },
    { name: "Rating 6", value: 10 },
    { name: "Rating 5", value: 8 },
    { name: "Rating <5", value: 6 },
  ];

  const teachingAdvantagesData = [
    { name: "AI Assistants", value: 43 },
    { name: "Automated Grading", value: 32 },
    { name: "Content Creation", value: 25 },
  ];

  const learningAdvantagesData = [
    { name: "Universal Access", value: 53 },
    { name: "Personalized Learning", value: 27 },
    { name: "24/7 Availability", value: 20 },
  ];

  const evaluationAdvantagesData = [
    { name: "Constant Feedback", value: 49 },
    { name: "Reduced Bias", value: 31 },
    { name: "Detailed Analytics", value: 20 },
  ];

  const disadvantagesData = [
    { name: "Loss of Student-Teacher Bond", value: 37 },
    { name: "Internet Addiction", value: 28 },
    { name: "Reduced Interactions", value: 35 },
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
            Our research revealed 10 key insights about how students perceive AI in education.
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
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                <TabsTrigger value="knowledge">Knowledge & Sources</TabsTrigger>
                <TabsTrigger value="attitudes">Societal Attitudes</TabsTrigger>
                <TabsTrigger value="economics">Economic Impact</TabsTrigger>
                <TabsTrigger value="emotions">Emotional Responses</TabsTrigger>
                <TabsTrigger value="sectors">Sector Impact</TabsTrigger>
                <TabsTrigger value="job-growth" className="hidden md:inline-flex">Jobs & Growth</TabsTrigger>
                <TabsTrigger value="usefulness" className="hidden md:inline-flex">Usefulness</TabsTrigger>
                <TabsTrigger value="advantages" className="hidden md:inline-flex">Advantages</TabsTrigger>
                <TabsTrigger value="disadvantages" className="hidden md:inline-flex">Disadvantages</TabsTrigger>
                <TabsTrigger value="correlation" className="hidden md:inline-flex">Knowledge Correlation</TabsTrigger>
              </TabsList>
            </div>

            {/* Mobile tabs for the ones hidden above */}
            <div className="flex justify-center mb-8 md:hidden">
              <TabsList className="grid grid-cols-3 gap-2">
                <TabsTrigger value="job-growth">Jobs & Growth</TabsTrigger>
                <TabsTrigger value="usefulness">Usefulness</TabsTrigger>
                <TabsTrigger value="advantages">Advantages</TabsTrigger>
                <TabsTrigger value="disadvantages">Disadvantages</TabsTrigger>
                <TabsTrigger value="correlation">Knowledge Correlation</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="knowledge" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Students' Level of Knowledge About AI and Common Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <BarChart 
                        data={knowledgeSourcesData} 
                        title="Information Sources About AI" 
                        colors={['#10b981']}
                      />
                      <div className="mt-4">
                        <h4 className="font-medium">Key Insights:</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Most students (44%) use the Internet as their primary source of AI information</li>
                          <li>Scientific books and papers are underutilized (19%)</li>
                          <li>Social media contributes significantly (24%) to AI knowledge</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="bg-secondary/50 rounded-lg p-6 h-full">
                        <h3 className="text-xl font-semibold mb-4">Self-Rated Knowledge Levels</h3>
                        <p className="mb-4">
                          Most students self-rated their AI knowledge between 5 and 8 on a 10-point scale, indicating moderate familiarity with AI concepts.
                        </p>
                        <div className="mt-6">
                          <h4 className="font-medium">What This Means:</h4>
                          <p className="mt-2">
                            Students have foundational knowledge of AI but rely heavily on potentially unverified internet sources. Educational institutions should focus on promoting scientific literature and verified resources.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="attitudes" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Attitudes Toward AI's Societal Effects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <BarChart 
                        data={societalEffectsData} 
                        title="Percentage of Students Agreeing With Statement" 
                        colors={['#0d9488']}
                      />
                      <div className="mt-4">
                        <h4 className="font-medium">Key Insights:</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>66% agree that AI contributes positively to problem-solving</li>
                          <li>35% believe robots will replace human jobs</li>
                          <li>Only 15% fear AI ruling society</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="bg-secondary/50 rounded-lg p-6 h-full">
                        <h3 className="text-xl font-semibold mb-4">Balanced Perspectives</h3>
                        <p className="mb-4">
                          Students show nuanced views of AI's societal impact, recognizing its problem-solving potential while remaining cautious about job replacement.
                        </p>
                        <div className="mt-6">
                          <h4 className="font-medium">What This Means:</h4>
                          <p className="mt-2">
                            Students are receptive to AI adoption while maintaining healthy skepticism. Educational frameworks should address job displacement concerns while highlighting AI's collaborative potential.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="economics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Perceived Economic Impacts of AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <BarChart 
                        data={economicImpactsData} 
                        title="Economic Perceptions of AI" 
                        colors={['#115e59']}
                      />
                      <div className="mt-4">
                        <h4 className="font-medium">Key Insights:</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>36% fully agree AI will drive global economic growth</li>
                          <li>31% are concerned about job loss</li>
                          <li>Only 15% fear AI causing an economic crisis</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="bg-secondary/50 rounded-lg p-6 h-full">
                        <h3 className="text-xl font-semibold mb-4">Economic Optimism</h3>
                        <p className="mb-4">
                          Students generally view AI as a positive economic force, though job displacement concerns remain significant.
                        </p>
                        <div className="mt-6">
                          <h4 className="font-medium">What This Means:</h4>
                          <p className="mt-2">
                            Educational institutions should prepare students for an AI-integrated economy by focusing on complementary skills that AI cannot replace, while highlighting how AI can enhance productivity rather than simply replace workers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="emotions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Emotional Responses Toward AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <PieChart 
                        data={emotionalResponsesData} 
                        title="Primary Emotions Associated with AI" 
                      />
                      <div className="mt-4">
                        <h4 className="font-medium">Key Insights:</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Curiosity (60%) dominates emotional responses to AI</li>
                          <li>Trust (25%) is the second most common emotion</li>
                          <li>Fear (10%) and indifference (5%) are minimal</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="bg-secondary/50 rounded-lg p-6 h-full">
                        <h3 className="text-xl font-semibold mb-4">Positive Emotional Landscape</h3>
                        <p className="mb-4">
                          Students approach AI with curiosity and openness rather than fear or indifference, creating a receptive mindset for AI integration.
                        </p>
                        <div className="mt-6">
                          <h4 className="font-medium">What This Means:</h4>
                          <p className="mt-2">
                            Educational institutions have a positive foundation for introducing AI tools. Programs should leverage student curiosity by providing hands-on experiences with AI while addressing the trust gap through transparent AI applications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sectors" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Areas Where Students Believe AI Will Have Biggest Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <FunnelChart 
                        data={sectorImpactData} 
                        title="Sector Impact Predictions (%)" 
                      />
                      <div className="mt-4">
                        <h4 className="font-medium">Key Insights:</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Medicine (80%) is seen as the sector most impacted by AI</li>
                          <li>Education (67%) ranks second in perceived AI impact</li>
                          <li>Artistic domains (13%) show the least anticipated influence</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="bg-secondary/50 rounded-lg p-6 h-full">
                        <h3 className="text-xl font-semibold mb-4">Practical Over Creative</h3>
                        <p className="mb-4">
                          Students associate AI more with technical, practical sectors than creative industries, highlighting a perception gap in how AI can enhance creative processes.
                        </p>
                        <div className="mt-6">
                          <h4 className="font-medium">What This Means:</h4>
                          <p className="mt-2">
                            As AI increasingly influences creative fields, educational programs should demonstrate AI applications in arts and humanities alongside technical fields to provide a more balanced understanding of AI's versatility.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="job-growth" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Belief in AI Leading to Job Loss or Economic Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="bg-card p-6 rounded-lg border">
                        <h3 className="text-xl font-semibold mb-4">Job Loss Concerns By Major</h3>
                        <p className="mb-4">
                          Statistics & Forecasting students (53%) showed the highest concern about AI causing job loss, while Economic Cybernetics and Informatics students demonstrated comparatively less concern.
                        </p>
                      </div>
                      <div className="bg-card p-6 rounded-lg border mt-4">
                        <h3 className="text-xl font-semibold mb-4">Growth Optimism</h3>
                        <p className="mb-4">
                          Despite job loss fears, a strong optimism persists across all majors regarding AI's potential to drive economic growth, with minimal disagreement recorded.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="bg-secondary/50 rounded-lg p-6 h-full">
                        <h3 className="text-xl font-semibold mb-4">Balanced Economic Perspective</h3>
                        <p className="mb-4">
                          Students maintain a balanced but forward-looking attitude toward AI's macroeconomic effects, seeing both challenges and opportunities.
                        </p>
                        <div className="mt-6">
                          <h4 className="font-medium">Key Insights:</h4>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Students specializing in statistics have heightened job displacement concerns</li>
                            <li>Technical majors show more confidence in their job security</li>
                            <li>Universal agreement exists on AI's growth potential</li>
                          </ul>
                        </div>
                        <div className="mt-6">
                          <h4 className="font-medium">What This Means:</h4>
                          <p className="mt-2">
                            Different academic disciplines may require tailored approaches to addressing AI anxiety, with particular focus on non-technical fields where displacement concerns are highest.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="usefulness" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Perceived Usefulness of AI in Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <BarChart 
                        data={usefulnessData} 
                        title="AI Usefulness Ratings (Scale 1-10)" 
                        colors={['#0f766e']}
                      />
                      <div className="mt-4">
                        <h4 className="font-medium">Key Insights:</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>23% rated AI's educational usefulness at maximum score (10)</li>
                          <li>Most ratings concentrated between 7-10</li>
                          <li>Only 6% gave ratings below 5</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="bg-secondary/50 rounded-lg p-6 h-full">
                        <h3 className="text-xl font-semibold mb-4">High Perceived Value</h3>
                        <p className="mb-4">
                          Students recognize the high potential of AI to enhance educational processes, suggesting readiness to embrace AI-enhanced academic tools and platforms.
                        </p>
                        <div className="mt-6">
                          <h4 className="font-medium">What This Means:</h4>
                          <p className="mt-2">
                            Educational institutions have a receptive audience for AI implementation. Focus should be on developing intuitive, valuable AI tools that align with students' high expectations while providing adequate training to maximize adoption.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="advantages" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Perceived Advantages in Teaching, Learning, Evaluation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <PieChart 
                        data={teachingAdvantagesData} 
                        title="Teaching Advantages" 
                        height={250}
                      />
                      <div className="mt-2 text-center">
                        <p className="font-medium">43% favor AI Assistants for helping teachers</p>
                      </div>
                    </div>
                    <div>
                      <PieChart 
                        data={learningAdvantagesData} 
                        title="Learning Advantages" 
                        height={250}
                      />
                      <div className="mt-2 text-center">
                        <p className="font-medium">53% selected Universal Access</p>
                      </div>
                    </div>
                    <div>
                      <PieChart 
                        data={evaluationAdvantagesData} 
                        title="Evaluation Advantages" 
                        height={250}
                      />
                      <div className="mt-2 text-center">
                        <p className="font-medium">49% preferred Constant Feedback</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 bg-secondary/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Accessibility & Support Valued</h3>
                    <p className="mb-4">
                      Students prioritize AI's supportive and accessibility-enhancing features across all educational dimensions, emphasizing inclusive, responsive education.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-medium">What This Means:</h4>
                      <p className="mt-2">
                        When implementing AI in education, focus should be on tools that enhance universal access, provide consistent feedback, and assist teachers in managing classroom activities rather than replacing core human teaching functions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="disadvantages" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Perceived Disadvantages of AI in Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <PieChart 
                        data={disadvantagesData} 
                        title="Main Concerns About AI in Education" 
                      />
                      <div className="mt-4">
                        <h4 className="font-medium">Key Insights:</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>37% cite loss of student-teacher bond as primary risk</li>
                          <li>Internet addiction concerns 28% of students</li>
                          <li>35% worry about reduced peer interactions</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="bg-secondary/50 rounded-lg p-6 h-full">
                        <h3 className="text-xl font-semibold mb-4">Human Connection Valued</h3>
                        <p className="mb-4">
                          Students place high value on human relationships in learning environments, highlighting concerns about technology diminishing interpersonal connections.
                        </p>
                        <div className="mt-6">
                          <h4 className="font-medium">What This Means:</h4>
                          <p className="mt-2">
                            AI implementation in education should prioritize augmenting rather than replacing human interaction. Successful models will blend AI efficiency with meaningful human engagement through hybrid approaches that preserve relational aspects of education.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="correlation" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Correlation Between Knowledge and Usefulness Perceptions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-800/20 rounded-lg p-6 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">+</div>
                        <p className="text-xl font-semibold">Positive Linear Correlation</p>
                        <p className="mt-2">Between AI knowledge and perceived usefulness</p>
                      </div>
                    </div>
                    <div>
                      <div className="bg-secondary/50 rounded-lg p-6 h-full">
                        <h3 className="text-xl font-semibold mb-4">Knowledge Drives Acceptance</h3>
                        <p className="mb-4">
                          Students with higher self-rated AI knowledge also reported perceiving greater usefulness of AI in education, creating a clear connection between understanding and positive perception.
                        </p>
                        <div className="mt-6">
                          <h4 className="font-medium">What This Means:</h4>
                          <p className="mt-2">
                            Educational interventions aimed at improving AI literacy could directly enhance positive attitudes toward AI adoption in learning environments. Introducing foundational AI concepts before implementing AI tools may increase acceptance and effective usage.
                          </p>
                        </div>
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
