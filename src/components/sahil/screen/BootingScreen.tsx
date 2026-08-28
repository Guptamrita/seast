import React from 'react';
import { Power } from 'lucide-react';

interface BootingScreenProps {
  visible: boolean;
  isShutDown: boolean;
  turnOn: () => void;
}

export default function BootingScreen({ visible, isShutDown, turnOn }: BootingScreenProps) {
  if (!visible && !isShutDown) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-between py-16 select-none font-ubuntu text-white">
      {/* Top spacer */}
      <div />

      {/* Middle Content: Ubuntu Logo / Boot spinner */}
      <div className="flex flex-col items-center space-y-6">
        <div className="w-24 h-24 flex items-center justify-center">
          <img
            src="/themes/Yaru/status/cof_orange_hex.svg"
            alt="Ubuntu Logo"
            className="w-20 h-20 animate-pulse"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </div>

        {isShutDown ? (
          <div className="text-center space-y-4">
            <p className="text-sm text-slate-400">System is powered off</p>
            <button
              onClick={turnOn}
              className="px-6 py-3 rounded-2xl bg-ub-orange hover:bg-orange-600 text-white font-bold text-sm shadow-xl shadow-orange-500/20 transition flex items-center gap-2"
            >
              <Power className="w-4 h-4" /> Turn On Sahil OS
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-4">
            <div className="w-8 h-8 border-3 border-ub-orange border-t-transparent rounded-full animate-spin" />
            <p className="text-xs text-slate-400 tracking-wider font-mono">Loading Ubuntu 20.04 LTS...</p>
          </div>
        )}
      </div>

      {/* Bottom Ubuntu Brand */}
      <div className="text-center space-y-1">
        <h1 className="text-2xl font-bold tracking-widest text-white">ubuntu</h1>
        <p className="text-[11px] text-slate-500">by Canonical & Sahil</p>
      </div>
    </div>
  );
}
