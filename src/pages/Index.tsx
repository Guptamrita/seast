import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useNepalTime, useCountdown } from "@/hooks/useNepalTime";
import { practiceSubjects, motivationalQuotes } from "@/data/questions";
import { calculateBSAge, bsMonthNames, toNepaliDigits, type BSDate } from "@/lib/nepaliCalendar";
import QuestionOfTheDay from "@/components/QuestionOfTheDay";
import StudyProgress from "@/components/StudyProgress";
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
  Award,
  Layers,
  Search,
  Copy,
  Check,
  Building2,
  Keyboard,
  ShieldCheck,
  CheckCircle2,
  FileText,
  User,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import amritaPhoto from "@/assets/amrita-photo.jpg";
import { toast } from "sonner";

// Ashad 7, 2082 BS ≈ June 22, 2026 AD
const EXAM_DATE = new Date("2026-06-22T10:00:00+05:45");

const quickAccess = [
  { label: "MCQ Practice", icon: "❓", path: "/practice", color: "from-red-500 to-rose-600", desc: "15,000+ Subject Questions" },
  { label: "Old Question Sets", icon: "🏆", path: "/old-is-gold", color: "from-green-500 to-emerald-600", desc: "74+ Real Exam Sets" },
  { label: "Online Exam", icon: "📝", path: "/online-exam", color: "from-teal-500 to-cyan-600", desc: "18+ Full Mock Exams" },
  { label: "Subjective Q&A", icon: "📖", path: "/subjective", color: "from-blue-500 to-indigo-600", desc: "Theory & Writing Sets" },
  { label: "Official Syllabus", icon: "📋", path: "/syllabus", color: "from-purple-500 to-fuchsia-600", desc: "Federal & Provincial" },
  { label: "Typing Master", icon: "⌨️", path: "/typing", color: "from-amber-500 to-orange-600", desc: "120+ Exam Tests" },
  { label: "Study Notes", icon: "📒", path: "/notes", color: "from-slate-600 to-slate-800", desc: "Capsules & Formulas" },
  { label: "Downloads & PDF", icon: "📰", path: "/downloads", color: "from-pink-500 to-rose-600", desc: "Free Syllabus & Papers" },
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

const heroStats = [
  { value: "15,000+", label: "Questions", icon: "❓" },
  { value: "74+", label: "Old Sets", icon: "📚" },
  { value: "18+", label: "Mock Exams", icon: "📝" },
  { value: "120+", label: "Typing Tests", icon: "⌨️" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300 } }
};

const Index = () => {
  const { timeStr, dateStr, bsDate } = useNepalTime();
  const countdown = useCountdown(EXAM_DATE);
  const { user } = useAuth();
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
      {/* ── 1. Hero Banner ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white pb-16 pt-12 md:pt-16 md:pb-24">
        {/* Ambient Lights */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[140px]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[140px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Column: Title & Actions */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left space-y-6"
            >
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/30 rounded-full px-4 py-1.5 text-xs font-bold text-blue-300 backdrop-blur-md shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  Samrita Collection · 2081/2082
                </div>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/40 rounded-full px-4 py-1.5 text-xs font-bold text-amber-300 hover:bg-amber-500/30 transition shadow-lg"
                >
                  <Code2 size={13} /> Developed by Amrita Gupta
                </Link>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black leading-tight tracking-tight drop-shadow-md">
                <span className="text-white">🇳🇵 Loksewa & Corporate</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                  IT Examination Suite
                </span>
              </h1>
              
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
                Complete preparation portal for Federal & Provincial PSC Computer Operator, NOC, NEB, TU & Banking IT examinations. 15,000+ MCQs, 18+ Real Mock Tests & Speed Typing.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                <Link to="/practice">
                  <motion.button 
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold px-8 py-4 rounded-2xl shadow-xl shadow-blue-600/30 text-sm hover:opacity-95 transition"
                  >
                    Start MCQ Practice <ArrowRight size={18} />
                  </motion.button>
                </Link>
                <Link to="/online-exam">
                  <motion.button 
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-7 py-4 rounded-2xl backdrop-blur-md transition-all text-sm"
                  >
                    📝 Take Mock Exam
                  </motion.button>
                </Link>
                <Link to="/typing">
                  <motion.button 
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-300 font-bold px-6 py-4 rounded-2xl backdrop-blur-md transition-all text-sm"
                  >
                    ⌨️ Typing Test
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Clock & Quick Stats */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4 w-full lg:w-96"
            >
              {/* Clock Widget */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-6 text-center shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-center gap-2 text-slate-400 text-xs font-bold mb-2 uppercase tracking-widest">
                  <Clock size={14} className="text-cyan-400" /> Nepal Standard Time
                </div>
                <div className="text-4xl sm:text-5xl font-heading font-black tracking-wider text-white drop-shadow-md">
                  {timeStr}
                </div>
                <div className="text-cyan-300 text-xs mt-2 font-bold tracking-wide">{dateStr}</div>
              </div>
              
              {/* Mini Stats Grid */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-4 gap-2.5"
              >
                {heroStats.map((s) => (
                  <motion.div
                    key={s.label}
                    variants={itemVariants}
                    className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-3 text-center hover:bg-white/15 transition-all cursor-default"
                  >
                    <div className="text-xl mb-1">{s.icon}</div>
                    <div className="text-white font-extrabold text-sm leading-none">{s.value}</div>
                    <div className="text-slate-300 text-[10px] mt-1 font-bold uppercase tracking-wider">{s.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 2. Main Body Content ─────────────────────────────────── */}
      <div className="container mx-auto px-4 py-12 space-y-14 max-w-7xl">

        {/* Personalized dashboard (signed in only) */}
        {user && <PersonalizedDashboard />}

        {/* Daily MCQ Challenge */}
        <DailyMCQCard />

        {/* Question of the Day */}
        <QuestionOfTheDay />

        {/* ── 3. Developer Spotlight (Amrita Gupta) ─────────────── */}
        <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="relative">
                <img
                  src={amritaPhoto}
                  alt="Amrita Gupta"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-xl ring-4 ring-blue-500/30"
                />
                <span className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold shadow-md">
                  ✓ Dev
                </span>
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold">
                  <Sparkles size={12} className="text-amber-400" /> Platform Creator & Lead Developer
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-black text-white">
                  Amrita Gupta
                </h2>
                <p className="text-sm text-slate-300 max-w-lg leading-relaxed">
                  IT Support Executive & Frontend Web Designer. Designed and developed <strong>Samrita Collection</strong> to provide free, high-yield examination resources for thousands of IT candidates across Nepal.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <Link to="/portfolio" className="w-full sm:w-auto">
                <button className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-blue-600/30 text-sm hover:opacity-90 transition">
                  <User size={16} /> View Full Portfolio
                </button>
              </Link>
              <a
                href="mailto:sahilsarda45669@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-5 py-3.5 rounded-2xl text-sm transition"
              >
                📬 Contact Developer
              </a>
            </div>
          </div>
        </section>

        {/* ── 4. Quick Access Hub ────────────────────────────────── */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl">
                <Zap size={22} />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-black text-slate-900 dark:text-white">
                  Preparation Modules
                </h2>
                <p className="text-xs text-slate-500">Access all learning tools and mock exams instantly</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {quickAccess.map((item) => (
              <Link key={item.path} to={item.path} className="group">
                <div className={`h-full bg-gradient-to-br ${item.color} rounded-3xl p-5 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20 text-white`}>
                  <div className="flex items-start justify-between">
                    <span className="text-3xl p-2 rounded-2xl bg-white/20 backdrop-blur-sm shadow-sm">{item.icon}</span>
                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-base font-extrabold tracking-tight">{item.label}</h3>
                    <p className="text-white/80 text-xs mt-1 font-medium">{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── 5. Quick Revision Capsule & Formula Lookup ──────────── */}
        <section className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-2xl">
              <Layers size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-heading font-black text-slate-900 dark:text-white">
                ⚡ Quick Revision Capsule & Cheat Sheets
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
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "bg-muted text-muted-foreground hover:text-foreground"
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
                className="bg-muted/50 border border-border/80 rounded-2xl p-4 flex flex-col justify-between hover:bg-muted/80 transition"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg">
                      {item.title}
                    </span>
                    <button
                      onClick={() => copyToClipboard(item.title)}
                      title="Copy formula/command"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition"
                    >
                      {copiedText === item.title ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Provincial & Special Examination Gateway ──────────── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
              <Building2 size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-heading font-black text-slate-900 dark:text-white">
                🏛️ Provincial PSC & Corporate Exam Gateway
              </h2>
              <p className="text-xs text-slate-500">Dedicated mock tests and syllabus for all 7 provinces & public enterprises</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROVINCIAL_EXAMS.map((exam, i) => (
              <Link to="/online-exam" key={i} className="group">
                <div className="h-full bg-card border border-border hover:border-blue-500/40 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                        {exam.badge}
                      </span>
                      <ChevronRight size={16} className="text-slate-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition" />
                    </div>
                    <h3 className="font-extrabold text-sm text-foreground mb-1.5 group-hover:text-blue-600 transition">
                      {exam.name}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {exam.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400">
                    <span>Start Mock Exam</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── 7. Countdown + Important Links ─────────────────────── */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Countdown */}
          <section className="bg-card rounded-3xl shadow-sm border border-border overflow-hidden">
            <div className="flex items-center justify-between p-6 pb-4 border-b border-border/60">
              <div className="flex items-center gap-3 text-lg font-bold text-foreground">
                <div className="p-2 bg-amber-500/10 text-amber-600 rounded-xl"><Trophy size={20} /></div>
                Target Exam Countdown
              </div>
              <span className="flex items-center gap-1.5 bg-red-500/10 text-red-600 border border-red-500/20 text-xs px-3 py-1.5 rounded-full font-bold">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Live Tracker
              </span>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-b-3xl">
              <p className="text-slate-300 text-sm font-medium mb-6 flex items-center gap-2">
                💻 Computer Operator (5th Level) — Written Examination
              </p>
              {countdown.expired ? (
                <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-2xl p-6 text-center">
                  <p className="text-2xl font-bold text-emerald-400">Exam Concluded! 🎉</p>
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { val: countdown.days, label: "DAYS" },
                    { val: countdown.hours, label: "HRS" },
                    { val: countdown.minutes, label: "MIN" },
                    { val: countdown.seconds, label: "SEC" },
                  ].map((t) => (
                    <div key={t.label} className="bg-white/10 border border-white/10 rounded-2xl py-4 text-center backdrop-blur-sm">
                      <div className="text-3xl md:text-4xl font-heading font-black text-white drop-shadow-md">
                        {t.val.toString().padStart(2, "0")}
                      </div>
                      <div className="text-cyan-300 text-[11px] mt-1 font-bold tracking-widest">{t.label}</div>
                    </div>
                  ))}
                </div>
              )}
              <p className="text-slate-400 text-xs mt-5 text-center font-medium">Ashad 7, 2082 — Target Date</p>
            </div>
          </section>

          {/* Important Government Links */}
          <section className="bg-card rounded-3xl shadow-sm border border-border p-6">
            <div className="flex items-center gap-3 text-lg font-bold text-foreground mb-6">
              <div className="p-2 bg-blue-500/10 text-blue-600 rounded-xl"><ExternalLink size={20} /></div>
              Official Portals & Commissions
            </div>
            <div className="space-y-3">
              {importantLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-muted/40 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/20 transition-all group"
                >
                  <span className="text-2xl">{link.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-foreground group-hover:text-blue-600 transition-colors">{link.name}</p>
                    <p className="text-xs text-muted-foreground font-medium truncate">{link.desc}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-card flex items-center justify-center shadow-sm text-slate-400 group-hover:text-blue-600 transition">
                    <ExternalLink size={14} />
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>

        {/* ── 8. Motivational Banner ─────────────────────────────── */}
        <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white rounded-3xl p-10 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }} />
          <p className="relative text-xl md:text-2xl font-heading font-bold italic leading-relaxed drop-shadow-md max-w-3xl mx-auto">
            "{quote}"
          </p>
          <p className="relative text-cyan-200 text-xs mt-4 font-extrabold tracking-widest uppercase">
            Samrita Collection · Developed by Amrita Gupta 💪
          </p>
        </section>

      </div>
    </PageTransition>
  );
};

export default Index;
