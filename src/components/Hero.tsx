import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-8 leading-tight">
            Automate. Scale.{" "}
            <span className="text-foreground">Win.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            AI solutions tailored to your business — no fluff, just results.
          </p>
          
          {/* Large CTA above the fold */}
          <div className="mb-16">
            <Button variant="cta" className="group">
              Book Free Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            30-minute discovery call • No commitment • Custom automation roadmap
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;