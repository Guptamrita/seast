import { useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Download,
  Maximize2,
  Minimize2,
  RotateCw,
  FileText,
  BookOpen,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Share2,
} from "lucide-react";
import { coursesData, formatGoogleDriveEmbedUrl, CourseItem } from "@/data/coursesData";
import SEO from "@/components/SEO";

export default function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  // Find the selected course
  const courseIndex = useMemo(() => {
    return coursesData.findIndex((c) => c.id === courseId);
  }, [courseId]);

  const course: CourseItem | undefined = courseIndex !== -1 ? coursesData[courseIndex] : coursesData[0];

  const prevCourse = courseIndex > 0 ? coursesData[courseIndex - 1] : null;
  const nextCourse = courseIndex < coursesData.length - 1 ? coursesData[courseIndex + 1] : null;

  // Format Google Drive embed link
  const embedUrl = useMemo(() => {
    return formatGoogleDriveEmbedUrl(course?.driveEmbedUrl);
  }, [course]);

  if (!course) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Course Not Found</h2>
        <p className="text-slate-500 mb-6">The requested course could not be located.</p>
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0284c7] text-white font-bold rounded-xl shadow hover:bg-[#0369a1] transition"
        >
          <ArrowLeft size={16} /> Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 pb-20">
      <SEO
        title={`${course.title} — Study Notes & PDF`}
        description={`Read and download ${course.title} complete PDF notes, syllabus topics, and study materials for Loksewa Computer Operator exam.`}
        canonical={`https://amritagupta.com.np/courses/${course.id}`}
      />

      {/* ── Top Header Banner ────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#072147] to-[#0c2854] text-white pt-8 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#0f3469]">
        <div className="max-w-7xl mx-auto space-y-4">
          
          {/* Breadcrumb / Back Navigation */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-xl transition"
            >
              <ArrowLeft size={15} />
              <span>Back to All Courses</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                Course #{course.number} of {coursesData.length}
              </span>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#facc15]/20 text-[#facc15] border border-[#facc15]/30">
                {course.category}
              </span>
            </div>
          </div>

          {/* Course Title and Description */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-2">
            <div className="space-y-2 max-w-3xl">
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {course.number}. {course.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                {course.desc}
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2.5 flex-wrap flex-shrink-0">
              {course.driveViewUrl && (
                <a
                  href={course.driveViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#facc15] hover:bg-[#eab308] text-slate-900 font-bold px-4 py-2 rounded-xl text-xs sm:text-sm shadow-md transition"
                >
                  <ExternalLink size={15} />
                  <span>Open in Google Drive</span>
                </a>
              )}

              <Link
                to={`/quiz/practice/${course.subjectId}?count=20&title=${encodeURIComponent(course.title)}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-2 rounded-xl text-xs sm:text-sm border border-white/20 transition"
              >
                <HelpCircle size={15} className="text-[#38bdf8]" />
                <span>Practice MCQs</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── Main Content Container ───────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-8">
        
        {/* PDF Opener & Viewer Card */}
        <div
          className={`bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden transition-all duration-300 ${
            isFullscreen ? "fixed inset-0 z-50 rounded-none border-none p-0" : "p-4 sm:p-6"
          }`}
        >
          {/* Viewer Toolbar Header */}
          <div className="flex items-center justify-between flex-wrap gap-3 pb-3 mb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0284c7] flex items-center justify-center font-bold">
                <FileText size={18} />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <span>Google Drive PDF Viewer</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                </h3>
                <p className="text-[11px] text-slate-400">
                  Interactive document viewer with zoom, print & download controls
                </p>
              </div>
            </div>

            {/* Viewer Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setReloadKey((k) => k + 1)}
                title="Reload document"
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition text-xs font-semibold flex items-center gap-1"
              >
                <RotateCw size={14} />
                <span className="hidden sm:inline">Reload</span>
              </button>

              {course.driveViewUrl && (
                <a
                  href={course.driveViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open full document in Google Drive"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition text-xs font-semibold flex items-center gap-1"
                >
                  <ExternalLink size={14} />
                  <span className="hidden sm:inline">Drive View</span>
                </a>
              )}

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition text-xs font-semibold flex items-center gap-1"
              >
                {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                <span className="hidden sm:inline">{isFullscreen ? "Exit" : "Expand"}</span>
              </button>
            </div>
          </div>

          {/* Embedded Google Drive PDF Iframe */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
            <iframe
              key={reloadKey}
              src={embedUrl}
              title={`${course.title} PDF Document Viewer`}
              className={`w-full bg-white transition-all ${
                isFullscreen ? "h-[calc(100vh-60px)]" : "h-[620px] sm:h-[750px] md:h-[820px]"
              }`}
              allow="autoplay; encrypted-media; fullscreen"
            />
          </div>

          {/* Viewer Footer Status */}
          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-3 flex-wrap gap-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" />
              <span>Document loaded successfully from Google Drive preview</span>
            </span>
            <span>
              Subject: <strong className="text-slate-700">{course.title}</strong>
            </span>
          </div>
        </div>

        {/* ── Key Topics Covered in this Course ──────────────────────── */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen size={18} className="text-[#0284c7]" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Key Syllabus Topics Covered
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {course.topics.map((topic, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 font-medium"
              >
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Previous & Next Course Navigation Bar ─────────────────── */}
        <div className="flex items-center justify-between gap-4 pt-2">
          {prevCourse ? (
            <button
              onClick={() => navigate(`/courses/${prevCourse.id}`)}
              className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow transition group text-left max-w-xs sm:max-w-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-[#0284c7] transition">
                <ChevronLeft size={20} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Previous Course
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-[#0284c7] transition">
                  {prevCourse.number}. {prevCourse.title}
                </h4>
              </div>
            </button>
          ) : (
            <div />
          )}

          {nextCourse ? (
            <button
              onClick={() => navigate(`/courses/${nextCourse.id}`)}
              className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow transition group text-right max-w-xs sm:max-w-sm ml-auto"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Next Course
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-[#0284c7] transition">
                  {nextCourse.number}. {nextCourse.title}
                </h4>
              </div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-[#0284c7] transition">
                <ChevronRight size={20} />
              </div>
            </button>
          ) : (
            <div />
          )}
        </div>

        {/* ── Quick Switch to Other Courses ─────────────────────────── */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                All 12 Course Modules
              </h3>
              <p className="text-xs text-slate-500">
                Switch directly to any other subject PDF note
              </p>
            </div>
            <Link
              to="/courses"
              className="text-xs font-bold text-[#0284c7] hover:underline"
            >
              View Grid View →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {coursesData.map((c) => {
              const isActive = c.id === course.id;
              return (
                <button
                  key={c.id}
                  onClick={() => navigate(`/courses/${c.id}`)}
                  className={`p-3 rounded-xl border text-left transition flex items-center gap-2.5 ${
                    isActive
                      ? "bg-blue-50 border-blue-400 shadow-sm"
                      : "bg-slate-50/70 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-lg text-[11px] font-black flex items-center justify-center flex-shrink-0 ${
                      isActive ? "bg-[#0284c7] text-white" : "bg-white text-slate-600 border border-slate-200"
                    }`}
                  >
                    #{c.number}
                  </span>
                  <div className="truncate">
                    <div
                      className={`text-xs font-bold truncate ${
                        isActive ? "text-[#0284c7]" : "text-slate-800"
                      }`}
                    >
                      {c.title}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">{c.category}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

      </main>
    </div>
  );
}
