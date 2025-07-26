import { AlertTriangle, Shield, Zap } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    {
      icon: AlertTriangle,
      text: "Sellers struggle with messy posts and low visibility"
    },
    {
      icon: AlertTriangle,
      text: "Buyers waste time finding trusted sellers"
    },
    {
      icon: AlertTriangle,
      text: "Existing platforms are complex or insecure"
    }
  ];

  const solutions = [
    {
      icon: Zap,
      text: "Instant product pages for sellers"
    },
    {
      icon: Shield,
      text: "Secure, one-time feedback links build trust"
    },
    {
      icon: Shield,
      text: "Works across Telegram, WhatsApp, Instagram, and more"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Problems */}
          <div className="fade-in-up">
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-destructive">
                The Current Problem
              </h2>
              <p className="text-lg text-muted-foreground">
                Selling and buying online is broken. Here's why:
              </p>
            </div>
            
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-destructive/5 border border-destructive/20">
                  <problem.icon className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <p className="text-foreground font-medium">
                    {problem.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="fade-in-up stagger-2">
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent">
                Our Solution
              </h2>
              <p className="text-lg text-muted-foreground">
                We've built the platform that fixes everything:
              </p>
            </div>
            
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-accent/5 border border-accent/20">
                  <solution.icon className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <p className="text-foreground font-medium">
                    {solution.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;