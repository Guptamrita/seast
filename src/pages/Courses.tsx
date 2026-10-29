import { useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Laptop,
  Network,
  Shield,
  Globe,
  Palette,
  Calculator,
  FileText,
  Presentation,
  Database,
  Server,
  Code2,
  FolderGit2,
  Search,
  BookOpen,
  ArrowRight,
  GraduationCap,
  Sparkles,
  Trophy,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import QuestionSelector from "@/components/QuestionSelector";
import SEO from "@/components/SEO";

interface CourseCard {
  id: string;
  number: number;
  title: string;
  desc: string;
  category: string;
  icon: React.ReactNode;
  iconBg: string;
  cardBg: string;
  totalQuestions: number;
  subjectId: string;
  isProject?: boolean;
}

export default function Courses() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSelector, setShowSelector] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<{ id: string; name: string; total: number } | null>(null);

  // 12 Courses requested by the user, matching the exact homepage boxes design
  const courses: CourseCard[] = [
    {
      id: "computer-fundamental",
      number: 1,
      title: "Computer Fundamental",
      desc: "Hardware, Generation, CPU, Memory & Architecture",
      category: "Core Computing",
      icon: <Laptop className="w-5 h-5 text-white" />,
      iconBg: "bg-[#0284c7]",
      cardBg: "bg-[#f0f7ff] hover:bg-[#e0f2fe] border-[#bae6fd]/60 text-slate-900",
      totalQuestions: 958,
      subjectId: "computer-fundamentals",
    },
    {
      id: "networking",
      number: 2,
      title: "Networking",
      desc: "LAN, WAN, OSI Model, TCP/IP & Network Protocols",
      category: "Infrastructure",
      icon: <Network className="w-5 h-5 text-white" />,
      iconBg: "bg-[#6366f1]",
      cardBg: "bg-[#eef2ff] hover:bg-[#e0e7ff] border-[#c7d2fe]/60 text-slate-900",
      totalQuestions: 180,
      subjectId: "networking",
    },
    {
      id: "operating-system",
      number: 3,
      title: "Operating System",
      desc: "Windows, Linux, Kernel, Process & File Systems",
      category: "Systems",
      icon: <Terminal className="w-5 h-5 text-white" />,
      iconBg: "bg-[#10b981]",
      cardBg: "bg-[#f0fdf4] hover:bg-[#dcfce7] border-[#bbf7d0]/60 text-slate-900",
      totalQuestions: 400,
      subjectId: "operating-system",
    },
    {
      id: "html",
      number: 4,
      title: "HTML",
      desc: "HTML5 Structure, Semantic Tags, Forms & Web Markup",
      category: "Web Development",
      icon: <Globe className="w-5 h-5 text-white" />,
      iconBg: "bg-[#ea580c]",
      cardBg: "bg-[#fff7ed] hover:bg-[#ffedd5] border-[#fed7aa]/60 text-slate-900",
      totalQuestions: 275,
      subjectId: "web-design",
    },
    {
      id: "css",
      number: 5,
      title: "CSS",
      desc: "Styling, Flexbox, CSS Grid & Responsive Layouts",
      category: "Web Development",
      icon: <Palette className="w-5 h-5 text-white" />,
      iconBg: "bg-[#06b6d4]",
      cardBg: "bg-[#ecfeff] hover:bg-[#cffafe] border-[#a5f3fc]/60 text-slate-900",
      totalQuestions: 275,
      subjectId: "web-design",
    },
    {
      id: "ms-excel",
      number: 6,
      title: "MS Excel",
      desc: "Formulas, Functions, Pivot Tables & Data Analysis",
      category: "Office Suite",
      icon: <Calculator className="w-5 h-5 text-white" />,
      iconBg: "bg-[#16a34a]",
      cardBg: "bg-[#f0fdf4] hover:bg-[#dcfce7] border-[#bbf7d0]/60 text-slate-900",
      totalQuestions: 400,
      subjectId: "spreadsheet",
    },
    {
      id: "ms-word",
      number: 7,
      title: "MS Word",
      desc: "Word Processing, Formatting, Mail Merge & Macros",
      category: "Office Suite",
      icon: <FileText className="w-5 h-5 text-white" />,
      iconBg: "bg-[#2563eb]",
      cardBg: "bg-[#eff6ff] hover:bg-[#dbeafe] border-[#bfdbfe]/60 text-slate-900",
      totalQuestions: 400,
      subjectId: "word-processor",
    },
    {
      id: "ms-powerpoint",
      number: 8,
      title: "MS PowerPoint",
      desc: "Slide Master, Custom Animations, Transitions & Audio",
      category: "Office Suite",
      icon: <Presentation className="w-5 h-5 text-white" />,
      iconBg: "bg-[#dc2626]",
      cardBg: "bg-[#fef2f2] hover:bg-[#fee2e2] border-[#fecaca]/60 text-slate-900",
      totalQuestions: 184,
      subjectId: "presentation",
    },
    {
      id: "ms-access",
      number: 9,
      title: "MS Access",
      desc: "Database Design, Relational Tables, Forms & Reports",
      category: "Database",
      icon: <Database className="w-5 h-5 text-white" />,
      iconBg: "bg-[#a855f7]",
      cardBg: "bg-[#faf5ff] hover:bg-[#f3e8ff] border-[#e9d5ff]/60 text-slate-900",
      totalQuestions: 397,
      subjectId: "dbms",
    },
    {
      id: "sql",
      number: 10,
      title: "SQL",
      desc: "DDL, DML, DQL Queries, Joins, Indexing & Views",
      category: "Database",
      icon: <Server className="w-5 h-5 text-white" />,
      iconBg: "bg-[#d97706]",
      cardBg: "bg-[#fffbeb] hover:bg-[#fef3c7] border-[#fde68a]/60 text-slate-900",
      totalQuestions: 397,
      subjectId: "dbms",
    },
    {
      id: "programming",
      number: 11,
      title: "Programming",
      desc: "C Programming, Control Flow, Functions & Algorithms",
      category: "Coding & Logic",
      icon: <Code2 className="w-5 h-5 text-white" />,
      iconBg: "bg-[#8b5cf6]",
      cardBg: "bg-[#f5f3ff] hover:bg-[#ede9fe] border-[#ddd6fe]/60 text-slate-900",
      totalQuestions: 250,
      subjectId: "computer-fundamentals",
    },
    {
      id: "project",
      number: 12,
      title: "Project",
      desc: "Real-world Applications, Web Solutions & Case Studies",
      category: "Practical",
      icon: <FolderGit2 className="w-5 h-5 text-white" />,
      iconBg: "bg-[#db2777]",
      cardBg: "bg-[#fdf2f8] hover:bg-[#fce7f3] border-[#fbcfe8]/60 text-slate-900",
      totalQuestions: 25,
      subjectId: "project",
      isProject: true,
    },
  ];

  const filteredCourses = useMemo(() => {
    if (!searchTerm.trim()) return courses;
    const q = searchTerm.toLowerCase().trim();
    return courses.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.desc.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
    );
  }, [searchTerm, courses]);

  const handleCardClick = (course: CourseCard) => {
    if (course.isProject) {
      navigate("/portfolio");
      return;
    }
    setSelectedCourse({
      id: course.subjectId,
      name: course.title,
      total: course.totalQuestions,
    });
    setShowSelector(true);
  };

  const handleQuestionSelect = (count: number) => {
    if (selectedCourse) {
      navigate(
        `/quiz/practice/${selectedCourse.id}?count=${count}&title=${encodeURIComponent(
          selectedCourse.name
        )}`
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 pb-20">
      <SEO
        title="Courses & Preparation Modules"
        description="Comprehensive study courses for Computer Operator, IT Officer & Loksewa exams. Master Computer Fundamentals, Networking, Operating Systems, Office Suite, Web Technologies & Programming."
        canonical="https://amritagupta.com.np/courses"
      />

      {/* ── Top Header Banner ────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#072147] to-[#0c2854] text-white pt-10 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#0f3469]">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold">
            <GraduationCap size={15} className="text-[#facc15]" />
            <span>Official Syllabus Aligned • 12 Core Courses</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                All Courses & Modules <span className="text-[#facc15]">(पाठ्यक्रमहरू)</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-2xl font-normal leading-relaxed">
                Click on any course box below to practice high-yield MCQs, review concepts, and test your knowledge with real exam timers.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search course by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-white/20 rounded-2xl text-xs sm:text-sm text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:bg-white/15 transition"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-300 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Main 12 Courses Grid (Exact Homepage Box Design) ─────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-sm border border-slate-200/80 mb-10">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Core Curriculum Subjects
              </h2>
              <p className="text-xs text-slate-500">
                12 specialized subjects structured according to Public Service Commission norms
              </p>
            </div>
            <span className="text-xs font-bold text-[#0284c7] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              {filteredCourses.length} Courses Available
            </span>
          </div>

          {/* Grid matching the homepage boxes design */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {filteredCourses.map((course, i) => (
              <motion.div
                key={course.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCardClick(course)}
                className={`${course.cardBg} border rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all h-full justify-start cursor-pointer group select-none relative overflow-hidden`}
              >
                {/* Number Pill Top Right */}
                <span className="absolute top-2.5 right-2.5 text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-white/70 text-slate-500 border border-slate-200/50">
                  #{course.number}
                </span>

                {/* Circular Icon (Same as Homepage) */}
                <div
                  className={`w-12 h-12 rounded-full ${course.iconBg} flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform`}
                >
                  {course.icon}
                </div>

                {/* Title (Same as Homepage) */}
                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {course.title}
                </h3>

                {/* Description (Same as Homepage) */}
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1 leading-snug line-clamp-2">
                  {course.desc}
                </p>

                {/* Badge at Bottom */}
                <div className="mt-auto pt-3 flex items-center gap-1.5 text-[10px] font-bold text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>
                    {course.isProject ? "View Portfolio & Projects" : `${course.totalQuestions}+ Questions`}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Quick Practice Navigation Cards ───────────────────────── */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            to="/old-is-gold"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-300 shadow-sm hover:shadow transition flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Trophy size={20} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-600 transition">
                  Old Questions (Past Papers)
                </h4>
                <p className="text-[11px] text-slate-400">74+ solved PSC sets</p>
              </div>
            </div>
            <ArrowRight size={15} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/online-exam"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow transition flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0284c7] flex items-center justify-center font-bold">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0284c7] transition">
                  Mock Exam Simulator
                </h4>
                <p className="text-[11px] text-slate-400">50 questions with negative marking</p>
              </div>
            </div>
            <ArrowRight size={15} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/notes"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow transition flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <BookOpen size={20} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition">
                  Study Notes & Formulas
                </h4>
                <p className="text-[11px] text-slate-400">Quick revision capsules & GK</p>
              </div>
            </div>
            <ArrowRight size={15} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>
      </main>

      {/* ── Question Selector Modal ─────────────────────────────────── */}
      {showSelector && selectedCourse && (
        <QuestionSelector
          totalQuestions={selectedCourse.total}
          subjectName={selectedCourse.name}
          onSelect={handleQuestionSelect}
          onClose={() => setShowSelector(false)}
        />
      )}
    </div>
  );
}
