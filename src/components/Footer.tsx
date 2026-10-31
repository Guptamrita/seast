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
import samritaIcon from "@/assets/samrita-icon-transparent.png";
import amritaPhoto from "@/assets/amrita-photo.jpg";

const mainNavLinks = [
  { label: "Home", path: "/" },
  { label: "All Courses", path: "/courses" },
  { label: "Study Notes", path: "/notes" },
  { label: "Typing Master", path: "/typing" },
  { label: "Official Syllabus", path: "/syllabus" },
  { label: "Downloads & Tools", path: "/downloads" },
];

const topCourseLinks = [
  { label: "1. Computer Fundamental", path: "/courses/computer-fundamental" },
  { label: "2. Networking", path: "/courses/networking" },
  { label: "3. Operating System", path: "/courses/operating-system" },
  { label: "4. HTML & Web Design", path: "/courses/html" },
  { label: "5. MS Word", path: "/courses/ms-word" },
  { label: "6. MS Excel", path: "/courses/ms-excel" },
  { label: "7. MS PowerPoint", path: "/courses/ms-powerpoint" },
  { label: "8. MS Access & SQL", path: "/courses/ms-access" },
  { label: "All 12 Course Modules →", path: "/courses" },
];

const practiceLinks = [
  { label: "MCQ Subject Practice", path: "/practice" },
  { label: "74+ Old Question Sets", path: "/old-is-gold" },
  { label: "Practical Exam Sets", path: "/practical" },
  { label: "18+ Real Mock Exams", path: "/online-exam" },
  { label: "Subjective Questions Bank", path: "/subjective" },
  { label: "National Leaderboard", path: "/leaderboard" },
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
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={samritaIcon}
                alt="PSC Study Hub Logo"
                className="w-11 h-11 object-contain drop-shadow"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors">
                  PSC Study <span className="text-[#facc15]">Hub</span>
                </span>
                <span className="text-xs italic font-normal text-slate-300 tracking-wider">
                  Learn • Practice • Grow
                </span>
              </div>
            </Link>

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
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Main Navigation (Same as Header) */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white tracking-widest uppercase flex items-center gap-2">
              <BookOpen size={14} className="text-blue-400" /> Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {mainNavLinks.map((link) => (
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

          {/* Column 3: Course Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white tracking-widest uppercase flex items-center gap-2">
              <GraduationCap size={14} className="text-emerald-400" /> Courses & Modules
            </h4>
            <ul className="space-y-2 text-xs">
              {topCourseLinks.map((course) => (
                <li key={course.label}>
                  <Link
                    to={course.path}
                    className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block py-0.5 font-medium truncate max-w-[200px]"
                  >
                    {course.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Practice & Exam Hub */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white tracking-widest uppercase flex items-center gap-2">
              <Trophy size={14} className="text-amber-400" /> Practice & Tests
            </h4>
            <ul className="space-y-2 text-xs">
              {practiceLinks.map((link) => (
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
                href="mailto:amritagupta950@gmail.com"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-300 hover:text-white transition-colors w-full justify-center"
              >
                <Mail size={13} className="text-blue-400" /> amritagupta950@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              All Systems Operational · 2082 BS
            </div>
          </div>

          <p className="flex items-center gap-1 font-medium text-center">
            © 2026 PSC Study Hub — Designed & Developed with <Heart size={12} className="text-red-500 fill-red-500 inline" /> by <strong className="text-white font-bold">Amrita Gupta</strong>
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
