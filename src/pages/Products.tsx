import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';
import ProductList from '@/components/ProductList';
import { Link } from 'react-router-dom';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');

  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              Nagadras
            </Link>
            <div className="flex gap-4">
              <Link to="/auth">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="cta">Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Product Search & Filter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="accounts">Telegram Accounts</SelectItem>
                  <SelectItem value="topup">Top-up Services</SelectItem>
                  <SelectItem value="services">Digital Services</SelectItem>
                  <SelectItem value="oldgroup">Old Groups/Channels</SelectItem>
                  <SelectItem value="bots">Telegram Bots</SelectItem>
                  <SelectItem value="memberships">Premium Memberships</SelectItem>
                  <SelectItem value="others">Others</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Price</SelectItem>
                  <SelectItem value="0-50">$0 - $50</SelectItem>
                  <SelectItem value="50-100">$50 - $100</SelectItem>
                  <SelectItem value="100-500">$100 - $500</SelectItem>
                  <SelectItem value="500+">$500+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Available Products</CardTitle>
            <p className="text-muted-foreground">Browse all available products</p>
          </CardHeader>
          <CardContent>
            <ProductList 
              searchTerm={searchTerm}
              category={selectedCategory === 'all' ? '' : selectedCategory}
              priceRange={priceRange === 'all' ? '' : priceRange}
              showOnlyUserProducts={false}
            />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Products;