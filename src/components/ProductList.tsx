import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2, Eye } from 'lucide-react';
import ProductForm from './ProductForm';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  image_url: string;
  status: string;
  created_at: string;
  user_id: string;
}

interface ProductListProps {
  searchTerm?: string;
  category?: string;
  priceRange?: string;
  showOnlyUserProducts?: boolean;
}

const ProductList = ({ 
  searchTerm = '', 
  category = '', 
  priceRange = '', 
  showOnlyUserProducts = true 
}: ProductListProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchProducts = async () => {
    try {
      let query = supabase
        .from('products')
        .select('*')
        .eq('status', 'active');

      if (showOnlyUserProducts && user) {
        query = query.eq('user_id', user.id);
      }

      if (searchTerm) {
        query = query.ilike('title', `%${searchTerm}%`);
      }

      if (category) {
        query = query.eq('category', category);
      }

      if (priceRange) {
        const [min, max] = priceRange.split('-').map(Number);
        if (max) {
          query = query.gte('price', min).lte('price', max);
        } else {
          query = query.gte('price', min);
        }
      }

      const { data, error } = await query.order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error: any) {
      toast({
        title: "Error fetching products",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchTerm, category, priceRange, showOnlyUserProducts, user]);

  const handleDelete = async (productId: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', productId)
        .eq('user_id', user?.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Product deleted successfully",
      });

      fetchProducts();
    } catch (error: any) {
      toast({
        title: "Error deleting product",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <div className="h-48 bg-muted rounded-t-lg"></div>
            <CardContent className="p-4">
              <div className="h-4 bg-muted rounded mb-2"></div>
              <div className="h-3 bg-muted rounded mb-2"></div>
              <div className="h-3 bg-muted rounded w-1/2"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold text-muted-foreground">No products found</h3>
        <p className="text-muted-foreground">
          {showOnlyUserProducts ? "Start by adding your first product!" : "Try adjusting your search filters."}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden transition-all hover:shadow-glow">
            {product.image_url && (
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image_url} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
            )}
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg line-clamp-1">{product.title}</CardTitle>
                {showOnlyUserProducts && user?.id === product.user_id && (
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setEditingProduct(product)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(product.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center mb-3">
                <span className="text-2xl font-bold text-primary">
                  ${product.price}
                </span>
                {product.category && (
                  <Badge variant="secondary">{product.category}</Badge>
                )}
              </div>
              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {product.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{product.tags.length - 3} more
                    </Badge>
                  )}
                </div>
              )}
              {!showOnlyUserProducts && (
                <Button variant="cta" className="w-full">
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {editingProduct && (
        <ProductForm
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onSuccess={() => {
            setEditingProduct(null);
            fetchProducts();
          }}
        />
      )}
    </>
  );
};

export default ProductList;