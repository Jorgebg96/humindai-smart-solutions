const ProblemSolution = () => {
  const steps = [
    {
      number: "01",
      title: "Manual processes are slowing growth",
      description: "Your team spends hours on repetitive tasks instead of focusing on what matters most."
    },
    {
      number: "02", 
      title: "AI can help, but off-the-shelf tools don't fit",
      description: "Generic solutions require you to change how you work, not the other way around."
    },
    {
      number: "03",
      title: "Humindai creates custom, plug-and-play automations",
      description: "We build AI that works with your existing tools and processes, delivering results from day one."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Problem with Growth
            </h2>
            <p className="text-xl text-muted-foreground">
              Most businesses hit the same wall when scaling
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;