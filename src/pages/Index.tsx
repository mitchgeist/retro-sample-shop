import React, { useState } from 'react';
import { CartProvider } from '@/components/CartProvider';
import { Navigation } from '@/components/Navigation';
import CursorTrail from '@/components/CursorTrail';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { EnterPortal } from '@/components/EnterPortal';
import { TabSystem } from '@/components/TabSystem';
import { HomeSection } from '@/components/sections/HomeSection';
import { SamplePacksSection } from '@/components/sections/SamplePacksSection';
import { BeatsSection } from '@/components/sections/BeatsSection';
import { CartSection } from '@/components/sections/CartSection';
import { MerchSection } from '@/components/sections/MerchSection';
import { AudioVisualizer, SystemMonitor, TerminalWindow } from '@/components/InteractiveElements';

type Section = 'home' | 'samples' | 'beats' | 'merch' | 'cart';

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [hasEntered, setHasEntered] = useState(false);

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <TabSystem
            tabs={[
              {
                id: 'main',
                label: 'MAIN',
                icon: '🏠',
                content: <HomeSection onSectionChange={setCurrentSection} />
              },
              {
                id: 'visualizer',
                label: 'AUDIO',
                icon: '🎵',
                content: (
                  <div className="grid md:grid-cols-2 gap-4">
                    <AudioVisualizer />
                    <SystemMonitor />
                  </div>
                )
              },
              {
                id: 'terminal',
                label: 'TERMINAL',
                icon: '💻',
                content: <TerminalWindow />
              }
            ]}
            defaultTab="main"
          />
        );
      case 'samples':
        return (
          <TabSystem
            tabs={[
              {
                id: 'browse',
                label: 'BROWSE',
                icon: '📁',
                content: <SamplePacksSection />
              },
              {
                id: 'preview',
                label: 'PREVIEW',
                icon: '▶️',
                content: (
                  <div className="space-y-4">
                    <AudioVisualizer />
                    <div className="retro-card p-4">
                      <p className="retro-font text-sm text-muted-foreground">
                        Select a sample pack to preview audio samples here.
                      </p>
                    </div>
                  </div>
                )
              }
            ]}
            defaultTab="browse"
          />
        );
      case 'beats':
        return (
          <TabSystem
            tabs={[
              {
                id: 'browse',
                label: 'BROWSE',
                icon: '🎵',
                content: <BeatsSection />
              },
              {
                id: 'player',
                label: 'PLAYER',
                icon: '🎧',
                content: (
                  <div className="space-y-4">
                    <AudioVisualizer />
                    <div className="retro-card p-4">
                      <p className="retro-font text-sm text-muted-foreground">
                        Beat player and mixer controls coming soon...
                      </p>
                    </div>
                  </div>
                )
              }
            ]}
            defaultTab="browse"
          />
        );
      case 'merch':
        return <MerchSection />;
      case 'cart':
        return <CartSection />;
      default:
        return <HomeSection onSectionChange={setCurrentSection} />;
    }
  };

  if (!hasEntered) {
    return <EnterPortal onEnter={() => setHasEntered(true)} />;
  }
  return (
    <CartProvider>
      <BackgroundEffects />
      <div className="min-h-screen bg-background">
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