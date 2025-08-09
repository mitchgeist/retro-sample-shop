import React, { useEffect, useRef } from 'react';

export const BackgroundEffects: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const yRef = useRef(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const update = () => {
      const el = bgRef.current;
      if (el) {
        el.style.transform = `translate3d(0, ${Math.round(yRef.current)}px, 0)`;
      }
      rafRef.current = null;
    };

    const onScroll = () => {
      yRef.current = window.scrollY * 0.3; // Move slower than content
      if (!rafRef.current) rafRef.current = requestAnimationFrame(update);
    };

    if (!reduceMotion) {
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll(); // initial position
    }

    return () => {
      if (!reduceMotion) window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Parallax background layer */}
      <div ref={bgRef} className="parallax-bg pixel-grid" aria-hidden="true" />

      {/* CRT overlay (scanlines + vignette) */}
      <div className="crt-overlay" aria-hidden="true" />
    </>
  );
};

export default BackgroundEffects;
