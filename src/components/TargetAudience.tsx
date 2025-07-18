import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Home, Wrench, Users, ArrowRight } from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    {
      icon: Building2,
      title: "Small to Medium Businesses",
      description: "Growing companies ready to scale operations without hiring more staff.",
      benefits: ["Automate lead qualification", "Streamline customer onboarding", "Reduce manual data entry"]
    },
    {
      icon: Home,
      title: "Real Estate Agencies",
      description: "Agents and brokerages looking to nurture leads and close more deals.",
      benefits: ["24/7 lead response", "Automated follow-up sequences", "CRM integration"]
    },
    {
      icon: Wrench,
      title: "Service Providers",
      description: "Professional services that want to improve client communication and workflow.",
      benefits: ["Appointment scheduling", "Service request automation", "Client status updates"]
    },
    {
      icon: Users,
      title: "Growing Teams",
      description: "Departments overwhelmed with repetitive tasks and manual processes.",
      benefits: ["Workflow automation", "Inter-team communication", "Process standardization"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built for Businesses Like Yours
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in helping specific types of businesses automate their most 
            time-consuming processes and accelerate growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {audiences.map((audience, index) => (
            <Card 
              key={index}
              className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <audience.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold">{audience.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {audience.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {audience.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="border-0 shadow-elegant bg-gradient-primary text-white max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Ready to See What's Possible?
              </CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Get a personalized automation audit and discover exactly how AI can transform your business operations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="cta" size="lg" className="bg-white text-primary hover:bg-white/90 hover:scale-105 group">
                Request Your Free Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;