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
import NepalLoadingScreen from "./components/NepalLoadingScreen";
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
  const [showLoading, setShowLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Check if this is a fresh page load (not client-side navigation)
    const navigationType = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
    const isReload = navigationType?.type === "reload";
    
    // Show loading only on homepage AND (first visit OR manual reload)
    if (location.pathname === "/") {
      // Check if we're coming from navigation (not full page reload)
      const isClientSideNavigation = sessionStorage.getItem("clientSideNav") === "true";
      
      if (!isClientSideNavigation || isReload) {
        setShowLoading(true);
        // Set timeout to hide loading after 3 seconds
        const timer = setTimeout(() => {
          setShowLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
      } else {
        setShowLoading(false);
      }
    } else {
      setShowLoading(false);
    }
    
    // Mark that we're doing client-side navigation
    sessionStorage.setItem("clientSideNav", "true");
    
    // Reset on page unload
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("clientSideNav");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [location.pathname]);

  // Prevent body scroll during loading
  useEffect(() => {
    if (showLoading) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [showLoading]);

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
    <>
      {showLoading && <NepalLoadingScreen onComplete={() => setShowLoading(false)} />}
      
      <div style={{ display: showLoading ? 'none' : 'block' }}>
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
      </div>
    </>
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
