import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RotateCcw, Bot, Cog } from "lucide-react";

const WhatWeDo = () => {
  const services = [
    {
      icon: RotateCcw,
      title: "Lead reactivation on WhatsApp",
      description: "Automatically re-engage cold leads with personalized WhatsApp sequences that feel natural and convert."
    },
    {
      icon: Bot,
      title: "AI assistants for customer inquiries",
      description: "Smart chatbots that handle support questions, qualify leads, and route conversations to the right team."
    },
    {
      icon: Cog,
      title: "Internal automations that save hours daily",
      description: "Streamline data entry, reporting, and workflow management so your team focuses on high-value work."
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Custom AI automations that integrate seamlessly with your existing workflow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-0 shadow-card hover:shadow-minimal transition-all duration-200 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
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

export default WhatWeDo;