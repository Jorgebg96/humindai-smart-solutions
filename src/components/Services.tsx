import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Workflow, MessageSquare, Database, Users, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Customer Interaction Bots",
      description: "Intelligent chatbots that qualify leads, answer questions, and guide customers 24/7 across all your channels."
    },
    {
      icon: Workflow,
      title: "Internal Workflow Automation",
      description: "Streamline repetitive tasks, automate data entry, and connect your tools for seamless operations."
    },
    {
      icon: MessageSquare,
      title: "WhatsApp & Email Automation",
      description: "Automated follow-ups, lead nurturing sequences, and personalized communication at scale."
    },
    {
      icon: Database,
      title: "CRM Integration",
      description: "Connect your existing CRM with AI-powered lead scoring, data enrichment, and automated updates."
    },
    {
      icon: Users,
      title: "Lead Qualification Systems",
      description: "Smart systems that identify, score, and route high-quality leads to your sales team automatically."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Real-time dashboards and reports that show exactly how your automations impact your bottom line."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Custom AI Solutions That Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just build AI tools - we create complete automation systems 
            tailored to your business needs and integrated with your existing workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;