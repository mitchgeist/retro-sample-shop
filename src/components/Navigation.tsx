import React from 'react';
import { RetroButton } from './ui/retro-button';
import { useCart } from './CartProvider';

interface NavigationProps {
  currentSection: 'home' | 'samples' | 'beats' | 'merch' | 'cart';
  onSectionChange: (section: 'home' | 'samples' | 'beats' | 'merch' | 'cart') => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentSection, onSectionChange }) => {
  const { itemCount } = useCart();

  return (
    <nav className="window-chrome bg-gradient-to-r from-card via-card to-muted p-4 mb-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="pixel-font text-lg text-primary blink retro-glow">♪</span>
          <h1 className="pixel-font text-xl text-foreground">MITCHGEIST.EXE</h1>
          <span className="retro-font text-sm text-muted-foreground hidden sm:inline">v2.0</span>
        </div>
        
        <div className="flex flex-wrap gap-2 justify-center">
          <RetroButton
            variant={currentSection === 'home' ? 'primary' : 'default'}
            size="sm"
            onClick={() => onSectionChange('home')}
            className="min-w-[80px]"
          >
            HOME
          </RetroButton>
          
          <RetroButton
            variant={currentSection === 'samples' ? 'primary' : 'default'}
            size="sm"
            onClick={() => onSectionChange('samples')}
            className="min-w-[120px]"
          >
            SAMPLE PACKS
          </RetroButton>
          
          <RetroButton
            variant={currentSection === 'beats' ? 'primary' : 'default'}
            size="sm"
            onClick={() => onSectionChange('beats')}
            className="min-w-[80px]"
          >
            BEATS
          </RetroButton>

          <RetroButton
            variant={currentSection === 'merch' ? 'primary' : 'default'}
            size="sm"
            onClick={() => onSectionChange('merch')}
            className="min-w-[80px]"
          >
            MERCH
          </RetroButton>
          
          <RetroButton
            variant={currentSection === 'cart' ? 'neon' : 'outline'}
            size="sm"
            onClick={() => onSectionChange('cart')}
            className="min-w-[100px]"
          >
            CART ({itemCount})
          </RetroButton>
        </div>
      </div>
    </nav>
  );
};