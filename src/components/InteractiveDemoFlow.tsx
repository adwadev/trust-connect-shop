import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MessageCircle, CheckCircle } from 'lucide-react';

const demoSteps = [
  {
    id: 'post',
    title: 'Seller posts product',
    product: {
      seller: '@elena_tech',
      product: 'iPhone 15 Pro',
      price: '$850',
      description: '128GB, Space Black, like new',
      image: '📱',
      badge: 'Verified Seller'
    },
    action: 'Product posted to marketplace'
  },
  {
    id: 'browse',
    title: 'Buyer browses storefront',
    action: 'Product visible to all buyers'
  },
  {
    id: 'contact',
    title: 'Buyer contacts seller',
    action: 'Direct Telegram communication'
  },
  {
    id: 'purchase',
    title: 'Purchase completed',
    action: 'Transaction successful'
  },
  {
    id: 'feedback',
    title: 'Verified feedback link sent',
    action: 'One-time feedback link generated'
  },
  {
    id: 'reputation',
    title: 'Reputation updated',
    action: 'Trust score and badges updated'
  }
];

const InteractiveDemoFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % demoSteps.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
    setIsAutoPlaying(false);
  };

  const currentStepData = demoSteps[currentStep];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See how it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From product posting to verified feedback — watch the complete trust-building flow
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Demo Visual */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-soft overflow-hidden max-w-sm mx-auto">
              {/* Header */}
              <div className="bg-primary text-primary-foreground p-4 text-center font-semibold">
                Marketplace Demo
              </div>
              
              {/* Content based on current step */}
              <div className="p-6 h-80 flex flex-col justify-center">
                {currentStep === 0 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-medium">
                        E
                      </div>
                      <span className="font-medium text-primary">{currentStepData.product.seller}</span>
                      <Badge variant="secondary" className="text-xs">
                        {currentStepData.product.badge}
                      </Badge>
                    </div>
                    
                    <div className="text-center border-2 border-dashed border-primary/30 rounded-lg p-6">
                      <div className="text-4xl mb-2">{currentStepData.product.image}</div>
                      <h3 className="font-semibold mb-1">{currentStepData.product.product}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{currentStepData.product.description}</p>
                      <span className="font-bold text-accent">{currentStepData.product.price}</span>
                    </div>
                    
                    <Button variant="cta" className="w-full" disabled>
                      Posting to marketplace...
                    </Button>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-center font-semibold mb-4">Product Live in Marketplace</h3>
                    
                    <div className="bg-secondary/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs">
                          E
                        </div>
                        <span className="text-sm font-medium">{currentStepData.product.seller}</span>
                        <Badge variant="secondary" className="text-xs">
                          {currentStepData.product.badge}
                        </Badge>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="text-2xl">{currentStepData.product.image}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm">{currentStepData.product.product}</h4>
                          <p className="text-xs text-muted-foreground mb-1">{currentStepData.product.description}</p>
                          <span className="font-bold text-accent text-sm">{currentStepData.product.price}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-center text-sm text-muted-foreground">
                      Visible to all buyers instantly
                    </p>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4 animate-fade-in text-center">
                    <MessageCircle className="w-16 h-16 text-primary mx-auto" />
                    <div>
                      <h3 className="font-semibold mb-2">Buyer contacts seller</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Direct Telegram communication
                      </p>
                      <div className="bg-primary/10 rounded-lg p-3 text-left text-sm">
                        <strong>@buyer_alex:</strong> "Hi! Is the iPhone still available?"
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Contact: t.me/@elena_tech
                    </p>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4 animate-fade-in text-center">
                    <CheckCircle className="w-16 h-16 text-accent mx-auto" />
                    <div>
                      <h3 className="font-semibold mb-2">Purchase completed!</h3>
                      <p className="text-sm text-muted-foreground">
                        Successful transaction between buyer and seller
                      </p>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-4 animate-fade-in text-center">
                    <div className="bg-accent/10 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Feedback link generated</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        One-time secure link sent to buyer
                      </p>
                      <div className="bg-white border border-accent/20 rounded p-2 text-xs font-mono">
                        feedback.app/verify/xyz123
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Prevents fake reviews
                    </p>
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="space-y-4 animate-fade-in text-center">
                    <div className="space-y-3">
                      <Star className="w-16 h-16 text-accent mx-auto" />
                      <h3 className="font-semibold">Reputation updated!</h3>
                      
                      <div className="bg-secondary/30 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium">{currentStepData.product.seller}</span>
                          <Badge variant="secondary" className="text-xs">
                            Top Rated
                          </Badge>
                        </div>
                        <div className="flex justify-center gap-1">
                          {[1,2,3,4,5].map(i => (
                            <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Trust level increased
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Step Navigation */}
          <div className="order-1 lg:order-2">
            <div className="space-y-4">
              {demoSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                    index === currentStep
                      ? 'bg-primary/10 border-primary shadow-soft'
                      : 'bg-secondary/30 border-border hover:bg-secondary/50'
                  }`}
                  onClick={() => handleStepClick(index)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      index === currentStep
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{step.title}</h3>
                      <p className="text-xs text-muted-foreground">{step.action}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              >
                {isAutoPlaying ? 'Pause' : 'Play'} Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemoFlow;