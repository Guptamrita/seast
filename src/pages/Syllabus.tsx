import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, Search, Sparkles, Filter, CheckCircle2,
  ChevronDown, ChevronUp, Layers, GraduationCap, Building2,
  ExternalLink
} from "lucide-react";
import SEO from "@/components/SEO";

export interface OrganizationSyllabus {
  id: string;
  organization: string;
  title: string;
  subtitle: string;
  level: "4th" | "5th" | "7th";
  category: "Loksewa" | "Corporation" | "University";
}

const organizationSyllabi: OrganizationSyllabus[] = [
  // Page 1
  {
    id: "syl-1",
    organization: "लोकसेवा आयोग",
    title: "राष्ट्रिय मानव अधिकार आयोग / 5th level",
    subtitle: "(सुचना प्राविधि सहायक - तह ५)",
    level: "5th",
    category: "Loksewa",
  },
  // Page 2
  {
    id: "syl-2",
    organization: "काठमाडौँ उपत्यका खानेपानी लिमिटेड",
    title: "ओभरसियर (IT) / 5th level",
    subtitle: "(सुचना प्राविधि-तह ५)",
    level: "5th",
    category: "Corporation",
  },
  {
    id: "syl-3",
    organization: "नेपाल टेलिकम कम्पनी",
    title: "Computer Engineer / 7th level",
    subtitle: "(टेलिकम इन्जिनियरिङ - तह 7)",
    level: "7th",
    category: "Corporation",
  },
  {
    id: "syl-4",
    organization: "नेपाल विद्युत प्राधिकरण",
    title: "Computer Engineer / 7th level",
    subtitle: "(कम्प्युटर इन्जिनियर - तह ७)",
    level: "7th",
    category: "Corporation",
  },
  {
    id: "syl-5",
    organization: "नेपाल आयल निगम लिमिटेड",
    title: "Senior Assistant computer / 5th level",
    subtitle: "वरिष्ठ सहायक (कम्प्युटर) – तह ५",
    level: "5th",
    category: "Corporation",
  },
  {
    id: "syl-6",
    organization: "नेपाल आयल निगम लिमिटेड",
    title: "Assistant computer / 4th level",
    subtitle: "सहायक (कम्प्युटर) – तह ४",
    level: "4th",
    category: "Corporation",
  },
  {
    id: "syl-7",
    organization: "सामाजिक सुरक्षा कोष",
    title: "Assistant computer operator / 4th level",
    subtitle: "सहायक (कम्प्युटर) – तह ४",
    level: "4th",
    category: "Corporation",
  },
  {
    id: "syl-8",
    organization: "लोकसेवा आयोग",
    title: "Computer Technician / 5th level",
    subtitle: "(कम्प्युटर टेक्निसियन - तह ५)",
    level: "5th",
    category: "Loksewa",
  },
  {
    id: "syl-9",
    organization: "लोकसेवा आयोग",
    title: "संघीय संसद सेवा / 5th level",
    subtitle: "(कम्प्युटर अपरेटर - तह ५)",
    level: "5th",
    category: "Loksewa",
  },
  // Page 3
  {
    id: "syl-10",
    organization: "संघ लोकसेवा आयोग",
    title: "Computer Operator / 5th level",
    subtitle: "(सुचना प्राविधि-तह ५)",
    level: "5th",
    category: "Loksewa",
  },
  {
    id: "syl-11",
    organization: "संघ लोकसेवा आयोग",
    title: "Computer Operator / 4th level",
    subtitle: "(सुचना प्राविधि-तह ४)",
    level: "4th",
    category: "Loksewa",
  },
  {
    id: "syl-12",
    organization: "नेपाल खानेपानी संस्थान",
    title: "Computer Operator / 5th level",
    subtitle: "(प्राविधि-तह ५)",
    level: "5th",
    category: "Corporation",
  },
  {
    id: "syl-13",
    organization: "नेपाल खानेपानी संस्थान",
    title: "Computer Operator / 4th level",
    subtitle: "(प्राविधि-तह ४)",
    level: "4th",
    category: "Corporation",
  },
  {
    id: "syl-14",
    organization: "लोकसेवा आयोग",
    title: "Computer skill test / 4th level",
    subtitle: "(खरिदार-तह ४)",
    level: "4th",
    category: "Loksewa",
  },
  {
    id: "syl-15",
    organization: "लोकसेवा आयोग",
    title: "Computer skill test / 5th level",
    subtitle: "(नायब सुब्बा-तह ५)",
    level: "5th",
    category: "Loksewa",
  },
  {
    id: "syl-16",
    organization: "त्रिभुवन विश्वविद्यालय सेवा आयोग",
    title: "Senior IT Assistant / 5th level",
    subtitle: "(सुचना प्राविधि-तह ५)",
    level: "5th",
    category: "University",
  },
  {
    id: "syl-17",
    organization: "त्रिभुवन विश्वविद्यालय सेवा आयोग",
    title: "IT Assistant / 4th level",
    subtitle: "(सुचना प्राविधि -तह ४)",
    level: "4th",
    category: "University",
  },
];

const technicalModules = [
  {
    title: "Part I: सामान्य ज्ञान र सार्वजनिक व्यवस्थापन",
    topics: [
      "1.1 भौगोलिक अवस्था र भू-संरचना",
      "1.2 प्रमुख राष्ट्रिय मुद्दाहरू (Current Affairs)",
      "1.3 नेपालको संविधान, २०७२ को सामान्य जानकारी",
      "1.4 नेपालको शासन प्रणाली (Federal, Provincial, Local)",
      "1.5 लोक सेवा आयोगको भूमिका र कार्य",
      "2.1 व्यवस्थापनका सामान्य सिद्धान्तहरू",
      "2.2 कार्यालय व्यवस्थापन र सूचना प्रविधिको महत्त्व",
      "2.3 सार्वजनिक सेवा प्रवाह र सुशासन",
      "2.4 विकेन्द्रीकरण र स्थानीय शासन",
      "2.5 जवाफदेहिता र पारदर्शिता",
      "2.6 भ्रष्टाचार नियन्त्रण",
      "2.7 लैङ्गिक समानता र सामाजिक समावेशीकरण",
      "2.8 नैतिकता र आचारसंहिता",
      "2.9 सार्वजनिक खरीद / Public Procurement",
      "2.10 मानवीय मूल्य मान्यता, नागरिक कर्तव्य र अनुशासन",
    ],
  },
  {
    title: "Part II: सेवा सम्बन्धित कार्य-ज्ञान (Technical ICT Modules)",
    sections: [
      {
        title: "1. Computer Fundamentals",
        topics: [
          "1.1 Introduction & History of Computers",
          "1.2 Generations & Classification of Computers",
          "1.3 Hardware Architecture: CPU, Memory, I/O Devices, Bus Architecture",
          "1.4 Number Systems (Binary, Octal, Decimal, Hexadecimal) & Conversions",
          "1.5 System & Application Software, Compiler, Interpreter",
        ],
      },
      {
        title: "2. Operating System (OS)",
        topics: [
          "2.1 Concept, Types & Functions of OS (Batch, Time-sharing, Real-time)",
          "2.2 Process Management, Memory Management & Storage Management",
          "2.3 Windows Environment, Control Panel, Task Manager & Registry",
          "2.4 Linux / Unix Basics: Commands, File Permissions, Shell Scripting",
        ],
      },
      {
        title: "3. Word Processing (MS Word)",
        topics: [
          "3.1 Document Creation, Formatting, Character Scaling & Indentation",
          "3.2 Table Operations, Text to Table, Formula in Tables",
          "3.3 Mail Merge, Macros, Bookmarks, Hyperlinks & Cross-references",
          "3.4 Section Breaks, Headers/Footers, Table of Contents & Watermark",
        ],
      },
      {
        title: "4. Electronic Spreadsheet (MS Excel)",
        topics: [
          "4.1 Cell Referencing (Relative, Absolute, Mixed), Ranges & Formulas",
          "4.2 Essential Functions: SUM, AVERAGE, IF, COUNTIF, VLOOKUP, INDEX-MATCH",
          "4.3 Data Analysis: Pivot Tables, Data Consolidation, Subtotals, Goal Seek",
          "4.4 Conditional Formatting, Data Validation & Chart Visualizations",
        ],
      },
      {
        title: "5. Database Management System (DBMS & MS Access)",
        topics: [
          "5.1 Relational Database Concepts, Primary Key, Foreign Key & Normalization",
          "5.2 SQL Basics (DDL & DML Commands: SELECT, INSERT, UPDATE, DELETE)",
          "5.3 MS Access Tables, Relationships, Referential Integrity, Queries & Forms",
        ],
      },
      {
        title: "6. Presentation System (MS PowerPoint)",
        topics: [
          "6.1 Slide Design, Slide Master & Layout Customization",
          "6.2 Transitions, Custom Animations, Timing & Slide Rehearsal",
          "6.3 Action Buttons, Custom Slide Shows & Multimedia Embedding",
        ],
      },
      {
        title: "7. Web Designing & Social Media (HTML & CSS)",
        topics: [
          "7.1 HTML5 Semantic Elements, Headings, Paragraphs, Lists & Tables",
          "7.2 Web Forms, Input Controls, Multimedia & Hyperlinks",
          "7.3 CSS3 Basics: Inline, Internal & External Styles, Flexbox & Fonts",
        ],
      },
      {
        title: "8. Computer Networking & Data Communication",
        topics: [
          "8.1 Network Topologies, Types (LAN, MAN, WAN) & Transmission Media",
          "8.2 OSI 7-Layer & TCP/IP Protocol Stack",
          "8.3 IP Addressing (IPv4, Subnetting, IPv6) & Network Devices (Router, Switch)",
        ],
      },
      {
        title: "9. Cyber Security & ICT Policy",
        topics: [
          "9.1 Cyber Threats: Malware, Phishing, Ransomware & DoS Attacks",
          "9.2 Security Safeguards: Firewall, Encryption, SSL/TLS & Digital Signatures",
          "9.3 Electronic Transaction Act 2063, ICT Policy 2072 & Digital Nepal Framework",
        ],
      },
    ],
  },
];

export default function Syllabus() {
  const [selectedLevel, setSelectedLevel] = useState<"All" | "4th" | "5th" | "7th">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSection, setExpandedSection] = useState<number | null>(1);

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

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 pb-20 select-none">
      <SEO
        title="Official Loksewa Syllabus (पाठ्यक्रम) — 4th, 5th & 7th Level"
        description="Comprehensive official PSC curriculum for Computer Operator, IT Assistant, Telecom, Oil Corporation, NEA, KUKL & Universities."
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
        
        {/* ── Filter & Search Toolbar ─────────────────────────────────── */}
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
          </div>
        </div>

        {/* ── Official Syllabus Cards Grid (Matching the PDF) ────────── */}
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#0284c7] rounded-full inline-block" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Organization-wise Syllabus Sets
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              Showing {filteredSyllabi.length} of {organizationSyllabi.length}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredSyllabi.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.02 }}
                whileHover={{ y: -3 }}
                className="bg-white border-2 border-slate-700/80 hover:border-[#0284c7] rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between min-h-[140px] text-center relative group"
              >
                {/* Level badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${
                      item.level === "7th"
                        ? "bg-purple-50 text-purple-700 border-purple-200"
                        : item.level === "5th"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-sky-50 text-sky-700 border-sky-200"
                    }`}
                  >
                    {item.level} Level
                  </span>
                </div>

                <div className="space-y-2.5 my-auto">
                  {/* Top Red Organization Title (Exact PDF Style) */}
                  <h3 className="text-sm sm:text-base font-extrabold text-[#dc2626] tracking-tight">
                    {item.organization}
                  </h3>

                  {/* Middle Main Post Title */}
                  <h4 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug">
                    {item.title}
                  </h4>

                  {/* Bottom Subtitle / Description in Parentheses */}
                  {item.subtitle && (
                    <p className="text-xs sm:text-sm font-semibold text-slate-700">
                      {item.subtitle}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                  <span className="flex items-center gap-1 text-slate-600">
                    <Building2 size={13} className="text-[#0284c7]" /> {item.category}
                  </span>
                  <span className="text-[#0284c7] group-hover:underline flex items-center gap-1 font-bold">
                    View Modules ↓
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Detailed Curriculum Breakdown ──────────────────────────── */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-6 bg-[#0284c7] rounded-full inline-block" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Detailed Subject-wise Curriculum Topics
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              Nepal PSC Standard
            </span>
          </div>

          <div className="space-y-4">
            {technicalModules.map((part, pi) => {
              const isExpanded = expandedSection === pi;
              return (
                <div key={pi} className="border border-slate-200 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setExpandedSection(isExpanded ? null : pi)}
                    className="w-full p-4 sm:p-5 bg-slate-50 hover:bg-slate-100 flex items-center justify-between text-left font-bold text-slate-900 transition"
                  >
                    <span className="text-sm sm:text-base text-[#0284c7] font-black">
                      {part.title}
                    </span>
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>

                  {isExpanded && (
                    <div className="p-5 sm:p-6 bg-white space-y-5 border-t border-slate-200">
                      {part.topics && (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                          {part.topics.map((t, i) => (
                            <li key={i} className="flex items-start gap-2 py-1 font-medium bg-slate-50/70 p-2.5 rounded-xl border border-slate-100">
                              <span className="text-[#0284c7] font-bold">•</span>
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {part.sections && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {part.sections.map((sec, si) => (
                            <div key={si} className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-2">
                              <h3 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
                                {sec.title}
                              </h3>
                              <ul className="space-y-1 text-xs text-slate-600 font-medium pl-3">
                                {sec.topics.map((t, ti) => (
                                  <li key={ti}>• {t}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </main>
    </div>
  );
}
