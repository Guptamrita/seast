import { useState, useEffect, useCallback, useRef } from "react";
import {
  englishTypingData,
  nepaliTypingData,
  codeTypingData,
  examParagraphsData,
  TypingItem,
} from "@/data/typingTexts";
import {
  Keyboard,
  RotateCcw,
  Trophy,
  Zap,
  Timer,
  CheckCircle2,
  Volume2,
  VolumeX,
  Sparkles,
  ChevronRight,
  ListFilter,
  Building2,
  Search,
  Flame,
  Award,
  BarChart3,
  Eye,
  EyeOff,
  Clock,
  ShieldCheck,
  Target,
  Palette,
  Layers,
  ArrowRight,
} from "lucide-react";

type Mode = "english" | "nepali" | "code" | "exam";
type AgencyFilter = "all" | "Loksewa PSC" | "NOC" | "NEB" | "TU" | "Banking" | "Code";
type ColorTheme = "pearl" | "mint" | "latte" | "midnight";

const KEYBOARD_ROWS = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
  ["Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
  ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"],
  ["Space"],
];

const THEME_STYLES: Record<
  ColorTheme,
  {
    name: string;
    bg: string;
    text: string;
    card: string;
    cardBorder: string;
    canvasBg: string;
    inputBg: string;
    inputText: string;
    accentGlow: string;
    charUnreached: string;
    keyBg: string;
    keyText: string;
  }
> = {
  pearl: {
    name: "🌸 Pearl Light (Default)",
    bg: "bg-gradient-to-br from-slate-50 via-indigo-50/50 to-blue-50/60",
    text: "text-slate-800",
    card: "bg-white/80 backdrop-blur-xl shadow-xl shadow-indigo-100/50",
    cardBorder: "border border-slate-200/80",
    canvasBg: "bg-white/90 border border-slate-200/90 shadow-inner",
    inputBg: "bg-white border-2 border-slate-200 shadow-sm",
    inputText: "text-slate-800",
    accentGlow: "from-blue-600 to-indigo-600",
    charUnreached: "text-slate-400/60",
    keyBg: "bg-slate-100 border border-slate-200 text-slate-700 shadow-sm",
    keyText: "text-slate-700",
  },
  mint: {
    name: "🌿 Nordic Mint",
    bg: "bg-gradient-to-br from-emerald-50/80 via-teal-50/50 to-cyan-50/70",
    text: "text-emerald-950",
    card: "bg-white/85 backdrop-blur-xl shadow-xl shadow-teal-100/60",
    cardBorder: "border border-emerald-200/70",
    canvasBg: "bg-emerald-950/5 border border-emerald-200 shadow-inner",
    inputBg: "bg-white border-2 border-emerald-200 shadow-sm",
    inputText: "text-emerald-950",
    accentGlow: "from-emerald-600 to-teal-600",
    charUnreached: "text-emerald-800/40",
    keyBg: "bg-emerald-50 border border-emerald-200 text-emerald-800 shadow-sm",
    keyText: "text-emerald-800",
  },
  latte: {
    name: "☕ Warm Latte",
    bg: "bg-gradient-to-br from-amber-50/80 via-orange-50/40 to-stone-100",
    text: "text-stone-800",
    card: "bg-white/85 backdrop-blur-xl shadow-xl shadow-amber-100/50",
    cardBorder: "border border-amber-200/80",
    canvasBg: "bg-amber-950/5 border border-amber-200/80 shadow-inner",
    inputBg: "bg-white border-2 border-amber-200 shadow-sm",
    inputText: "text-stone-900",
    accentGlow: "from-amber-600 to-orange-600",
    charUnreached: "text-stone-400",
    keyBg: "bg-amber-50/60 border border-amber-200 text-stone-700 shadow-sm",
    keyText: "text-stone-700",
  },
  midnight: {
    name: "🌌 Midnight Slate",
    bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950",
    text: "text-slate-100",
    card: "bg-slate-900/90 backdrop-blur-xl shadow-2xl",
    cardBorder: "border border-slate-800",
    canvasBg: "bg-slate-950/60 border border-slate-800 shadow-inner",
    inputBg: "bg-slate-900 border-2 border-slate-700",
    inputText: "text-white",
    accentGlow: "from-blue-600 to-indigo-600",
    charUnreached: "text-slate-500/50",
    keyBg: "bg-slate-800 border border-slate-700 text-slate-300",
    keyText: "text-slate-300",
  },
};

export default function TypingPractice() {
  const [theme, setTheme] = useState<ColorTheme>("pearl");
  const [mode, setMode] = useState<Mode>("english");
  const [agency, setAgency] = useState<AgencyFilter>("all");
  const [difficulty, setDifficulty] = useState<"all" | "easy" | "medium" | "hard">("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState<TypingItem>(englishTypingData[0]);
  const [input, setInput] = useState("");
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [cpm, setCpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [errorCount, setErrorCount] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timeLimit, setTimeLimit] = useState<number | null>(null); // null = free, 60, 180, 300
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [pressedKey, setPressedKey] = useState<string>("");
  const [bestWpm, setBestWpm] = useState<number>(() => {
    return Number(localStorage.getItem("loksewa_best_wpm")) || 0;
  });

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const curTheme = THEME_STYLES[theme];

  // Filter datasets
  const getDataset = useCallback(() => {
    let list: TypingItem[] = [];
    if (mode === "english") list = englishTypingData;
    else if (mode === "nepali") list = nepaliTypingData;
    else if (mode === "code") list = codeTypingData;
    else if (mode === "exam") list = examParagraphsData;

    if (agency !== "all") {
      list = list.filter((item) => item.source === agency);
    }
    if (difficulty !== "all") {
      list = list.filter((item) => item.difficulty === difficulty);
    }
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(
        (item) => item.title.toLowerCase().includes(q) || item.text.toLowerCase().includes(q)
      );
    }
    return list.length > 0 ? list : mode === "english" ? englishTypingData : nepaliTypingData;
  }, [mode, agency, difficulty, searchTerm]);

  // Reset or switch test
  const resetTest = useCallback(
    (item?: TypingItem) => {
      const dataset = getDataset();
      const target = item || dataset[Math.floor(Math.random() * dataset.length)] || dataset[0];
      setSelectedItem(target);
      setInput("");
      setStarted(false);
      setFinished(false);
      setWpm(0);
      setCpm(0);
      setAccuracy(100);
      setErrorCount(0);
      setTimeElapsed(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    },
    [getDataset]
  );

  useEffect(() => {
    resetTest();
  }, [mode, agency, difficulty, resetTest]);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        resetTest();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [resetTest]);

  // Audio click synthesizer
  const playKeySound = () => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {}
  };

  // Timer interval
  useEffect(() => {
    if (!started || finished) return;
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setTimeElapsed(elapsed);

      if (timeLimit && elapsed >= timeLimit) {
        setFinished(true);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [started, finished, startTime, timeLimit]);

  // Input handling
  const handleInput = (val: string) => {
    if (finished) return;

    if (!started) {
      setStarted(true);
      setStartTime(Date.now());
    }

    const lastChar = val.slice(-1);
    setPressedKey(lastChar.toLowerCase());
    setTimeout(() => setPressedKey(""), 120);

    playKeySound();
    setInput(val);

    const targetText = selectedItem.text;
    let errors = 0;
    let correct = 0;

    for (let i = 0; i < val.length; i++) {
      if (val[i] === targetText[i]) {
        correct++;
      } else {
        errors++;
      }
    }

    setErrorCount(errors);
    const acc = val.length > 0 ? Math.max(0, Math.round((correct / val.length) * 100)) : 100;
    setAccuracy(acc);

    const elapsedSeconds = Math.max(1, (Date.now() - (startTime || Date.now())) / 1000);
    const elapsedMinutes = elapsedSeconds / 60;

    // Loksewa Gross Words calculation (5 chars = 1 word)
    const grossWords = Math.round(correct / 5 / elapsedMinutes);
    const calculatedCpm = Math.round((correct / elapsedSeconds) * 60);

    setWpm(grossWords);
    setCpm(calculatedCpm);

    if (val.length >= targetText.length) {
      setFinished(true);
      if (grossWords > bestWpm) {
        setBestWpm(grossWords);
        localStorage.setItem("loksewa_best_wpm", grossWords.toString());
      }
    }
  };

  const dataset = getDataset();
  const targetText = selectedItem.text;
  const progressPercent = Math.min(100, Math.round((input.length / targetText.length) * 100));
  const nextChar = targetText[input.length] || "";

  // Loksewa exam evaluation
  const requiredWpm = mode === "nepali" ? 22.5 : 30;
  const isPassing = wpm >= requiredWpm && accuracy >= 85;
  const loksewaScore = Math.max(
    0,
    Math.min(25, Math.round((wpm / 40) * 25 * (accuracy / 100)))
  );

  return (
    <div className={`min-h-screen ${curTheme.bg} ${curTheme.text} py-10 px-4 sm:px-6 lg:px-8 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300`}>
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Top Header Card */}
        <div className={`p-6 sm:p-7 rounded-[2rem] ${curTheme.card} ${curTheme.cardBorder} flex flex-col md:flex-row items-center justify-between gap-5 transition-all duration-300`}>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Keyboard size={28} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono">
                  Samrita Collection
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <ShieldCheck size={12} /> PSC Certified
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-heading font-black tracking-tight">
                Typing Speed Master Pro
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                120+ Real Exam Questions & Sentences (Loksewa, NOC, NEB, TU, Banking)
              </p>
            </div>
          </div>

          {/* Controls: Theme Switcher, Virtual Keyboard, Sound, Best Score */}
          <div className="flex items-center gap-2.5 self-end md:self-center flex-wrap">
            {/* Theme Selector */}
            <div className="flex items-center gap-1 p-1 bg-slate-200/60 dark:bg-slate-800/80 rounded-2xl border border-slate-300/50 dark:border-slate-700">
              {(["pearl", "mint", "latte", "midnight"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold capitalize transition-all ${
                    theme === t
                      ? "bg-white dark:bg-slate-700 shadow-md text-blue-600 dark:text-white"
                      : "text-slate-500 hover:text-slate-800 dark:hover:text-white"
                  }`}
                >
                  {t === "pearl" ? "🌸 Light" : t === "mint" ? "🌿 Mint" : t === "latte" ? "☕ Warm" : "🌌 Dark"}
                </button>
              ))}
            </div>

            {/* Keyboard visual toggle */}
            <button
              onClick={() => setShowKeyboard(!showKeyboard)}
              title={showKeyboard ? "Hide Keyboard" : "Show Keyboard"}
              className={`p-2.5 rounded-2xl border transition-all ${
                showKeyboard
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20 border-indigo-500"
                  : "bg-white/90 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white"
              }`}
            >
              {showKeyboard ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>

            {/* Sound Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? "Mute typing click" : "Enable typing click"}
              className={`p-2.5 rounded-2xl border transition-all ${
                soundEnabled
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 border-blue-500"
                  : "bg-white/90 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white"
              }`}
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Best Score Badge */}
            <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-300 dark:border-amber-500/30 px-3.5 py-2 rounded-2xl">
              <Trophy size={16} className="text-amber-500" />
              <div>
                <p className="text-[10px] uppercase font-extrabold text-amber-700 dark:text-amber-300 leading-none">Best Record</p>
                <p className="text-xs font-black text-amber-800 dark:text-amber-200 leading-tight">{bestWpm} WPM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Category Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-white/60 dark:bg-slate-900/60 p-2 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm backdrop-blur-md">
          {[
            { id: "english", label: "🇬🇧 English Typing", count: "50+ Sets", desc: "PSC, NOC, NEB, TU Sets" },
            { id: "nepali", label: "🇳🇵 नेपाली युनिकोड", count: "50+ Sets", desc: "सरकारी पत्राचार, ऐन, नियम" },
            { id: "code", label: "💻 Code Typing", count: "20+ Sets", desc: "C, SQL, HTML, JS, Python" },
            { id: "exam", label: "📋 Full 5-Min Exam", count: "10+ Sets", desc: "PSC 25 Marks Standard" },
          ].map((tab) => {
            const active = mode === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setMode(tab.id as Mode)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 relative overflow-hidden ${
                  active
                    ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-xl shadow-blue-500/25 ring-2 ring-blue-400/30"
                    : "bg-white/80 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm border border-slate-200/60 dark:border-slate-800"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-extrabold tracking-tight">{tab.label}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${active ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500"}`}>
                    {tab.count}
                  </span>
                </div>
                <p className={`text-xs ${active ? "text-blue-100" : "text-slate-400"}`}>{tab.desc}</p>
              </button>
            );
          })}
        </div>

        {/* Agency Pills & Filter Bar */}
        <div className={`p-4 rounded-3xl ${curTheme.card} ${curTheme.cardBorder} flex flex-col lg:flex-row items-center justify-between gap-3 shadow-sm`}>
          {/* Agency Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none">
            <span className="text-slate-400 flex items-center gap-1.5 mr-1 font-bold text-xs flex-shrink-0">
              <Building2 size={14} className="text-blue-500" /> Agency:
            </span>
            {(["all", "Loksewa PSC", "NOC", "NEB", "TU", "Banking", "Code"] as const).map((a) => {
              const active = agency === a;
              return (
                <button
                  key={a}
                  onClick={() => setAgency(a)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                    active
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {a === "all" ? "🌐 All Exams" : a}
                </button>
              );
            })}
          </div>

          {/* Difficulty & Timer Controls */}
          <div className="flex items-center gap-2.5 flex-wrap w-full lg:w-auto justify-end">
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl border border-slate-200 dark:border-slate-700">
              {(["all", "easy", "medium", "hard"] as const).map((d) => (
                <button
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`px-3 py-1 rounded-xl text-xs capitalize font-bold transition-all ${
                    difficulty === d
                      ? "bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-white"
                      : "text-slate-500 hover:text-slate-800 dark:hover:text-white"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl border border-slate-200 dark:border-slate-700">
              <Timer size={14} className="text-slate-400 ml-2 mr-0.5" />
              {[
                { val: null, label: "Free" },
                { val: 60, label: "1m" },
                { val: 180, label: "3m" },
                { val: 300, label: "5m (PSC)" },
              ].map((t) => (
                <button
                  key={String(t.val)}
                  onClick={() => {
                    setTimeLimit(t.val);
                    resetTest(selectedItem);
                  }}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                    timeLimit === t.val
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-800 dark:hover:text-white"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Test Selector Dropdown + Search Input */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <ListFilter size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none" />
            <select
              value={selectedItem.id}
              onChange={(e) => {
                const found = dataset.find((item) => item.id === Number(e.target.value));
                if (found) resetTest(found);
              }}
              className={`w-full ${curTheme.card} ${curTheme.cardBorder} rounded-2xl pl-11 pr-4 py-3 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm cursor-pointer transition`}
            >
              {dataset.map((item, idx) => (
                <option key={item.id} value={item.id} className="py-1">
                  #{idx + 1} · [{item.source || "Exam"}] {item.title} ({item.difficulty.toUpperCase()})
                </option>
              ))}
            </select>
          </div>

          <div className="relative w-full sm:w-72">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search 120+ exam sets..."
              className={`w-full pl-10 pr-4 py-3 rounded-2xl ${curTheme.card} ${curTheme.cardBorder} text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm transition`}
            />
          </div>
        </div>

        {/* Live Telemetry Scoreboard HUD */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
          <div className={`p-4.5 rounded-3xl ${curTheme.card} ${curTheme.cardBorder} text-center shadow-lg relative overflow-hidden`}>
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400" />
            <p className="text-3xl sm:text-4xl font-heading font-black text-blue-600 dark:text-blue-400 tracking-tight">{wpm}</p>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <Zap size={13} className="text-blue-500" /> Net WPM
            </p>
          </div>

          <div className={`p-4.5 rounded-3xl ${curTheme.card} ${curTheme.cardBorder} text-center shadow-lg relative overflow-hidden`}>
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-400" />
            <p className="text-3xl sm:text-4xl font-heading font-black text-indigo-600 dark:text-indigo-400 tracking-tight">{cpm}</p>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <BarChart3 size={13} className="text-indigo-500" /> CPM (Chars)
            </p>
          </div>

          <div className={`p-4.5 rounded-3xl ${curTheme.card} ${curTheme.cardBorder} text-center shadow-lg relative overflow-hidden`}>
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400" />
            <p className={`text-3xl sm:text-4xl font-heading font-black tracking-tight ${accuracy >= 95 ? "text-emerald-600 dark:text-emerald-400" : accuracy >= 80 ? "text-amber-600 dark:text-amber-400" : "text-rose-600 dark:text-rose-400"}`}>
              {accuracy}%
            </p>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <Target size={13} className="text-emerald-500" /> Accuracy
            </p>
          </div>

          <div className={`p-4.5 rounded-3xl ${curTheme.card} ${curTheme.cardBorder} text-center shadow-lg relative overflow-hidden`}>
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-500 to-pink-400" />
            <p className={`text-3xl sm:text-4xl font-heading font-black tracking-tight ${errorCount === 0 ? "text-slate-400" : "text-rose-600 dark:text-rose-400"}`}>
              {errorCount}
            </p>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <Flame size={13} className="text-rose-500" /> Errors
            </p>
          </div>

          <div className={`p-4.5 rounded-3xl ${curTheme.card} ${curTheme.cardBorder} text-center shadow-lg relative overflow-hidden col-span-2 sm:col-span-1`}>
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-400" />
            <p className="text-3xl sm:text-4xl font-heading font-black text-amber-600 dark:text-amber-400 tracking-tight">
              {timeLimit ? `${Math.max(0, timeLimit - timeElapsed)}s` : `${timeElapsed}s`}
            </p>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <Clock size={13} className="text-amber-500" /> {timeLimit ? "Remaining" : "Duration"}
            </p>
          </div>
        </div>

        {/* Live Typing Passage Canvas */}
        <div className={`p-7 sm:p-9 rounded-[2.5rem] ${curTheme.card} ${curTheme.cardBorder} shadow-2xl relative overflow-hidden`}>
          
          {/* Header & Progress Bar */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-5 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2.5">
              <span className="font-extrabold text-sm flex items-center gap-2">
                <Sparkles size={16} className="text-blue-500" />
                {selectedItem.title}
              </span>
              {selectedItem.source && (
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  {selectedItem.source}
                </span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold">
                Progress: <strong className="font-extrabold text-blue-600 dark:text-blue-400">{progressPercent}%</strong>
              </span>
              <div className="w-24 h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-200"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Letter by Letter Highlighting Canvas */}
          <div
            className={`p-6 rounded-2xl ${curTheme.canvasBg} text-xl sm:text-2xl leading-relaxed select-none max-h-72 overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-slate-400 tracking-normal ${
              mode === "code" ? "font-mono text-base" : mode === "nepali" ? "font-sans leading-loose text-2xl" : "font-sans"
            }`}
          >
            {targetText.split("").map((char, idx) => {
              let style = curTheme.charUnreached;
              let bg = "";

              if (idx < input.length) {
                if (input[idx] === char) {
                  style = "text-emerald-600 dark:text-emerald-400 font-semibold";
                } else {
                  style = "text-rose-600 dark:text-rose-300 font-bold underline decoration-rose-500 decoration-2";
                  bg = "bg-rose-100 dark:bg-rose-950/70 rounded px-0.5";
                }
              } else if (idx === input.length) {
                style = "text-white bg-blue-600 rounded px-1 animate-pulse shadow-md shadow-blue-500/40";
              }

              return (
                <span key={idx} className={`${style} ${bg} transition-colors duration-75`}>
                  {char}
                </span>
              );
            })}
          </div>
        </div>

        {/* Input Area */}
        <div className="relative">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => handleInput(e.target.value)}
            disabled={finished}
            placeholder={started ? "" : "⚡ Start typing here to begin examination..."}
            className={`w-full ${curTheme.inputBg} ${curTheme.inputText} rounded-3xl p-6 text-xl sm:text-2xl placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 resize-none h-36 transition duration-200 shadow-xl ${
              mode === "code" ? "font-mono" : "font-sans"
            }`}
            autoFocus
          />

          <div className="absolute right-5 bottom-5 flex items-center gap-2.5">
            <button
              onClick={() => resetTest(selectedItem)}
              title="Restart current test (Esc)"
              className="p-3 rounded-2xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 border border-slate-200 dark:border-slate-700 transition-all shadow-md flex items-center gap-1.5 text-xs font-bold"
            >
              <RotateCcw size={15} /> Restart
            </button>
            <button
              onClick={() => resetTest()}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white font-extrabold text-xs shadow-lg shadow-blue-500/25 transition-all flex items-center gap-1.5"
            >
              Next Test <ChevronRight size={15} />
            </button>
          </div>
        </div>

        {/* Interactive Virtual Keyboard (When Toggled) */}
        {showKeyboard && (
          <div className={`p-5 rounded-3xl ${curTheme.card} ${curTheme.cardBorder} shadow-xl space-y-2 select-none animate-fade-in`}>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-bold flex items-center gap-1.5">
                <Keyboard size={14} className="text-blue-500" /> Interactive Touch-Typing Visualizer
              </span>
              <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                Next Key: <strong className="text-white text-xs uppercase px-2 py-0.5 rounded bg-blue-600 font-mono">{nextChar === " " ? "SPACE" : nextChar || "DONE"}</strong>
              </span>
            </div>

            {KEYBOARD_ROWS.map((row, rIdx) => (
              <div key={rIdx} className="flex justify-center gap-1.5">
                {row.map((k) => {
                  const isNext = nextChar.toLowerCase() === k.toLowerCase() || (k === "Space" && nextChar === " ");
                  const isPressed = pressedKey === k.toLowerCase() || (k === "Space" && pressedKey === " ");
                  const isWide = k === "Backspace" || k === "Tab" || k === "Caps" || k === "Enter" || k === "Shift";
                  const isSpace = k === "Space";

                  return (
                    <div
                      key={k}
                      className={`keycap py-2.5 text-center text-xs font-mono font-bold rounded-xl transition-all duration-100 ${
                        isSpace
                          ? `w-72 ${curTheme.keyBg}`
                          : isWide
                          ? `w-20 ${curTheme.keyBg} text-[10px]`
                          : `w-10 ${curTheme.keyBg}`
                      } ${
                        isPressed
                          ? "keycap-active bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 ring-2 ring-emerald-400"
                          : isNext
                          ? "bg-blue-600 text-white border border-blue-400 ring-2 ring-blue-400/40 animate-pulse shadow-md"
                          : ""
                      }`}
                    >
                      {k}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}

        {/* Detailed Post-Test Victory Modal */}
        {finished && (
          <div className={`p-8 sm:p-10 rounded-[2.5rem] ${curTheme.card} border-2 border-emerald-500/40 shadow-2xl text-center space-y-7 animate-fade-in`}>
            <div className="w-20 h-20 rounded-3xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
              <CheckCircle2 size={42} />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold mb-2">
                <Award size={14} className="text-blue-500" />
                <span>Samrita Collection Evaluation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-black">
                Exam Practice Completed!
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Loksewa PSC Benchmark Result ({mode === "nepali" ? "Nepali Standard: 22.5 WPM" : "English Standard: 30 WPM"}):{" "}
                <span className={isPassing ? "text-emerald-600 dark:text-emerald-400 font-extrabold" : "text-rose-600 dark:text-rose-400 font-extrabold"}>
                  {isPassing ? "QUALIFIED ✅" : "NOT QUALIFIED ❌"}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5 max-w-3xl mx-auto">
              <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-700">
                <p className="text-3xl font-black text-blue-600 dark:text-blue-400">{wpm}</p>
                <p className="text-xs text-slate-500 font-bold mt-1">Net WPM</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-700">
                <p className="text-3xl font-black text-indigo-600 dark:text-indigo-400">{cpm}</p>
                <p className="text-xs text-slate-500 font-bold mt-1">CPM Speed</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-700">
                <p className="text-3xl font-black text-emerald-600 dark:text-emerald-400">{accuracy}%</p>
                <p className="text-xs text-slate-500 font-bold mt-1">Accuracy</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-700">
                <p className="text-3xl font-black text-amber-600 dark:text-amber-400">{timeElapsed}s</p>
                <p className="text-xs text-slate-500 font-bold mt-1">Duration</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 col-span-2 sm:col-span-1">
                <p className="text-3xl font-black text-purple-600 dark:text-purple-400">{loksewaScore} / 25</p>
                <p className="text-xs text-slate-500 font-bold mt-1">PSC Score</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => resetTest(selectedItem)}
                className="px-7 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-white font-bold text-sm border border-slate-200 dark:border-slate-700 transition-all shadow-md"
              >
                🔄 Retry Same Test
              </button>
              <button
                onClick={() => resetTest()}
                className="px-9 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:opacity-90 text-white font-extrabold text-sm shadow-xl shadow-blue-500/30 transition-all"
              >
                Next Random Test 🚀
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
