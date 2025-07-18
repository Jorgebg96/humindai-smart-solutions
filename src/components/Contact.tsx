import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, Mail, Phone, ArrowRight, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build Your AI Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to automate your business processes? Choose how you'd like to get started.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Discovery Call */}
          <Card className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-semibold">Free Discovery Call</CardTitle>
              <CardDescription className="text-base">
                30-minute consultation to understand your needs and explore automation opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>30 minutes, no commitment required</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span>Discuss your current challenges</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span>Get automation recommendations</span>
                </div>
              </div>
              <Button variant="hero" className="w-full group mt-6">
                Book Discovery Call
                <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Automation Audit */}
          <Card className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-semibold">Automation Audit</CardTitle>
              <CardDescription className="text-base">
                Detailed analysis of your current processes with specific automation recommendations.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-accent" />
                  <span>Comprehensive process review</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MessageSquare className="w-4 h-4 text-accent" />
                  <span>Custom automation roadmap</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  <span>ROI projections and timeline</span>
                </div>
              </div>
              <Button variant="cta" className="w-full group mt-6">
                Request Audit
                <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Prefer to reach out directly?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" className="group">
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              hello@humindai.com
            </Button>
            <Button variant="outline" className="group">
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;