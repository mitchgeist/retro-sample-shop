import React from 'react';
import { RetroWindow } from '../RetroWindow';
import { ProductCard } from '../ProductCard';
import beatsIcon from '@/assets/beats-icon.png';

const beats = [
  {
    id: 'bt-001',
    name: 'NEON NIGHTS',
    price: 29.99,
    description: '130 BPM Synthwave instrumental with stems',
    image: beatsIcon
  },
  {
    id: 'bt-002',
    name: 'PIXEL PERFECT',
    price: 34.99,
    description: '140 BPM Chiptune banger with vocal chops',
    image: beatsIcon
  },
  {
    id: 'bt-003',
    name: 'RETRO VIBES',
    price: 27.99,
    description: '110 BPM Lo-fi beat with 8-bit elements',
    image: beatsIcon
  },
  {
    id: 'bt-004',
    name: 'ARCADE DREAMS',
    price: 31.99,
    description: '150 BPM High-energy chiptune track',
    image: beatsIcon
  },
  {
    id: 'bt-005',
    name: 'DIGITAL LOVE',
    price: 28.99,
    description: '120 BPM Romantic synthwave ballad',
    image: beatsIcon
  },
  {
    id: 'bt-006',
    name: 'GLITCH CITY',
    price: 33.99,
    description: '160 BPM Aggressive glitch hop anthem',
    image: beatsIcon
  }
];

export const BeatsSection: React.FC = () => {
  return (
    <RetroWindow title="BEATS.EXE - 6 TRACKS LOADED">
      <div className="space-y-4">
        <div className="border-2 border-[hsl(var(--button-shadow))] p-2 bg-background">
          <p className="retro-font text-sm text-muted-foreground">
            {`> Loading premium instrumental beats...`}<br/>
            {`> All beats include full track + stems + MIDI files`}<br/>
            {`> Royalty-free license for unlimited commercial use`}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {beats.map((beat) => (
            <ProductCard
              key={beat.id}
              id={beat.id}
              name={beat.name}
              price={beat.price}
              type="beat"
              image={beat.image}
              description={beat.description}
            />
          ))}
        </div>
      </div>
    </RetroWindow>
  );
};