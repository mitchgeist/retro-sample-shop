import React, { useEffect, useRef, useState } from 'react';

// Subtle cursor trail for desktop only. Fixed canvas overlay, pointer-events: none
export const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const pointsRef = useRef<{ x: number; y: number }[]>([]);
  const enabledRef = useRef<boolean>(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    enabledRef.current = isFinePointer && !isReducedMotion;
    setEnabled(enabledRef.current);
    if (!enabledRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      pointsRef.current.unshift({ x, y });
      if (pointsRef.current.length > 14) pointsRef.current.pop();
    };

    window.addEventListener('mousemove', onMove);

    const draw = () => {
      if (!enabledRef.current) return;
      // Clear
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Style
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = 'hsl(var(--primary) / 0.25)';

      // Draw small fading dots
      for (let i = pointsRef.current.length - 1; i >= 0; i--) {
        const p = pointsRef.current[i];
        const r = Math.max(1, 5 - i * 0.3);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 z-[60] opacity-70 ${enabled ? '' : 'hidden'}`}
      aria-hidden="true"
    />
  );
};

export default CursorTrail;
