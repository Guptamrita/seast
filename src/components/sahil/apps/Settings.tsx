import React, { useState } from 'react';
import { Image, Monitor, Moon, Sun, Info, Volume2, Wifi, Shield, Check } from 'lucide-react';

interface SettingsProps {
  currentWallpaper?: string;
  changeWallpaper?: (wallName: string) => void;
}

export default function SettingsApp({ currentWallpaper = 'wall-2', changeWallpaper }: SettingsProps) {
  const [activeTab, setActiveTab] = useState<'background' | 'about' | 'sound'>('background');

  const wallpapers = [
    { id: 'wall-1', name: 'Ubuntu Beaver' },
    { id: 'wall-2', name: 'Ubuntu Default Focal' },
    { id: 'wall-3', name: 'Ubuntu Art Neon' },
    { id: 'wall-4', name: 'Ubuntu Geometric' },
    { id: 'wall-5', name: 'Ubuntu Minimal Dark' },
    { id: 'wall-6', name: 'Ubuntu Sunset Wave' },
    { id: 'wall-7', name: 'Ubuntu Cosmic Gradient' },
    { id: 'wall-8', name: 'Ubuntu Aurora Lights' },
  ];

  return (
    <div className="w-full h-full flex bg-ub-cool-grey text-white font-ubuntu select-none">
      {/* Sidebar */}
      <div className="w-1/4 md:w-1/5 border-r border-black/40 bg-ub-cool-grey py-3 flex flex-col gap-1 text-sm">
        <button
          onClick={() => setActiveTab('background')}
          className={`w-full text-left px-3 py-2 flex items-center gap-2.5 transition ${
            activeTab === 'background' ? 'bg-ub-orange text-white' : 'text-gray-300 hover:bg-white/5'
          }`}
        >
          <Image className="w-4 h-4" />
          <span>Background</span>
        </button>

        <button
          onClick={() => setActiveTab('sound')}
          className={`w-full text-left px-3 py-2 flex items-center gap-2.5 transition ${
            activeTab === 'sound' ? 'bg-ub-orange text-white' : 'text-gray-300 hover:bg-white/5'
          }`}
        >
          <Volume2 className="w-4 h-4" />
          <span>Sound & Display</span>
        </button>

        <button
          onClick={() => setActiveTab('about')}
          className={`w-full text-left px-3 py-2 flex items-center gap-2.5 transition ${
            activeTab === 'about' ? 'bg-ub-orange text-white' : 'text-gray-300 hover:bg-white/5'
          }`}
        >
          <Info className="w-4 h-4" />
          <span>About System</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-ub-grey overflow-y-auto windowMainScreen p-6">
        {activeTab === 'background' && (
          <div className="space-y-6 max-w-2xl">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Desktop Background</h3>
              <p className="text-xs text-slate-400">Choose a high-definition wallpaper for your Ubuntu desktop.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {wallpapers.map((wall) => {
                const isSelected = currentWallpaper === wall.id;
                return (
                  <div
                    key={wall.id}
                    onClick={() => changeWallpaper && changeWallpaper(wall.id)}
                    className={`relative rounded-xl overflow-hidden cursor-pointer border-2 transition-all group ${
                      isSelected ? 'border-ub-orange ring-2 ring-ub-orange/40 scale-105' : 'border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    <img
                      src={`/images/wallpapers/${wall.id}.webp`}
                      alt={wall.name}
                      className="w-full h-24 object-cover group-hover:scale-105 transition"
                    />
                    <div className="p-1.5 bg-slate-900/90 text-center">
                      <p className="text-[11px] font-medium text-slate-200 truncate">{wall.name}</p>
                    </div>
                    {isSelected && (
                      <div className="absolute top-1.5 right-1.5 bg-ub-orange text-white p-0.5 rounded-full shadow">
                        <Check className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'sound' && (
          <div className="space-y-6 max-w-md">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Sound & Display</h3>
              <p className="text-xs text-slate-400">Configure simulated volume, brightness, and audio output.</p>
            </div>

            <div className="space-y-4 bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">System Master Volume</label>
                <input type="range" min="0" max="100" defaultValue="75" className="w-full ubuntu-slider" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Screen Brightness</label>
                <input type="range" min="10" max="100" defaultValue="90" className="w-full ubuntu-slider" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="space-y-6 max-w-xl">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <img src="/themes/Yaru/apps/gnome-control-center.png" alt="Settings" className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-bold text-white">Ubuntu 20.04.6 LTS</h3>
                <p className="text-xs text-slate-400">Sahil Edition • Built with React & Tailwind</p>
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-sm bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Device Name</span>
                <span className="text-white font-semibold">sahil-workstation</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Memory</span>
                <span className="text-white font-semibold">16.0 GiB</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Processor</span>
                <span className="text-white font-semibold">Apple Silicon / Modern Multi-core CPU</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Graphics</span>
                <span className="text-white font-semibold">WebGL Accelerated Engine</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">OS Type</span>
                <span className="text-white font-semibold">64-bit Web Architecture</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-400">GNOME Version</span>
                <span className="text-white font-semibold">3.36.8</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
