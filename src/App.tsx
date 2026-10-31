import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Admin from './pages/Admin';
import { AdminGuard } from './components/AdminGuard';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Practice from "./pages/Practice";
import QuizPage from "./pages/QuizPage";
import OldIsGold from "./pages/OldIsGold";
import OnlineExam from "./pages/OnlineExam";
import Practical from "./pages/Practical";
import SubjectiveQuestions from "./pages/SubjectiveQuestions";
import Syllabus from "./pages/Syllabus";
import TypingPractice from "./pages/TypingPractice";
import Notes from "./pages/Notes";
import Downloads from "./pages/Downloads";
import NotFound from "./pages/NotFound";
import { Navigate } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import AdminPanel from "./pages/AdminPanel";
import CloudAdminGuard from "./components/CloudAdminGuard";
import DailyMCQPage from "./pages/DailyMCQPage";
import Portfolio from "./pages/Portfolio";
import Sahil from "./pages/Sahil";
import Notices from "./pages/Notices";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./hooks/useAuth";

const queryClient = new QueryClient();

// Separate component for the main app content
const AppContent = () => {
  const location = useLocation();

  // Site content protection: disable right-click, copy, cut, print shortcuts & drag
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const handleCopyCut = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement;
      if (target?.tagName === "INPUT" || target?.tagName === "TEXTAREA" || target?.isContentEditable) {
        return;
      }
      e.preventDefault();
      return false;
    };

    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      const target = e.target as HTMLElement;
      const isInput = target?.tagName === "INPUT" || target?.tagName === "TEXTAREA" || target?.isContentEditable;

      // Prevent copy / cut shortcut outside form inputs
      if (isCtrlOrCmd && (e.key === "c" || e.key === "C" || e.key === "x" || e.key === "X") && !isInput) {
        e.preventDefault();
      }

      // Prevent print shortcut (Ctrl+P / Cmd+P)
      if (isCtrlOrCmd && (e.key === "p" || e.key === "P")) {
        e.preventDefault();
      }

      // Prevent save shortcut (Ctrl+S / Cmd+S)
      if (isCtrlOrCmd && (e.key === "s" || e.key === "S")) {
        e.preventDefault();
      }

      // Prevent view source shortcut (Ctrl+U / Cmd+U)
      if (isCtrlOrCmd && (e.key === "u" || e.key === "U")) {
        e.preventDefault();
      }

      // Prevent inspect / DevTools (F12, Ctrl+Shift+I/J/C)
      if (
        e.key === "F12" ||
        (isCtrlOrCmd && e.shiftKey && ["I", "i", "J", "j", "C", "c"].includes(e.key))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopyCut);
    document.addEventListener("cut", handleCopyCut);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopyCut);
      document.removeEventListener("cut", handleCopyCut);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/admin" 
          element={
            <AdminGuard>
              <Admin />
            </AdminGuard>
          } 
        />
        <Route
          path="/admin-panel"
          element={
            <CloudAdminGuard>
              <AdminPanel />
            </CloudAdminGuard>
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/sahil" element={<Navigate to="/" replace />} />
        <Route path="/sahil-portfolio" element={<Navigate to="/" replace />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/quiz/:category/:setId?" element={<QuizPage />} />
          <Route path="/old-is-gold" element={<OldIsGold />} />
          <Route path="/online-exam" element={<OnlineExam />} />
          <Route path="/practical" element={<Practical />} />
          <Route path="/subjective" element={<SubjectiveQuestions />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/typing" element={<TypingPractice />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/daily-mcq" element={<DailyMCQPage />} />
          <Route path="/notices" element={<Navigate to="/" replace />} />
          <Route path="/tu-notices" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <AppContent />
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
