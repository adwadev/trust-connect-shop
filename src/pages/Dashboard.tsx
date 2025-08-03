import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import ProductList from '@/components/ProductList';
import ProductForm from '@/components/ProductForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut, Plus } from 'lucide-react';
import { useState } from 'react';

const Dashboard = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [showProductForm, setShowProductForm] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-muted-foreground">Loading...</h2>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Nagadras Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Welcome, {user.email}
            </span>
            <Button onClick={signOut} variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Your Products</CardTitle>
                <p className="text-muted-foreground">Manage your product listings</p>
              </div>
              <Button 
                onClick={() => setShowProductForm(true)}
                variant="cta"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </CardHeader>
            <CardContent>
              <ProductList />
            </CardContent>
          </Card>
        </div>
      </main>

      {showProductForm && (
        <ProductForm 
          onClose={() => setShowProductForm(false)}
          onSuccess={() => setShowProductForm(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;