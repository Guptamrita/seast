import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Laptop, Sparkles, FileText, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";
import PracticalSetPaper from "@/components/practical/PracticalSetPaper";
import { practicalSetsCatalog, PracticalSetData } from "@/data/allPracticalSets";

export default function Practical() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialLevel = (searchParams.get("level") === "5th" ? "5th" : "4th") as "4th" | "5th";
  const initialSet = searchParams.get("set");

  const [selectedLevel, setSelectedLevel] = useState<"4th" | "5th">(initialLevel);
  const [activeSetId, setActiveSetId] = useState<string | null>(initialSet);

  const handleLevelChange = (level: "4th" | "5th") => {
    setSelectedLevel(level);
    setActiveSetId(null);
    setSearchParams({ level });
  };

  const handleOpenSet = (setId: string) => {
    setActiveSetId(setId);
    setSearchParams({ level: selectedLevel, set: setId });
  };

  const handleBackToSets = () => {
    setActiveSetId(null);
    setSearchParams({ level: selectedLevel });
  };

  const currentSetData = useMemo(() => {
    if (!activeSetId) return null;
    return practicalSetsCatalog.find((s) => s.id === activeSetId) || null;
  }, [activeSetId]);

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

  // 4th Level Practical Sets: Set 1 to 6 are all active and ready!
  const level4Sets = [
    {
      id: "1",
      title: "Set 1",
      desc: "गाउँको बिहान · Everyone has dreams · VLOOKUP",
      available: true,
      cardBg: "bg-[#eff6ff] hover:bg-[#dbeafe] border-[#bfdbfe]/60 text-slate-900",
      iconBg: "bg-[#0284c7]",
      badge: "Available Now",
    },
    {
      id: "2",
      title: "Set 2",
      desc: "रमेशको कथा · Dark clouds · Goal Seek",
      available: true,
      cardBg: "bg-[#eff6ff] hover:bg-[#dbeafe] border-[#bfdbfe]/60 text-slate-900",
      iconBg: "bg-[#0284c7]",
      badge: "Available Now",
    },
    {
      id: "3",
      title: "Set 3",
      desc: "शिक्षाको महत्त्व · Examination Day · Discount Formula",
      available: true,
      cardBg: "bg-[#eff6ff] hover:bg-[#dbeafe] border-[#bfdbfe]/60 text-slate-900",
      iconBg: "bg-[#0284c7]",
      badge: "Available Now",
    },
    {
      id: "4",
      title: "Set 4",
      desc: "प्रविधि र आधुनिक जीवन · Suman Shop · Cycle Diagram",
      available: true,
      cardBg: "bg-[#eff6ff] hover:bg-[#dbeafe] border-[#bfdbfe]/60 text-slate-900",
      iconBg: "bg-[#0284c7]",
      badge: "Available Now",
    },
    {
      id: "5",
      title: "Set 5",
      desc: "नेपालको सुन्दरता · Technology · Pyramid Chart & Equation",
      available: true,
      cardBg: "bg-[#eff6ff] hover:bg-[#dbeafe] border-[#bfdbfe]/60 text-slate-900",
      iconBg: "bg-[#0284c7]",
      badge: "Available Now",
    },
    {
      id: "6",
      title: "Set 6",
      desc: "समय व्यवस्थापन · Honesty Gold · Excel Subtotal",
      available: true,
      cardBg: "bg-[#eff6ff] hover:bg-[#dbeafe] border-[#bfdbfe]/60 text-slate-900",
      iconBg: "bg-[#0284c7]",
      badge: "Available Now",
    },
  ];

  // 5th Level Practical Sets
  const level5Sets = [
    {
      id: "1",
      title: "Set 1",
      desc: "5th Level Practical Question Set 1",
      available: false,
      cardBg: "bg-[#f8fafc] hover:bg-[#f1f5f9] border-slate-200 text-slate-700",
      iconBg: "bg-[#10b981]",
      badge: "Coming Soon",
    },
    {
      id: "2",
      title: "Set 2",
      desc: "5th Level Practical Question Set 2",
      available: false,
      cardBg: "bg-[#f8fafc] hover:bg-[#f1f5f9] border-slate-200 text-slate-700",
      iconBg: "bg-[#64748b]",
      badge: "Coming Soon",
    },
    {
      id: "3",
      title: "Set 3",
      desc: "5th Level Practical Question Set 3",
      available: false,
      cardBg: "bg-[#f8fafc] hover:bg-[#f1f5f9] border-slate-200 text-slate-700",
      iconBg: "bg-[#64748b]",
      badge: "Coming Soon",
    },
  ];

  const currentSets = selectedLevel === "4th" ? level4Sets : level5Sets;

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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-8">
        
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

        {/* ── Set Viewer or Set Cards ─────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {currentSetData && selectedLevel === "4th" ? (
            <motion.div
              key={`set-${currentSetData.id}-detail`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <PracticalSetPaper data={currentSetData} onBack={handleBackToSets} />
            </motion.div>
          ) : (
            <motion.section
              key="sets-list"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200/80 space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-6 bg-[#0284c7] rounded-full inline-block" />
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {selectedLevel} Level Practical Sets (अभ्यास सेटहरू)
                  </h3>
                </div>
                <span className="text-xs font-semibold text-slate-500">
                  Click any set to open question paper
                </span>
              </div>

              {/* Set Cards Grid (Matching Homepage Card Design) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
                {currentSets.map((set) => {
                  return (
                    <motion.div
                      key={set.id}
                      whileHover={set.available ? { y: -3 } : {}}
                      whileTap={set.available ? { scale: 0.97 } : {}}
                      onClick={() => {
                        if (set.available) {
                          handleOpenSet(set.id);
                        }
                      }}
                      className={`${set.cardBg} border rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all h-full min-h-[120px] sm:min-h-[135px] relative ${
                        set.available ? "cursor-pointer group" : "opacity-70 cursor-not-allowed"
                      }`}
                    >
                      <div
                        className={`w-11 h-11 rounded-full ${set.iconBg} flex items-center justify-center shadow-sm mb-2.5 ${
                          set.available ? "group-hover:scale-110" : ""
                        } transition-transform`}
                      >
                        <FileText className="w-5 h-5 text-white" />
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
                        {set.title}
                      </h4>

                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full mt-2 border ${
                          set.available
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-slate-100 text-slate-500 border-slate-200"
                        }`}
                      >
                        {set.badge}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

      </main>
    </div>
  );
}
