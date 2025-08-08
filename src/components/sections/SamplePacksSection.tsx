import React from 'react';
import { RetroWindow } from '../RetroWindow';
import { ProductCard } from '../ProductCard';
import samplePackIcon from '@/assets/sample-pack-icon.png';

const samplePacks = [
  {
    id: 'sp-001',
    name: 'CHIPTUNE ESSENTIALS',
    price: 19.99,
    description: '50 classic 8-bit sounds, leads, and arpeggios',
    image: samplePackIcon
  },
  {
    id: 'sp-002',
    name: 'RETRO DRUMS VOL.1',
    price: 15.99,
    description: 'Authentic drum samples from vintage machines',
    image: samplePackIcon
  },
  {
    id: 'sp-003',
    name: 'SYNTHWAVE STARTER',
    price: 24.99,
    description: '80s-inspired synth loops and one-shots',
    image: samplePackIcon
  },
  {
    id: 'sp-004',
    name: 'PIXEL BASS PACK',
    price: 17.99,
    description: 'Deep 8-bit bass lines and sub frequencies',
    image: samplePackIcon
  },
  {
    id: 'sp-005',
    name: 'ARCADE ATMOSPHERES',
    price: 21.99,
    description: 'Ambient textures and sound effects',
    image: samplePackIcon
  },
  {
    id: 'sp-006',
    name: 'GLITCH TOOLKIT',
    price: 18.99,
    description: 'Digital artifacts and broken beats',
    image: samplePackIcon
  }
];

export const SamplePacksSection: React.FC = () => {
  return (
    <RetroWindow title="SAMPLE_PACKS.DIR - 6 ITEMS FOUND">
      <div className="space-y-4">
        <div className="border-2 border-[hsl(var(--button-shadow))] p-2 bg-background">
          <p className="retro-font text-sm text-muted-foreground">
            {`> Displaying premium sample packs for music production`}<br/>
            {`> All packs include commercial license and instant download`}<br/>
            {`> Compatible with: FL Studio, Ableton, Logic Pro, Pro Tools`}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {samplePacks.map((pack) => (
            <ProductCard
              key={pack.id}
              id={pack.id}
              name={pack.name}
              price={pack.price}
              type="sample"
              image={pack.image}
              description={pack.description}
            />
          ))}
        </div>
      </div>
    </RetroWindow>
  );
};