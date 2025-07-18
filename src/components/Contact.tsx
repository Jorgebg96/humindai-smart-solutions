import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            Let's automate your growth.
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Ready to save hours daily and boost your revenue? Book a free discovery call 
            and get a custom automation roadmap for your business.
          </p>
          
          <Button variant="cta" className="group mb-8">
            Book Free Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="text-sm text-muted-foreground">
            ✓ 30-minute consultation ✓ No sales pitch ✓ Custom automation plan
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;