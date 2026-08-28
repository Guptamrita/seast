import React, { useState, useEffect, useRef } from 'react';
import { 
  Wifi, Volume2, Battery, Power, Lock, RotateCcw, 
  Sun, Calendar as CalendarIcon, ExternalLink, ArrowLeft, ChevronDown 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  lockScreen: () => void;
  shutDown: () => void;
  activeAppTitle?: string;
  toggleAllApps: () => void;
}

export default function Navbar({
  lockScreen,
  shutDown,
  activeAppTitle,
  toggleAllApps,
}: NavbarProps) {
  const [timeStr, setTimeStr] = useState('');
  const [statusMenuOpen, setStatusMenuOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [volume, setVolume] = useState(80);
  const [brightness, setBrightness] = useState(90);
  const statusRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        month: 'short', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      };
      setTimeStr(d.toLocaleString('en-US', options));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (statusRef.current && !statusRef.current.contains(e.target as Node)) {
        setStatusMenuOpen(false);
      }
      if (calendarRef.current && !calendarRef.current.contains(e.target as Node)) {
        setCalendarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 h-7 bg-ub-grey text-ubt-grey text-xs flex items-center justify-between px-3 select-none z-50 font-ubuntu shadow-md border-b border-black/30">
      {/* Left side: Activities & Current App */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleAllApps}
          className="px-2 py-0.5 rounded hover:bg-white/10 text-white font-medium transition"
        >
          Activities
        </button>

        {activeAppTitle && (
          <span className="hidden sm:inline font-bold text-white tracking-wide border-l border-white/20 pl-3">
            {activeAppTitle}
          </span>
        )}
      </div>

      {/* Center: Clock / Calendar */}
      <div className="relative" ref={calendarRef}>
        <button
          onClick={() => {
            setCalendarOpen(!calendarOpen);
            setStatusMenuOpen(false);
          }}
          className="px-2.5 py-0.5 rounded hover:bg-white/10 text-white font-medium transition tracking-wide text-xs"
        >
          {timeStr || 'Aug 28 11:30 AM'}
        </button>

        {/* Calendar Dropdown */}
        {calendarOpen && (
          <div className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 w-64 bg-ub-grey/95 border border-white/15 rounded-xl p-4 shadow-2xl text-white backdrop-blur-md animateShow z-50">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="font-bold text-sm text-ub-orange">{new Date().toDateString()}</span>
              <CalendarIcon className="w-4 h-4 text-slate-400" />
            </div>
            <div className="py-3 text-center space-y-1">
              <p className="text-2xl font-bold font-mono text-white">
                {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </p>
              <p className="text-xs text-slate-400">Nepal Standard Time (GMT+5:45)</p>
            </div>
            <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400 text-center">
              Ubuntu Calendar & Notification Center
            </div>
          </div>
        )}
      </div>

      {/* Right side: System Status Area */}
      <div className="relative" ref={statusRef}>
        <button
          onClick={() => {
            setStatusMenuOpen(!statusMenuOpen);
            setCalendarOpen(false);
          }}
          className="flex items-center gap-2.5 px-2 py-0.5 rounded hover:bg-white/10 text-slate-300 hover:text-white transition"
        >
          <Wifi className="w-3.5 h-3.5" />
          <Volume2 className="w-3.5 h-3.5" />
          <Battery className="w-3.5 h-3.5" />
          <ChevronDown className="w-2.5 h-2.5" />
        </button>

        {/* Status Dropdown Menu */}
        {statusMenuOpen && (
          <div className="absolute top-full mt-1.5 right-0 w-72 bg-ub-grey/95 border border-white/15 rounded-2xl p-4 shadow-2xl text-white backdrop-blur-md animateShow z-50 space-y-4">
            {/* Quick volume & brightness sliders */}
            <div className="space-y-3 pb-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Volume2 className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full ubuntu-slider"
                />
                <span className="text-[10px] text-slate-400 w-6 font-mono">{volume}%</span>
              </div>

              <div className="flex items-center gap-3">
                <Sun className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={brightness}
                  onChange={(e) => setBrightness(Number(e.target.value))}
                  className="w-full ubuntu-slider"
                />
                <span className="text-[10px] text-slate-400 w-6 font-mono">{brightness}%</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-1.5 text-xs">
              <button
                onClick={() => {
                  setStatusMenuOpen(false);
                  navigate('/');
                }}
                className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-white/10 text-slate-200 transition"
              >
                <span className="flex items-center gap-2.5">
                  <ArrowLeft className="w-4 h-4 text-sky-400" />
                  <span>Return to Main Exam Portal</span>
                </span>
                <span className="text-[10px] bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded">Home</span>
              </button>

              <button
                onClick={() => {
                  setStatusMenuOpen(false);
                  lockScreen();
                }}
                className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-white/10 text-slate-200 transition"
              >
                <span className="flex items-center gap-2.5">
                  <Lock className="w-4 h-4 text-amber-400" />
                  <span>Lock Screen</span>
                </span>
                <span className="text-[10px] text-slate-400">Super+L</span>
              </button>

              <button
                onClick={() => {
                  setStatusMenuOpen(false);
                  shutDown();
                }}
                className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-rose-500/20 text-rose-300 transition"
              >
                <span className="flex items-center gap-2.5">
                  <Power className="w-4 h-4 text-rose-400" />
                  <span>Power Off / Log Out</span>
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
