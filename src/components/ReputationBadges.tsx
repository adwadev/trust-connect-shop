import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Star, Clock, Award, TrendingUp, AlertTriangle } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    name: 'Verified Seller',
    description: 'Optional identity verification plus screenshot proof of transactions',
    color: 'bg-accent text-accent-foreground'
  },
  {
    icon: Star,
    name: 'Top Rated',
    description: 'Consistently high ratings from verified buyer feedback',
    color: 'bg-primary text-primary-foreground'
  }
];

const ReputationBadges = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trust through reputation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reputation & badges earned like levels in a game — the more trusted, the better
          </p>
        </div>

        {/* Badges Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {badges.map((badge, index) => (
            <Card key={index} className="text-center hover:shadow-soft transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <div className={`inline-flex p-4 rounded-full ${badge.color} mb-4`}>
                  <badge.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{badge.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {badge.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">How sellers earn reputation</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Upload proof of transactions</h4>
                  <p className="text-muted-foreground text-sm">Screenshots and receipts verify real sales</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Receive verified buyer feedback</h4>
                  <p className="text-muted-foreground text-sm">One-time feedback links prevent fake reviews</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Maintain high ratings and consistency</h4>
                  <p className="text-muted-foreground text-sm">Quality service builds long-term reputation and trust</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Trust protection</h3>
            
            <div className="bg-secondary/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                <h4 className="font-semibold">Scam prevention</h4>
              </div>
              
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-destructive rounded-full"></div>
                  Negative feedback reduces trust scores
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-destructive rounded-full"></div>
                  Repeat offenders get flagged automatically  
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-destructive rounded-full"></div>
                  Serious violations result in permanent bans
                </li>
              </ul>
            </div>

            <div className="bg-accent/10 rounded-2xl p-6">
              <h4 className="font-semibold mb-2 text-accent">Competitive levels & XP</h4>
              <p className="text-sm text-muted-foreground">
                Sellers compete for higher levels through consistent quality service, 
                encouraging ongoing engagement and excellence in the marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReputationBadges;