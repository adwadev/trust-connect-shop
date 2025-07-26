import { useState, useEffect } from 'react';
import demoStep1 from '@/assets/demo-step-1.jpg';
import demoStep2 from '@/assets/demo-step-2.jpg';
import demoStep3 from '@/assets/demo-step-3.jpg';

const demoSteps = [
  {
    image: demoStep1,
    title: "Sellers create product pages",
    description: "Upload photos, add descriptions, and set up your shop in seconds"
  },
  {
    image: demoStep2,
    title: "Buyers browse and filter products",
    description: "Find exactly what you need with smart search and trusted seller ratings"
  },
  {
    image: demoStep3,
    title: "Buyers contact sellers with confidence",
    description: "Secure messaging with verified feedback and trust indicators"
  }
];

const DemoFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % demoSteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See how simple it is
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our platform connect sellers and buyers in just three easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Animation */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-soft mx-auto max-w-sm">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square">
                {demoSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`demo-step absolute inset-0 ${
                      index === currentStep ? 'active' : ''
                    }`}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                ))}
              </div>
              
              {/* Step indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {demoSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentStep 
                        ? 'bg-primary scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Step Content */}
          <div className="space-y-8">
            {demoSteps.map((step, index) => (
              <div
                key={index}
                className={`transition-all duration-500 p-6 rounded-2xl ${
                  index === currentStep 
                    ? 'bg-primary/5 border-2 border-primary/20 transform scale-105' 
                    : 'bg-transparent border-2 border-transparent'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                    index === currentStep 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                      index === currentStep ? 'text-primary' : 'text-foreground'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoFlow;