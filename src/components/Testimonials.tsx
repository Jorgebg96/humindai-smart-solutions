import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
            Real Results
          </h2>

          <Card className="border-0 shadow-card bg-background">
            <CardContent className="p-12">
              <div className="flex justify-center mb-6">
                <Quote className="w-12 h-12 text-primary" />
              </div>
              
              <blockquote className="text-2xl md:text-3xl text-foreground font-medium leading-relaxed mb-8">
                "We automated our lead flow and saw a 40% boost in conversions."
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  M
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Marketing Director</div>
                  <div className="text-sm text-muted-foreground">SaaS Company</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">40%</div>
              <div className="text-muted-foreground">Conversion Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">15hrs</div>
              <div className="text-muted-foreground">Saved Weekly</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">7 days</div>
              <div className="text-muted-foreground">To Implementation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;