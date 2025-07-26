import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Bell, Lock } from 'lucide-react';

const WaitlistSignup = () => {
  const [telegramUsername, setTelegramUsername] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
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
      title: "You're on the list! 🎉",
      description: "We'll send you a message on Telegram when we launch.",
    });
    setTelegramUsername('');
  };

  return (
    <section className="py-20 px-4 bg-gradient-accent">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
            <Bell className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Be the first to experience trust
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our waitlist and get early access to the platform that's changing how people buy and sell online.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="@your_telegram"
                value={telegramUsername}
                onChange={(e) => setTelegramUsername(e.target.value)}
                className="h-12 pl-4 pr-4 text-base rounded-lg border-2 border-white/30 bg-white/10 text-white placeholder:text-white/70 focus:border-white focus:bg-white/20"
              />
            </div>
            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="shrink-0 bg-white text-accent hover:bg-white/90 hover:shadow-glow"
            >
              Notify Me
            </Button>
          </form>

          <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
            <Lock className="w-4 h-4" />
            <span>We hate spam too. Your info is safe.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSignup;