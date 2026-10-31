import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import samritaIcon from "@/assets/samrita-icon-transparent.png";
import {
  Menu, X, Home, GraduationCap, StickyNote, Keyboard,
  Search, BookOpen, Shield, Download, ChevronDown
} from "lucide-react";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const isAdmin = useIsAdmin();

  // Route change auto-close
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  // Lock body scroll during drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/practice?search=${encodeURIComponent(searchQuery.trim())}`);
      setDrawerOpen(false);
    }
  };

  const isHomeActive = location.pathname === "/";
  const isCoursesActive = location.pathname.startsWith("/courses");
  const isNotesActive = location.pathname === "/notes";
  const isTypingActive = location.pathname === "/typing";
  const isDownloadsActive = location.pathname === "/downloads";
  const isSyllabusActive = location.pathname === "/syllabus";

  return (
    <>
      {/* ── Main Top Navigation Bar ─────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[#072147] text-white border-b border-[#0f3469] shadow-md transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 gap-3">
            
            {/* 1. Left: Brand Logo & Title */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <Link to="/" className="flex items-center gap-2.5 group">
                <img
                  src={samritaIcon}
                  alt="PSC Study Hub Logo"
                  className="w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-base sm:text-lg font-bold tracking-tight text-white">
                    PSC Study <span className="text-[#facc15]">Hub</span>
                  </span>
                  <span className="text-[11px] italic font-normal text-slate-200 tracking-wider">
                    Learn • Practice • Grow
                  </span>
                </div>
              </Link>

              {/* Vertical divider */}
              <div className="hidden lg:block h-7 w-px bg-white/20 mx-1" />

              {/* Nav Menu Links (Desktop) */}
              <nav className="hidden lg:flex items-center gap-1 sm:gap-2">
                
                {/* Home */}
                <Link
                  to="/"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                    isHomeActive
                      ? "text-[#facc15] border-b-2 border-[#facc15] pb-1"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Home className={`w-4 h-4 ${isHomeActive ? "text-[#facc15]" : "text-slate-300"}`} />
                  <span>Home</span>
                </Link>

                {/* Courses Button */}
                <Link
                  to="/courses"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                    isCoursesActive
                      ? "text-[#facc15] border-b-2 border-[#facc15] pb-1"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <GraduationCap className={`w-4 h-4 ${isCoursesActive ? "text-[#facc15]" : "text-slate-300"}`} />
                  <span>Courses</span>
                </Link>

                {/* Notes */}
                <Link
                  to="/notes"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                    isNotesActive
                      ? "text-[#facc15] border-b-2 border-[#facc15] pb-1"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <StickyNote className="w-4 h-4 text-slate-300" />
                  <span>Notes</span>
                </Link>

                {/* Typing */}
                <Link
                  to="/typing"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                    isTypingActive
                      ? "text-[#facc15] border-b-2 border-[#facc15] pb-1"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Keyboard className="w-4 h-4 text-slate-300" />
                  <span>Typing</span>
                </Link>

                {/* Downloads with Dropdown showing Syllabus */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors outline-none cursor-pointer ${
                        isDownloadsActive || isSyllabusActive
                          ? "text-[#facc15] border-b-2 border-[#facc15] pb-1"
                          : "text-slate-200 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <Download className={`w-4 h-4 ${isDownloadsActive || isSyllabusActive ? "text-[#facc15]" : "text-slate-300"}`} />
                      <span>Downloads</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    sideOffset={8}
                    className="w-60 bg-[#072147] border border-[#0f3469] text-white p-1.5 shadow-2xl rounded-2xl z-50 backdrop-blur-xl animate-in fade-in-80"
                  >
                    <DropdownMenuItem
                      onClick={() => navigate("/syllabus")}
                      className="flex items-center gap-3 p-2.5 rounded-xl cursor-pointer hover:bg-white/10 focus:bg-white/10 transition text-xs font-semibold text-white group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <BookOpen className="w-4 h-4 text-amber-300" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-bold text-white group-hover:text-[#facc15] transition-colors">
                          Syllabus (पाठ्यक्रम)
                        </span>
                        <span className="text-[10px] text-slate-300">
                          17 Official Exam Syllabi
                        </span>
                      </div>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator className="bg-white/10 my-1" />

                    <DropdownMenuItem
                      onClick={() => navigate("/downloads")}
                      className="flex items-center gap-3 p-2.5 rounded-xl cursor-pointer hover:bg-white/10 focus:bg-white/10 transition text-xs font-semibold text-white group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Download className="w-4 h-4 text-cyan-300" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                          Software & Downloads
                        </span>
                        <span className="text-[10px] text-slate-300">
                          Office, Fonts & Typing Tools
                        </span>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Admin button if admin */}
                {isAdmin && (
                  <Link
                    to="/admin-panel"
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition ml-1"
                  >
                    <Shield className="w-3.5 h-3.5" />
                    <span>Admin</span>
                  </Link>
                )}

              </nav>
            </div>

            {/* 2. Right: Search Bar & Mobile Toggle */}
            <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
              
              {/* Pill Search Input */}
              <form onSubmit={handleSearchSubmit} className="relative hidden sm:block">
                <div className="flex items-center bg-white rounded-full px-3.5 py-1.5 shadow-inner w-48 md:w-60 focus-within:w-64 focus-within:ring-2 focus-within:ring-[#0284c7] transition-all">
                  <Search className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search topics, MCQs..."
                    className="w-full bg-transparent border-none outline-none text-xs text-slate-800 placeholder-slate-400 font-medium"
                  />
                </div>
              </form>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setDrawerOpen(true)}
                className="lg:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* ── Responsive Mobile Drawer ────────────────────────── */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm lg:hidden"
              onClick={() => setDrawerOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 z-[70] h-full w-[300px] sm:w-[340px] flex flex-col bg-[#072147] border-l border-white/15 shadow-2xl text-white overflow-hidden lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#061a38]">
                <div className="flex items-center gap-2">
                  <img
                    src={samritaIcon}
                    alt="PSC Study Hub Logo"
                    className="w-8 h-8 object-contain"
                  />
                  <div>
                    <div className="font-bold text-sm text-white">
                      PSC Study <span className="text-[#facc15]">Hub</span>
                    </div>
                    <div className="text-[10px] italic text-slate-300">
                      Learn • Practice • Grow
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Search */}
              <div className="p-4 border-b border-white/10">
                <form onSubmit={handleSearchSubmit}>
                  <div className="flex items-center bg-white rounded-full px-3.5 py-2 shadow-inner">
                    <Search className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search topics, questions..."
                      className="w-full bg-transparent border-none outline-none text-xs text-slate-800 placeholder-slate-400 font-medium"
                    />
                  </div>
                </form>
              </div>

              {/* Drawer Navigation Links */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Main Navigation
                  </div>
                  <div className="space-y-1">
                    <Link
                      to="/"
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-semibold transition ${
                        isHomeActive ? "bg-white/15 text-[#facc15]" : "text-slate-200 hover:bg-white/10"
                      }`}
                    >
                      <Home className="w-4 h-4 text-[#facc15]" />
                      <span>Home</span>
                    </Link>
                    <Link
                      to="/courses"
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-semibold transition ${
                        isCoursesActive ? "bg-white/15 text-[#facc15]" : "text-slate-200 hover:bg-white/10"
                      }`}
                    >
                      <GraduationCap className="w-4 h-4 text-blue-400" />
                      <span>Courses</span>
                    </Link>
                    <Link
                      to="/notes"
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-semibold transition ${
                        isNotesActive ? "bg-white/15 text-[#facc15]" : "text-slate-200 hover:bg-white/10"
                      }`}
                    >
                      <StickyNote className="w-4 h-4 text-emerald-400" />
                      <span>Notes</span>
                    </Link>
                    <Link
                      to="/typing"
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-semibold transition ${
                        isTypingActive ? "bg-white/15 text-[#facc15]" : "text-slate-200 hover:bg-white/10"
                      }`}
                    >
                      <Keyboard className="w-4 h-4 text-purple-400" />
                      <span>Typing</span>
                    </Link>
                    <Link
                      to="/downloads"
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-semibold transition ${
                        isDownloadsActive ? "bg-white/15 text-[#facc15]" : "text-slate-200 hover:bg-white/10"
                      }`}
                    >
                      <Download className="w-4 h-4 text-cyan-400" />
                      <span>Downloads & Software</span>
                    </Link>
                    <Link
                      to="/syllabus"
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-semibold transition ${
                        isSyllabusActive ? "bg-white/15 text-[#facc15]" : "text-slate-200 hover:bg-white/10"
                      }`}
                    >
                      <BookOpen className="w-4 h-4 text-amber-400" />
                      <span>Syllabus (पाठ्यक्रम)</span>
                    </Link>
                    {isAdmin && (
                      <Link
                        to="/admin-panel"
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition mt-2"
                      >
                        <Shield className="w-4 h-4" />
                        <span>Admin Panel</span>
                      </Link>
                    )}
                  </div>
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
