import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Settings, TrendingUp, Puzzle } from "lucide-react";

const Differentiators = () => {
  const differentiators = [
    {
      icon: Puzzle,
      title: "Custom-Built, Not Generic",
      description: "While others offer one-size-fits-all platforms, we build solutions specifically for your business processes and goals."
    },
    {
      icon: Settings,
      title: "Seamless Integration",
      description: "We connect directly with your existing CRM, WhatsApp, email systems, and databases - no platform switching required."
    },
    {
      icon: TrendingUp,
      title: "Measurable Impact Focus",
      description: "Every automation is designed around clear KPIs. We focus on real ROI, not just impressive technology demos."
    },
    {
      icon: CheckCircle,
      title: "Expert Implementation",
      description: "Our team combines AI expertise with business strategy to ensure your automations actually solve real problems."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Businesses Choose <span className="text-primary">Humindai</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Unlike general AI platforms, we deliver custom solutions that integrate 
              seamlessly with your existing workflow and deliver measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <Card 
                key={index}
                className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="flex flex-row items-start space-y-0 space-x-4 pb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold mb-2">{item.title}</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;