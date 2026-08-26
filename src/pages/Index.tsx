import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  Flame,
  Star,
  Activity,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import amritaPhoto from "@/assets/amrita-photo.jpg";
import logoImg from "@/assets/logo.png";
import { toast } from "sonner";

// Ashad 7, 2082 BS ≈ June 22, 2026 AD
const EXAM_DATE = new Date("2026-06-22T10:00:00+05:45");

const bentoFeatures = [
  {
    title: "15,000+ Subject MCQs",
    subtitle: "Computer Fundamentals, Word, Excel, DBMS, OS, Networking & IT Acts",
    icon: <BookOpen className="w-6 h-6 text-blue-400" />,
    path: "/practice",
    badge: "Most Popular",
    gradient: "from-blue-600/20 via-indigo-600/10 to-transparent",
    border: "border-blue-500/30 hover:border-blue-400",
    stats: "15,000+ Qs",
  },
  {
    title: "74+ Real Old Exam Sets",
    subtitle: "Authentic past papers from 2064 to 2082 with detailed answer keys",
    icon: <Trophy className="w-6 h-6 text-amber-400" />,
    path: "/old-is-gold",
    badge: "Official Papers",
    gradient: "from-amber-600/20 via-orange-600/10 to-transparent",
    border: "border-amber-500/30 hover:border-amber-400",
    stats: "74 Sets",
  },
  {
    title: "18+ Online Mock Exams",
    subtitle: "Real-time 50 questions timed test with negative marking (-20%) & score card",
    icon: <FileText className="w-6 h-6 text-emerald-400" />,
    path: "/online-exam",
    badge: "Live Simulator",
    gradient: "from-emerald-600/20 via-teal-600/10 to-transparent",
    border: "border-emerald-500/30 hover:border-emerald-400",
    stats: "50 Qs / 45 Min",
  },
  {
    title: "120+ Speed Typing Master",
    subtitle: "Nepali Unicode & English Speed Typing with WPM/CPM meter and PSC score calculator",
    icon: <Keyboard className="w-6 h-6 text-purple-400" />,
    path: "/typing",
    badge: "Dual Language",
    gradient: "from-purple-600/20 via-pink-600/10 to-transparent",
    border: "border-purple-500/30 hover:border-purple-400",
    stats: "120+ Tests",
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

const heroStats = [
  { value: "15,000+", label: "Questions", icon: "❓" },
  { value: "74+", label: "Old Sets", icon: "📚" },
  { value: "18+", label: "Mock Exams", icon: "📝" },
  { value: "120+", label: "Typing Tests", icon: "⌨️" },
];

const Index = () => {
  const { timeStr, dateStr } = useNepalTime();
  const countdown = useCountdown(EXAM_DATE);
  const { user } = useAuth();
  const navigate = useNavigate();
  const quote = useMemo(() => motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)], []);
  const [activeCapsuleTab, setActiveCapsuleTab] = useState(0);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/practice?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <PageTransition>
      {/* ── 1. Hero Section: Aurora Glassmorphic ─────────────────── */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-8 pb-20 md:pt-14 md:pb-28">
        {/* Glowing Ambient Mesh Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/25 to-cyan-500/15 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />
          <div className="absolute -bottom-32 -right-40 w-[600px] h-[600px] bg-purple-600/15 blur-[150px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">
            
            {/* Left Content Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left space-y-6"
            >
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-1.5 text-xs font-extrabold text-blue-300 backdrop-blur-xl shadow-lg shadow-blue-500/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  Samrita Collection · 2081/2082 BS Edition
                </div>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-1.5 text-xs font-bold text-amber-300 transition shadow-lg"
                >
                  <Code2 size={13} /> Developed by Amrita Gupta 🇳🇵
                </Link>
              </div>
              
              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black leading-[1.15] tracking-tight">
                <span className="text-white">Loksewa & Public Exam</span><br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 drop-shadow">
                  Complete IT Master Suite
                </span>
              </h1>
              
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
                Nepal's premier open learning ecosystem for Computer Operator, IT Officer, NOC, NEB, TU & Banking exams. 15,000+ MCQs, 74+ Old Question Papers & Real-Time Typing Speed Test.
              </p>

              {/* Instant Search Bar */}
              <form onSubmit={handleSearchSubmit} className="max-w-xl mx-auto lg:mx-0 relative">
                <div className="relative flex items-center">
                  <Search size={18} className="absolute left-4 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search topics (e.g., Excel formulas, Networking, IT Act, Typing)..."
                    className="w-full pl-11 pr-32 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 focus:bg-slate-900 border border-white/20 focus:border-blue-400 text-white placeholder-slate-400 text-sm focus:outline-none transition backdrop-blur-xl shadow-xl"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition shadow-md"
                  >
                    Search Qs
                  </button>
                </div>
              </form>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3.5 justify-center lg:justify-start pt-2">
                <Link to="/practice">
                  <motion.button 
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white font-black px-7 py-3.5 rounded-2xl shadow-xl shadow-blue-600/30 text-sm hover:opacity-95 transition"
                  >
                    <Zap size={16} className="text-amber-300 fill-amber-300" /> Start MCQ Practice <ArrowRight size={16} />
                  </motion.button>
                </Link>
                <Link to="/online-exam">
                  <motion.button 
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-6 py-3.5 rounded-2xl backdrop-blur-xl transition text-sm"
                  >
                    📝 Take Mock Exam
                  </motion.button>
                </Link>
                <Link to="/typing">
                  <motion.button 
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/30 text-amber-300 font-bold px-5 py-3.5 rounded-2xl backdrop-blur-xl transition text-sm"
                  >
                    ⌨️ Typing Speed
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Interactive Telemetry & Clock Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col gap-4 w-full lg:w-[380px]"
            >
              {/* Nepal Standard Time Glass Card */}
              <div className="rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-white/15 p-6 text-center shadow-2xl backdrop-blur-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-center gap-2 text-slate-400 text-xs font-extrabold mb-1.5 uppercase tracking-widest">
                  <Clock size={13} className="text-cyan-400" /> Nepal Standard Time (NST)
                </div>
                <div className="text-5xl font-heading font-black tracking-wider text-white drop-shadow-md py-1">
                  {timeStr}
                </div>
                <div className="text-cyan-300 text-xs font-bold tracking-wide mt-1">{dateStr}</div>
              </div>

              {/* Exam Countdown Card */}
              <div className="rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-white/15 p-5 shadow-2xl backdrop-blur-2xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-white">
                    <Trophy size={14} className="text-amber-400" /> Target Exam: Ashad 7, 2082
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" /> LIVE
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center">
                  {[
                    { val: countdown.days, label: "DAYS" },
                    { val: countdown.hours, label: "HRS" },
                    { val: countdown.minutes, label: "MIN" },
                    { val: countdown.seconds, label: "SEC" },
                  ].map((t) => (
                    <div key={t.label} className="bg-white/5 border border-white/10 rounded-2xl py-2.5">
                      <div className="text-2xl font-heading font-black text-white">
                        {t.val.toString().padStart(2, "0")}
                      </div>
                      <div className="text-cyan-300 text-[9px] font-extrabold tracking-widest">{t.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quick Stat Chips */}
              <div className="grid grid-cols-4 gap-2">
                {heroStats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-white/5 border border-white/10 rounded-2xl p-2.5 text-center hover:bg-white/10 transition"
                  >
                    <div className="text-lg">{s.icon}</div>
                    <div className="text-white font-extrabold text-xs leading-none mt-1">{s.value}</div>
                    <div className="text-slate-400 text-[9px] mt-1 font-bold uppercase">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 2. Bento Feature Grid Section ────────────────────────── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14 max-w-7xl">

        {/* Personalized dashboard (signed in only) */}
        {user && <PersonalizedDashboard />}

        {/* Daily MCQ Challenge */}
        <DailyMCQCard />

        {/* Question of the Day */}
        <QuestionOfTheDay />

        {/* ── 3. High-Impact Bento Box Portals ───────────────────── */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl">
                <Sparkles size={22} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 dark:text-white tracking-tight">
                  Core Examination Portals
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">Pick a study module to start practicing right away</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {bentoFeatures.map((item, i) => (
              <Link key={i} to={item.path} className="group">
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`h-full rounded-3xl p-6 bg-gradient-to-b ${item.gradient} bg-card border ${item.border} shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-white/10 dark:bg-white/5 border border-white/10 shadow-md">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed font-medium">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/80 flex items-center justify-between text-xs font-extrabold text-blue-600 dark:text-blue-400">
                    <span>{item.stats}</span>
                    <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Open Module <ArrowRight size={13} />
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── 4. Developer Spotlight (Amrita Gupta) ─────────────── */}
        <section className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 border border-white/15 p-6 sm:p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="relative flex-shrink-0">
                <img
                  src={amritaPhoto}
                  alt="Amrita Gupta"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-2xl ring-4 ring-blue-500/40"
                />
                <span className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-emerald-500 text-white text-[10px] font-black shadow-lg">
                  ✓ Dev
                </span>
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
                  <Sparkles size={12} className="text-amber-400" /> Platform Creator & Lead Developer
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight">
                  Amrita Gupta
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                  IT Support Executive & Frontend Web Designer. Created <strong>Samrita Collection</strong> to empower Loksewa, Provincial PSC, NOC & Banking IT aspirants with 100% free, premium test prep resources.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto flex-shrink-0">
              <Link to="/portfolio" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold px-6 py-3.5 rounded-2xl shadow-xl shadow-blue-600/30 text-xs hover:opacity-95 transition"
                >
                  <User size={15} /> View Full Portfolio
                </motion.button>
              </Link>
              <a
                href="mailto:sahilsarda45669@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-5 py-3.5 rounded-2xl text-xs transition backdrop-blur-md"
              >
                📬 sahilsarda45669@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* ── 5. Quick Revision Capsule & Cheat Sheets ──────────── */}
        <section className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-2xl">
              <Layers size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-heading font-black text-slate-900 dark:text-white tracking-tight">
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
              <h2 className="text-2xl font-heading font-black text-slate-900 dark:text-white tracking-tight">
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

        {/* ── 7. Important Government Links ────────────────────────── */}
        <section className="bg-card rounded-3xl shadow-sm border border-border p-6 sm:p-8">
          <div className="flex items-center gap-3 text-lg font-bold text-foreground mb-6">
            <div className="p-2 bg-blue-500/10 text-blue-600 rounded-xl"><ExternalLink size={20} /></div>
            Official Portals & Commissions
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
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

        {/* ── 8. Motivational Quote Banner ───────────────────────── */}
        <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white rounded-3xl p-10 text-center relative overflow-hidden shadow-2xl">
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
