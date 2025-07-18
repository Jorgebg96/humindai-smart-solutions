const HowItWorks = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Discovery call",
      description: "We understand your processes, pain points, and goals in a 30-minute conversation."
    },
    {
      step: "Step 2", 
      title: "Prototype in 7 days",
      description: "We build a working prototype of your automation so you can see exactly how it works."
    },
    {
      step: "Step 3",
      title: "Full automation delivery + support",
      description: "Complete implementation with training and ongoing support to ensure success."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground mb-16">
            From idea to implementation in weeks, not months
          </p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.step}
                </h3>
                <h4 className="text-xl font-bold text-foreground mb-4">
                  {step.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-full top-10 w-full h-0.5 bg-border transform translate-x-4 translate-y-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;