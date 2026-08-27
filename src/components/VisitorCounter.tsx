// src/components/VisitorCounter.tsx
import React, { useState } from "react";
import { useVisitorTracker } from "@/hooks/useVisitorTracker";
import {
  Eye,
  Users,
  Sparkles,
  Activity,
  ShieldCheck,
  Award,
  Radio,
  Clock,
  Zap,
  TrendingUp,
  MapPin
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const VisitorCounter: React.FC = () => {
  const stats = useVisitorTracker();
  const [isHovered, setIsHovered] = useState(false);

  // Formatted numbers
  const formattedTotal = stats.totalVisits.toLocaleString();
  const formattedToday = stats.todayVisits.toLocaleString();

  return (
    <div 
      className="w-full my-6 rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-950/90 to-blue-950/50 border border-blue-500/25 backdrop-blur-2xl shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-blue-400/40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background dynamic glowing orbs */}
      <div className="absolute top-0 right-1/4 w-80 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-1/3 w-80 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="p-5 sm:p-6 relative z-10 space-y-5">
        
        {/* Top Header Bar: Real-Time Status & Live Pulse */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 font-mono">
              <Radio size={13} className="text-emerald-400 animate-pulse" /> REALTIME LIVE SYNC
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold border border-blue-400/30">
              Auto-Updating 24/7
            </span>
          </div>

          <div className="text-[11px] text-slate-400 flex items-center gap-2">
            <Clock size={12} className="text-blue-400" />
            <span>Last Sync: <strong className="text-slate-200">Just now</strong></span>
          </div>
        </div>

        {/* Middle Main Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
          
          {/* Box 1: Total Global Visits (Major Focus) */}
          <div className="lg:col-span-2 p-4 rounded-xl bg-gradient-to-r from-blue-950/60 to-slate-900/80 border border-blue-500/30 flex items-center gap-4 shadow-inner">
            <div className="relative shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30 ring-2 ring-blue-400/40">
                <Eye className="w-7 h-7 text-white animate-pulse" />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500 border-2 border-slate-950"></span>
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <TrendingUp size={13} className="text-cyan-400" /> कुल भ्रमण (Total Website Visits)
              </div>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                  {formattedTotal}
                </span>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  +Live
                </span>
              </div>
            </div>
          </div>

          {/* Box 2: Your Personal Visit Count ("Kitna bar kaun visit kiya") */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="p-4 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-indigo-500/30 transition-all cursor-help">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
                      <Award size={13} className="text-amber-400" /> तपाईंको भ्रमण
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-300 font-bold border border-amber-500/30">
                      Personal
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-baseline gap-1.5">
                    <span className="text-2xl font-black text-indigo-200 font-mono">
                      {stats.myVisits}
                    </span>
                    <span className="text-xs font-bold text-slate-300">
                      {stats.myVisits === 1 ? "st Visit" : stats.myVisits === 2 ? "nd Visit" : stats.myVisits === 3 ? "rd Visit" : "th Visit"}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 truncate mt-1">
                    {stats.isFirstTime ? "Welcome first time! 🌟" : `${stats.firstVisit} देखि सुरु`}
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-slate-900 border-blue-500/30 text-slate-200 text-xs p-3 max-w-xs shadow-xl">
                <div className="space-y-1">
                  <p className="font-bold text-white flex items-center gap-1">
                    <Sparkles size={12} className="text-amber-400" /> {stats.userRank}
                  </p>
                  <p className="text-[11px] text-slate-300">
                    यस डिभाइसमा तपाईंको कुल अध्ययन भ्रमण: <strong className="text-blue-300">{stats.myVisits} पटक</strong>
                  </p>
                  <p className="text-[10px] text-slate-400">
                    पहिलो भ्रमण मिति: {stats.firstVisit}
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Box 3: Active Online Aspirants & Today Hits */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/30">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
                <Users size={13} className="text-emerald-400" /> अहिले अनलाइन
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <div className="mt-1.5 flex items-baseline gap-2">
              <span className="text-2xl font-black text-emerald-300 font-mono">
                {stats.activeOnline}
              </span>
              <span className="text-xs font-semibold text-slate-300">
                Aspirants Live
              </span>
            </div>
            <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
              <span>आज:</span>
              <strong className="text-indigo-300 font-mono">+{formattedToday} visits</strong>
            </div>
          </div>

        </div>

        {/* Live Real-time Activity Ticker Bar */}
        {stats.recentActivities.length > 0 && (
          <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-300 truncate w-full sm:w-auto">
              <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-black uppercase shrink-0 flex items-center gap-1">
                <Zap size={11} className="text-amber-400 fill-amber-400" /> LIVE ACTIVITY
              </span>
              <span className="truncate text-slate-300 text-[11px] flex items-center gap-1.5">
                <MapPin size={11} className="text-rose-400 shrink-0 inline" />
                {stats.recentActivities[0].text}
              </span>
            </div>

            <div className="text-[10px] text-slate-400 shrink-0 font-medium">
              Rank: <strong className="text-amber-300">{stats.userRank}</strong>
            </div>
          </div>
        )}

      </div>

      {/* Subtle bottom accent line */}
      <div className="h-0.5 bg-gradient-to-r from-blue-500 via-emerald-400 to-indigo-500 opacity-60" />
    </div>
  );
};

export default VisitorCounter;
