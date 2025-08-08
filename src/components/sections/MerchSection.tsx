import React from 'react';
import { RetroWindow } from '../RetroWindow';

export const MerchSection: React.FC = () => {
  return (
    <div className="space-y-4">
      <RetroWindow title="MERCH.DIR">
        <div className="retro-font text-sm text-muted-foreground">
          Browse official Mitch Geist apparel and accessories. New drops soon.
        </div>
      </RetroWindow>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {["Classic Tee", "Retro Cap", "Sticker Pack"].map((name, idx) => (
          <RetroWindow key={idx} title={`${name.toUpperCase().replace(/\s/g, '_')}.PNG`}>
            <div className="space-y-2">
              <img
                src="/placeholder.svg"
                alt={`Mitch Geist merch ${name} placeholder image`}
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover border-2 border-[hsl(var(--button-shadow))]"
              />
              <div className="flex items-center justify-between retro-font text-sm">
                <span className="text-foreground">{name}</span>
                <span className="text-muted-foreground">$25.00</span>
              </div>
            </div>
          </RetroWindow>
        ))}
      </div>
    </div>
  );
};

export default MerchSection;
