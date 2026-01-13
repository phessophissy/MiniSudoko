'use client';

import { useState, useEffect } from 'react';

interface GameTimerProps {
  isRunning: boolean;
  onTimeUpdate?: (seconds: number) => void;
}

export function GameTimer({ isRunning, onTimeUpdate }: GameTimerProps) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(s => {
          const newValue = s + 1;
          onTimeUpdate?.(newValue);
          return newValue;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, onTimeUpdate]);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-green-900/40 rounded-lg px-4 py-2 border border-green-500/30">
      <span className="text-green-300 text-sm font-semibold">⏱️ Time: </span>
      <span className="text-xl font-bold metallic-text text-green-200">
        {formatTime(seconds)}
      </span>
    </div>
  );
}
