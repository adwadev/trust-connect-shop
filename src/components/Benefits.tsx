import { Store, ShoppingBag, Clock, Shield, Star, Search } from 'lucide-react';

const Benefits = () => {
  const sellerBenefits = [
    {
      icon: Store,
      title: "Create your shop page in seconds",
      description: "No complex setup or confusing interfaces"
    },
    {
      icon: Star,
      title: "Showcase your products clearly",
      description: "Beautiful layouts that make your items shine"
    },
    {
      icon: Shield,
      title: "Build reputation with verified feedback",
      description: "Earn trust with every successful transaction"
    }
  ];

  const buyerBenefits = [
    {
      icon: Search,
      title: "Find trusted sellers quickly",
      description: "Smart filters and verification badges"
    },
    {
      icon: ShoppingBag,
      title: "Browse curated, verified products",
      description: "Quality items from reliable sellers only"
    },
    {
      icon: Clock,
      title: "Avoid scams and save time",
      description: "Pre-vetted sellers and secure communications"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for everyone
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're selling or buying, we've designed the perfect experience for you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Sellers */}
          <div className="fade-in-up">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                <Store className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">For Sellers</h3>
              <p className="text-muted-foreground">Turn your products into a professional business</p>
            </div>
            
            <div className="space-y-6">
              {sellerBenefits.map((benefit, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Buyers */}
          <div className="fade-in-up stagger-2">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4">
                <ShoppingBag className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">For Buyers</h3>
              <p className="text-muted-foreground">Shop with confidence and find exactly what you need</p>
            </div>
            
            <div className="space-y-6">
              {buyerBenefits.map((benefit, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;