import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo.png";
import {
  Menu, X, BookOpen, LogIn, LogOut, Shield,
  Home, Calendar, HelpCircle, Trophy, FileText,
  BookMarked, Medal, BookCheck, Keyboard, StickyNote,
  Download, ChevronRight, User, Sparkles, Zap,
  ExternalLink, Compass, ShieldAlert
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { toast } from "sonner";

const navItems = [
  { label: "Home",        path: "/",            icon: <Home size={15} /> },
  { label: "Portfolio",   path: "/portfolio",   icon: <User size={15} /> },
  { label: "Daily MCQ",   path: "/daily-mcq",   icon: <Calendar size={15} /> },
  { label: "MCQ Practice",path: "/practice",    icon: <HelpCircle size={15} /> },
  { label: "Old Sets",    path: "/old-is-gold", icon: <Trophy size={15} /> },
  { label: "Mock Exam",   path: "/online-exam", icon: <FileText size={15} /> },
  { label: "Typing Test", path: "/typing",      icon: <Keyboard size={15} /> },
  { label: "Study Notes", path: "/notes",       icon: <StickyNote size={15} /> },
  { label: "Subjective",  path: "/subjective",  icon: <BookMarked size={15} /> },
  { label: "Leaderboard", path: "/leaderboard", icon: <Medal size={15} /> },
  { label: "Syllabus",    path: "/syllabus",    icon: <BookCheck size={15} /> },
  { label: "Downloads",   path: "/downloads",   icon: <Download size={15} /> },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const isAdmin = useIsAdmin();

  // Scroll listener for sticky dynamics
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Route change auto close
  useEffect(() => { setDrawerOpen(false); }, [location.pathname]);

  // Lock body scroll during drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const handleSignOut = async () => {
    await signOut();
    toast.success("Signed out successfully");
    navigate("/");
  };

  return (
    <>
      {/* ── Floating Island Header ─────────────────────────── */}
      <header className="sticky top-0 z-50 pt-2.5 px-3 sm:px-6 transition-all duration-300 pointer-events-none">
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className={`
            pointer-events-auto max-w-7xl mx-auto
            rounded-2xl sm:rounded-full
            transition-all duration-300
            ${scrolled
              ? "bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-indigo-950/40 py-2 px-3 sm:px-5"
              : "bg-slate-900/80 dark:bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/20 py-2.5 px-3.5 sm:px-6"
            }
          `}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-4">

            {/* 1. Brand Logo & Name */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
              <div className="relative">
                <motion.img
                  whileHover={{ rotate: [0, -8, 8, -4, 0], scale: 1.12 }}
                  transition={{ duration: 0.5 }}
                  src={logoImg}
                  alt="Samrita Collection Logo"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl object-cover shadow-lg shadow-blue-500/25 ring-2 ring-blue-400/40 group-hover:ring-blue-400 transition-all"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900 animate-pulse" />
              </div>

              <div className="leading-tight">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-white text-base sm:text-lg tracking-tight group-hover:text-blue-300 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Samrita Collection
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-extrabold tracking-wider bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent uppercase">
                    Dev By Amrita Gupta 🇳🇵
                  </span>
                </div>
              </div>
            </Link>

            {/* 2. Scrollable Center Nav Pills (Desktop) */}
            <div className="hidden lg:flex flex-1 items-center justify-center overflow-hidden mx-2">
              <div
                className="flex items-center gap-1 overflow-x-auto py-1 px-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {navItems.map((item) => {
                  const active = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`
                        relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold
                        whitespace-nowrap transition-all duration-200 z-10
                        ${active
                          ? "text-white shadow-md"
                          : "text-slate-300 hover:text-white hover:bg-white/10"
                        }
                      `}
                    >
                      {active && (
                        <motion.div
                          layoutId="active-pill"
                          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 rounded-full shadow-lg shadow-blue-500/30 -z-10"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                      <span className={active ? "text-white drop-shadow" : "text-blue-400/80"}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* 3. Right Action Cluster */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">

              {/* Practice CTA (Desktop) */}
              <Link to="/practice" className="hidden sm:inline-flex">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white text-xs font-black px-4 py-2 rounded-full shadow-lg shadow-blue-500/25 border border-white/20 hover:opacity-95 transition"
                >
                  <Zap size={13} className="text-amber-300 fill-amber-300" /> Start Practice
                </motion.button>
              </Link>

              {/* Admin Button */}
              {isAdmin && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/admin-panel")}
                  className="hidden md:flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/30 px-3.5 py-1.5 rounded-full transition"
                >
                  <Shield size={13} /> Admin
                </motion.button>
              )}

              {/* User Account / Auth */}
              {user ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSignOut}
                  title={`Signed in as ${user.email}`}
                  className="hidden md:flex items-center gap-1.5 text-xs font-bold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 px-3.5 py-1.5 rounded-full transition"
                >
                  <LogOut size={13} /> Logout
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/auth")}
                  className="hidden md:flex items-center gap-1.5 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 px-3.5 py-1.5 rounded-full transition"
                >
                  <LogIn size={13} /> Login
                </motion.button>
              )}

              {/* Mobile Hamburger Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setDrawerOpen(true)}
                className="flex items-center justify-center p-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/10 transition lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 text-blue-400" />
              </motion.button>

            </div>

          </div>
        </motion.nav>
      </header>

      {/* ── Ultra-Modern Slide-Over Mobile Drawer ────────────── */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-md lg:hidden pointer-events-auto"
              onClick={() => setDrawerOpen(false)}
            />

            {/* Slide Drawer Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 z-[70] h-full w-[310px] sm:w-[360px] flex flex-col bg-slate-950/95 backdrop-blur-2xl border-l border-white/15 shadow-2xl text-white overflow-hidden lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/10 bg-slate-900/60">
                <div className="flex items-center gap-3">
                  <img
                    src={logoImg}
                    alt="Samrita Collection Logo"
                    className="w-10 h-10 rounded-xl object-cover shadow-md ring-2 ring-blue-500/30"
                  />
                  <div>
                    <h3 className="font-extrabold text-white text-base" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Samrita Collection
                    </h3>
                    <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                      Dev By Amrita Gupta
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 hover:text-white transition"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Quick Action Button */}
              <div className="p-4 border-b border-white/10">
                <Link
                  to="/practice"
                  onClick={() => setDrawerOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white font-extrabold text-xs py-3 rounded-xl shadow-lg shadow-blue-600/30"
                >
                  <Zap size={14} className="text-amber-300 fill-amber-300" /> Start MCQ Practice Now
                </Link>
              </div>

              {/* Scrollable Navigation List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-1.5 scrollbar-none">
                <p className="text-[11px] font-extrabold text-slate-400 tracking-wider uppercase px-3 py-1">
                  Preparation Portal
                </p>

                {navItems.map((item) => {
                  const active = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setDrawerOpen(false)}
                      className={`
                        flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all
                        ${active
                          ? "bg-gradient-to-r from-blue-600/25 to-indigo-600/25 text-white border border-blue-500/40 shadow-inner"
                          : "text-slate-300 hover:text-white hover:bg-white/10 border border-transparent"
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <span className={active ? "text-blue-400" : "text-slate-400"}>
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                      </div>
                      {active ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      ) : (
                        <ChevronRight size={14} className="text-slate-500" />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Drawer Bottom Controls */}
              <div className="p-4 border-t border-white/10 bg-slate-900/80 space-y-2.5">
                {isAdmin && (
                  <button
                    onClick={() => { setDrawerOpen(false); navigate("/admin-panel"); }}
                    className="w-full flex items-center justify-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 font-bold text-xs py-2.5 rounded-xl transition"
                  >
                    <Shield size={14} /> Admin Portal
                  </button>
                )}

                {user ? (
                  <button
                    onClick={() => { setDrawerOpen(false); handleSignOut(); }}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-bold transition"
                  >
                    <div className="flex items-center gap-2">
                      <LogOut size={14} />
                      <span>Sign Out</span>
                    </div>
                    <span className="text-[10px] text-slate-400 truncate max-w-[120px]">{user.email}</span>
                  </button>
                ) : (
                  <button
                    onClick={() => { setDrawerOpen(false); navigate("/auth"); }}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-2.5 rounded-xl shadow-md transition"
                  >
                    <LogIn size={14} /> Sign In
                  </button>
                )}

                {/* Developer Footer */}
                <div className="pt-2 text-center text-[11px] text-slate-400 font-medium">
                  Designed & Developed by <strong className="text-white">Amrita Gupta</strong> 🇳🇵
                </div>
              </div>

            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
