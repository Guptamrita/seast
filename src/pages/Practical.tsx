import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Monitor, Laptop, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";

export default function Practical() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialLevel = (searchParams.get("level") === "5th" ? "5th" : "4th") as "4th" | "5th";
  const [selectedLevel, setSelectedLevel] = useState<"4th" | "5th">(initialLevel);

  const handleLevelChange = (level: "4th" | "5th") => {
    setSelectedLevel(level);
    setSearchParams({ level });
  };

  // Two main level cards matching the homepage card design
  const levelCards = [
    {
      id: "4th",
      title: "4th Level",
      subTitle: "सहायक चौथो तह",
      desc: "Assistant Computer Operator (50 Marks)",
      icon: <Laptop className="w-5 h-5 text-white" />,
      iconBg: "bg-[#0284c7]",
      cardBg: "bg-[#f0f7ff] hover:bg-[#e0f2fe] border-[#bae6fd]/60 text-slate-900",
      activeRing: "ring-2 ring-[#0284c7] shadow-md",
    },
    {
      id: "5th",
      title: "5th Level",
      subTitle: "पाँचौं तह",
      desc: "Computer Operator (50 Marks)",
      icon: <Monitor className="w-5 h-5 text-white" />,
      iconBg: "bg-[#10b981]",
      cardBg: "bg-[#f0fdf4] hover:bg-[#dcfce7] border-[#bbf7d0]/60 text-slate-900",
      activeRing: "ring-2 ring-[#10b981] shadow-md",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 pb-20">
      <SEO
        title="Practical Set Practice (4th Level & 5th Level) — Loksewa Nepal"
        description="Official practical exam preparation sets for 4th Level Assistant Computer Operator & 5th Level Computer Operator."
        canonical="https://amritagupta.com.np/practical"
      />

      {/* ── Top Header Banner ────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#072147] to-[#0c2854] text-white pt-10 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#0f3469]">
        <div className="max-w-7xl mx-auto space-y-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-sky-300 text-xs font-bold border border-blue-400/30 mb-2">
                <Sparkles size={12} className="text-amber-400" /> PSC Computer Practical Exam Hub
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Practical Set Practice <span className="text-[#facc15]">(प्रयोगात्मक परीक्षा)</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-2xl font-normal leading-relaxed">
                Choose <strong>4th Level</strong> or <strong>5th Level</strong> below to practice full-marks practical sets, typing tests & sample papers.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/20">
                ⏱️ 45 Mins · 50 Full Marks
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Container ───────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        
        {/* ── Level Selector Cards (Exact Homepage Card Style) ────────── */}
        <section className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200/80">
          <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-6 bg-[#0284c7] rounded-full inline-block" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Select Examination Level
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-500">
              Active: <span className="text-[#0284c7] font-extrabold">{selectedLevel} Level</span>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {levelCards.map((card) => {
              const isActive = selectedLevel === card.id;
              return (
                <motion.div
                  key={card.id}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleLevelChange(card.id as "4th" | "5th")}
                  className={`${card.cardBg} ${
                    isActive ? card.activeRing : ""
                  } border rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all h-full min-h-[110px] sm:min-h-[130px] cursor-pointer group relative overflow-hidden`}
                >
                  {/* Active Indicator Badge */}
                  {isActive && (
                    <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                  )}

                  <div
                    className={`w-11 h-11 rounded-full ${card.iconBg} flex items-center justify-center shadow-sm mb-2.5 group-hover:scale-110 transition-transform`}
                  >
                    {card.icon}
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
                    {card.title}
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-500 mt-0.5">
                    {card.subTitle}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </section>

      </main>
    </div>
  );
}
