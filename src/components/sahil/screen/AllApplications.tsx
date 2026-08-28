import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { AppConfig } from '../types';

interface AllApplicationsProps {
  apps: AppConfig[];
  openApp: (id: string) => void;
  close: () => void;
}

export default function AllApplications({ apps, openApp, close }: AllApplicationsProps) {
  const [search, setSearch] = useState('');

  const filteredApps = apps.filter(app => 
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="absolute inset-0 top-7 bg-black/80 backdrop-blur-2xl z-40 flex flex-col items-center p-8 select-none font-ubuntu animate-fade-in">
      {/* Top Search Bar */}
      <div className="w-full max-w-md relative mb-10">
        <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type to search..."
          autoFocus
          className="w-full bg-white/10 border border-white/20 rounded-full py-2.5 pl-11 pr-10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-ub-orange focus:bg-white/15 transition shadow-xl"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Apps Grid */}
      <div className="w-full max-w-4xl grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 overflow-y-auto max-h-[70vh] p-2">
        {filteredApps.map((app) => (
          <div
            key={app.id}
            onClick={() => {
              openApp(app.id);
              close();
            }}
            className="flex flex-col items-center text-center gap-2 p-3 rounded-2xl hover:bg-white/15 cursor-pointer transition transform hover:scale-105 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-2 group-hover:border-ub-orange transition shadow-lg">
              <img
                src={app.icon}
                alt={app.title}
                className="w-10 h-10 object-contain pointer-events-none"
                onError={(e) => {
                  (e.target as HTMLElement).src = '/themes/Yaru/system/user-home.png';
                }}
              />
            </div>
            <span className="text-xs text-slate-200 font-medium tracking-wide truncate max-w-full">
              {app.title}
            </span>
          </div>
        ))}
      </div>

      {/* Close button indicator */}
      <button
        onClick={close}
        className="mt-auto px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 text-xs font-semibold tracking-wider uppercase border border-white/10 transition"
      >
        Press ESC or Click to Close
      </button>
    </div>
  );
}
