import React, { useState } from 'react';
import { RetroWindow } from '../RetroWindow';
import { RetroButton } from '../ui/retro-button';
import heroBanner from '@/assets/hero-landing-95.webp';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/components/ui/use-toast';
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
    <div className="relative space-y-6">
      {/* Hero Section */}
      <RetroWindow title="WELCOME TO MITCHGEIST v1.0">
        <div className="relative text-center space-y-4">
          <ProducerSprite />
          <img
            src={heroBanner}
            alt="Windows 95 style pixel art music production banner with CRT, floppy disks, and MIDI keyboard"
            loading="lazy"
            decoding="async"
            className="w-full max-w-xl mx-auto border-2 border-[hsl(var(--button-shadow))]"
            style={{ imageRendering: 'pixelated' }}
          />
          
          <h1 className="pixel-font text-xl text-foreground">
            PREMIUM 8-BIT SAMPLES & BEATS
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