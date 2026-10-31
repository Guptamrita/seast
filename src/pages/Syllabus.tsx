import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, Search, Sparkles, Building2, GraduationCap,
  Shield, Globe, Zap, Flame, Cpu, Landmark, CheckCircle2,
  ArrowLeft, RotateCw, Maximize2, Minimize2, Lock,
  ChevronLeft, ChevronRight, FileText
} from "lucide-react";
import SEO from "@/components/SEO";
import { formatGoogleDriveEmbedUrl } from "@/data/coursesData";

export interface OrganizationSyllabus {
  id: string;
  number: number;
  organization: string;
  title: string;
  subtitle: string;
  level: "4th" | "5th" | "7th";
  category: "Loksewa" | "Corporation" | "University";
  icon: React.ReactNode;
  iconBg: string;
  cardBg: string;
  driveEmbedUrl: string;
}

const defaultPdfUrl = "https://drive.google.com/file/d/1t9gvNZ4Q1Qfo4cDMzDYaKvc2VZzvmfhF/preview";

const organizationSyllabi: OrganizationSyllabus[] = [
  {
    id: "syl-1",
    number: 1,
    organization: "लोकसेवा आयोग",
    title: "राष्ट्रिय मानव अधिकार आयोग / 5th level",
    subtitle: "(सुचना प्राविधि सहायक - तह ५)",
    level: "5th",
    category: "Loksewa",
    icon: <Shield className="w-5 h-5 text-white" />,
    iconBg: "bg-[#0284c7]",
    cardBg: "bg-[#f0f7ff] hover:bg-[#e0f2fe] border-[#bae6fd]/60 text-slate-900",
    driveEmbedUrl: defaultPdfUrl,
  },
  {
    id: "syl-2",
    number: 2,
    organization: "काठमाडौँ उपत्यका खानेपानी लिमिटेड",
    title: "ओभरसियर (IT) / 5th level",
    subtitle: "(सुचना प्राविधि-तह ५)",
    level: "5th",
    category: "Corporation",
    icon: <Building2 className="w-5 h-5 text-white" />,
    iconBg: "bg-[#06b6d4]",
    cardBg: "bg-[#ecfeff] hover:bg-[#cffafe] border-[#a5f3fc]/60 text-slate-900",
    driveEmbedUrl: defaultPdfUrl,
  },
  {
    id: "syl-3",
    number: 3,
    organization: "नेपाल टेलिकम कम्पनी",
    title: "Computer Engineer / 7th level",
    subtitle: "(टेलिकम इन्जिनियरिङ - तह 7)",
    level: "7th",
    category: "Corporation",
    icon: <Globe className="w-5 h-5 text-white" />,
    iconBg: "bg-[#6366f1]",
    cardBg: "bg-[#eef2ff] hover:bg-[#e0e7ff] border-[#c7d2fe]/60 text-slate-900",
    driveEmbedUrl: defaultPdfUrl,
  },
  {
    id: "syl-4",
    number: 4,
    organization: "नेपाल विद्युत प्राधिकरण",
    title: "Computer Engineer / 7th level",
    subtitle: "(कम्प्युटर इन्जिनियर - तह ७)",
    level: "7th",
    category: "Corporation",
    icon: <Zap className="w-5 h-5 text-white" />,
    iconBg: "bg-[#f59e0b]",
    cardBg: "bg-[#fffbeb] hover:bg-[#fef3c7] border-[#fde68a]/60 text-slate-900",
    driveEmbedUrl: defaultPdfUrl,
  },
  {
    id: "syl-5",
    number: 5,
    organization: "नेपाल आयल निगम लिमिटेड",
    title: "Senior Assistant computer / 5th level",
    subtitle: "वरिष्ठ सहायक (कम्प्युटर) – तह ५",
    level: "5th",
    category: "Corporation",
    icon: <Flame className="w-5 h-5 text-white" />,
    iconBg: "bg-[#ea580c]",
    cardBg: "bg-[#fff7ed] hover:bg-[#ffedd5] border-[#fed7aa]/60 text-slate-900",
    driveEmbedUrl: defaultPdfUrl,
  },
  {
    id: "syl-6",
    number: 6,
    organization: "नेपाल आयल निगम लिमिटेड",
    title: "Assistant computer / 4th level",
    subtitle: "सहायक (कम्प्युटर) – तह ४",
    level: "4th",
    category: "Corporation",
    icon: <Flame className="w-5 h-5 text-white" />,
    iconBg: "bg-[#d97706]",
    cardBg: "bg-[#fffbeb] hover:bg-[#fef3c7] border-[#fde68a]/60 text-slate-900",
    driveEmbedUrl: defaultPdfUrl,
  },
  {
    id: "syl-7",
    number: 7,
    organization: "सामाजिक सुरक्षा कोष",
    title: "Assistant computer operator / 4th level",
    subtitle: "सहायक (कम्प्युटर) – तह ४",
    level: "4th",
    category: "Corporation",
    icon: <Shield className="w-5 h-5 text-white" />,
    iconBg: "bg-[#10b981]",
    cardBg: "bg-[#f0fdf4] hover:bg-[#dcfce7] border-[#bbf7d0]/60 text-slate-900",
    driveEmbedUrl: defaultPdfUrl,
  },
  {
    id: "syl-8",
    number: 8,
    organization: "लोकसेवा आयोग",
    title: "Computer Technician / 5th level",
    subtitle: "(कम्प्युटर टेक्निसियन - तह ५)",
    level: "5th",
    category: "Loksewa",
    icon: <Cpu className="w-5 h-5 text-white" />,
    iconBg: "bg-[#8b5cf6]",
    cardBg: "bg-[#faf5ff] hover:bg-[#f3e8ff] border-[#e9d5ff]/60 text-slate-900",
    driveEmbedUrl: defaultPdfUrl,
  },
  {
    id: "syl-9",
    number: 9,
    organization: "लोकसेवा आयोग",
    title: "संघीय संसद सेवा / 5th level",
    subtitle: "(कम्प्युटर अपरेटर - तह ५)",
    level: "5th",
    category: "Loksewa",
    icon: <Landmark className="w-5 h-5 text-white" />,
    iconBg: "bg-[#2563eb]",
    cardBg: "bg-[#eff6ff] hover:bg-[#dbeafe] border-[#bfdbfe]/60 text-slate-900",
    driveEmbedUrl: defaultPdfUrl,
  },
  {
    id: "syl-10",
    number: 10,
    organization: "संघ लोकसेवा आयोग",
    title: "Computer Operator / 5th level",
    subtitle: "(सुचना प्राविधि-तह ५)",
    level: "5th",
    category: "Loksewa",
    icon: <GraduationCap className="w-5 h-5 text-white" />,
    iconBg: "bg-[#0284c7]",
    cardBg: "bg-[#f0f7ff] hover:bg-[#e0f2fe] border-[#bae6fd]/60 text-slate-900",
    driveEmbedUrl: defaultPdfUrl,
  },
  {
    id: "syl-11",
    number: 11,
    organization: "संघ लोकसेवा आयोग",
    title: "Computer Operator / 4th level",
    subtitle: "(सुचना प्राविधि-तह ४)",
    level: "4th",
    category: "Loksewa",
    icon: <GraduationCap className="w-5 h-5 text-white" />,
    iconBg: "bg-[#0369a1]",
    cardBg: "bg-[#eff6ff] hover:bg-[#dbeafe] border-[#bfdbfe]/60 text-slate-900",
    driveEmbedUrl: defaultPdfUrl,
  },
  {
    id: "syl-12",
    number: 12,
    organization: "नेपाल खानेपानी संस्थान",
    title: "Computer Operator / 5th level",
    subtitle: "(प्राविधि-तह ५)",
    level: "5th",
    category: "Corporation",
    icon: <Building2 className="w-5 h-5 text-white" />,
    iconBg: "bg-[#0891b2]",
    cardBg: "bg-[#ecfeff] hover:bg-[#cffafe] border-[#a5f3fc]/60 text-slate-900",
    driveEmbedUrl: defaultPdfUrl,
  },
  {
    id: "syl-13",
    number: 13,
    organization: "नेपाल खानेपानी संस्थान",
    title: "Computer Operator / 4th level",
    subtitle: "(प्राविधि-तह ४)",
    level: "4th",
    category: "Corporation",
    icon: <Building2 className="w-5 h-5 text-white" />,
    iconBg: "bg-[#0284c7]",
    cardBg: "bg-[#f0f7ff] hover:bg-[#e0f2fe] border-[#bae6fd]/60 text-slate-900",
    driveEmbedUrl: defaultPdfUrl,
  },
  {
    id: "syl-14",
    number: 14,
    organization: "लोकसेवा आयोग",
    title: "Computer skill test / 4th level",
    subtitle: "(खरिदार-तह ४)",
    level: "4th",
    category: "Loksewa",
    icon: <CheckCircle2 className="w-5 h-5 text-white" />,
    iconBg: "bg-[#16a34a]",
    cardBg: "bg-[#f0fdf4] hover:bg-[#dcfce7] border-[#bbf7d0]/60 text-slate-900",
    driveEmbedUrl: defaultPdfUrl,
  },
  {
    id: "syl-15",
    number: 15,
    organization: "लोकसेवा आयोग",
    title: "Computer skill test / 5th level",
    subtitle: "(नायब सुब्बा-तह ५)",
    level: "5th",
    category: "Loksewa",
    icon: <CheckCircle2 className="w-5 h-5 text-white" />,
    iconBg: "bg-[#059669]",
    cardBg: "bg-[#f0fdf4] hover:bg-[#dcfce7] border-[#bbf7d0]/60 text-slate-900",
    driveEmbedUrl: defaultPdfUrl,
  },
  {
    id: "syl-16",
    number: 16,
    organization: "त्रिभुवन विश्वविद्यालय सेवा आयोग",
    title: "Senior IT Assistant / 5th level",
    subtitle: "(सुचना प्राविधि-तह ५)",
    level: "5th",
    category: "University",
    icon: <BookOpen className="w-5 h-5 text-white" />,
    iconBg: "bg-[#c026d3]",
    cardBg: "bg-[#fdf4ff] hover:bg-[#fae8ff] border-[#f5d0fe]/60 text-slate-900",
    driveEmbedUrl: defaultPdfUrl,
  },
  {
    id: "syl-17",
    number: 17,
    organization: "त्रिभुवन विश्वविद्यालय सेवा आयोग",
    title: "IT Assistant / 4th level",
    subtitle: "(सुचना प्राविधि -तह ४)",
    level: "4th",
    category: "University",
    icon: <BookOpen className="w-5 h-5 text-white" />,
    iconBg: "bg-[#a855f7]",
    cardBg: "bg-[#faf5ff] hover:bg-[#f3e8ff] border-[#e9d5ff]/60 text-slate-900",
    driveEmbedUrl: defaultPdfUrl,
  },
];

export default function Syllabus() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedLevel, setSelectedLevel] = useState<"All" | "4th" | "5th" | "7th">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  // Active syllabus from URL param if present
  const currentSyllabusId = searchParams.get("id");
  const currentSyllabusIndex = useMemo(() => {
    if (!currentSyllabusId) return -1;
    return organizationSyllabi.findIndex((s) => s.id === currentSyllabusId);
  }, [currentSyllabusId]);

  const currentSyllabus = currentSyllabusIndex !== -1 ? organizationSyllabi[currentSyllabusIndex] : null;

  const prevSyllabus = currentSyllabusIndex > 0 ? organizationSyllabi[currentSyllabusIndex - 1] : null;
  const nextSyllabus =
    currentSyllabusIndex !== -1 && currentSyllabusIndex < organizationSyllabi.length - 1
      ? organizationSyllabi[currentSyllabusIndex + 1]
      : null;

  // Filtered syllabi for cards grid
  const filteredSyllabi = useMemo(() => {
    return organizationSyllabi.filter((item) => {
      const matchesLevel = selectedLevel === "All" || item.level === selectedLevel;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.organization.toLowerCase().includes(query) ||
        item.title.toLowerCase().includes(query) ||
        item.subtitle.toLowerCase().includes(query);
      return matchesLevel && matchesSearch;
    });
  }, [selectedLevel, searchQuery]);

  const handleSelectSyllabus = (id: string) => {
    setSearchParams({ id });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToGrid = () => {
    setSearchParams({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const embedUrl = useMemo(() => {
    if (!currentSyllabus) return "";
    return formatGoogleDriveEmbedUrl(currentSyllabus.driveEmbedUrl);
  }, [currentSyllabus]);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 pb-20 select-none">
      <SEO
        title={
          currentSyllabus
            ? `${currentSyllabus.title} — Official Syllabus PDF`
            : "Official Loksewa Syllabus (पाठ्यक्रम) — 4th, 5th & 7th Level"
        }
        description={
          currentSyllabus
            ? `View ${currentSyllabus.title} official curriculum and syllabus PDF on Study Hub.`
            : "Comprehensive official PSC curriculum for Computer Operator, IT Assistant, Telecom, Oil Corporation, NEA, KUKL & Universities."
        }
        canonical="https://amritagupta.com.np/syllabus"
      />

      {/* ── Top Header Banner ────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#072147] to-[#0c2854] text-white pt-10 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#0f3469]">
        <div className="max-w-7xl mx-auto space-y-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-sky-300 text-xs font-bold border border-blue-400/30 mb-2">
                <Sparkles size={12} className="text-amber-400" /> Official Curriculum & Framework
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Syllabus <span className="text-[#facc15]">(पाठ्यक्रम)</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-2xl font-normal leading-relaxed">
                Official Loksewa PSC, Public Enterprises, Telecom, Oil Corporation, Water Supply & University IT exam syllabi.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/20">
                17 Official Syllabi
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Container ───────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-8">

        {/* ── VIEW 1: OPEN SYLLABUS PDF DOCUMENT VIEWER ─────────────── */}
        {currentSyllabus ? (
          <div className="space-y-6">
            {/* Top Toolbar & Breadcrumb */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-slate-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <button
                  onClick={handleBackToGrid}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 text-xs sm:text-sm font-bold transition shadow-xs"
                >
                  <ArrowLeft size={16} />
                  <span>Back to All Syllabi</span>
                </button>

                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-xs font-bold text-[#0284c7]">
                      {currentSyllabus.organization}
                    </span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      {currentSyllabus.level} Level
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {currentSyllabus.category}
                    </span>
                  </div>
                  <h2 className="text-base sm:text-xl font-black text-slate-900 leading-snug">
                    {currentSyllabus.title}
                  </h2>
                  {currentSyllabus.subtitle && (
                    <p className="text-xs text-slate-500 font-medium">
                      {currentSyllabus.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Viewer Controls */}
              <div className="flex items-center gap-2 self-end md:self-auto">
                <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200 hidden sm:inline-flex items-center gap-1">
                  <Lock size={12} className="text-slate-400" /> Protected Document
                </span>

                <button
                  onClick={() => setReloadKey((k) => k + 1)}
                  title="Reload document"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition text-xs font-semibold flex items-center gap-1"
                >
                  <RotateCw size={14} />
                  <span className="hidden sm:inline">Reload</span>
                </button>

                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  title={isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition text-xs font-semibold flex items-center gap-1"
                >
                  {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                  <span className="hidden sm:inline">{isFullscreen ? "Exit" : "Expand"}</span>
                </button>
              </div>
            </div>

            {/* Embedded Google Drive / PDF Viewer with Protected Layer */}
            <div
              className="relative w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md select-none"
              onContextMenu={(e) => e.preventDefault()}
            >
              {/* Click blocker on top-right to prevent unpermitted Google Drive download / popout */}
              <div
                className="absolute top-0 right-0 w-24 h-16 z-20 pointer-events-auto bg-transparent select-none cursor-default"
                title="Protected Syllabus Document — View Only"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
                onContextMenu={(e) => e.preventDefault()}
              />

              {/* Subtle watermark / copyright badge */}
              <div className="absolute bottom-3 right-4 z-20 pointer-events-none select-none bg-slate-900/80 backdrop-blur-md text-white/95 text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-xl border border-white/20 shadow-lg flex items-center gap-1.5">
                <Shield size={12} className="text-emerald-400" />
                <span>© Study Hub</span>
                <span className="text-slate-400">•</span>
                <span className="text-amber-300">Official Syllabus PDF</span>
              </div>

              <iframe
                key={reloadKey}
                src={embedUrl}
                title={`${currentSyllabus.title} PDF Document Viewer`}
                className={`w-full bg-white transition-all ${
                  isFullscreen ? "h-[calc(100vh-60px)]" : "h-[650px] sm:h-[780px] md:h-[860px]"
                }`}
                allow="autoplay; encrypted-media; fullscreen"
              />
            </div>

            {/* Viewer Status Footer */}
            <div className="flex items-center justify-between text-[11px] text-slate-500 px-2 flex-wrap gap-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-500" />
                <span>Official syllabus loaded securely (Protected read-only preview mode)</span>
              </span>
              <span className="font-semibold text-slate-700">
                © 2026 Study Hub · All Rights Reserved
              </span>
            </div>

            {/* Previous & Next Syllabus Navigation */}
            <div className="flex items-center justify-between gap-4 pt-2">
              {prevSyllabus ? (
                <button
                  onClick={() => handleSelectSyllabus(prevSyllabus.id)}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow transition group text-left max-w-xs sm:max-w-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-[#0284c7] transition">
                    <ChevronLeft size={20} />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Previous Syllabus
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 truncate group-hover:text-[#0284c7] transition">
                      #{prevSyllabus.number}. {prevSyllabus.title}
                    </h4>
                  </div>
                </button>
              ) : (
                <div />
              )}

              {nextSyllabus ? (
                <button
                  onClick={() => handleSelectSyllabus(nextSyllabus.id)}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow transition group text-right max-w-xs sm:max-w-sm ml-auto"
                >
                  <div className="truncate">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Next Syllabus
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 truncate group-hover:text-[#0284c7] transition">
                      #{nextSyllabus.number}. {nextSyllabus.title}
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-[#0284c7] transition">
                    <ChevronRight size={20} />
                  </div>
                </button>
              ) : (
                <div />
              )}
            </div>

            {/* Quick Switch to Other Syllabi */}
            <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    All 17 Official Syllabi
                  </h3>
                  <p className="text-xs text-slate-500">
                    Click any syllabus below to open its PDF directly
                  </p>
                </div>
                <button
                  onClick={handleBackToGrid}
                  className="text-xs font-bold text-[#0284c7] hover:underline"
                >
                  View All Cards Grid →
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                {organizationSyllabi.map((s) => {
                  const isActive = s.id === currentSyllabus.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => handleSelectSyllabus(s.id)}
                      className={`p-3 rounded-xl border text-left transition flex items-center gap-2.5 ${
                        isActive
                          ? "bg-blue-50 border-blue-400 shadow-sm"
                          : "bg-slate-50/70 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-lg text-[11px] font-black flex items-center justify-center flex-shrink-0 ${
                          isActive ? "bg-[#0284c7] text-white" : "bg-white text-slate-600 border border-slate-200"
                        }`}
                      >
                        #{s.number}
                      </span>
                      <div className="truncate">
                        <div
                          className={`text-xs font-bold truncate ${
                            isActive ? "text-[#0284c7]" : "text-slate-800"
                          }`}
                        >
                          {s.title}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">{s.organization}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          </div>
        ) : (
          /* ── VIEW 2: HOMEPAGE-STYLE CARDS GRID (ALL 17 SYLLABI) ─────── */
          <>
            {/* Filter & Search Toolbar */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Level Filter Tabs */}
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap w-full md:w-auto">
                {(["All", "4th", "5th", "7th"] as const).map((level) => {
                  const count =
                    level === "All"
                      ? organizationSyllabi.length
                      : organizationSyllabi.filter((s) => s.level === level).length;
                  const isActive = selectedLevel === level;
                  return (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
                        isActive
                          ? "bg-[#0284c7] text-white shadow-xs"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      <span>{level === "All" ? "All Levels" : `${level} Level`}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                          isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search Input */}
              <div className="relative w-full md:w-72">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search organization or post..."
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7]/30 focus:border-[#0284c7]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Official Syllabus Cards Grid (Matching Homepage Card Design) */}
            <section className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#0284c7] rounded-full inline-block" />
                  <h2 className="text-base sm:text-lg font-bold text-slate-900">
                    Official Syllabus Sets
                  </h2>
                </div>
                <span className="text-xs font-semibold text-slate-500">
                  Showing {filteredSyllabi.length} of {organizationSyllabi.length} Syllabi
                </span>
              </div>

              {/* 17 Cards Grid - Homepage Style Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {filteredSyllabi.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: idx * 0.02 }}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelectSyllabus(item.id)}
                    className={`${item.cardBg} border rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all h-full min-h-[190px] justify-between cursor-pointer group select-none relative overflow-hidden`}
                  >
                    {/* Top Right Level Pill */}
                    <div className="absolute top-3 right-3">
                      <span
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border shadow-2xs ${
                          item.level === "7th"
                            ? "bg-purple-100/90 text-purple-700 border-purple-200"
                            : item.level === "5th"
                            ? "bg-emerald-100/90 text-emerald-700 border-emerald-200"
                            : "bg-sky-100/90 text-sky-700 border-sky-200"
                        }`}
                      >
                        {item.level} Level
                      </span>
                    </div>

                    {/* Top Left Number Pill */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-white/70 text-slate-500 border border-slate-200/50">
                        #{item.number}
                      </span>
                    </div>

                    {/* Circular Icon (Same as Homepage Cards) */}
                    <div
                      className={`w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center shadow-sm mb-3 mt-2 group-hover:scale-110 transition-transform`}
                    >
                      {item.icon}
                    </div>

                    {/* Organization & Title */}
                    <div className="space-y-1.5 my-auto w-full px-1">
                      <span className="text-[11px] font-bold text-[#0284c7] block truncate">
                        {item.organization}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-tight line-clamp-2">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-xs text-slate-500 font-medium line-clamp-1">
                          {item.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Bottom Action Prompt: Click to Open Syllabus PDF */}
                    <div className="mt-4 pt-3 border-t border-slate-200/60 w-full flex items-center justify-between text-[11px]">
                      <span className="text-slate-500 font-medium">
                        {item.category}
                      </span>
                      <span className="font-bold text-[#0284c7] group-hover:text-[#0369a1] flex items-center gap-1 transition-colors">
                        <FileText size={12} />
                        <span>Open Syllabus PDF →</span>
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </>
        )}

      </main>
    </div>
  );
}
