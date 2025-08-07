import React from 'react';
import { RetroWindow } from '../RetroWindow';
import { RetroButton } from '../ui/retro-button';
import { useCart } from '../CartProvider';
import { useToast } from '@/hooks/use-toast';

export const CartSection: React.FC = () => {
  const { items, removeItem, clearCart, totalPrice } = useCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast({
        title: "Cart is Empty",
        description: "Add some items to your cart before checking out.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Checkout Started",
      description: `Processing ${items.length} items totaling $${totalPrice.toFixed(2)}`,
      duration: 3000,
    });

    // Here you would integrate with your payment system
    // For demo purposes, we'll just clear the cart after a delay
    setTimeout(() => {
      clearCart();
      toast({
        title: "Purchase Complete!",
        description: "Your downloads are being prepared. Check your email for download links.",
        duration: 5000,
      });
    }, 2000);
  };

  return (
    <RetroWindow title={`SHOPPING_CART.EXE - ${items.length} ITEMS`}>
      <div className="space-y-4">
        {items.length === 0 ? (
          <div className="text-center py-8">
            <p className="retro-font text-lg text-muted-foreground mb-4">
              Your cart is empty
            </p>
            <p className="pixel-font text-xs text-primary blink">
              ADD SOME BEATS AND SAMPLES!
            </p>
          </div>
        ) : (
          <>
            <div className="border-2 border-[hsl(var(--button-shadow))] p-2 bg-background">
              <p className="retro-font text-sm text-muted-foreground">
                {`> Cart contains ${items.length} item(s)`}<br/>
                {`> Total: $${totalPrice.toFixed(2)}`}<br/>
                {`> All purchases include instant download`}
              </p>
            </div>

            <div className="space-y-2">
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className="retro-card flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    {item.image && (
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-12 h-12 object-cover border border-[hsl(var(--button-shadow))]"
                        style={{ imageRendering: 'pixelated' }}
                      />
                    )}
                    <div>
                      <h4 className="pixel-font text-xs text-foreground">{item.name}</h4>
                      <p className="retro-font text-sm text-muted-foreground">
                        {item.type === 'sample' ? 'Sample Pack' : 'Beat'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="retro-font text-lg font-bold text-primary">
                      ${item.price.toFixed(2)}
                    </span>
                    <RetroButton
                      variant="destructive"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                    >
                      REMOVE
                    </RetroButton>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-[hsl(var(--button-shadow))] pt-4">
              <div className="flex items-center justify-between mb-4">
                <span className="pixel-font text-lg text-foreground">TOTAL:</span>
                <span className="pixel-font text-xl text-primary retro-glow">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              
              <div className="flex gap-3">
                <RetroButton
                  variant="neon"
                  size="lg"
                  onClick={handleCheckout}
                  className="flex-1"
                >
                  CHECKOUT NOW
                </RetroButton>
                <RetroButton
                  variant="outline"
                  size="lg"
                  onClick={clearCart}
                >
                  CLEAR CART
                </RetroButton>
              </div>
            </div>
          </>
        )}
      </div>
    </RetroWindow>
  );
};