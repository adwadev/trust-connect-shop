import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, Star, ShoppingBag, LogIn } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Hero = () => {
  const [telegramUsername, setTelegramUsername] = useState('');
  const { toast } = useToast();
const handleWaitlistSignup = (e: React.FormEvent) => {
  e.preventDefault();

  if (!telegramUsername.trim()) {
    toast({
      title: "Please enter your Telegram username",
      variant: "destructive",
    });
    return;
  }

  // Show a confirmation toast immediately
  toast({
    title: "You're on the list! 🎉",
    description: "Redirecting you to Telegram...",
  });

  // Reset input field
  setTelegramUsername('');

  // Wait 2 seconds, then open Telegram bot
  setTimeout(() => {
    window.open('https://t.me/nagadrasbot', '_blank');
  }, 2000);
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
              <Link to="/products" className="flex-1">
                <Button variant="cta" size="lg" className="w-full">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Browse Products
                </Button>
              </Link>
              <Link to="/auth" className="flex-1">
                <Button variant="hero" size="lg" className="w-full">
                  <LogIn className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
              </Link>
            </div>


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

          {/* Right Visual */}
          <div className="flex justify-center lg:justify-end fade-in-up stagger-2">
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-glow p-6 max-w-sm">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🚀</div>
                  <h3 className="text-lg font-semibold">Nagadras</h3>
                  <p className="text-sm text-muted-foreground">
                    Trust-based buying and selling made simple
                  </p>
                  <div className="flex justify-center gap-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
