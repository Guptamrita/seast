import React, { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import { Minus, Square, X, Maximize2 } from 'lucide-react';

interface WindowProps {
  id: string;
  title: string;
  icon: string;
  screen: () => React.ReactNode;
  isFocused: boolean;
  isClosed: boolean;
  isMinimized: boolean;
  focusWindow: (id: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  zIndex: number;
}

export default function Window({
  id,
  title,
  icon,
  screen,
  isFocused,
  isClosed,
  isMinimized,
  focusWindow,
  closeWindow,
  minimizeWindow,
  zIndex,
}: WindowProps) {
  const [isMaximized, setIsMaximized] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  if (isClosed || isMinimized) return null;

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window-header"
      disabled={isMaximized}
      bounds="parent"
      defaultPosition={{ x: Math.max(30, Math.floor(window.innerWidth * 0.15)), y: Math.max(20, Math.floor(window.innerHeight * 0.08)) }}
      onMouseDown={() => focusWindow(id)}
    >
      <div
        ref={nodeRef}
        id={id}
        onClick={() => focusWindow(id)}
        style={{ zIndex }}
        className={`absolute font-ubuntu transition-shadow duration-150 flex flex-col rounded-t-xl overflow-hidden window-shadow border border-black/40 ${
          isMaximized
            ? 'top-7 left-0 w-full h-[calc(100vh-28px)] rounded-none'
            : 'w-[90vw] md:w-[65vw] lg:w-[58vw] h-[75vh] md:h-[78vh]'
        } ${isFocused ? 'ring-1 ring-ub-orange/40' : 'opacity-95'}`}
      >
        {/* Ubuntu Window Titlebar */}
        <div
          className={`window-header h-8 px-3 flex items-center justify-between select-none cursor-move ${
            isFocused ? 'bg-ub-window-title text-white' : 'bg-[#181818] text-gray-400'
          }`}
        >
          {/* Left Title with Icon */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide">
            <img src={icon} alt={title} className="w-4 h-4" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
            <span className="truncate max-w-[200px] sm:max-w-md">{title}</span>
          </div>

          {/* Right Window Control Buttons */}
          <div className="flex items-center gap-2">
            {/* Minimize */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                minimizeWindow(id);
              }}
              title="Minimize"
              className="w-5 h-5 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center text-slate-300 hover:text-white transition"
            >
              <Minus className="w-3 h-3" />
            </button>

            {/* Maximize / Restore */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMaximized(!isMaximized);
                focusWindow(id);
              }}
              title={isMaximized ? "Restore" : "Maximize"}
              className="w-5 h-5 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center text-slate-300 hover:text-white transition"
            >
              {isMaximized ? <Maximize2 className="w-2.5 h-2.5" /> : <Square className="w-2.5 h-2.5" />}
            </button>

            {/* Close (Ubuntu Orange/Red Circle) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeWindow(id);
              }}
              title="Close"
              className="w-5 h-5 rounded-full bg-ub-orange hover:bg-orange-600 flex items-center justify-center text-white transition shadow"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Window Content Pane */}
        <div className="flex-1 bg-ub-grey overflow-hidden relative">
          {screen()}
        </div>
      </div>
    </Draggable>
  );
}
