import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RetroWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const RetroWindow: React.FC<RetroWindowProps> = ({ title, children, className }) => {
  return (
    <div className={cn("window-chrome bg-card", className)}>
      {/* Title Bar */}
      <div className="bg-primary text-primary-foreground px-2 py-1 flex items-center justify-between border-b-2 border-[hsl(var(--window-shadow))]">
        <span className="retro-font font-bold text-sm">{title}</span>
        <div className="flex gap-1">
          <div className="w-4 h-4 bg-[hsl(var(--window-frame))] border border-[hsl(var(--button-shadow))] flex items-center justify-center">
            <span className="text-xs">_</span>
          </div>
          <div className="w-4 h-4 bg-[hsl(var(--window-frame))] border border-[hsl(var(--button-shadow))] flex items-center justify-center">
            <span className="text-xs">□</span>
          </div>
          <div className="w-4 h-4 bg-[hsl(var(--window-frame))] border border-[hsl(var(--button-shadow))] flex items-center justify-center">
            <span className="text-xs">×</span>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};