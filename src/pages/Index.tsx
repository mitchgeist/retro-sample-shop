import React, { useState } from 'react';
import { CartProvider } from '@/components/CartProvider';
import { Navigation } from '@/components/Navigation';
import CursorTrail from '@/components/CursorTrail';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { HomeSection } from '@/components/sections/HomeSection';
import { SamplePacksSection } from '@/components/sections/SamplePacksSection';
import { BeatsSection } from '@/components/sections/BeatsSection';
import { CartSection } from '@/components/sections/CartSection';
import { MerchSection } from '@/components/sections/MerchSection';

type Section = 'home' | 'samples' | 'beats' | 'merch' | 'cart';

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <HomeSection onSectionChange={setCurrentSection} />;
      case 'samples':
        return <SamplePacksSection />;
      case 'beats':
        return <BeatsSection />;
      case 'merch':
        return <MerchSection />;
      case 'cart':
        return <CartSection />;
      default:
        return <HomeSection onSectionChange={setCurrentSection} />;
    }
  };

  return (
    <CartProvider>
      <BackgroundEffects />
      <div className="min-h-screen bg-background crt-screen">
        <div className="container mx-auto p-4">
          <Navigation 
            currentSection={currentSection} 
            onSectionChange={setCurrentSection} 
          />
          {renderSection()}
          <CursorTrail />
        </div>
      </div>
    </CartProvider>
  );
};

export default Index;