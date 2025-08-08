import React from 'react';
import { RetroButton } from './ui/retro-button';
import { useCart, CartItem } from './CartProvider';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  type: 'sample' | 'beat';
  image?: string;
  description?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  type,
  image,
  description
}) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    const item: CartItem = { id, name, price, type, image };
    addItem(item);
    toast({
      title: "Added to Cart!",
      description: `${name} has been added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <div className="retro-card pixel-grid">
      {image && (
        <div className="w-full h-24 bg-muted mb-3 border-2 border-[hsl(var(--button-shadow))] flex items-center justify-center">
          <img
            src={image}
            alt={name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
      )}
      
      <div className="space-y-2">
        <h3 className="pixel-font text-xs text-foreground">{name}</h3>
        {description && (
          <p className="retro-font text-sm text-muted-foreground">{description}</p>
        )}
        
        <div className="flex items-center justify-between">
          <span className="retro-font text-lg font-bold text-primary">
            ${price.toFixed(2)}
          </span>
          <RetroButton 
            variant="retro" 
            size="sm"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </RetroButton>
        </div>
      </div>
    </div>
  );
};