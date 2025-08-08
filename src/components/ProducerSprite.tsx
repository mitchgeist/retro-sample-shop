import React, { useEffect, useRef, useState } from 'react';
import spriteSheet from '@/assets/producer-sprite.png';

// Simple random-walk 8-bit sprite that gently roams within its parent container
export const ProducerSprite: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [frame, setFrame] = useState(0);
  const [pos, setPos] = useState({ x: 40, y: 40 });
  const [dir, setDir] = useState<{ x: number; y: number }>({ x: 1, y: 0 });

  useEffect(() => {
    let raf = 0;
    let lastTime = 0;

    const step = (t: number) => {
      if (!ref.current || !ref.current.parentElement) {
        raf = requestAnimationFrame(step);
        return;
      }
      const dt = Math.min(16, t - lastTime);
      lastTime = t;

      // Animate walking frames at ~6 FPS
      if (t % 160 < 16) setFrame((f) => (f + 1) % 4);

      const parent = ref.current.parentElement.getBoundingClientRect();
      const size = 48; // visible size
      const speed = 0.03; // pixels per ms (slow to avoid distraction)

      let nx = pos.x + dir.x * speed * dt;
      let ny = pos.y + dir.y * speed * dt;

      // Bounce at edges
      if (nx < 0 || nx > parent.width - size) {
        nx = Math.max(0, Math.min(parent.width - size, nx));
        setDir((d) => ({ ...d, x: -d.x }));
      }
      if (ny < 0 || ny > parent.height - size) {
        ny = Math.max(0, Math.min(parent.height - size, ny));
        setDir((d) => ({ ...d, y: -d.y }));
      }

      // Occasionally change direction slightly
      if (Math.random() < 0.005) {
        const angle = (Math.random() - 0.5) * Math.PI / 3;
        const cos = Math.cos(angle), sin = Math.sin(angle);
        setDir((d) => {
          const x = d.x * cos - d.y * sin;
          const y = d.x * sin + d.y * cos;
          const len = Math.hypot(x, y) || 1;
          return { x: x / len, y: y / len };
        });
      }

      setPos({ x: nx, y: ny });
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [pos, dir]);

  // Each frame is 128x128 in a 512x128 sheet (4 frames horizontally)
  const frameWidth = 128;
  const offsetX = -frame * frameWidth;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none select-none opacity-80"
      style={{
        position: 'absolute',
        left: pos.x,
        top: pos.y,
        width: 128,
        height: 128,
        transform: 'scale(0.375)', // 48px visible, crisp pixel look
        imageRendering: 'pixelated',
        backgroundImage: `url(${spriteSheet})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `${offsetX}px 0px`,
        backgroundSize: '512px 128px',
        zIndex: 5,
        filter: 'saturate(0.9)',
      }}
    />
  );
};

export default ProducerSprite;
