import React, { useState } from 'react';
import SideBarApp from '../base/SideBarApp';
import { AppConfig, WindowState } from '../types';
import { LayoutGrid } from 'lucide-react';

interface SideBarProps {
  apps: AppConfig[];
  closedWindows: WindowState;
  focusedWindowId: string | null;
  openApp: (id: string) => void;
  toggleAllApps: () => void;
  allAppsOpen: boolean;
}

export default function SideBar({
  apps,
  closedWindows,
  focusedWindowId,
  openApp,
  toggleAllApps,
  allAppsOpen,
}: SideBarProps) {
  const [showAppGridTooltip, setShowAppGridTooltip] = useState(false);

  // Favorite apps or running apps
  const dockApps = apps.filter(app => app.favourite || !closedWindows[app.id]);

  return (
    <div className="absolute top-7 left-0 bottom-0 w-14 bg-black/60 backdrop-blur-md border-r border-black/40 flex flex-col items-center py-2 z-40 select-none">
      {/* App Icons List */}
      <div className="flex-1 w-full flex flex-col items-center overflow-y-auto overflow-x-hidden space-y-1">
        {dockApps.map((app) => {
          const isOpen = !closedWindows[app.id];
          const isFocused = focusedWindowId === app.id;
          return (
            <SideBarApp
              key={app.id}
              id={app.id}
              title={app.title}
              icon={app.icon}
              isOpen={isOpen}
              isFocused={isFocused}
              openApp={openApp}
            />
          );
        })}
      </div>

      {/* Bottom Launcher Grid Button */}
      <div
        onClick={toggleAllApps}
        onMouseEnter={() => setShowAppGridTooltip(true)}
        onMouseLeave={() => setShowAppGridTooltip(false)}
        className={`relative w-11 h-11 rounded-lg flex items-center justify-center cursor-pointer transition ${
          allAppsOpen ? 'bg-white/20' : 'hover:bg-white/10'
        }`}
      >
        <img
          src="/themes/Yaru/system/view-app-grid-symbolic.svg"
          alt="Show Applications"
          className="w-6 h-6 object-contain pointer-events-none"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <LayoutGrid className="w-5 h-5 text-white" />

        {/* Tooltip */}
        {showAppGridTooltip && (
          <div className="absolute left-full ml-3 px-2.5 py-1 bg-ub-grey/95 border border-white/10 rounded-md text-white text-xs font-medium whitespace-nowrap shadow-xl z-50 pointer-events-none animateShow">
            Show Applications
          </div>
        )}
      </div>
    </div>
  );
}
