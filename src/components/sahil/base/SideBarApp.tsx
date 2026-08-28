import React, { useState } from 'react';

interface SideBarAppProps {
  id: string;
  title: string;
  icon: string;
  isOpen: boolean;
  isFocused: boolean;
  openApp: (id: string) => void;
}

export default function SideBarApp({
  id,
  title,
  icon,
  isOpen,
  isFocused,
  openApp,
}: SideBarAppProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      onClick={() => openApp(id)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className={`relative w-11 h-11 m-1 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-150 group ${
        isFocused ? 'bg-white/20' : isOpen ? 'bg-white/10' : 'hover:bg-white/10'
      }`}
    >
      {/* Orange dot indicator for open app */}
      {isOpen && (
        <div className={`absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-2 rounded-r-full ${
          isFocused ? 'bg-ub-orange' : 'bg-slate-400'
        }`} />
      )}

      {/* App Icon */}
      <img
        src={icon}
        alt={title}
        className="w-7 h-7 object-contain transition-transform duration-150 group-hover:scale-110 group-active:scale-95 pointer-events-none"
        onError={(e) => {
          (e.target as HTMLElement).src = '/themes/Yaru/system/user-home.png';
        }}
      />

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute left-full ml-3 px-2.5 py-1 bg-ub-grey/95 border border-white/10 rounded-md text-white text-xs font-medium whitespace-nowrap shadow-xl z-50 pointer-events-none animateShow">
          {title}
        </div>
      )}
    </div>
  );
}
