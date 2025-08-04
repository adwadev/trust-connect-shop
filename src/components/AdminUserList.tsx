import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trash2, Mail, Calendar } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface User {
  id: string;
  email?: string;
  created_at: string;
  last_sign_in_at?: string;
  email_confirmed_at?: string;
}

export const AdminUserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      // Note: We can't directly access auth.users table via the client
      // So we'll get user data from products table for now
      const { data, error } = await supabase
        .from('products')
        .select('user_id, created_at')
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Get unique users
      const uniqueUsers = data?.reduce((acc: any[], product) => {
        if (!acc.find(u => u.id === product.user_id)) {
          acc.push({
            id: product.user_id,
            created_at: product.created_at,
            email: product.user_id === 'admin' ? 'admin@nagadras.com' : 'user@example.com'
          });
        }
        return acc;
      }, []) || [];

      setUsers(uniqueUsers);
    } catch (error: any) {
      toast({
        title: "Error fetching users",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user and all their products?')) return;

    try {
      // First delete user's products
      const { error: productsError } = await supabase
        .from('products')
        .delete()
        .eq('user_id', userId);

      if (productsError) throw productsError;

      toast({
        title: "User data deleted",
        description: "User's products have been deleted. Note: Auth user must be deleted manually from Supabase dashboard.",
      });
      fetchUsers();
    } catch (error: any) {
      toast({
        title: "Error deleting user data",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading users...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">All Users ({users.length})</h3>
        <div className="text-sm text-muted-foreground">
          Note: User authentication is managed by Supabase Auth
        </div>
      </div>

      <div className="grid gap-4">
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      {user.email}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm mt-1">
                      ID: {user.id}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {user.id !== 'admin' && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleDeleteUser(user.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 items-center">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Joined {new Date(user.created_at).toLocaleDateString()}
                </Badge>
                {user.id === 'admin' && (
                  <Badge variant="default">Admin</Badge>
                )}
                {user.last_sign_in_at && (
                  <Badge variant="secondary">
                    Last seen {new Date(user.last_sign_in_at).toLocaleDateString()}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {users.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No users found.
        </div>
      )}

      <div className="bg-muted/50 p-4 rounded-lg">
        <h4 className="font-medium mb-2">Admin Note:</h4>
        <p className="text-sm text-muted-foreground">
          User management through the admin panel is limited to viewing and deleting user data. 
          Full user management (blocking, email verification, etc.) should be done through the 
          Supabase dashboard at supabase.com/dashboard/project/emfhtocfptwrdknlspck/auth/users
        </p>
      </div>
    </div>
  );
};