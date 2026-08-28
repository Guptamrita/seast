import React, { useState, useEffect } from 'react';
import { ArrowRight, User } from 'lucide-react';

interface LockScreenProps {
  isLocked: boolean;
  bgImgName: string;
  unLockScreen: () => void;
}

export default function LockScreen({ isLocked, bgImgName, unLockScreen }: LockScreenProps) {
  const [timeStr, setTimeStr] = useState('');
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setTimeStr(d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
      setDateStr(d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isLocked) return null;

  return (
    <div
      onClick={unLockScreen}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between py-16 select-none font-ubuntu text-white cursor-pointer bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(/images/wallpapers/${bgImgName}.webp)`,
      }}
    >
      {/* Background glass blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

      {/* Top Clock */}
      <div className="relative z-10 text-center space-y-2 pt-10">
        <h1 className="text-6xl sm:text-8xl font-thin tracking-tight drop-shadow-2xl">
          {timeStr}
        </h1>
        <p className="text-lg sm:text-2xl font-light text-slate-200 drop-shadow">
          {dateStr}
        </p>
      </div>

      {/* User profile / unlock prompt */}
      <div className="relative z-10 flex flex-col items-center space-y-4">
        <div className="w-20 h-20 rounded-full border-2 border-white/40 p-1 bg-slate-900/60 backdrop-blur-md shadow-2xl flex items-center justify-center">
          <img
            src="/images/logos/bitmoji.png"
            alt="Sahil"
            className="w-full h-full rounded-full object-cover"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <User className="w-8 h-8 text-ub-orange" />
        </div>

        <div className="text-center">
          <p className="text-base font-bold text-white tracking-wide">Sahil</p>
          <p className="text-xs text-slate-300">Software Developer</p>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            unLockScreen();
          }}
          className="px-6 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-semibold tracking-wider uppercase border border-white/20 transition flex items-center gap-2 backdrop-blur-md"
        >
          <span>Click Anywhere or Press to Unlock</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Bottom spacer */}
      <div className="relative z-10 text-[11px] text-slate-400">
        Ubuntu 20.04 LTS • Sahil Edition
      </div>
    </div>
  );
}
