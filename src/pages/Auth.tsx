import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import {
  BookOpen, Lock, Mail, User as UserIcon, Eye, EyeOff,
  ShieldCheck, Trophy, BarChart3, Sparkles, CheckCircle2,
  Zap, ArrowRight
} from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, loading: authLoading, signIn, signUp, signInDemo, isLocalMode } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);

  const from = (location.state as { from?: string } | null)?.from || "/";

  useEffect(() => {
    if (!authLoading && user) {
      navigate(from, { replace: true });
    }
  }, [user, authLoading, navigate, from]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (mode === "signup" && !fullName) {
      toast.error("Please enter your full name.");
      return;
    }

    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await signUp(email, password, fullName);
        if (error) {
          toast.error(error.message || "Failed to create account");
        } else {
          toast.success("Account created successfully! Welcome to Samrita Collection 🎉");
          navigate(from, { replace: true });
        }
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          toast.error(error.message || "Failed to sign in. Please check your credentials.");
        } else {
          toast.success("Welcome back! 🎉");
          navigate(from, { replace: true });
        }
      }
    } catch (err: any) {
      toast.error(err?.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async (asAdmin = false) => {
    setLoading(true);
    try {
      await signInDemo(asAdmin);
      toast.success(asAdmin ? "Logged in as Demo Admin!" : "Logged in with Demo Account!");
      navigate(from, { replace: true });
    } catch (err: any) {
      toast.error("Failed to start demo session");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-slate-100 selection:bg-blue-500 selection:text-white">
      {/* Left: hero/brand panel */}
      <div className="hidden lg:flex flex-col justify-between flex-1 bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 p-12 text-white relative overflow-hidden border-r border-slate-800/80">
        {/* Decorative background effects */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center gap-3 text-xl font-bold mb-12 hover:opacity-90 transition">
            <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 p-2.5 rounded-2xl shadow-lg shadow-blue-500/30">
              <BookOpen size={22} className="text-white" />
            </div>
            <div>
              <span className="font-heading font-bold text-white text-lg">Computer Operator Pro</span>
              <span className="block text-[10px] uppercase tracking-widest text-blue-400 font-semibold">Nepal Loksewa Aayog</span>
            </div>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold mb-6">
            <Sparkles size={14} /> Ready for 2081/2082 Exam Preparation
          </div>

          <h2 className="text-4xl font-heading font-extrabold leading-tight mb-4 tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text text-transparent">
            Master the Loksewa<br />Computer Operator Exam.
          </h2>
          <p className="text-slate-300 text-base max-w-md leading-relaxed mb-8">
            Access 15,000+ practice questions, 19 full mock exams, real-time leaderboards, subjective questions, and Nepali typing practice.
          </p>

          <div className="space-y-3 max-w-md">
            <FeatureItem title="Instant Evaluation & Analytics" desc="Detailed marks calculation with 20% negative marking simulation" />
            <FeatureItem title="Subject-wise Practice" desc="Operating System, MS Word, Excel, DBMS, Hardware & Legislation" />
            <FeatureItem title="Offline & Cloud Sync" desc="Seamless progress saving with instant local access anytime" />
          </div>
        </div>

        <div className="relative z-10 pt-8 border-t border-white/10">
          <div className="grid grid-cols-3 gap-3 max-w-md mb-6">
            <FeatureBadge icon={<Trophy size={18} />} label="Leaderboard" />
            <FeatureBadge icon={<BarChart3 size={18} />} label="Analytics" />
            <FeatureBadge icon={<ShieldCheck size={18} />} label="Instant Login" />
          </div>
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Loksewa Computer Operator Pro · Built for अग्रिम तयारी
          </p>
        </div>
      </div>

      {/* Right: form panel */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 relative">
        <div className="w-full max-w-md">
          {/* Mobile brand header */}
          <div className="lg:hidden text-center mb-8">
            <Link to="/" className="inline-flex flex-col items-center">
              <div className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-500/30">
                <BookOpen size={28} className="text-white" />
              </div>
              <p className="font-bold text-white text-lg">Computer Operator Pro</p>
              <p className="text-xs text-blue-400">Loksewa Nepal</p>
            </Link>
          </div>

          {/* Card container */}
          <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/40">
            {/* Tab switcher */}
            <div className="bg-slate-900/80 rounded-2xl p-1 flex mb-6 border border-slate-700/60">
              <button
                type="button"
                onClick={() => setMode("signin")}
                className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  mode === "signin"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setMode("signup")}
                className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  mode === "signup"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Create Account
              </button>
            </div>

            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-1.5">
                {mode === "signin" ? "Welcome back 👋" : "Create your account 🚀"}
              </h1>
              <p className="text-slate-400 text-sm">
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
                    placeholder="Ram Bahadur"
                    className="w-full bg-transparent outline-none text-sm text-white placeholder:text-slate-500"
                  />
                </Field>
              )}

              <Field label="Email Address" icon={<Mail size={18} />}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@loksewa.pro"
                  className="w-full bg-transparent outline-none text-sm text-white placeholder:text-slate-500"
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
                  className="w-full bg-transparent outline-none text-sm text-white placeholder:text-slate-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((s) => !s)}
                  className="text-slate-400 hover:text-white transition-colors ml-2"
                >
                  {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white py-3.5 rounded-2xl font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
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
                <div className="w-full border-t border-slate-700/80"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-slate-800 px-3 text-slate-400 font-medium tracking-wider">
                  Or Instant Access
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <button
                type="button"
                onClick={() => handleDemoLogin(false)}
                disabled={loading}
                className="w-full py-3 px-4 rounded-2xl text-xs font-semibold text-slate-200 bg-slate-700/60 hover:bg-slate-700 border border-slate-600/60 hover:border-slate-500 flex items-center justify-center gap-2 transition-all duration-200"
              >
                <Zap size={15} className="text-amber-400" />
                <span>1-Click Quick Demo Login</span>
              </button>
            </div>

            {/* Bottom switcher */}
            <p className="text-center text-xs sm:text-sm text-slate-400 mt-6">
              {mode === "signin" ? "Don't have an account yet?" : "Already registered?"}{" "}
              <button
                type="button"
                onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                className="text-blue-400 font-semibold hover:text-blue-300 hover:underline transition"
              >
                {mode === "signin" ? "Create an account" : "Sign in here"}
              </button>
            </p>
          </div>

          <div className="text-center mt-6">
            <Link to="/" className="text-xs text-slate-400 hover:text-white transition inline-flex items-center gap-1">
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
    <div className="mt-1 bg-emerald-500/20 text-emerald-400 p-1 rounded-lg">
      <CheckCircle2 size={16} />
    </div>
    <div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const FeatureBadge = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-3 text-center">
    <div className="flex justify-center mb-1 text-blue-400">{icon}</div>
    <p className="text-xs text-slate-300 font-medium">{label}</p>
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
    <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
      {label}
    </label>
    <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-700 rounded-2xl px-4 py-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition duration-200">
      <span className="text-slate-400 flex-shrink-0">{icon}</span>
      {children}
    </div>
  </div>
);

export default Auth;
