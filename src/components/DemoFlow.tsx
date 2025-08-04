import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';

const demoProducts = [
  {
    id: 1,
    seller: 'ElectroWorld',
    product: 'Wireless Headphones',
    price: '$89',
    description: 'Noise-canceling, 30h battery, premium sound',
    image: '🎧',
    badge: 'Verified Seller'
  },
  {
    id: 2,
    seller: 'FitnessPro',
    product: 'Personal Training Session',
    price: '$50',
    description: 'One-on-one coaching, custom workout plan',
    image: '💪',
    badge: 'Top Rated'
  },
  {
    id: 3,
    seller: 'BookHaven',
    product: 'Vintage Book Collection',
    price: '$120',
    description: 'Rare classics, excellent condition, collector items',
    image: '📚',
    badge: 'Verified Seller'
  },
  {
    id: 4,
    seller: 'TechRepair',
    product: 'Laptop Repair Service',
    price: '$75',
    description: 'Screen replacement, virus removal, hardware fixes',
    image: '💻',
    badge: 'Top Rated'
  },
  {
    id: 5,
    seller: 'ArtStudio',
    product: 'Custom Portrait Painting',
    price: '$200',
    description: 'Hand-painted, premium materials, 2-week delivery',
    image: '🎨',
    badge: 'Verified Seller'
  }
];

const DemoFlow = () => {
  const [visiblePosts, setVisiblePosts] = useState([0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisiblePosts(prev => {
        const nextIndex = (prev[prev.length - 1] + 1) % demoProducts.length;
        const newPosts = [...prev, nextIndex];
        return newPosts.slice(-3); // Keep only last 3 posts
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Live demo feed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch real product listings flow in our trusted marketplace
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {/* Demo Feed Container */}
          <div className="bg-white rounded-3xl shadow-soft overflow-hidden">
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 text-center font-semibold">
              Nagadras Marketplace
            </div>
            
            {/* Feed Content */}
            <div className="h-96 overflow-hidden relative">
              <div className="space-y-0">
                {visiblePosts.map((productIndex, index) => {
                  const product = demoProducts[productIndex];
                  return (
                    <div
                      key={`${productIndex}-${index}`}
                      className="p-4 border-b border-gray-100 animate-fade-in"
                      style={{
                        animationDelay: `${index * 0.2}s`
                      }}
                    >
                      {/* Seller Info */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-medium">
                            {product.seller.charAt(1).toUpperCase()}
                          </div>
                          <span className="font-medium text-primary">{product.seller}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {product.badge}
                        </Badge>
                      </div>
                      
                      {/* Product Info */}
                      <div className="flex gap-3">
                        <div className="text-3xl">{product.image}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">
                            {product.product}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {product.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-accent">
                              {product.price}
                            </span>
                            <a 
                              href="#" 
                              className="text-primary text-sm hover:underline"
                              onClick={(e) => e.preventDefault()}
                            >
                              Contact Seller
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Fade overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            </div>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-4">
            New posts appear automatically ↑
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoFlow;