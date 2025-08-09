import React from 'react';
import { RetroButton } from './ui/retro-button';
import { useCart } from './CartProvider';
import { Youtube, Instagram, Music, Disc, Music2 } from 'lucide-react';
interface NavigationProps {
  currentSection: 'home' | 'samples' | 'beats' | 'merch' | 'cart';
  onSectionChange: (section: 'home' | 'samples' | 'beats' | 'merch' | 'cart') => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentSection, onSectionChange }) => {
  const { itemCount } = useCart();

  return (
    <nav className="window-chrome bg-card p-2 mb-4">
      <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="pixel-font text-sm text-primary blink">♪</span>
          <h1 className="pixel-font text-lg text-foreground">MitchGeist.exe</h1>
        </div>

        <div className="flex w-full flex-wrap justify-center gap-2 md:w-auto">
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
            variant={currentSection === 'merch' ? 'primary' : 'default'}
            size="sm"
            onClick={() => onSectionChange('merch')}
          >
            MERCH
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

      {/* Social links */}
      <div className="mt-2 flex justify-center gap-3">
        <a href="#" aria-label="YouTube" title="YouTube" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground hover-scale">
          <Youtube className="h-4 w-4" />
        </a>
        <a href="#" aria-label="Instagram" title="Instagram" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground hover-scale">
          <Instagram className="h-4 w-4" />
        </a>
        <a href="#" aria-label="Spotify" title="Spotify" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground hover-scale">
          <Music className="h-4 w-4" />
        </a>
        <a href="#" aria-label="Bandcamp" title="Bandcamp" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground hover-scale">
          <Music2 className="h-4 w-4" />
        </a>
        <a href="#" aria-label="TikTok" title="TikTok" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground hover-scale">
          <Disc className="h-4 w-4" />
        </a>
      </div>
    </nav>
  );
};