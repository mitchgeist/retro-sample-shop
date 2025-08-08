import React from 'react';
import { RetroWindow } from '../RetroWindow';
import { ProductCard } from '../ProductCard';
import samplePackIcon from '@/assets/sample-pack-icon.png';

const samplePacks = [
  {
    id: 'sp-001',
    name: 'CHIPTUNE ESSENTIALS VOL.1',
    price: 24.99,
    description: '60 classic 8-bit sounds, leads, and arpeggios',
    image: samplePackIcon
  },
  {
    id: 'sp-002',
    name: 'RETRO DRUMS COLLECTION',
    price: 19.99,
    description: '45 authentic drum samples from vintage machines',
    image: samplePackIcon
  },
  {
    id: 'sp-003',
    name: 'SYNTHWAVE STARTER PACK',
    price: 29.99,
    description: '75 80s-inspired synth loops and one-shots',
    image: samplePackIcon
  },
  {
    id: 'sp-004',
    name: 'PIXEL BASS COLLECTION',
    price: 22.99,
    description: '40 deep 8-bit bass lines and sub frequencies',
    image: samplePackIcon
  },
  {
    id: 'sp-005',
    name: 'ARCADE ATMOSPHERES VOL.1',
    price: 26.99,
    description: '55 ambient textures and retro sound effects',
    image: samplePackIcon
  },
  {
    id: 'sp-006',
    name: 'GLITCH TOOLKIT DELUXE',
    price: 23.99,
    description: '50 digital artifacts and broken beat elements',
    image: samplePackIcon
  },
  {
    id: 'sp-007',
    name: 'LOFI CHIPTUNE VIBES',
    price: 27.99,
    description: '65 chill 8-bit loops with vinyl warmth',
    image: samplePackIcon
  },
  {
    id: 'sp-008',
    name: 'GAMEBOY CLASSICS',
    price: 21.99,
    description: '35 authentic Game Boy inspired sounds',
    image: samplePackIcon
  }
];

export const SamplePacksSection: React.FC = () => {
  return (
    <RetroWindow title={`SAMPLE_PACKS.DIR - ${samplePacks.length} ITEMS FOUND`}>
      <div className="space-y-4">
        <div className="border-2 border-[hsl(var(--button-shadow))] p-4 bg-background">
          <p className="retro-font text-sm text-muted-foreground">
            {`> Displaying premium sample packs for music production`}<br/>
            {`> All packs include royalty-free commercial license`}<br/>
            {`> High-quality WAV files (24-bit/44.1kHz)`}<br/>
            {`> Compatible with all major DAWs and samplers`}
          </p>
        </div>

        <div className="text-center space-y-3 py-4">
          <h2 className="pixel-font text-xl text-primary retro-glow">
            AUTHENTIC 8-BIT SAMPLE LIBRARY
          </h2>
          <p className="retro-font text-muted-foreground max-w-2xl mx-auto">
            Carefully crafted samples that capture the essence of classic gaming and retro computing. 
            Each pack is designed to inspire and elevate your productions.
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