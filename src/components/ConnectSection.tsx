
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export function ConnectSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Connect</h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Let's discuss AI & Education! Reach out to share your thoughts or collaborate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Email Card */}
          <Card className="overflow-hidden group hover:shadow-md transition-all border-primary/20 hover:border-primary/50">
            <CardContent className="p-0">
              <div className="p-6 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Email</h3>
                <p className="text-muted-foreground mb-4">
                  Have questions or want to share your thoughts? Send me an email.
                </p>
                <Button variant="outline" className="mt-auto" asChild>
                  <a href="mailto:johnmwangimegwe@gmail.com">
                    Contact Me
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* LinkedIn Card */}
          <Card className="overflow-hidden group hover:shadow-md transition-all border-primary/20 hover:border-primary/50">
            <CardContent className="p-0">
              <div className="p-6 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">LinkedIn</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with me professionally and join my network.
                </p>
                <Button variant="outline" className="mt-auto" asChild>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* GitHub Card */}
          <Card className="overflow-hidden group hover:shadow-md transition-all border-primary/20 hover:border-primary/50">
            <CardContent className="p-0">
              <div className="p-6 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Github className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">GitHub</h3>
                <p className="text-muted-foreground mb-4">
                  Check out my projects and see the data analysis in action.
                </p>
                <Button variant="outline" className="mt-auto" asChild>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Projects
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Medium Article */}
          <Card className="overflow-hidden group hover:shadow-md transition-all border-primary/20 hover:border-primary/50">
            <CardContent className="p-0">
              <div className="p-6 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Medium Article</h3>
                <p className="text-muted-foreground mb-4">
                  Read the detailed analysis of this research on Medium.
                </p>
                <Button variant="outline" className="mt-auto" asChild>
                  <a
                    href="https://medium.com/@johnmwangimegwe/students-perceptions-and-insights-on-the-role-of-ai-in-education-02274ef5d33b"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Article
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
