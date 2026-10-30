import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Laptop,
  FileText,
  FileSpreadsheet,
  Presentation,
  Database,
  Globe,
  Keyboard,
  CheckCircle2,
  Trophy,
  Clock,
  ArrowRight,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Award,
  Layers,
} from "lucide-react";
import SEO from "@/components/SEO";
import {
  level4Subjects,
  level5Subjects,
  practicalSetsData,
  PracticalSubject,
  PracticalSet,
} from "@/data/practicalData";

export default function Practical() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialLevel = (searchParams.get("level") === "5th" ? "5th" : "4th") as "4th" | "5th";
  const [selectedLevel, setSelectedLevel] = useState<"4th" | "5th">(initialLevel);
  const [expandedSetId, setExpandedSetId] = useState<string | null>("set-4th-01");
  const [copiedTask, setCopiedTask] = useState<string | null>(null);

  const handleLevelChange = (level: "4th" | "5th") => {
    setSelectedLevel(level);
    setSearchParams({ level });
    // Open the first set of that level by default
    const firstSet = practicalSetsData.find((s) => s.level === level);
    if (firstSet) setExpandedSetId(firstSet.id);
  };

  const currentSubjects = useMemo(() => {
    return selectedLevel === "4th" ? level4Subjects : level5Subjects;
  }, [selectedLevel]);

  const currentSets = useMemo(() => {
    return practicalSetsData.filter((s) => s.level === selectedLevel);
  }, [selectedLevel]);

  const getSubjectIcon = (iconName: PracticalSubject["iconName"]) => {
    switch (iconName) {
      case "keyboard":
        return <Keyboard className="w-5 h-5 text-white" />;
      case "fileText":
        return <FileText className="w-5 h-5 text-white" />;
      case "fileSpreadsheet":
        return <FileSpreadsheet className="w-5 h-5 text-white" />;
      case "presentation":
        return <Presentation className="w-5 h-5 text-white" />;
      case "database":
        return <Database className="w-5 h-5 text-white" />;
      case "globe":
        return <Globe className="w-5 h-5 text-white" />;
      default:
        return <Monitor className="w-5 h-5 text-white" />;
    }
  };

  const handleCopy = (text: string, taskId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTask(taskId);
    setTimeout(() => setCopiedTask(null), 2000);
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
        description="Official practical exam preparation sets for 4th Level Assistant Computer Operator & 5th Level Computer Operator. Typing test, MS Word, Excel, Access, PowerPoint & HTML."
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

        {/* ── Level Practical Curriculum Breakdown (Subject Cards) ─────── */}
        <section className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {selectedLevel} Level Practical Subject Modules
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Official marks distribution according to Nepal PSC syllabus (Total: 50 Marks)
              </p>
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Pass Marks: 25 / 50
              </span>
            </div>
          </div>

          {/* Grid matching homepage box cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {currentSubjects.map((sub) => (
              <motion.div
                key={sub.id}
                whileHover={{ y: -3 }}
                className={`${sub.cardBg} border rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all h-full min-h-[120px] relative`}
              >
                <span className="absolute top-2 right-2 text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-white/80 text-slate-600 border border-slate-200/60 shadow-xs">
                  {sub.marks} M
                </span>

                <div
                  className={`w-11 h-11 rounded-full ${sub.iconBg} flex items-center justify-center shadow-sm mb-2 group-hover:scale-110 transition-transform`}
                >
                  {getSubjectIcon(sub.iconName)}
                </div>

                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  {sub.title}
                </h4>
                <p className="text-[10px] text-slate-500 font-medium mt-1 line-clamp-1">
                  {sub.nepaliTitle}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quick Action: Start 5-min Typing Test */}
          <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-purple-50 via-sky-50 to-blue-50 border border-purple-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Keyboard size={20} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-900">
                  Ready for Devnagari & English Typing Test?
                </p>
                <p className="text-[11px] text-slate-600 font-medium">
                  5-minute live timer test with instant WPM, accuracy & official Loksewa score calculation.
                </p>
              </div>
            </div>
            <Link to="/typing" className="flex-shrink-0 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-5 py-2.5 rounded-full text-xs shadow-sm transition"
              >
                <Keyboard size={14} /> Start Typing Test →
              </motion.button>
            </Link>
          </div>
        </section>

        {/* ── Practical Examination Model Question Sets ────────────────── */}
        <section className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200/80 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-6 bg-[#10b981] rounded-full inline-block" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {selectedLevel} Level Full Practical Question Sets ({currentSets.length} Sets Available)
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              Click to view question paper
            </span>
          </div>

          <div className="space-y-4">
            {currentSets.map((set) => {
              const isExpanded = expandedSetId === set.id;
              return (
                <div
                  key={set.id}
                  className="border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:border-slate-300 transition"
                >
                  {/* Set Header Bar */}
                  <div
                    onClick={() => setExpandedSetId(isExpanded ? null : set.id)}
                    className="p-4 sm:p-5 bg-slate-50/80 hover:bg-slate-100/80 transition flex items-center justify-between cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#0c2854] text-white flex items-center justify-center font-black text-sm shadow-sm">
                        #{set.setNumber}
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          {set.title}
                        </h4>
                        <div className="flex items-center gap-3 text-xs text-slate-500 mt-0.5">
                          <span className="flex items-center gap-1 font-semibold text-slate-700">
                            <Clock size={12} className="text-[#0284c7]" /> {set.timeMins} Minutes
                          </span>
                          <span>•</span>
                          <span className="font-semibold text-slate-700">
                            🏆 {set.totalMarks} Marks
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#0284c7] hidden sm:inline">
                        {isExpanded ? "Hide Question Paper" : "View Question Paper"}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xs text-slate-600 border border-slate-200">
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </div>
                  </div>

                  {/* Set Expanded Tasks / Questions */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="p-4 sm:p-6 bg-white border-t border-slate-100 space-y-5"
                      >
                        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/70 text-xs text-amber-900 font-medium">
                          📌 <strong>Instructions for Candidates:</strong> Perform the following practical tasks in designated software (MS Word, MS Excel, MS Access, MS PowerPoint). Save all files in your Roll Number folder on the Desktop.
                        </div>

                        <div className="space-y-4">
                          {set.tasks.map((task, ti) => {
                            const taskId = `${set.id}-task-${ti}`;
                            const isCopied = copiedTask === taskId;
                            return (
                              <div
                                key={ti}
                                className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/70 space-y-2.5"
                              >
                                <div className="flex items-center justify-between flex-wrap gap-2">
                                  <h5 className="font-bold text-sm text-[#0c2854] flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
                                    {task.subject}
                                  </h5>
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0284c7]">
                                      {task.marks} Marks
                                    </span>
                                    <button
                                      onClick={() =>
                                        handleCopy(
                                          `${task.subject} (${task.marks} Marks)\n` +
                                            task.instructions.map((ins, i) => `${i + 1}. ${ins}`).join("\n") +
                                            (task.sampleTextOrData ? `\n\nSample Text:\n${task.sampleTextOrData}` : ""),
                                          taskId
                                        )
                                      }
                                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 hover:text-blue-700 bg-white px-2 py-1 rounded-md border border-slate-200 shadow-2xs transition"
                                      title="Copy task text"
                                    >
                                      {isCopied ? (
                                        <>
                                          <Check size={12} className="text-emerald-600" />
                                          <span className="text-emerald-600">Copied!</span>
                                        </>
                                      ) : (
                                        <>
                                          <Copy size={12} />
                                          <span>Copy</span>
                                        </>
                                      )}
                                    </button>
                                  </div>
                                </div>

                                <ul className="space-y-1.5 text-xs text-slate-700 font-medium pl-3">
                                  {task.instructions.map((ins, ii) => (
                                    <li key={ii} className="flex items-start gap-2">
                                      <span className="text-[#0284c7] font-bold">({String.fromCharCode(97 + ii)})</span>
                                      <span>{ins}</span>
                                    </li>
                                  ))}
                                </ul>

                                {task.sampleTextOrData && (
                                  <div className="mt-2.5 p-3 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-800 leading-relaxed select-all">
                                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                                      Sample Text / Input Data:
                                    </span>
                                    {task.sampleTextOrData}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Quick Practice Navigation Links ─────────────────────────── */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/typing"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 shadow-sm hover:shadow transition flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                <Keyboard size={20} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-purple-600 transition">
                  5-Minute Speed Typing Master
                </h4>
                <p className="text-[11px] text-slate-400">Nepali (Preeti) & English live exam mode</p>
              </div>
            </div>
            <ArrowRight size={15} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/courses"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow transition flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0284c7] flex items-center justify-center font-bold">
                <Layers size={20} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0284c7] transition">
                  Explore 12 Courses & Modules
                </h4>
                <p className="text-[11px] text-slate-400">Curriculum notes & study materials</p>
              </div>
            </div>
            <ArrowRight size={15} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>

      </main>
    </div>
  );
}
