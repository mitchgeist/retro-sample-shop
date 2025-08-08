import React, { useState } from 'react';
import { RetroWindow } from '../RetroWindow';
import { RetroButton } from '../ui/retro-button';
import heroBanner from '@/assets/hero-landing-95.webp';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
import ProducerSprite from '@/components/ProducerSprite';

interface HomeSectionProps {
  onSectionChange: (section: 'samples' | 'beats') => void;
}

const NewsletterCTA: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: 'Please enter a valid email.' });
      return;
    }
    // TODO: Wire up to Supabase 'subscribers' table
    toast({ title: 'Subscribed! 🎶', description: "Thanks for joining Mitch's newsletter." });
    setEmail('');
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-2 items-center justify-center">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full sm:w-96 retro-font text-foreground bg-card px-3 py-2 border-2 border-[hsl(var(--button-shadow))] focus:outline-none"
        aria-label="Email address"
      />
      <RetroButton variant="default" size="sm" type="submit">SUBSCRIBE</RetroButton>
    </form>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    { q: 'What formats are the samples/beats?', a: 'All samples are WAV, beats are high-quality WAV/MP3. Stems available on select beats.' },
    { q: 'Can I use these commercially?', a: 'Yes. Royalty-free for most uses. See license details per product.' },
    { q: 'How do I receive downloads?', a: 'Instant download link is provided after purchase and via email.' },
    { q: 'Do you take custom requests?', a: 'Occasionally! Reach out via the contact link for commissions.' },
  ];

  return (
    <Accordion type="single" collapsible className="text-left">
      {faqs.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className="pixel-font text-sm text-foreground">{item.q}</AccordionTrigger>
          <AccordionContent className="retro-font text-sm text-muted-foreground">{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export const HomeSection: React.FC<HomeSectionProps> = ({ onSectionChange }) => {
  return (
    <div className="relative space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden window-chrome bg-gradient-to-br from-card via-card to-muted min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 pixel-grid opacity-20"></div>
        <div className="relative text-center space-y-6 z-10 max-w-4xl mx-auto px-8">
          <ProducerSprite />
          
          <div className="space-y-4">
            <h1 className="pixel-font text-3xl md:text-5xl text-foreground retro-glow">
              MITCHGEIST
            </h1>
            <div className="retro-font text-xl md:text-2xl text-primary font-bold">
              PREMIUM 8-BIT SAMPLES & BEATS
            </div>
          </div>
          
          <img
            src={heroBanner}
            alt="Windows 95 style pixel art music production banner"
            loading="lazy"
            decoding="async"
            className="w-full max-w-2xl mx-auto border-4 border-[hsl(var(--button-shadow))] shadow-lg"
            style={{ imageRendering: 'pixelated' }}
          />
          
          <p className="retro-font text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Welcome to the ultimate destination for retro music production. 
            Get authentic 8-bit sample packs and beats straight from the golden age of computing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <RetroButton
              variant="neon"
              size="xl"
              onClick={() => onSectionChange('samples')}
              className="min-w-[200px]"
            >
              BROWSE SAMPLE PACKS
            </RetroButton>
            <RetroButton
              variant="retro"
              size="xl"
              onClick={() => onSectionChange('beats')}
              className="min-w-[200px]"
            >
              BROWSE BEATS
            </RetroButton>
          </div>
        </div>
      </div>

      {/* Social Links Bar */}
      <div className="window-chrome bg-card p-4">
        <div className="flex flex-wrap justify-center gap-4 items-center">
          <span className="pixel-font text-sm text-muted-foreground">CONNECT:</span>
          <div className="flex gap-3">
            <a 
              href="https://www.instagram.com/mitchgeist/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="retro-font text-primary hover:text-accent transition-colors"
            >
              INSTAGRAM
            </a>
            <span className="text-muted-foreground">|</span>
            <a 
              href="https://soundcloud.com/mitchgeist" 
              target="_blank" 
              rel="noopener noreferrer"
              className="retro-font text-primary hover:text-accent transition-colors"
            >
              SOUNDCLOUD
            </a>
            <span className="text-muted-foreground">|</span>
            <a 
              href="https://www.youtube.com/@mitchgeist" 
              target="_blank" 
              rel="noopener noreferrer"
              className="retro-font text-primary hover:text-accent transition-colors"
            >
              YOUTUBE
            </a>
            <span className="text-muted-foreground">|</span>
            <a 
              href="https://open.spotify.com/artist/mitchgeist" 
              target="_blank" 
              rel="noopener noreferrer"
              className="retro-font text-primary hover:text-accent transition-colors"
            >
              SPOTIFY
            </a>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="retro-card hover:scale-105 transition-transform duration-200">
          <div className="space-y-4">
            <div className="pixel-font text-lg text-primary blink">♪</div>
            <h3 className="pixel-font text-sm text-foreground">AUTHENTIC 8-BIT SOUNDS</h3>
            <p className="retro-font text-sm text-muted-foreground">
              → High-quality WAV files<br/>
              → Instant download<br/>
              → Commercial license included<br/>
              → Compatible with all DAWs
            </p>
            <RetroButton 
              variant="default" 
              size="sm"
              onClick={() => onSectionChange('samples')}
              className="w-full"
            >
              EXPLORE SAMPLES
            </RetroButton>
          </div>
        </div>

        <div className="retro-card hover:scale-105 transition-transform duration-200">
          <div className="space-y-4">
            <div className="pixel-font text-lg text-primary blink">♫</div>
            <h3 className="pixel-font text-sm text-foreground">READY-TO-USE BEATS</h3>
            <p className="retro-font text-sm text-muted-foreground">
              → Full instrumental tracks<br/>
              → Multiple BPM options<br/>
              → Stems available<br/>
              → Royalty-free licensing
            </p>
            <RetroButton 
              variant="default" 
              size="sm"
              onClick={() => onSectionChange('beats')}
              className="w-full"
            >
              BROWSE BEATS
            </RetroButton>
          </div>
        </div>

        <div className="retro-card hover:scale-105 transition-transform duration-200">
          <div className="space-y-4">
            <div className="pixel-font text-lg text-primary blink">♬</div>
            <h3 className="pixel-font text-sm text-foreground">CUSTOM PRODUCTION</h3>
            <p className="retro-font text-sm text-muted-foreground">
              → Bespoke beat creation<br/>
              → Your vision realized<br/>
              → Professional quality<br/>
              → Direct collaboration
            </p>
            <RetroButton 
              variant="outline" 
              size="sm"
              className="w-full"
            >
              GET CUSTOM BEATS
            </RetroButton>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <RetroWindow title="NEWSLETTER.EXE - STAY IN THE LOOP">
        <div className="text-center space-y-4">
          <p className="retro-font text-muted-foreground">
            Get notified about new releases, exclusive samples, and retro music production tips.
          </p>
          <NewsletterCTA />
        </div>
      </RetroWindow>

      {/* About Section */}
      <div className="window-chrome bg-gradient-to-r from-card to-muted p-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="pixel-font text-xl text-foreground">ABOUT MITCHGEIST</h2>
          <p className="retro-font text-lg text-muted-foreground leading-relaxed">
            Crafting nostalgic soundscapes that transport you back to the golden age of 8-bit gaming. 
            Each sample pack and beat is meticulously designed to capture that authentic retro vibe 
            while maintaining modern production standards. From chiptune classics to synthwave bangers, 
            discover the sounds that defined a generation.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <RetroWindow title="FAQ.TXT - FREQUENTLY ASKED QUESTIONS">
        <FAQ />
      </RetroWindow>
    </div>
  );
};

const NewsletterCTA: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: 'Please enter a valid email.' });
      return;
    }
    toast({ title: 'Subscribed! 🎶', description: "Thanks for joining Mitch's newsletter." });
    setEmail('');
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 items-center justify-center max-w-md mx-auto">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 retro-font text-foreground bg-background px-4 py-3 border-2 border-[hsl(var(--button-shadow))] focus:outline-none focus:border-primary transition-colors"
        aria-label="Email address"
      />
      <RetroButton variant="neon" size="default" type="submit" className="min-w-[120px]">
        SUBSCRIBE
      </RetroButton>
    </form>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    { q: 'What formats are the samples/beats?', a: 'All samples are high-quality WAV files (24-bit/44.1kHz). Beats come as WAV/MP3 with stems available on select tracks.' },
    { q: 'Can I use these commercially?', a: 'Yes! All purchases include royalty-free commercial licensing. Perfect for your releases, videos, games, and more.' },
    { q: 'How do I receive downloads?', a: 'Instant download links are provided immediately after purchase, plus email delivery for backup access.' },
    { q: 'Do you take custom requests?', a: 'Absolutely! Reach out via Instagram or email for custom beat commissions and bespoke sample pack creation.' },
    { q: 'What DAWs are supported?', a: 'All samples work with any DAW - FL Studio, Ableton Live, Logic Pro, Pro Tools, Reaper, and more!' },
  ];

  return (
    <Accordion type="single" collapsible className="text-left">
      {faqs.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className="pixel-font text-sm text-foreground hover:text-primary">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="retro-font text-sm text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
          </h1>
          
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

      {/* Newsletter */}
      <RetroWindow title="NEWSLETTER.EXE">
        <NewsletterCTA />
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

      {/* FAQ */}
      <RetroWindow title="FAQ.TXT">
        <FAQ />
      </RetroWindow>
    </div>
  );
};