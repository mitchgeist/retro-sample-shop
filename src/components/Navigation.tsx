import React from 'react';
import { RetroButton } from './ui/retro-button';
import { useCart } from './CartProvider';

interface NavigationProps {
  currentSection: 'home' | 'samples' | 'beats' | 'cart';
  onSectionChange: (section: 'home' | 'samples' | 'beats' | 'cart') => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentSection, onSectionChange }) => {
  const { itemCount } = useCart();

  return (
    <nav className="window-chrome bg-card p-2 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="pixel-font text-sm text-primary blink">♪</span>
          <h1 className="pixel-font text-lg text-foreground">RETROBEATS.EXE</h1>
        </div>
        
        <div className="flex gap-2">
          <RetroButton
            variant={currentSection === 'home' ? 'primary' : 'default'}
            size="sm"
            onClick={() => onSectionChange('home')}
          >
            HOME
          </RetroButton>
          
          <RetroButton
            variant={currentSection === 'samples' ? 'primary' : 'default'}
            size="sm"
            onClick={() => onSectionChange('samples')}
          >
            SAMPLE PACKS
          </RetroButton>
          
          <RetroButton
            variant={currentSection === 'beats' ? 'primary' : 'default'}
            size="sm"
            onClick={() => onSectionChange('beats')}
          >
            BEATS
          </RetroButton>
          
          <RetroButton
            variant={currentSection === 'cart' ? 'neon' : 'outline'}
            size="sm"
            onClick={() => onSectionChange('cart')}
          >
            CART ({itemCount})
          </RetroButton>
        </div>
      </div>
    </nav>
  );
};