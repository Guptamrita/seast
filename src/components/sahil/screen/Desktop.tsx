import React, { useState, useEffect, useRef } from 'react';
import { AppConfig, WindowState } from '../types';
import Window from '../base/Window';
import { 
  FolderPlus, Terminal as TerminalIcon, Image, RefreshCw, 
  Info, ExternalLink, Settings, Home 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DesktopProps {
  apps: AppConfig[];
  bgImageName: string;
  closedWindows: WindowState;
  minimizedWindows: WindowState;
  focusedWindowId: string | null;
  openApp: (id: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  changeWallpaper: (wallName: string) => void;
}

interface ContextMenuPos {
  x: number;
  y: number;
}

export default function Desktop({
  apps,
  bgImageName,
  closedWindows,
  minimizedWindows,
  focusedWindowId,
  openApp,
  closeWindow,
  minimizeWindow,
  focusWindow,
  changeWallpaper,
}: DesktopProps) {
  const [contextMenu, setContextMenu] = useState<ContextMenuPos | null>(null);
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);
  const [windowZIndices, setWindowZIndices] = useState<{ [id: string]: number }>({});
  const [nextZ, setNextZ] = useState(10);
  const desktopRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Handle zIndex updates when focusing a window
  const handleFocus = (id: string) => {
    focusWindow(id);
    setWindowZIndices(prev => ({
      ...prev,
      [id]: nextZ + 1
    }));
    setNextZ(prev => prev + 1);
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const closeContextMenu = () => {
    setContextMenu(null);
  };

  useEffect(() => {
    const handleGlobalClick = () => {
      closeContextMenu();
      setSelectedAppId(null);
    };
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  const desktopShortcuts = apps.filter(app => app.desktop_shortcut);

  return (
    <div
      ref={desktopRef}
      onContextMenu={handleContextMenu}
      onClick={closeContextMenu}
      className="absolute inset-0 top-7 left-14 bg-cover bg-center overflow-hidden select-none font-ubuntu"
      style={{
        backgroundImage: `url(/images/wallpapers/${bgImageName}.webp)`,
      }}
    >
      {/* Desktop App Shortcuts Grid */}
      <div className="absolute top-4 left-4 grid grid-flow-col grid-rows-6 gap-y-4 gap-x-6 z-10">
        {desktopShortcuts.map((app) => {
          const isSelected = selectedAppId === app.id;
          return (
            <div
              key={app.id}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedAppId(app.id);
              }}
              onDoubleClick={(e) => {
                e.stopPropagation();
                openApp(app.id);
              }}
              onTouchEnd={(e) => {
                // For mobile tap
                openApp(app.id);
              }}
              className={`flex flex-col items-center text-center w-20 p-2 rounded-xl cursor-pointer transition ${
                isSelected ? 'bg-ub-orange/30 border border-ub-orange/50 backdrop-blur-sm' : 'hover:bg-white/10'
              }`}
            >
              <div className="w-12 h-12 flex items-center justify-center pointer-events-none drop-shadow-md">
                <img
                  src={app.icon}
                  alt={app.title}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).src = '/themes/Yaru/system/user-home.png';
                  }}
                />
              </div>
              <span className="text-white text-xs font-medium tracking-wide mt-1.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] line-clamp-2 px-1 rounded">
                {app.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* Render All Open Windows */}
      {apps.map((app) => {
        if (!app.screen || app.isExternalApp) return null;
        const isClosed = !!closedWindows[app.id];
        const isMinimized = !!minimizedWindows[app.id];
        const isFocused = focusedWindowId === app.id;
        const zIndex = windowZIndices[app.id] || 10;

        return (
          <Window
            key={app.id}
            id={app.id}
            title={app.title}
            icon={app.icon}
            screen={app.screen}
            isFocused={isFocused}
            isClosed={isClosed}
            isMinimized={isMinimized}
            focusWindow={handleFocus}
            closeWindow={closeWindow}
            minimizeWindow={minimizeWindow}
            zIndex={zIndex}
          />
        );
      })}

      {/* Right Click Desktop Context Menu */}
      {contextMenu && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="fixed bg-ub-grey/95 border border-white/15 rounded-xl shadow-2xl py-1.5 w-56 text-xs text-slate-200 z-50 backdrop-blur-md animateShow select-none font-ubuntu"
          style={{
            top: Math.min(contextMenu.y, window.innerHeight - 260),
            left: Math.min(contextMenu.x, window.innerWidth - 240),
          }}
        >
          <button
            onClick={() => {
              openApp('terminal');
              closeContextMenu();
            }}
            className="w-full text-left px-4 py-2 hover:bg-ub-orange hover:text-white flex items-center gap-2.5 transition"
          >
            <TerminalIcon className="w-4 h-4 text-emerald-400" />
            <span>Open Terminal Here</span>
          </button>

          <button
            onClick={() => {
              openApp('settings');
              closeContextMenu();
            }}
            className="w-full text-left px-4 py-2 hover:bg-ub-orange hover:text-white flex items-center gap-2.5 transition"
          >
            <Image className="w-4 h-4 text-sky-400" />
            <span>Change Background...</span>
          </button>

          <button
            onClick={() => {
              openApp('about-sahil');
              closeContextMenu();
            }}
            className="w-full text-left px-4 py-2 hover:bg-ub-orange hover:text-white flex items-center gap-2.5 transition"
          >
            <Info className="w-4 h-4 text-amber-400" />
            <span>About Sahil Portfolio</span>
          </button>

          <div className="h-[1px] bg-white/10 my-1" />

          <button
            onClick={() => {
              window.location.reload();
            }}
            className="w-full text-left px-4 py-2 hover:bg-ub-orange hover:text-white flex items-center gap-2.5 transition"
          >
            <RefreshCw className="w-4 h-4 text-slate-400" />
            <span>Refresh Desktop</span>
          </button>

          <button
            onClick={() => {
              closeContextMenu();
              navigate('/');
            }}
            className="w-full text-left px-4 py-2 hover:bg-ub-orange hover:text-white flex items-center gap-2.5 transition"
          >
            <Home className="w-4 h-4 text-sky-400" />
            <span>Back to Exam Portal</span>
          </button>
        </div>
      )}
    </div>
  );
}
