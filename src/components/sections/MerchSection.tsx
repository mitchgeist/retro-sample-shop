import React from 'react';
import { RetroWindow } from '../RetroWindow';
import { ProductCard } from '../ProductCard';
import { RetroButton } from '../ui/retro-button';

const merchItems = [
  {
    id: 'merch-001',
    name: 'MITCHGEIST CLASSIC TEE',
    price: 25.00,
    description: 'Premium cotton tee with retro logo design',
    image: '/placeholder.svg'
  },
  {
    id: 'merch-002', 
    name: 'RETRO SNAPBACK HAT',
    price: 30.00,
    description: 'Embroidered snapback with 8-bit aesthetic',
    image: '/placeholder.svg'
  },
  {
    id: 'merch-003',
    name: 'PIXEL STICKER PACK',
    price: 12.00,
    description: 'Set of 6 weatherproof vinyl stickers',
    image: '/placeholder.svg'
  },
  {
    id: 'merch-004',
    name: 'CHIPTUNE HOODIE',
    price: 45.00,
    description: 'Cozy pullover hoodie with pixel art design',
    image: '/placeholder.svg'
  },
  {
    id: 'merch-005',
    name: 'RETRO ENAMEL PIN SET',
    price: 18.00,
    description: 'Collectible enamel pins featuring classic designs',
    image: '/placeholder.svg'
  },
  {
    id: 'merch-006',
    name: 'SYNTHWAVE POSTER',
    price: 20.00,
    description: '18x24" high-quality print on premium paper',
    image: '/placeholder.svg'
  }
];

export const MerchSection: React.FC = () => {
  return (
    <div className="space-y-4">
      <RetroWindow title="MERCH.DIR - OFFICIAL MITCHGEIST GEAR">
        <div className="space-y-4">
          <div className="border-2 border-[hsl(var(--button-shadow))] p-4 bg-background">
            <p className="retro-font text-sm text-muted-foreground">
              {`> Official MITCHGEIST merchandise and apparel`}<br/>
              {`> High-quality materials with retro-inspired designs`}<br/>
              {`> Worldwide shipping available`}<br/>
              {`> Limited edition drops - get them while they last!`}
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <h3 className="pixel-font text-lg text-primary retro-glow">
              REP THE RETRO AESTHETIC
            </h3>
            <p className="retro-font text-muted-foreground">
              Show your love for 8-bit culture with official MITCHGEIST gear
            </p>
          </div>
        </div>
      </RetroWindow>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {merchItems.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            type="sample"
            image={item.image}
            description={item.description}
          />
        ))}
      </div>

      <div className="window-chrome bg-gradient-to-r from-card to-muted p-6">
        <div className="text-center space-y-4">
          <h3 className="pixel-font text-lg text-foreground">CUSTOM MERCH REQUESTS</h3>
          <p className="retro-font text-muted-foreground">
            Want something special? Hit us up for custom designs and bulk orders!
          </p>
          <RetroButton variant="outline" size="lg">
            CONTACT FOR CUSTOM ORDERS
          </RetroButton>
        </div>
      </div>
    </div>
  );
};

export default MerchSection;
