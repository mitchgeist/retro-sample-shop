import React, { useState, useEffect } from 'react';
import { RetroButton } from './ui/retro-button';
import { Volume2, VolumeX } from 'lucide-react';

interface EnterPortalProps {
  onEnter: () => void;
}

export const EnterPortal: React.FC<EnterPortalProps> = ({ onEnter }) => {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEnter = () => {
    setIsLoading(true);
    // Simulate loading time for dramatic effect
    setTimeout(() => {
      onEnter();
    }, 1500);
  };

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="pixel-grid h-full w-full animate-pulse"></div>
      </div>
      
      {/* CRT scanlines effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full" style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 0, 0.03) 2px,
            rgba(0, 255, 0, 0.03) 4px
          )`
        }}></div>
      </div>

      <div className="relative z-10 text-center space-y-8 max-w-2xl mx-auto p-8">
        {/* Glowing title */}
        <div className="space-y-4">
          <h1 className="pixel-font text-4xl md:text-6xl text-green-400 retro-glow animate-pulse">
            MITCHGEIST.EXE
          </h1>
          <div className="pixel-font text-sm text-green-300 opacity-80">
            {isLoading ? 'LOADING SYSTEM...' : 'RETRO BEATS & SAMPLES'}
          </div>
        </div>

        {/* Loading bar when entering */}
        {isLoading && (
          <div className="w-full max-w-md mx-auto">
            <div className="bg-gray-800 border-2 border-green-400 h-6 relative overflow-hidden">
              <div className="bg-green-400 h-full animate-pulse" style={{
                width: '100%',
                animation: 'loading 1.5s ease-in-out'
              }}></div>
            </div>
            <div className="pixel-font text-xs text-green-300 mt-2">
              INITIALIZING AUDIO WORKSTATION...
            </div>
          </div>
        )}

        {/* Enter button and controls */}
        {!isLoading && (
          <div className="space-y-6">
            <RetroButton
              variant="neon"
              size="xl"
              onClick={handleEnter}
              className="pixel-font text-lg px-12 py-4 hover-scale"
            >
              ENTER THE MATRIX
            </RetroButton>

            <div className="flex items-center justify-center gap-4">
              <RetroButton
                variant="outline"
                size="sm"
                onClick={toggleAudio}
                className="flex items-center gap-2"
              >
                {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                {audioEnabled ? 'AUDIO ON' : 'AUDIO OFF'}
              </RetroButton>
            </div>

            <div className="pixel-font text-xs text-green-300 opacity-60 max-w-md mx-auto">
              WARNING: ENTERING THIS SYSTEM WILL EXPOSE YOU TO PREMIUM 8-BIT AUDIO CONTENT.
              PROCEED WITH CAUTION.
            </div>
          </div>
        )}

        {/* Blinking cursor */}
        <div className="pixel-font text-green-400 text-xl blink">_</div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};