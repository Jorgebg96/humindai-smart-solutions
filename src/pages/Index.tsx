import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <WhatWeDo />
      <HowItWorks />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
