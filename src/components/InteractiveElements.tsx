import React, { useState, useEffect } from 'react';
import { RetroButton } from './ui/retro-button';
import { Volume2, Play, Pause, SkipForward } from 'lucide-react';

export const AudioVisualizer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bars, setBars] = useState<number[]>(Array(12).fill(0));

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.random() * 100));
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="retro-card bg-black p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="pixel-font text-xs text-green-400">AUDIO_VIZ.EXE</span>
        <div className="flex gap-2">
          <RetroButton
            variant="outline"
            size="sm"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </RetroButton>
        </div>
      </div>
      
      <div className="flex items-end justify-center gap-1 h-16">
        {bars.map((height, i) => (
          <div
            key={i}
            className="bg-green-400 w-2 transition-all duration-100"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export const SystemMonitor: React.FC = () => {
  const [cpuUsage, setCpuUsage] = useState(45);
  const [memUsage, setMemUsage] = useState(67);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(prev => Math.max(20, Math.min(90, prev + (Math.random() - 0.5) * 10)));
      setMemUsage(prev => Math.max(30, Math.min(85, prev + (Math.random() - 0.5) * 8)));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="retro-card bg-black p-4 space-y-3">
      <div className="pixel-font text-xs text-green-400">SYSTEM.MON</div>
      
      <div className="space-y-2">
        <div>
          <div className="flex justify-between pixel-font text-xs text-green-300">
            <span>CPU</span>
            <span>{cpuUsage.toFixed(0)}%</span>
          </div>
          <div className="bg-gray-800 h-2 border border-green-400">
            <div 
              className="bg-green-400 h-full transition-all duration-500"
              style={{ width: `${cpuUsage}%` }}
            />
          </div>
        </div>
        
        <div>
          <div className="flex justify-between pixel-font text-xs text-green-300">
            <span>MEM</span>
            <span>{memUsage.toFixed(0)}%</span>
          </div>
          <div className="bg-gray-800 h-2 border border-green-400">
            <div 
              className="bg-green-400 h-full transition-all duration-500"
              style={{ width: `${memUsage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const TerminalWindow: React.FC = () => {
  const [commands, setCommands] = useState<string[]>([
    '> SYSTEM INITIALIZED',
    '> LOADING AUDIO SAMPLES...',
    '> BEATS DATABASE CONNECTED',
    '> READY FOR INPUT'
  ]);
  const [currentInput, setCurrentInput] = useState('');

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentInput.trim()) {
      const newCommands = [...commands, `> ${currentInput}`];
      
      // Simple command responses
      if (currentInput.toLowerCase().includes('help')) {
        newCommands.push('AVAILABLE COMMANDS: PLAY, STOP, LIST, CLEAR');
      } else if (currentInput.toLowerCase().includes('play')) {
        newCommands.push('♪ NOW PLAYING: RETRO_BEAT_001.WAV');
      } else if (currentInput.toLowerCase().includes('clear')) {
        setCommands(['> TERMINAL CLEARED', '> READY FOR INPUT']);
        setCurrentInput('');
        return;
      } else {
        newCommands.push('COMMAND NOT RECOGNIZED. TYPE "HELP" FOR OPTIONS.');
      }
      
      setCommands(newCommands.slice(-8)); // Keep last 8 lines
      setCurrentInput('');
    }
  };

  return (
    <div className="retro-card bg-black p-4 space-y-2">
      <div className="pixel-font text-xs text-green-400 border-b border-green-400 pb-2">
        TERMINAL.EXE
      </div>
      
      <div className="space-y-1 h-32 overflow-y-auto">
        {commands.map((cmd, i) => (
          <div key={i} className="pixel-font text-xs text-green-300">
            {cmd}
          </div>
        ))}
      </div>
      
      <div className="flex items-center gap-2">
        <span className="pixel-font text-xs text-green-400">></span>
        <input
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleCommand}
          className="flex-1 bg-transparent border-none outline-none pixel-font text-xs text-green-300"
          placeholder="TYPE COMMAND..."
        />
        <span className="pixel-font text-xs text-green-400 blink">_</span>
      </div>
    </div>
  );
};