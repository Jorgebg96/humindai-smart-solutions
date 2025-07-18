import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Differentiators from "@/components/Differentiators";
import TargetAudience from "@/components/TargetAudience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Differentiators />
      <TargetAudience />
      <Contact />
    </div>
  );
};

export default Index;
