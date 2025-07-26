import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const [telegramUsername, setTelegramUsername] = useState('');
  const { toast } = useToast();

  const handleWaitlistSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!telegramUsername.trim()) {
      toast({
        title: "Please enter your Telegram username",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would typically send to your backend
    toast({
      title: "Welcome to the waitlist!",
      description: "We'll notify you on Telegram when we launch.",
    });
    setTelegramUsername('');
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                The easiest way to{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  sell and buy
                </span>{' '}
                with trust
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
                — no hassle, no scams
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Sellers create their own product pages instantly. Buyers find trusted sellers fast, 
              without endless searching.
            </p>

            {/* CTA Form */}
            <form onSubmit={handleWaitlistSignup} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="@your_telegram"
                  value={telegramUsername}
                  onChange={(e) => setTelegramUsername(e.target.value)}
                  className="h-12 pl-4 pr-4 text-base rounded-lg border-2 border-border/50 focus:border-primary"
                />
              </div>
              <Button type="submit" variant="cta" size="lg" className="shrink-0">
                Join the Waitlist
              </Button>
            </form>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>No Spam</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Early Access</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end fade-in-up stagger-2">
            <div className="relative">
              <img
                src={heroImage}
                alt="TrustConnect Platform Preview"
                className="max-w-full h-auto rounded-2xl shadow-glow float-animation"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;