import { Link } from "react-router-dom";
import {
  Heart,
  ExternalLink,
  Code2,
  Sparkles,
  ArrowUp,
  Mail,
  MapPin,
  Phone,
  BookOpen,
  Trophy,
  FileText,
  Keyboard,
  Shield,
  Layers,
  GraduationCap,
  Monitor
} from "lucide-react";
import logoImg from "@/assets/logo.png";
import amritaPhoto from "@/assets/amrita-photo.jpg";
import { VisitorCounter } from "@/components/VisitorCounter";

const learningLinks = [
  { label: "MCQ Subject Practice", path: "/practice" },
  { label: "74+ Old Question Sets", path: "/old-is-gold" },
  { label: "18+ Real Mock Exams", path: "/online-exam" },
  { label: "120+ Speed Typing Master", path: "/typing" },
  { label: "Subjective & Theory Sets", path: "/subjective" },
  { label: "Study Notes & Formulas", path: "/notes" },
  { label: "Official Syllabus", path: "/syllabus" },
  { label: "Downloads & PDF Papers", path: "/downloads" },
];

const officialGovLinks = [
  { name: "Public Service Commission (PSC)", url: "https://psc.gov.np" },
  { name: "Ministry of Comm. & IT (MoCIT)", url: "https://mocit.gov.np" },
  { name: "National IT Center (NITC)", url: "https://nitc.gov.np" },
  { name: "Department of IT (DoIT)", url: "https://doit.gov.np" },
  { name: "Nepal Telecom Authority (NTA)", url: "https://nta.gov.np" },
  { name: "Nepal Oil Corporation (NOC)", url: "https://noc.org.np" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950 text-slate-300 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-40 left-1/4 w-[600px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full" />
        <div className="absolute -bottom-40 right-1/4 w-[500px] h-[350px] bg-indigo-600/10 blur-[130px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 max-w-7xl">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-10 border-b border-white/10">
          
          {/* Column 1 & 2: Brand & Developer Spotlight (Spans 2 cols on desktop) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3.5">
              <img
                src={logoImg}
                alt="Samrita Collection Logo"
                className="w-12 h-12 rounded-2xl object-cover shadow-xl shadow-blue-500/25 ring-2 ring-blue-400/40"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-white text-lg tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Samrita Collection
                  </h3>
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    PORTAL
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Loksewa Computer Operator, IT Officer & Corporate Exam Suite
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              Nepal's premier open-access IT and Loksewa exam preparation ecosystem. Featuring 15,000+ interactive MCQs, official past papers from 2064 to 2082, and real-time dual-language typing assessment.
            </p>

            {/* Developer Card Badge */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-4 max-w-md hover:bg-white/10 transition-colors">
              <img
                src={amritaPhoto}
                alt="Amrita Gupta"
                className="w-12 h-12 rounded-xl object-cover ring-2 ring-blue-400/50 shadow-md"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                  <span>Amrita Gupta</span>
                  <span className="p-0.5 rounded-full bg-emerald-500 text-white text-[8px]">✓</span>
                </div>
                <p className="text-[11px] text-slate-400 truncate">Platform Creator & Lead Developer</p>
                <div className="flex items-center gap-3 mt-1">
                  <Link
                    to="/portfolio"
                    className="text-xs font-extrabold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 transition-colors"
                  >
                    Amrita Portfolio <Sparkles size={11} className="text-amber-400" />
                  </Link>
                  <span className="text-slate-600">•</span>
                  <Link
                    to="/sahil"
                    className="text-xs font-extrabold text-orange-400 hover:text-orange-300 inline-flex items-center gap-1 transition-colors"
                  >
                    Sahil's Ubuntu OS <Monitor size={11} className="text-orange-400" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Preparation Modules */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white tracking-widest uppercase flex items-center gap-2">
              <BookOpen size={14} className="text-blue-400" /> Preparation Modules
            </h4>
            <ul className="space-y-2 text-xs">
              {learningLinks.slice(0, 5).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block py-0.5 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: More Tools & Syllabus */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white tracking-widest uppercase flex items-center gap-2">
              <Layers size={14} className="text-indigo-400" /> Tools & Resources
            </h4>
            <ul className="space-y-2 text-xs">
              {learningLinks.slice(5).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block py-0.5 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/leaderboard"
                  className="text-amber-400 hover:text-amber-300 transition-colors inline-block py-0.5 font-bold"
                >
                  🏆 National Leaderboard
                </Link>
              </li>
              <li>
                <Link
                  to="/sahil"
                  className="text-orange-400 hover:text-orange-300 transition-colors inline-block py-0.5 font-bold"
                >
                  💻 Sahil's Ubuntu OS
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Official Links & Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white tracking-widest uppercase flex items-center gap-2">
              <ExternalLink size={14} className="text-cyan-400" /> Official Portals
            </h4>
            <ul className="space-y-2 text-xs">
              {officialGovLinks.map((gov) => (
                <li key={gov.url}>
                  <a
                    href={gov.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors flex items-center justify-between py-0.5 font-medium group"
                  >
                    <span>{gov.name}</span>
                    <ExternalLink size={10} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a
                href="mailto:sahilsarda45669@gmail.com"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-300 hover:text-white transition-colors w-full justify-center"
              >
                <Mail size={13} className="text-blue-400" /> sahilsarda45669@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Live Visitor & Platform Analytics Tracker Counter */}
        <VisitorCounter />

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              All Systems Operational · 2082 BS
            </div>
          </div>

          <p className="flex items-center gap-1 font-medium text-center">
            © 2026 Samrita Collection — Designed & Developed with <Heart size={12} className="text-red-500 fill-red-500 inline" /> by <strong className="text-white font-bold">Amrita Gupta</strong>
          </p>

          <button
            onClick={scrollToTop}
            title="Scroll to top"
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all shadow-md hover:-translate-y-0.5"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>

      {/* Radiant Accent Line */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />
    </footer>
  );
};

export default Footer;
