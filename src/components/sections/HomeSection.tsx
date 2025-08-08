import React from 'react';
import { RetroWindow } from '../RetroWindow';
import { RetroButton } from '../ui/retro-button';
import heroBanner from '@/assets/hero-95-floppy.png';

interface HomeSectionProps {
  onSectionChange: (section: 'samples' | 'beats') => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onSectionChange }) => {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <RetroWindow title="WELCOME TO RETROBEATS v1.0">
        <div className="text-center space-y-4">
          <img
            src={heroBanner}
            alt="Windows 95 style 8-bit retro music production hero with CRT and floppy disks"
            loading="lazy"
            decoding="async"
            className="w-full max-w-xl mx-auto border-2 border-[hsl(var(--button-shadow))]"
            style={{ imageRendering: 'pixelated' }}
          />
          
          <h2 className="pixel-font text-xl text-foreground">
            PREMIUM 8-BIT SAMPLES & BEATS
          </h2>
          
          <p className="retro-font text-lg text-muted-foreground max-w-2xl mx-auto">
            Welcome to the ultimate destination for retro music production. 
            Get authentic 8-bit sample packs and beats straight from the golden age of computing.
          </p>
          
          <div className="flex gap-4 justify-center">
            <RetroButton
              variant="default"
              size="lg"
              onClick={() => onSectionChange('samples')}
            >
              BROWSE SAMPLE PACKS
            </RetroButton>
            <RetroButton
              variant="outline"
              size="lg"
              onClick={() => onSectionChange('beats')}
            >
              BROWSE BEATS
            </RetroButton>
          </div>
        </div>
      </RetroWindow>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-4">
        <RetroWindow title="SAMPLE_PACKS.DIR">
          <div className="space-y-3">
            <h3 className="pixel-font text-sm text-foreground">AUTHENTIC 8-BIT SOUNDS</h3>
            <p className="retro-font text-sm">
              → High-quality WAV files<br/>
              → Instant download<br/>
              → Commercial license included<br/>
              → Compatible with all DAWs
            </p>
            <RetroButton 
              variant="default" 
              size="sm"
              onClick={() => onSectionChange('samples')}
            >
              EXPLORE SAMPLES
            </RetroButton>
          </div>
        </RetroWindow>

        <RetroWindow title="BEATS.EXE">
          <div className="space-y-3">
            <h3 className="pixel-font text-sm text-foreground">READY-TO-USE BEATS</h3>
            <p className="retro-font text-sm">
              → Full instrumental tracks<br/>
              → Multiple BPM options<br/>
              → Stems available<br/>
              → Royalty-free licensing
            </p>
            <RetroButton 
              variant="default" 
              size="sm"
              onClick={() => onSectionChange('beats')}
            >
              BROWSE BEATS
            </RetroButton>
          </div>
        </RetroWindow>
      </div>
    </div>
  );
};