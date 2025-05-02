
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function FindingsSection() {
  const [activeTab, setActiveTab] = useState("knowledge");
  const titleReveal = useScrollReveal();
  const tabsReveal = useScrollReveal({ delay: 300 });

  // Function to safely render Infogram embeds
  const InfographEmbed = ({ dataId, title }: { dataId: string, title: string }) => {
    return (
      <div className="infogram-container w-full my-4">
        <div 
          className="infogram-embed" 
          data-id={dataId} 
          data-type="interactive" 
          data-title={title}
        ></div>
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(e,n,i,s){var d="InfogramEmbeds";var o=e.getElementsByTagName(n)[0];if(window[d]&&window[d].initialized)window[d].process&&window[d].process();else if(!e.getElementById(i)){var r=e.createElement(n);r.async=1,r.id=i,r.src=s,o.parentNode.insertBefore(r,o)}}(document,"script","infogram-async","https://e.infogram.com/js/dist/embed-loader-min.js");`
          }}
        />
      </div>
    );
  };

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
                  <div className="grid md:grid-cols-1 gap-8">
                    <div>
                      <InfographEmbed 
                        dataId="00ab4831-845f-4576-82f1-5f89a4c2138f" 
                        title="Students' Self-Reported Awareness of Artificial Intelligence (Scale 1–10)" 
                      />
                    </div>
                    <div>
                      <InfographEmbed 
                        dataId="251f8ca3-5792-434e-8794-ef01456afee6" 
                        title="Common sources students use to learn about AI" 
                      />
                    </div>
                    <div className="md:col-span-1">
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
                  <div className="grid md:grid-cols-1 gap-8">
                    <div>
                      <InfographEmbed 
                        dataId="2b528cc1-4def-47c1-b080-929809f9922b" 
                        title="Distribution of Student Opinions on the Societal Effects of AI" 
                      />
                    </div>
                    <div className="md:col-span-1">
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
                  <div className="grid md:grid-cols-1 gap-8">
                    <div>
                      <InfographEmbed 
                        dataId="5ab487ab-cd7a-4e04-a57f-0825a773c210" 
                        title="Student Opinions on Economic Impacts of AI" 
                      />
                    </div>
                    <div className="md:col-span-1">
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
                  <div className="grid md:grid-cols-1 gap-8">
                    <div>
                      <InfographEmbed 
                        dataId="9c961749-6180-466e-b99a-4458497457b3" 
                        title="Where Students Believe AI Will Make the Biggest Impact" 
                      />
                    </div>
                    <div className="md:col-span-1">
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
