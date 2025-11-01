import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { ShoppingCart, CreditCard } from 'lucide-react';

const Checkout = () => {
  const [items] = useState([
    { id: 1, name: 'Premium Plan', price: 29.99, quantity: 1 },
    { id: 2, name: 'Additional Storage', price: 9.99, quantity: 2 },
    { id: 3, name: 'Priority Support', price: 14.99, quantity: 1 },
  ]);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleCheckout = () => {
    toast.success('Order placed successfully! (Demo mode - no actual payment processed)');
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Checkout</span>
          </h1>
          <p className="text-muted-foreground">Review your order and complete your purchase</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Items */}
          <div className="lg:col-span-2">
            <Card className="shadow-medium">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <CardTitle>Order Summary</CardTitle>
                </div>
                <CardDescription>Items in your cart</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-4 rounded-lg bg-muted/30">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Total */}
          <div className="lg:col-span-1">
            <Card className="shadow-medium sticky top-24">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <CardTitle>Payment Details</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
                <Button onClick={handleCheckout} className="w-full">
                  Proceed to Payment
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  This is a demo. No actual payment will be processed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
