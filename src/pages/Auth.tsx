import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import {
  BookOpen,
  Mail,
  Lock,
  User as UserIcon,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Trophy,
  BarChart3,
  ShieldCheck,
  Eye,
  EyeOff,
  Zap,
} from "lucide-react";
import SEO from "@/components/SEO";
import samritaIcon from "@/assets/samrita-icon-transparent.png";

const Auth = () => {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);

  const { signIn, signUp, signInDemo } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || "/dashboard";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === "signin") {
        const { error } = await signIn(email, password);
        if (error) throw error;
        toast.success("Welcome back!");
        navigate(from, { replace: true });
      } else {
        const { error } = await signUp(email, password, fullName);
        if (error) throw error;
        toast.success("Account created successfully!");
        navigate(from, { replace: true });
      }
    } catch (err: any) {
      toast.error(err.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setLoading(true);
    try {
      await signInDemo(false);
      toast.success("Welcome to Demo Account!");
      navigate(from, { replace: true });
    } catch (err: any) {
      toast.error("Failed to start demo session");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#f8fafc] text-slate-800">
      <SEO
        title="Student Portal Login & Register | PSC Study Hub"
        description="Sign in or register for your PSC Study Hub student account to track mock exam scores, save progress, and view national ranking."
        canonical="https://amritagupta.com.np/auth"
        noindex={true}
      />
      {/* Left: hero/brand panel */}
      <div className="hidden lg:flex flex-col justify-between flex-1 bg-[#0c2854] p-12 text-white relative overflow-hidden border-r border-blue-900/40">
        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center gap-3 text-xl font-bold mb-12 hover:opacity-90 transition">
            <img src={samritaIcon} alt="PSC Study Hub Logo" className="w-10 h-10 object-contain drop-shadow" />
            <div>
              <span className="font-heading font-bold text-white text-lg">
                PSC Study <span className="text-[#facc15]">Hub</span>
              </span>
              <span className="block text-[11px] italic text-sky-200">Learn • Practice • Grow</span>
            </div>
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-sky-200 text-xs font-semibold mb-6">
            <Sparkles size={14} className="text-[#facc15]" /> Ready for 2081/2082 Exam Preparation
          </div>

          <h2 className="text-4xl font-black leading-tight mb-4 tracking-tight text-white">
            Your Success in PSC<br />Starts Here!
          </h2>
          <p className="text-slate-200 text-base max-w-md leading-relaxed mb-8 font-medium">
            Access 15,000+ practice questions, 74+ old question sets, mock exam simulations, and Nepali typing tests.
          </p>

          <div className="space-y-3 max-w-md">
            <FeatureItem title="Instant Evaluation & Scoring" desc="Realistic exam simulator with score card and performance metrics" />
            <FeatureItem title="Subject-wise Practice" desc="Operating System, MS Word, Excel, DBMS, Hardware & Legislation" />
            <FeatureItem title="Study Notes & Old Question Papers" desc="Quality notes and past papers from 2064 to 2082 BS" />
          </div>
        </div>

        <div className="relative z-10 pt-8 border-t border-white/10">
          <div className="grid grid-cols-3 gap-3 max-w-md mb-6">
            <FeatureBadge icon={<Trophy size={18} />} label="Leaderboard" />
            <FeatureBadge icon={<BarChart3 size={18} />} label="Analytics" />
            <FeatureBadge icon={<ShieldCheck size={18} />} label="Instant Login" />
          </div>
          <p className="text-slate-300 text-xs">
            © 2026 PSC Study Hub · Designed & Developed by Amrita Gupta
          </p>
        </div>
      </div>

      {/* Right: form panel */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 relative bg-[#f8fafc]">
        <div className="w-full max-w-md">
          {/* Mobile brand header */}
          <div className="lg:hidden text-center mb-8">
            <Link to="/" className="inline-flex flex-col items-center">
              <img src={samritaIcon} alt="Logo" className="w-12 h-12 mb-2 object-contain" />
              <p className="font-bold text-[#0c2854] text-lg">
                PSC Study <span className="text-[#0284c7]">Hub</span>
              </p>
              <p className="text-xs text-slate-500 font-medium">Learn • Practice • Grow</p>
            </Link>
          </div>

          {/* Card container */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
            {/* Tab switcher */}
            <div className="bg-slate-100 rounded-full p-1 flex mb-6">
              <button
                type="button"
                onClick={() => setMode("signin")}
                className={`flex-1 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  mode === "signin"
                    ? "bg-[#0284c7] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setMode("signup")}
                className={`flex-1 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  mode === "signup"
                    ? "bg-[#0284c7] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Create Account
              </button>
            </div>

            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-black text-[#0c2854] mb-1.5">
                {mode === "signin" ? "Welcome back 👋" : "Create your account 🚀"}
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm font-medium">
                {mode === "signin"
                  ? "Sign in to continue your preparation & track scores."
                  : "Join thousands of aspirants preparing for Loksewa."}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "signup" && (
                <Field label="Full Name" icon={<UserIcon size={18} />}>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Amrita Gupta"
                    className="w-full bg-transparent outline-none text-sm text-slate-900 placeholder:text-slate-400 font-medium"
                  />
                </Field>
              )}

              <Field label="Email Address" icon={<Mail size={18} />}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@example.com"
                  className="w-full bg-transparent outline-none text-sm text-slate-900 placeholder:text-slate-400 font-medium"
                />
              </Field>

              <Field label="Password" icon={<Lock size={18} />}>
                <input
                  type={showPwd ? "text" : "password"}
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-transparent outline-none text-sm text-slate-900 placeholder:text-slate-400 font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((s) => !s)}
                  className="text-slate-400 hover:text-slate-700 transition-colors ml-2"
                >
                  {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0284c7] hover:bg-[#0369a1] text-white py-3 rounded-full font-bold shadow-sm transition-all disabled:opacity-50 flex items-center justify-center gap-2 text-sm mt-2"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Please wait...
                  </span>
                ) : (
                  <>
                    <span>{mode === "signin" ? "Sign In" : "Create Free Account"}</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>

            {/* Quick 1-Click Demo Login */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-3 text-slate-400 font-semibold tracking-wider text-[10px]">
                  Or Instant Access
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <button
                type="button"
                onClick={handleDemoLogin}
                disabled={loading}
                className="w-full py-2.5 px-4 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center gap-2 transition"
              >
                <Zap size={14} className="text-amber-500 fill-amber-500" />
                <span>1-Click Quick Demo Login</span>
              </button>
            </div>

            {/* Bottom switcher */}
            <p className="text-center text-xs sm:text-sm text-slate-500 mt-6 font-medium">
              {mode === "signin" ? "Don't have an account yet?" : "Already registered?"}{" "}
              <button
                type="button"
                onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                className="text-[#0284c7] font-bold hover:underline transition"
              >
                {mode === "signin" ? "Create an account" : "Sign in here"}
              </button>
            </p>
          </div>

          <div className="text-center mt-6">
            <Link to="/" className="text-xs text-slate-500 hover:text-[#0284c7] transition inline-flex items-center gap-1 font-semibold">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1 bg-emerald-500/20 text-emerald-300 p-1 rounded-lg">
      <CheckCircle2 size={16} />
    </div>
    <div>
      <p className="text-sm font-bold text-white">{title}</p>
      <p className="text-xs text-slate-300 leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
);

const FeatureBadge = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="bg-white/10 border border-white/20 rounded-2xl p-3 text-center">
    <div className="flex justify-center mb-1 text-sky-300">{icon}</div>
    <p className="text-xs text-slate-200 font-semibold">{label}</p>
  </div>
);

const Field = ({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div>
    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
      {label}
    </label>
    <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2.5 focus-within:border-[#0284c7] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#0284c7]/20 transition">
      <span className="text-slate-400 flex-shrink-0">{icon}</span>
      {children}
    </div>
  </div>
);

export default Auth;
