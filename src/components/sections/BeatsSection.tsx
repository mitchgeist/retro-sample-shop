import React, { useMemo, useState } from 'react';
import { RetroWindow } from '../RetroWindow';
import { ProductCard } from '../ProductCard';
import beatsIcon from '@/assets/beats-icon.png';

interface Beat {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  bpm: number;
  key: string;
  uploadDate: string; // ISO format
}

const beats: Beat[] = [
  {
    id: 'bt-001',
    name: 'NEON NIGHTS DELUXE',
    price: 34.99,
    description: '130 BPM Synthwave instrumental with full stems',
    image: beatsIcon,
    bpm: 130,
    key: 'Am',
    uploadDate: '2025-01-15'
  },
  {
    id: 'bt-002',
    name: 'PIXEL PERFECT ANTHEM',
    price: 39.99,
    description: '140 BPM Chiptune banger with vocal chops & stems',
    image: beatsIcon,
    bpm: 140,
    key: 'C#m',
    uploadDate: '2025-01-10'
  },
  {
    id: 'bt-003',
    name: 'RETRO VIBES CHILL',
    price: 32.99,
    description: '110 BPM Lo-fi beat with 8-bit elements & stems',
    image: beatsIcon,
    bpm: 110,
    key: 'Gm',
    uploadDate: '2025-01-05'
  },
  {
    id: 'bt-004',
    name: 'ARCADE DREAMS REMIX',
    price: 36.99,
    description: '150 BPM High-energy chiptune track with stems',
    image: beatsIcon,
    bpm: 150,
    key: 'F#',
    uploadDate: '2024-12-28'
  },
  {
    id: 'bt-005',
    name: 'DIGITAL LOVE BALLAD',
    price: 33.99,
    description: '120 BPM Romantic synthwave ballad with stems',
    image: beatsIcon,
    bpm: 120,
    key: 'Dm',
    uploadDate: '2024-12-20'
  },
  {
    id: 'bt-006',
    name: 'GLITCH CITY MAYHEM',
    price: 38.99,
    description: '160 BPM Aggressive glitch hop anthem with stems',
    image: beatsIcon,
    bpm: 160,
    key: 'Bm',
    uploadDate: '2024-12-15'
  },
  {
    id: 'bt-007',
    name: 'CYBERPUNK NIGHTS',
    price: 41.99,
    description: '128 BPM Dark synthwave with industrial elements',
    image: beatsIcon,
    bpm: 128,
    key: 'Em',
    uploadDate: '2024-12-10'
  },
  {
    id: 'bt-008',
    name: 'GAMEBOY GROOVE',
    price: 29.99,
    description: '95 BPM Chill chiptune with hip-hop influence',
    image: beatsIcon,
    bpm: 95,
    key: 'C',
    uploadDate: '2024-12-05'
  }
];

export const BeatsSection: React.FC = () => {
  const [minBpm, setMinBpm] = useState<string>('');
  const [maxBpm, setMaxBpm] = useState<string>('');
  const [selectedKey, setSelectedKey] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('date_desc');

  const displayedBeats = useMemo(() => {
    const list = beats
      .filter((b) => {
        const meetsMin = minBpm === '' || b.bpm >= Number(minBpm);
        const meetsMax = maxBpm === '' || b.bpm <= Number(maxBpm);
        const meetsKey = selectedKey === 'all' || b.key === selectedKey;
        return meetsMin && meetsMax && meetsKey;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'price_asc':
            return a.price - b.price;
          case 'price_desc':
            return b.price - a.price;
          case 'date_asc':
            return (
              new Date(a.uploadDate).getTime() - new Date(b.uploadDate).getTime()
            );
          case 'date_desc':
            return (
              new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
            );
          case 'bpm_asc':
            return a.bpm - b.bpm;
          case 'bpm_desc':
            return b.bpm - a.bpm;
          default:
            return 0;
        }
      });

    return list;
  }, [minBpm, maxBpm, selectedKey, sortBy]);

  const keys = [
    'all',
    'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B',
    'Cm', 'C#m', 'Dm', 'D#m', 'Em', 'Fm', 'F#m', 'Gm', 'G#m', 'Am', 'A#m', 'Bm'
  ];

  return (
    <RetroWindow title={`BEATS.EXE - ${displayedBeats.length} TRACKS`}>
      <div className="space-y-4">
        <div className="border-2 border-[hsl(var(--button-shadow))] p-4 bg-background">
          <p className="retro-font text-sm text-muted-foreground">
            {`> Filter and sort beats by BPM, key, price, and upload date`}<br/>
            {`> All beats include full track + stems + project files`}<br/>
            {`> Royalty-free license for unlimited commercial use`}
          </p>
        </div>

        <div className="text-center space-y-3 py-4">
          <h2 className="pixel-font text-xl text-primary retro-glow">
            PREMIUM RETRO INSTRUMENTALS
          </h2>
          <p className="retro-font text-muted-foreground max-w-2xl mx-auto">
            Professional-quality beats that blend nostalgic 8-bit aesthetics with modern production techniques. 
            Perfect for artists, content creators, and retro gaming projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="retro-card bg-card p-3">
            <label className="retro-font text-xs text-muted-foreground">BPM Range</label>
            <div className="mt-2 flex items-center gap-2">
              <input
                type="number"
                inputMode="numeric"
                placeholder="Min"
                value={minBpm}
                onChange={(e) => setMinBpm(e.target.value)}
                className="w-full bg-background border-2 border-[hsl(var(--button-shadow))] p-1 retro-font text-sm"
              />
              <span className="retro-font text-sm">-</span>
              <input
                type="number"
                inputMode="numeric"
                placeholder="Max"
                value={maxBpm}
                onChange={(e) => setMaxBpm(e.target.value)}
                className="w-full bg-background border-2 border-[hsl(var(--button-shadow))] p-1 retro-font text-sm"
              />
            </div>
          </div>

          <div className="retro-card bg-card p-3">
            <label className="retro-font text-xs text-muted-foreground">Key</label>
            <select
              value={selectedKey}
              onChange={(e) => setSelectedKey(e.target.value)}
              className="mt-2 w-full bg-background border-2 border-[hsl(var(--button-shadow))] p-1 retro-font text-sm"
            >
              {keys.map((k) => (
                <option key={k} value={k}>
                  {k === 'all' ? 'All Keys' : k}
                </option>
              ))}
            </select>
          </div>

          <div className="retro-card bg-card p-3 md:col-span-2">
            <label className="retro-font text-xs text-muted-foreground">Sort</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="mt-2 w-full bg-background border-2 border-[hsl(var(--button-shadow))] p-1 retro-font text-sm"
            >
              <option value="date_desc">Date: Newest</option>
              <option value="date_asc">Date: Oldest</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="bpm_asc">BPM: Low to High</option>
              <option value="bpm_desc">BPM: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedBeats.map((beat) => (
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