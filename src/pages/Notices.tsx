import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Bell,
  ExternalLink,
  RefreshCw,
  Search,
  FileText,
  Calendar,
  Share2,
  Building2,
  Sparkles,
  Check,
  ChevronRight,
  Filter,
  ArrowUpRight,
  ShieldCheck,
  Info
} from "lucide-react";
import { useTuNotices } from "@/hooks/useTuNotices";
import { toast } from "sonner";
import SEO from "@/components/SEO";

export default function Notices() {
  const { notices, loading, hasNew, newCount, lastChecked, refresh, markAsSeen } = useTuNotices();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Automatically mark notices as seen when user visits the Notices page
  useEffect(() => {
    markAsSeen();
  }, [markAsSeen]);

  // Categories list
  const categories = [
    { id: "all", label: "सबै सूचना (All)" },
    { id: "result", label: "🏆 नतिजा (Results)" },
    { id: "interview", label: "🎤 अन्तर्वार्ता (Interviews)" },
    { id: "vacancy", label: "📢 विज्ञापन (Vacancies)" },
    { id: "list", label: "📋 नामावली (Candidate Lists)" },
    { id: "retotaling", label: "🔄 पुनर्योग (Re-totaling)" },
  ];

  // Filtered notices
  const filteredNotices = useMemo(() => {
    return notices.filter((notice) => {
      // Category filter
      if (selectedCategory === "result" && !notice.title.includes("नतिजा")) return false;
      if (selectedCategory === "interview" && !notice.title.includes("अन्तर्वार्ता")) return false;
      if (
        selectedCategory === "vacancy" &&
        !notice.title.includes("दरखास्त") &&
        !notice.title.includes("विज्ञापन")
      )
        return false;
      if (selectedCategory === "list" && !notice.title.includes("नामावली")) return false;
      if (selectedCategory === "retotaling" && !notice.title.includes("पुनर्योग")) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = notice.title.toLowerCase().includes(q);
        const matchesDate = notice.date.toLowerCase().includes(q);
        const matchesId = notice.id.toLowerCase().includes(q);
        const matchesCategory = notice.category.toLowerCase().includes(q);
        return matchesTitle || matchesDate || matchesId || matchesCategory;
      }
      return true;
    });
  }, [notices, selectedCategory, searchQuery]);

  const handleCopyLink = (notice: typeof notices[0]) => {
    navigator.clipboard.writeText(notice.url);
    setCopiedId(notice.id);
    toast.success("Notice link copied to clipboard!");
    setTimeout(() => setCopiedId(null), 2500);
  };

  const getCategoryBadgeClass = (title: string) => {
    if (title.includes("नतिजा")) {
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    }
    if (title.includes("अन्तर्वार्ता")) {
      return "bg-purple-50 text-purple-700 border-purple-200";
    }
    if (title.includes("दरखास्त") || title.includes("विज्ञापन")) {
      return "bg-amber-50 text-amber-700 border-amber-200";
    }
    if (title.includes("नामावली")) {
      return "bg-sky-50 text-sky-700 border-sky-200";
    }
    return "bg-slate-100 text-slate-700 border-slate-200";
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 pb-20">
      <SEO
        title="TU Service Commission Notices & Vacancies — Live Updates"
        description="Latest official notices, exam schedules, vacancy advertisements, and results from Tribhuvan University Service Commission (tusc.tu.edu.np)."
        canonical="https://amritagupta.com.np/notices"
      />

      {/* ── Top Hero / Header Section ──────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#072147] to-[#0c2854] text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#0f3469]">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-300 font-medium">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-[#facc15] font-semibold">TU Notices</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold">
                <Building2 size={14} className="text-blue-400" />
                <span>त्रिभुवन विश्वविद्यालय सेवा आयोग (TU Service Commission)</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Notices & Exam Updates <span className="text-[#facc15]">(सूचना तथा विज्ञापन)</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-200 max-w-2xl font-normal leading-relaxed">
                Directly synchronized with the official TU portal (
                <a
                  href="https://tusc.tu.edu.np/notices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-sky-300 hover:text-white"
                >
                  tusc.tu.edu.np
                </a>
                ). Real-time results, vacancy advertisements, candidate lists, and interview schedules.
              </p>
            </div>

            {/* Live Status and Refresh Button */}
            <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 flex-shrink-0">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs text-slate-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Live Portal Sync</span>
                {lastChecked && (
                  <span className="text-slate-400 hidden sm:inline">
                    • {lastChecked.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                )}
              </div>

              <button
                onClick={() => {
                  refresh();
                  toast.info("Checking for newest TU notices...");
                }}
                disabled={loading}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-bold shadow-md transition disabled:opacity-50 cursor-pointer"
              >
                <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
                <span>{loading ? "Checking..." : "Refresh Notices"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content Container ──────────────────────────────────── */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Search & Category Filter Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-slate-200/80 mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search notices by title, vacancy number (विज्ञापन नं), date..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:bg-white transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-200/60 rounded-full w-5 h-5 flex items-center justify-center"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Official Source Shortcut */}
            <a
              href="https://tusc.tu.edu.np/notices"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200 transition"
            >
              <span>Visit Official Portal</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1 pl-1 pr-2">
              <Filter size={13} /> Filter:
            </span>
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                    active
                      ? "bg-[#072147] text-[#facc15] shadow-sm"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Notices Count Header */}
        <div className="flex items-center justify-between mb-4 px-1 text-xs text-slate-500 font-medium">
          <div>
            Showing <strong className="text-slate-900 font-bold">{filteredNotices.length}</strong> notices
            {selectedCategory !== "all" && " in this category"}
          </div>
          <div className="text-[11px] text-slate-400">
            Source: TU Service Commission Kirtipur, Kathmandu
          </div>
        </div>

        {/* Notice Cards List */}
        {filteredNotices.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0284c7] flex items-center justify-center mx-auto">
              <FileText size={28} />
            </div>
            <h3 className="text-base font-bold text-slate-800">No notices found matching your criteria</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try searching with another keyword or resetting the category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-3.5">
            {filteredNotices.map((notice, index) => {
              const isTop = index < 3;
              return (
                <motion.article
                  key={notice.id || index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: Math.min(index * 0.03, 0.3) }}
                  className="group bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/80 hover:border-sky-300 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
                >
                  {/* Subtle highlight bar on left */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0284c7] to-[#072147] opacity-80 group-hover:w-1.5 transition-all" />

                  <div className="flex flex-col gap-3">
                    {/* Top Row: Meta Tags & Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Date badge */}
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold">
                          <Calendar size={12} className="text-slate-500" />
                          <span>{notice.date}</span>
                        </span>

                        {/* Category badge */}
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold border ${getCategoryBadgeClass(
                            notice.title
                          )}`}
                        >
                          {notice.category}
                        </span>

                        {/* Recent / New Tag */}
                        {isTop && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-[11px] font-extrabold animate-pulse">
                            <Sparkles size={11} /> नयाँ (New)
                          </span>
                        )}
                      </div>

                      {/* Notice ID */}
                      <span className="text-[11px] font-mono text-slate-400">
                        Notice #{notice.id}
                      </span>
                    </div>

                    {/* Notice Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">
                      <a
                        href={notice.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-start justify-between gap-3"
                      >
                        <span>{notice.title}</span>
                      </a>
                    </h3>

                    {/* Bottom Actions Row */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 text-xs">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <ShieldCheck size={13} className="text-emerald-500" />
                        Verified Official TU Notice
                      </span>

                      <div className="flex items-center gap-2">
                        {/* Copy Link */}
                        <button
                          onClick={() => handleCopyLink(notice)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition font-medium cursor-pointer"
                          title="Copy notice URL"
                        >
                          {copiedId === notice.id ? (
                            <>
                              <Check size={13} className="text-emerald-500" />
                              <span className="text-emerald-600 font-bold">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Share2 size={13} />
                              <span>Share</span>
                            </>
                          )}
                        </button>

                        {/* Open on Portal Button */}
                        <a
                          href={notice.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#072147] hover:bg-[#0c2854] text-white font-bold transition shadow-sm"
                        >
                          <span>Open Notice</span>
                          <ArrowUpRight size={14} className="text-[#facc15]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}

        {/* ── Official TU Links Info Box ───────────────────────────── */}
        <section className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0284c7] flex items-center justify-center">
              <Info size={20} />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Official Tribhuvan University Portals
              </h4>
              <p className="text-xs text-slate-500">
                Direct access to university service commission resources and guidelines
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <a
              href="https://tusc.tu.edu.np/notices"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-200 transition flex items-center justify-between group"
            >
              <div>
                <p className="text-xs font-bold text-slate-800 group-hover:text-[#0284c7]">
                  TU Service Commission Notices
                </p>
                <p className="text-[11px] text-slate-400">tusc.tu.edu.np/notices</p>
              </div>
              <ExternalLink size={14} className="text-slate-400 group-hover:text-[#0284c7]" />
            </a>

            <a
              href="https://tusc.tu.edu.np/downloads"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-200 transition flex items-center justify-between group"
            >
              <div>
                <p className="text-xs font-bold text-slate-800 group-hover:text-[#0284c7]">
                  TU Service Acts & Curriculums
                </p>
                <p className="text-[11px] text-slate-400">tusc.tu.edu.np/downloads</p>
              </div>
              <ExternalLink size={14} className="text-slate-400 group-hover:text-[#0284c7]" />
            </a>

            <a
              href="https://tu.edu.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-200 transition flex items-center justify-between group"
            >
              <div>
                <p className="text-xs font-bold text-slate-800 group-hover:text-[#0284c7]">
                  Tribhuvan University Main Portal
                </p>
                <p className="text-[11px] text-slate-400">tu.edu.np</p>
              </div>
              <ExternalLink size={14} className="text-slate-400 group-hover:text-[#0284c7]" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
