import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useNepalTime, useCountdown } from "@/hooks/useNepalTime";
import { motivationalQuotes } from "@/data/questions";
import QuestionOfTheDay from "@/components/QuestionOfTheDay";
import PersonalizedDashboard from "@/components/PersonalizedDashboard";
import DailyMCQCard from "@/components/DailyMCQCard";
import { useAuth } from "@/hooks/useAuth";
import {
  Clock,
  Zap,
  BookOpen,
  Trophy,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Code2,
  Sparkles,
  Layers,
  Search,
  Copy,
  Check,
  Building2,
  Keyboard,
  CheckCircle2,
  FileText,
  User,
  GraduationCap,
  HelpCircle,
  Globe,
  Landmark,
  Monitor,
} from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import amritaPhoto from "@/assets/amrita-photo.jpg";
import pscHeroBanner from "@/assets/psc-hero-banner.jpg";
import studentIllustration from "@/assets/student-study-illustration.png";
import { toast } from "sonner";

// Ashad 7, 2082 BS ≈ June 22, 2026 AD
const EXAM_DATE = new Date("2026-06-22T10:00:00+05:45");

// 9 Feature Cards matching the requested layout design
const quickCardsRow1 = [
  {
    title: "Courses",
    desc: "Learn from expert resources",
    path: "/practice",
    icon: <GraduationCap className="w-5 h-5 text-white" />,
    iconBg: "bg-[#0284c7]",
    cardBg: "bg-[#f0f7ff] hover:bg-[#e0f2fe] border-[#bae6fd]/60 text-slate-900",
  },
  {
    title: "Notes",
    desc: "Download quality study notes",
    path: "/notes",
    icon: <FileText className="w-5 h-5 text-white" />,
    iconBg: "bg-[#10b981]",
    cardBg: "bg-[#f0fdf4] hover:bg-[#dcfce7] border-[#bbf7d0]/60 text-slate-900",
  },
  {
    title: "MCQ Practice",
    desc: "Test your knowledge",
    path: "/practice",
    icon: <CheckCircle2 className="w-5 h-5 text-white" />,
    iconBg: "bg-[#f59e0b]",
    cardBg: "bg-[#fffbeb] hover:bg-[#fef3c7] border-[#fde68a]/60 text-slate-900",
  },
  {
    title: "Typing",
    desc: "Improve your typing speed",
    path: "/typing",
    icon: <Keyboard className="w-5 h-5 text-white" />,
    iconBg: "bg-[#c026d3]",
    cardBg: "bg-[#faf5ff] hover:bg-[#f3e8ff] border-[#e9d5ff]/60 text-slate-900",
  },
  {
    title: "Projects",
    desc: "Explore my projects",
    path: "/portfolio",
    icon: <Code2 className="w-5 h-5 text-white" />,
    iconBg: "bg-[#06b6d4]",
    cardBg: "bg-[#ecfeff] hover:bg-[#cffafe] border-[#a5f3fc]/60 text-slate-900",
  },
];

const quickCardsRow2 = [
  {
    title: "Old Questions",
    desc: "Practice previous PSC questions",
    path: "/old-is-gold",
    icon: <HelpCircle className="w-5 h-5 text-white" />,
    iconBg: "bg-[#8b5cf6]",
    cardBg: "bg-[#faf5ff] hover:bg-[#f3e8ff] border-[#e9d5ff]/60 text-slate-900",
  },
  {
    title: "GK Notes",
    desc: "General Knowledge for PSC",
    path: "/notes",
    icon: <Globe className="w-5 h-5 text-white" />,
    iconBg: "bg-[#10b981]",
    cardBg: "bg-[#f0fdf4] hover:bg-[#dcfce7] border-[#bbf7d0]/60 text-slate-900",
  },
  {
    title: "Public Management Notes",
    desc: "Learn key topics of Public Management",
    path: "/notes",
    icon: <Landmark className="w-5 h-5 text-white" />,
    iconBg: "bg-[#d97706]",
    cardBg: "bg-[#fffbeb] hover:bg-[#fef3c7] border-[#fde68a]/60 text-slate-900",
  },
  {
    title: "Practical Set Practice",
    desc: "Practice practical sets",
    path: "/online-exam",
    icon: <Monitor className="w-5 h-5 text-white" />,
    iconBg: "bg-[#2563eb]",
    cardBg: "bg-[#eff6ff] hover:bg-[#dbeafe] border-[#bfdbfe]/60 text-slate-900",
  },
];

const PROVINCIAL_EXAMS = [
  { name: "Federal PSC (संघीय लोकसेवा)", badge: "Central", color: "from-blue-600 to-indigo-600", desc: "Computer Operator (Level 5) & Asst. Computer Operator (Level 4)" },
  { name: "Bagmati Province (बागमती प्रदेश)", badge: "Province 3", color: "from-emerald-600 to-teal-600", desc: "Pradesh Loksewa Aayog Computer Operator & Data Entry" },
  { name: "Koshi Province (कोशी प्रदेश)", badge: "Province 1", color: "from-cyan-600 to-blue-600", desc: "Pradesh Loksewa Aayog Computer Technician & Operator" },
  { name: "Gandaki Province (गण्डकी प्रदेश)", badge: "Province 4", color: "from-amber-600 to-orange-600", desc: "Provincial Administration & Local Level IT Staff Exam" },
  { name: "Lumbini Province (लुम्बिनी प्रदेश)", badge: "Province 5", color: "from-rose-600 to-pink-600", desc: "Pradesh Loksewa Aayog Computer Operator 5th Level" },
  { name: "Karnali & Sudurpashchim", badge: "Province 6 & 7", color: "from-purple-600 to-indigo-600", desc: "Provincial & Rural Municipality IT Assistant Exams" },
  { name: "Nepal Oil Corporation (NOC)", badge: "Public Corp", color: "from-red-600 to-orange-600", desc: "Senior Assistant (Computer / IT) 5th Level Exam Sets" },
  { name: "Tribhuvan University (TU)", badge: "University", color: "from-indigo-600 to-purple-600", desc: "TU Service Commission Technical Assistant (IT) Sets" },
];

const QUICK_CAPSULES = [
  {
    category: "Excel Formulas",
    items: [
      { title: "=VLOOKUP(val, range, col, FALSE)", desc: "Searches for a value in the first column and returns a value in the same row." },
      { title: "=INDEX(range, row, col)", desc: "Returns the value of an element in a table given row and column indexes." },
      { title: "=COUNTIF(range, criteria)", desc: "Counts the number of cells within a range that meet the given condition." },
      { title: "=CONCATENATE(text1, text2)", desc: "Joins two or more text strings into one string." },
    ]
  },
  {
    category: "Keyboard Shortcuts",
    items: [
      { title: "Ctrl + T (Word)", desc: "Creates a hanging indent in Microsoft Word." },
      { title: "Ctrl + ; (Excel)", desc: "Inserts the current system date in the active cell." },
      { title: "Ctrl + Shift + ; (Excel)", desc: "Inserts the current system time in the active cell." },
      { title: "Windows Key + L", desc: "Immediately locks the active Windows workstation screen." },
    ]
  },
  {
    category: "Networking Ports",
    items: [
      { title: "HTTP (80) & HTTPS (443)", desc: "Standard and SSL/TLS encrypted web communication protocols." },
      { title: "SSH (22) & Telnet (23)", desc: "Encrypted remote terminal shell and legacy unencrypted terminal." },
      { title: "DNS (53) & DHCP (67/68)", desc: "Domain Name System resolution and Dynamic Host Configuration Protocol." },
      { title: "SMTP (25) & POP3 (110)", desc: "Simple Mail Transfer (send) and Post Office Protocol (receive)." },
    ]
  },
  {
    category: "Nepal IT Legislation",
    items: [
      { title: "Electronic Transaction Act, 2063 BS", desc: "Legal validity of digital signatures, certifying authorities, and cyber penalties." },
      { title: "National ICT Policy, 2072 BS", desc: "Broadband expansion, e-Governance, and Digital Nepal Framework initiatives." },
      { title: "Public Procurement Act, 2063 BS", desc: "Government electronic bidding (e-GP) and public procurement transparency rules." },
      { title: "Right to Information Act, 2064 BS", desc: "Citizens' constitutional right to demand and receive public government records." },
    ]
  }
];

const importantLinks = [
  { name: "PSC Nepal", desc: "psc.gov.np — Official Public Service Commission", url: "https://psc.gov.np", icon: "🏛️" },
  { name: "MoCIT Nepal", desc: "Ministry of Communications & Information Technology", url: "https://mocit.gov.np", icon: "🏢" },
  { name: "NITC Nepal", desc: "National Information Technology Center", url: "https://nitc.gov.np", icon: "🖥️" },
  { name: "DoIT Nepal", desc: "Department of Information Technology", url: "https://doit.gov.np", icon: "📡" },
  { name: "NTA Nepal", desc: "Nepal Telecommunications Authority", url: "https://nta.gov.np", icon: "📶" },
];

const Index = () => {
  const { timeStr, dateStr } = useNepalTime();
  const countdown = useCountdown(EXAM_DATE);
  const { user } = useAuth();
  const navigate = useNavigate();
  const quote = useMemo(() => motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)], []);
  const [activeCapsuleTab, setActiveCapsuleTab] = useState(0);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <PageTransition>
      <SEO
        title="Samrita Collections — Your Success in PSC Starts Here!"
        description="A complete learning platform for PSC aspirants. Get study materials, practice MCQs, improve typing skills and stay updated with the latest news."
        canonical="https://amritagupta.com.np/"
      />

      <div className="min-h-screen bg-[#f8fafc] text-slate-800">
        
        {/* ── 1. Hero Banner Section ──────────────────────────────── */}
        <section className="relative w-full overflow-hidden bg-slate-900">
          {/* Background Image: Himalayas + PSC Books + Nepal Flag */}
          <div
            className="w-full bg-cover bg-no-repeat bg-right sm:bg-center min-h-[360px] sm:min-h-[420px] md:min-h-[460px] flex items-center relative"
            style={{ backgroundImage: `url(${pscHeroBanner})` }}
          >
            {/* Left Soft Light Gradient Overlay for crisp text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-50/95 via-sky-50/80 to-transparent sm:w-3/5 lg:w-1/2 pointer-events-none" />

            {/* Hero Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-xl text-left space-y-4"
              >
                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#0c2854] tracking-tight leading-[1.15]">
                  Your Success in PSC<br />
                  <span className="text-[#0c2854]">Starts Here!</span>
                </h1>

                {/* Subtitle */}
                <p className="text-slate-700 text-sm sm:text-base md:text-lg font-semibold tracking-wide">
                  Study Smart • Practice More • Achieve Your Goal
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Link to="/practice">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-6 sm:px-7 py-2.5 sm:py-3 rounded-full shadow-md hover:shadow-lg transition text-sm sm:text-base"
                    >
                      <GraduationCap className="w-5 h-5 text-white" />
                      <span>Explore Courses →</span>
                    </motion.button>
                  </Link>

                  <Link to="/notes">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-[#0284c7] border-2 border-[#0284c7] font-bold px-6 sm:px-7 py-2.5 sm:py-3 rounded-full shadow-sm hover:shadow transition text-sm sm:text-base"
                    >
                      <BookOpen className="w-5 h-5 text-[#0284c7]" />
                      <span>Read Notes</span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Carousel / Pagination Dots (Bottom Center) */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
              <span className="w-6 h-2 rounded-full bg-[#0284c7] shadow-sm" />
              <span className="w-2 h-2 rounded-full bg-white/80 shadow-sm" />
              <span className="w-2 h-2 rounded-full bg-white/80 shadow-sm" />
              <span className="w-2 h-2 rounded-full bg-white/80 shadow-sm" />
            </div>
          </div>
        </section>

        {/* ── 2. Feature / Quick Access Cards Grid (9 Cards) ────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
          
          {/* Row 1: 5 Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {quickCardsRow1.map((card, i) => (
              <Link key={i} to={card.path} className="group">
                <motion.div
                  whileHover={{ y: -3 }}
                  className={`${card.cardBg} border rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all h-full justify-start`}
                >
                  <div className={`w-11 h-11 rounded-full ${card.iconBg} flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform`}>
                    {card.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1 leading-snug">
                    {card.desc}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Row 2: 4 Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {quickCardsRow2.map((card, i) => (
              <Link key={i} to={card.path} className="group">
                <motion.div
                  whileHover={{ y: -3 }}
                  className={`${card.cardBg} border rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all h-full justify-start`}
                >
                  <div className={`w-11 h-11 rounded-full ${card.iconBg} flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform`}>
                    {card.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1 leading-snug">
                    {card.desc}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>

        </section>

        {/* ── 3. Welcome to PSC Study Hub Section ───────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              
              {/* Left Column: Heading, Description, Learn More */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-[#0284c7] rounded-full inline-block flex-shrink-0" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c2854] tracking-tight">
                    Welcome to PSC Study Hub
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
                  A complete learning platform for PSC aspirants. Get study materials, practice MCQs, improve typing skills and stay updated with the latest news.
                </p>

                <div className="pt-2">
                  <Link to="/practice">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-6 py-2.5 rounded-full shadow-sm hover:shadow transition text-sm"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* Right Column: Illustration with Student + "Dream Big... Prepare Well..." */}
              <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
                <img
                  src={studentIllustration}
                  alt="Dream Big... Prepare Well..."
                  className="max-h-36 sm:max-h-40 md:max-h-44 object-contain"
                />
              </div>

            </div>
          </div>
        </section>

        {/* ── 4. Interactive Supplementary Sections ─────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

          {/* Personalized Dashboard (When user is logged in) */}
          {user && <PersonalizedDashboard />}

          {/* Daily MCQ Challenge */}
          <DailyMCQCard />

          {/* Target Exam Countdown & Nepal Time Widget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* NST Live Time */}
            <div className="bg-[#0c2854] text-white rounded-3xl p-6 shadow-sm border border-blue-900/40 relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-300 uppercase tracking-widest">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span>Nepal Standard Time (NST)</span>
                </div>
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  LIVE
                </span>
              </div>
              <div className="text-4xl sm:text-5xl font-black tracking-wider text-white py-2">
                {timeStr}
              </div>
              <div className="text-sky-200 text-xs font-bold tracking-wide">
                {dateStr}
              </div>
            </div>

            {/* Exam Countdown */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <Trophy className="w-4 h-4 text-amber-500" />
                  <span>Target Exam: Ashad 7, 2082 (Computer Operator)</span>
                </div>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-red-100 text-red-600">
                  Countdown
                </span>
              </div>
              
              <div className="grid grid-cols-4 gap-2 text-center py-2">
                {[
                  { val: countdown.days, label: "DAYS" },
                  { val: countdown.hours, label: "HRS" },
                  { val: countdown.minutes, label: "MIN" },
                  { val: countdown.seconds, label: "SEC" },
                ].map((t) => (
                  <div key={t.label} className="bg-slate-50 border border-slate-200 rounded-2xl py-2">
                    <div className="text-xl sm:text-2xl font-black text-slate-900">
                      {t.val.toString().padStart(2, "0")}
                    </div>
                    <div className="text-[9px] font-extrabold text-slate-500 tracking-wider">{t.label}</div>
                  </div>
                ))}
              </div>

              <div className="text-xs text-slate-500 font-medium">
                Keep up the daily practice and mock revisions!
              </div>
            </div>

          </div>

          {/* Question of the Day */}
          <QuestionOfTheDay />

          {/* Provincial & Special Examination Gateway */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-2xl">
                <Building2 size={22} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#0c2854] tracking-tight">
                  🏛️ Provincial PSC & Public Enterprise Portals
                </h2>
                <p className="text-xs text-slate-500">Dedicated mock tests and syllabus for all 7 provinces & public enterprises</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PROVINCIAL_EXAMS.map((exam, i) => (
                <Link to="/online-exam" key={i} className="group">
                  <div className="h-full bg-white border border-slate-200 hover:border-blue-500/50 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">
                          {exam.badge}
                        </span>
                        <ChevronRight size={16} className="text-slate-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition" />
                      </div>
                      <h3 className="font-extrabold text-sm text-slate-900 mb-1.5 group-hover:text-blue-600 transition">
                        {exam.name}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {exam.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                      <span>Start Mock Exam</span>
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Quick Revision Capsule & Cheat Sheets */}
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-2xl">
                <Layers size={22} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#0c2854] tracking-tight">
                  ⚡ Quick Revision Capsule & Formula Lookup
                </h2>
                <p className="text-xs text-slate-500">Essential Excel formulas, shortcuts, network ports, and Nepal IT acts</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
              {QUICK_CAPSULES.map((cap, idx) => (
                <button
                  key={cap.category}
                  onClick={() => setActiveCapsuleTab(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    activeCapsuleTab === idx
                      ? "bg-[#0284c7] text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {cap.category}
                </button>
              ))}
            </div>

            {/* Active Tab Items */}
            <div className="grid sm:grid-cols-2 gap-4">
              {QUICK_CAPSULES[activeCapsuleTab].items.map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex flex-col justify-between hover:bg-slate-100/70 transition"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                        {item.title}
                      </span>
                      <button
                        onClick={() => copyToClipboard(item.title)}
                        title="Copy formula/command"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition"
                      >
                        {copiedText === item.title ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                      </button>
                    </div>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Developer Spotlight (Amrita Gupta) */}
          <section className="rounded-3xl bg-[#0c2854] border border-blue-900/60 p-6 sm:p-8 lg:p-10 text-white shadow-sm relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <div className="relative flex-shrink-0">
                  <img
                    src={amritaPhoto}
                    alt="Amrita Gupta"
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-xl ring-4 ring-blue-400/40"
                  />
                  <span className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-emerald-500 text-white text-[10px] font-black shadow-lg">
                    ✓ Dev
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-sky-300 text-xs font-bold border border-blue-400/30">
                    <Sparkles size={12} className="text-amber-400" /> Platform Creator & Lead Developer
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Amrita Gupta
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-200 max-w-xl leading-relaxed">
                    IT Support Executive & Frontend Web Designer. Created <strong>Samrita Collections</strong> to empower Loksewa, Provincial PSC, NOC & Banking IT aspirants with 100% free, premium test prep resources.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto flex-shrink-0">
                <Link to="/portfolio" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-extrabold px-6 py-3.5 rounded-2xl shadow text-xs transition"
                  >
                    <User size={15} /> View Full Portfolio
                  </motion.button>
                </Link>
                <a
                  href="mailto:sahilsarda45669@gmail.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-5 py-3.5 rounded-2xl text-xs transition"
                >
                  📬 sahilsarda45669@gmail.com
                </a>
              </div>
            </div>
          </section>

          {/* Important Government Links */}
          <section className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 text-lg font-bold text-slate-900 mb-6">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><ExternalLink size={20} /></div>
              Official Portals & Commissions
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {importantLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-all group"
                >
                  <span className="text-2xl">{link.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-slate-800 group-hover:text-blue-600 transition-colors">{link.name}</p>
                    <p className="text-xs text-slate-500 font-medium truncate">{link.desc}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-slate-400 group-hover:text-blue-600 transition">
                    <ExternalLink size={14} />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Motivational Quote Banner */}
          <section className="bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700 text-white rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden shadow-sm">
            <p className="relative text-xl md:text-2xl font-bold italic leading-relaxed drop-shadow-md max-w-3xl mx-auto">
              "{quote}"
            </p>
            <p className="relative text-sky-200 text-xs mt-4 font-extrabold tracking-widest uppercase">
              Samrita Collections · Developed by Amrita Gupta 💪
            </p>
          </section>

        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
