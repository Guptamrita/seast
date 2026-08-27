// src/components/VisitorCounter.tsx
import React, { useState } from "react";
import { useVisitorTracker } from "@/hooks/useVisitorTracker";
import { Eye, Users, Sparkles, Activity, ShieldCheck, Award, Info, RefreshCw } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const VisitorCounter: React.FC = () => {
  const stats = useVisitorTracker();
  const [showDetails, setShowDetails] = useState(false);

  // Format large numbers with commas
  const formattedTotal = stats.totalVisits.toLocaleString();
  const formattedToday = stats.todayVisits.toLocaleString();

  return (
    <div className="w-full py-6 px-4 my-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-blue-950/40 to-slate-900/90 border border-blue-500/20 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/3 w-72 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left: Total Website Visits Main Badge */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 ring-2 ring-blue-400/30">
              <Eye className="w-7 h-7 text-white animate-pulse" />
            </div>
            {/* Live Indicator Dot */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-950"></span>
            </span>
          </div>

          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                <Activity size={13} className="text-emerald-400" /> Total Platform Visits
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 font-bold border border-emerald-500/30">
                LIVE 24/7
              </span>
            </div>

            <div className="flex items-baseline justify-center sm:justify-start gap-2 mt-0.5">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight font-mono drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                {formattedTotal}
              </span>
              <span className="text-xs font-semibold text-slate-400">
                कुल भ्रमण (Total Hits)
              </span>
            </div>
          </div>
        </div>

        {/* Middle & Right: Personal Visit Count & Live Stats Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          
          {/* Personal Visit Count Badge ("Kitna bar kaun visit kiya") */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/15 border border-blue-400/30 backdrop-blur-md transition-all cursor-help hover:border-blue-400/50">
                  <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-300">
                    <Award size={16} />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold text-slate-400">
                      तपाईंको भ्रमण (Your Visits)
                    </div>
                    <div className="text-sm font-extrabold text-blue-200 flex items-center gap-1">
                      <span>{stats.myVisits}th Time</span>
                      <span className="text-[10px] text-blue-400 font-normal">
                        ({stats.isFirstTime ? "Welcome!" : "पटक"})
                      </span>
                    </div>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-slate-900 border-blue-500/30 text-slate-200 text-xs p-3 max-w-xs shadow-xl">
                <div className="space-y-1">
                  <p className="font-bold text-white flex items-center gap-1">
                    <Sparkles size={12} className="text-amber-400" /> {stats.userRank}
                  </p>
                  <p className="text-[11px] text-slate-300">
                    पहिलो भ्रमण (First visit): <span className="text-blue-300">{stats.firstVisit}</span>
                  </p>
                  <p className="text-[10px] text-slate-400">
                    यस पोर्टलमा तपाईंले कुल {stats.myVisits} पटक अध्ययन तथा अभ्यास गर्नुभएको छ।
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Today's Visits Badge */}
          <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-indigo-500/10 border border-indigo-400/20 text-left">
            <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-300">
              <Sparkles size={15} />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">
                आजको भ्रमण (Today)
              </div>
              <div className="text-sm font-black text-indigo-200 font-mono">
                +{formattedToday}
              </div>
            </div>
          </div>

          {/* Online Active Learners Badge */}
          <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-left">
            <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
              <Users size={15} />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">
                अहिले सक्रिय (Online)
              </div>
              <div className="text-sm font-black text-emerald-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {stats.activeOnline} Learners
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Footer Micro-notice bar */}
      <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
        <span className="flex items-center gap-1.5">
          <ShieldCheck size={13} className="text-blue-400" />
          Real-time Loksewa Aspirant Traffic & Visitor Analytics Tracker
        </span>
        <span className="text-slate-400 italic">
          Rank: <strong className="text-amber-300 font-medium">{stats.userRank}</strong>
        </span>
      </div>
    </div>
  );
};

export default VisitorCounter;
