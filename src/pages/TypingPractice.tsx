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
  ChevronDown,
  ChevronUp,
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
  AlertTriangle,
  HelpCircle,
  TrendingUp,
  Settings2,
  Gauge,
  Check,
  X,
  Sliders,
  FolderOpen,
  BookOpen,
  FileText,
  Code2,
  CheckSquare,
  Play,
} from "lucide-react";
import SEO from "@/components/SEO";

type Mode = "english" | "nepali" | "code" | "exam";
type AgencyFilter = "all" | "Loksewa PSC" | "NOC" | "NEB" | "TU" | "Banking" | "Code";
type ColorTheme = "pearl" | "mint" | "latte" | "midnight";
type SoundType = "mechanical" | "bubble" | "typewriter" | "off";
type KeyboardLayout = "qwerty" | "nepali_preeti" | "nepali_unicode";

// Finger zone mapping for touch typing guidance
interface KeyInfo {
  key: string;
  shiftKey?: string;
  nepaliPreeti?: string;
  nepaliUnicode?: string;
  finger: "l-pinky" | "l-ring" | "l-middle" | "l-index" | "thumb" | "r-index" | "r-middle" | "r-ring" | "r-pinky";
  width?: string;
}

const KEYBOARD_LAYOUT_DATA: KeyInfo[][] = [
  // Row 1: Numbers
  [
    { key: "`", shiftKey: "~", nepaliPreeti: "ञ", nepaliUnicode: "ञ", finger: "l-pinky" },
    { key: "1", shiftKey: "!", nepaliPreeti: "१", nepaliUnicode: "१", finger: "l-pinky" },
    { key: "2", shiftKey: "@", nepaliPreeti: "२", nepaliUnicode: "२", finger: "l-ring" },
    { key: "3", shiftKey: "#", nepaliPreeti: "३", nepaliUnicode: "३", finger: "l-middle" },
    { key: "4", shiftKey: "$", nepaliPreeti: "४", nepaliUnicode: "४", finger: "l-index" },
    { key: "5", shiftKey: "%", nepaliPreeti: "५", nepaliUnicode: "५", finger: "l-index" },
    { key: "6", shiftKey: "^", nepaliPreeti: "६", nepaliUnicode: "६", finger: "r-index" },
    { key: "7", shiftKey: "&", nepaliPreeti: "७", nepaliUnicode: "७", finger: "r-index" },
    { key: "8", shiftKey: "*", nepaliPreeti: "८", nepaliUnicode: "८", finger: "r-middle" },
    { key: "9", shiftKey: "(", nepaliPreeti: "९", nepaliUnicode: "९", finger: "r-ring" },
    { key: "0", shiftKey: ")", nepaliPreeti: "०", nepaliUnicode: "०", finger: "r-pinky" },
    { key: "-", shiftKey: "_", nepaliPreeti: "-", nepaliUnicode: "-", finger: "r-pinky" },
    { key: "=", shiftKey: "+", nepaliPreeti: ".", nepaliUnicode: "=", finger: "r-pinky" },
    { key: "Backspace", finger: "r-pinky", width: "w-20 sm:w-24" },
  ],
  // Row 2: Top Letters
  [
    { key: "Tab", finger: "l-pinky", width: "w-14 sm:w-16" },
    { key: "q", shiftKey: "Q", nepaliPreeti: "त्र", nepaliUnicode: "त्त", finger: "l-pinky" },
    { key: "w", shiftKey: "W", nepaliPreeti: "ध", nepaliUnicode: "ध", finger: "l-ring" },
    { key: "e", shiftKey: "E", nepaliPreeti: "भ", nepaliUnicode: "भ", finger: "l-middle" },
    { key: "r", shiftKey: "R", nepaliPreeti: "च", nepaliUnicode: "च", finger: "l-index" },
    { key: "t", shiftKey: "T", nepaliPreeti: "त", nepaliUnicode: "त", finger: "l-index" },
    { key: "y", shiftKey: "Y", nepaliPreeti: "थ", nepaliUnicode: "थ", finger: "r-index" },
    { key: "u", shiftKey: "U", nepaliPreeti: "ग", nepaliUnicode: "ग", finger: "r-index" },
    { key: "i", shiftKey: "I", nepaliPreeti: "ष", nepaliUnicode: "ष", finger: "r-middle" },
    { key: "o", shiftKey: "O", nepaliPreeti: "य", nepaliUnicode: "य", finger: "r-ring" },
    { key: "p", shiftKey: "P", nepaliPreeti: "उ", nepaliUnicode: "उ", finger: "r-pinky" },
    { key: "[", shiftKey: "{", nepaliPreeti: "ृ", nepaliUnicode: "र्", finger: "r-pinky" },
    { key: "]", shiftKey: "}", nepaliPreeti: "े", nepaliUnicode: "े", finger: "r-pinky" },
    { key: "\\", shiftKey: "|", nepaliPreeti: "्", nepaliUnicode: "्", finger: "r-pinky" },
  ],
  // Row 3: Home Row
  [
    { key: "Caps", finger: "l-pinky", width: "w-16 sm:w-20" },
    { key: "a", shiftKey: "A", nepaliPreeti: "ब", nepaliUnicode: "आ", finger: "l-pinky" },
    { key: "s", shiftKey: "S", nepaliPreeti: "क", nepaliUnicode: "क", finger: "l-ring" },
    { key: "d", shiftKey: "D", nepaliPreeti: "म", nepaliUnicode: "म", finger: "l-middle" },
    { key: "f", shiftKey: "F", nepaliPreeti: "ा", nepaliUnicode: "ा", finger: "l-index" },
    { key: "g", shiftKey: "G", nepaliPreeti: "न", nepaliUnicode: "न", finger: "l-index" },
    { key: "h", shiftKey: "H", nepaliPreeti: "ज", nepaliUnicode: "ज", finger: "r-index" },
    { key: "j", shiftKey: "J", nepaliPreeti: "व", nepaliUnicode: "व", finger: "r-index" },
    { key: "k", shiftKey: "K", nepaliPreeti: "प", nepaliUnicode: "प", finger: "r-middle" },
    { key: "l", shiftKey: "L", nepaliPreeti: "ि", nepaliUnicode: "ि", finger: "r-ring" },
    { key: ";", shiftKey: ":", nepaliPreeti: "स", nepaliUnicode: "स", finger: "r-pinky" },
    { key: "'", shiftKey: '"', nepaliPreeti: "ु", nepaliUnicode: "ु", finger: "r-pinky" },
    { key: "Enter", finger: "r-pinky", width: "w-20 sm:w-24" },
  ],
  // Row 4: Bottom Letters
  [
    { key: "Shift", finger: "l-pinky", width: "w-20 sm:w-24" },
    { key: "z", shiftKey: "Z", nepaliPreeti: "श", nepaliUnicode: "श", finger: "l-pinky" },
    { key: "x", shiftKey: "X", nepaliPreeti: "ह", nepaliUnicode: "ह", finger: "l-ring" },
    { key: "c", shiftKey: "C", nepaliPreeti: "अ", nepaliUnicode: "अ", finger: "l-middle" },
    { key: "v", shiftKey: "V", nepaliPreeti: "ख", nepaliUnicode: "ख", finger: "l-index" },
    { key: "b", shiftKey: "B", nepaliPreeti: "द", nepaliUnicode: "द", finger: "l-index" },
    { key: "n", shiftKey: "N", nepaliPreeti: "ल", nepaliUnicode: "ल", finger: "r-index" },
    { key: "m", shiftKey: "M", nepaliPreeti: "फ", nepaliUnicode: "फ", finger: "r-index" },
    { key: ",", shiftKey: "<", nepaliPreeti: ",", nepaliUnicode: ",", finger: "r-middle" },
    { key: ".", shiftKey: ">", nepaliPreeti: "।", nepaliUnicode: "।", finger: "r-ring" },
    { key: "/", shiftKey: "?", nepaliPreeti: "र", nepaliUnicode: "र", finger: "r-pinky" },
    { key: "Shift", finger: "r-pinky", width: "w-20 sm:w-24" },
  ],
  // Row 5: Space Bar
  [
    { key: "Space", nepaliPreeti: "Space", nepaliUnicode: "Space", finger: "thumb", width: "w-72 sm:w-96 flex-1 max-w-md" },
  ],
];

const FINGER_COLORS: Record<KeyInfo["finger"], { border: string; bg: string; dot: string; label: string }> = {
  "l-pinky": { border: "border-pink-300 dark:border-pink-800", bg: "hover:bg-pink-50 dark:hover:bg-pink-950/40", dot: "bg-pink-500", label: "Left Pinky" },
  "l-ring": { border: "border-purple-300 dark:border-purple-800", bg: "hover:bg-purple-50 dark:hover:bg-purple-950/40", dot: "bg-purple-500", label: "Left Ring" },
  "l-middle": { border: "border-blue-300 dark:border-blue-800", bg: "hover:bg-blue-50 dark:hover:bg-blue-950/40", dot: "bg-blue-500", label: "Left Middle" },
  "l-index": { border: "border-cyan-300 dark:border-cyan-800", bg: "hover:bg-cyan-50 dark:hover:bg-cyan-950/40", dot: "bg-cyan-500", label: "Left Index" },
  "thumb": { border: "border-emerald-300 dark:border-emerald-800", bg: "hover:bg-emerald-50 dark:hover:bg-emerald-950/40", dot: "bg-emerald-500", label: "Thumb" },
  "r-index": { border: "border-cyan-300 dark:border-cyan-800", bg: "hover:bg-cyan-50 dark:hover:bg-cyan-950/40", dot: "bg-cyan-500", label: "Right Index" },
  "r-middle": { border: "border-blue-300 dark:border-blue-800", bg: "hover:bg-blue-50 dark:hover:bg-blue-950/40", dot: "bg-blue-500", label: "Right Middle" },
  "r-ring": { border: "border-purple-300 dark:border-purple-800", bg: "hover:bg-purple-50 dark:hover:bg-purple-950/40", dot: "bg-purple-500", label: "Right Ring" },
  "r-pinky": { border: "border-pink-300 dark:border-pink-800", bg: "hover:bg-pink-50 dark:hover:bg-pink-950/40", dot: "bg-pink-500", label: "Right Pinky" },
};

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
    charUnreached: string;
    keyBg: string;
    keyText: string;
  }
> = {
  pearl: {
    name: "🌸 Pearl Light",
    bg: "bg-gradient-to-br from-slate-50 via-indigo-50/50 to-blue-50/60",
    text: "text-slate-800",
    card: "bg-white/85 backdrop-blur-xl shadow-xl shadow-indigo-100/50",
    cardBorder: "border border-slate-200/80",
    canvasBg: "bg-white/95 border border-slate-200 shadow-inner",
    inputBg: "bg-white border-2 border-slate-200 shadow-sm",
    inputText: "text-slate-900",
    charUnreached: "text-slate-400/60",
    keyBg: "bg-slate-100/90 border border-slate-200/90 text-slate-700 shadow-sm",
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
    charUnreached: "text-emerald-800/40",
    keyBg: "bg-emerald-50/80 border border-emerald-200 text-emerald-800 shadow-sm",
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
    charUnreached: "text-slate-500/50",
    keyBg: "bg-slate-800/90 border border-slate-700 text-slate-300 shadow-sm",
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
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [missedKeysMap, setMissedKeysMap] = useState<Record<string, number>>({});
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timeLimit, setTimeLimit] = useState<number | null>(null); // null = free, 60, 120, 180, 300, 600
  const [soundType, setSoundType] = useState<SoundType>("mechanical");
  const [showKeyboard, setShowKeyboard] = useState(true); // Default to visible for easy reference
  const [keyboardLayout, setKeyboardLayout] = useState<KeyboardLayout>("qwerty");
  const [showFingerGuide, setShowFingerGuide] = useState(true);
  const [pressedKey, setPressedKey] = useState<string>("");
  
  // Accordion open/close states
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    setsBrowser: false,
    timerClock: false,
    rulesGuide: false,
    englishSets: true,
    nepaliSets: true,
    codeSets: false,
    examSets: false,
  });

  const [bestWpm, setBestWpm] = useState<number>(() => {
    return Number(localStorage.getItem("loksewa_best_wpm")) || 0;
  });

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const curTheme = THEME_STYLES[theme];

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Keep keyboard layout aligned with mode
  useEffect(() => {
    if (mode === "nepali") {
      setKeyboardLayout("nepali_unicode");
    } else {
      setKeyboardLayout("qwerty");
    }
  }, [mode]);

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
      setStreak(0);
      setMaxStreak(0);
      setMissedKeysMap({});
      setTimeElapsed(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    },
    [getDataset]
  );

  useEffect(() => {
    resetTest();
  }, [mode, agency, difficulty, resetTest]);

  // Keyboard shortcut listener for restart (Esc)
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
  const playKeySound = (isError = false) => {
    if (soundType === "off") return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      if (isError) {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(160, ctx.currentTime);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
        return;
      }

      if (soundType === "bubble") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(800 + Math.random() * 200, ctx.currentTime);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      } else if (soundType === "typewriter") {
        osc.type = "square";
        osc.frequency.setValueAtTime(320, ctx.currentTime);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);
      } else {
        // Mechanical click
        osc.type = "sine";
        osc.frequency.setValueAtTime(540 + Math.random() * 40, ctx.currentTime);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      }

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
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
    setPressedKey(lastChar);
    setTimeout(() => setPressedKey(""), 120);

    const targetText = selectedItem.text;
    const currentIndex = val.length - 1;
    const isCurrentCorrect = currentIndex >= 0 && val[currentIndex] === targetText[currentIndex];

    // Play click sound
    playKeySound(!isCurrentCorrect && val.length > input.length);

    // Track streaks
    if (val.length > input.length) {
      if (isCurrentCorrect) {
        setStreak((prev) => {
          const next = prev + 1;
          setMaxStreak((m) => Math.max(m, next));
          return next;
        });
      } else {
        setStreak(0);
        const expectedChar = targetText[currentIndex] || "unknown";
        setMissedKeysMap((prev) => ({
          ...prev,
          [expectedChar]: (prev[expectedChar] || 0) + 1,
        }));
      }
    }

    setInput(val);

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

  // Virtual key click support (allows typing directly by clicking virtual keys)
  const handleVirtualKeyClick = (k: KeyInfo) => {
    if (finished) return;
    inputRef.current?.focus();
    if (k.key === "Backspace") {
      handleInput(input.slice(0, -1));
    } else if (k.key === "Space") {
      handleInput(input + " ");
    } else if (k.key === "Tab" || k.key === "Caps" || k.key === "Shift" || k.key === "Enter") {
      // Functional keys
    } else {
      let charToAdd = k.key;
      if (keyboardLayout === "nepali_unicode" && k.nepaliUnicode) {
        charToAdd = k.nepaliUnicode;
      }
      handleInput(input + charToAdd);
    }
  };

  const dataset = getDataset();
  const targetText = selectedItem.text;
  const progressPercent = Math.min(100, Math.round((input.length / targetText.length) * 100));
  const nextChar = targetText[input.length] || "";

  // Loksewa exam evaluation benchmarks
  const requiredWpm = mode === "nepali" ? 22.5 : 30;
  const isPassing = wpm >= requiredWpm && accuracy >= 85;
  const loksewaScore = Math.max(
    0,
    Math.min(25, Math.round((wpm / 40) * 25 * (accuracy / 100)))
  );

  // Top missed keys list for diagnostics
  const missedKeysSorted = Object.entries(missedKeysMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (
    <div className={`min-h-screen ${curTheme.bg} ${curTheme.text} py-8 px-4 sm:px-6 lg:px-8 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300`}>
      <SEO
        title="Nepali & English Speed Typing Master with Live Virtual Keyboard & Accordion Sets (120+ Sets)"
        description="Real-time Nepali Unicode, Preeti & English typing speed test with accordion set explorer, live countdown clock options, dynamic virtual keyboard, and Loksewa PSC benchmark simulation."
        canonical="https://amritagupta.com.np/typing"
      />

      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Top Header Card */}
        <div className={`p-6 sm:p-7 rounded-[2rem] ${curTheme.card} ${curTheme.cardBorder} flex flex-col md:flex-row items-center justify-between gap-5 transition-all duration-300`}>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 flex-shrink-0">
              <Keyboard size={28} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono">
                  Samrita Collection
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <ShieldCheck size={12} /> PSC Certified Benchmarks
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center gap-1">
                  📂 Accordion Sets
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-heading font-black tracking-tight">
                Typing Speed Master Pro
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                120+ Real Exam Sets with Accordion Browser, Clock Presets & Virtual Keyboard
              </p>
            </div>
          </div>

          {/* Quick Settings Bar: Themes, Sound & Best Score */}
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

            {/* Sound Switcher */}
            <button
              onClick={() => {
                const next: SoundType =
                  soundType === "mechanical" ? "bubble" : soundType === "bubble" ? "typewriter" : soundType === "typewriter" ? "off" : "mechanical";
                setSoundType(next);
              }}
              title={`Sound: ${soundType}`}
              className={`px-3 py-2 rounded-2xl border text-xs font-bold flex items-center gap-1.5 transition-all ${
                soundType !== "off"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 border-blue-500"
                  : "bg-white/90 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white"
              }`}
            >
              {soundType !== "off" ? <Volume2 size={15} /> : <VolumeX size={15} />}
              <span className="capitalize">{soundType === "off" ? "Muted" : soundType}</span>
            </button>

            {/* Best Score Badge */}
            <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-300 dark:border-amber-500/30 px-3.5 py-1.5 rounded-2xl">
              <Trophy size={16} className="text-amber-500" />
              <div>
                <p className="text-[10px] uppercase font-extrabold text-amber-700 dark:text-amber-300 leading-none">Record</p>
                <p className="text-xs font-black text-amber-800 dark:text-amber-200 leading-tight">{bestWpm} WPM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Category Selector Tabs (Clicking any tab also opens its accordion) */}
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
                onClick={() => {
                  setMode(tab.id as Mode);
                  // Open the accordion explorer for this category
                  setOpenAccordions((prev) => ({
                    ...prev,
                    setsBrowser: true,
                    [tab.id === "english" ? "englishSets" : tab.id === "nepali" ? "nepaliSets" : tab.id === "code" ? "codeSets" : "examSets"]: true,
                  }));
                }}
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

        {/* 🕒 ACCORDION 1: CLOCK & TIMER PRESET ACCORDION BAR */}
        <div className={`rounded-3xl ${curTheme.card} ${curTheme.cardBorder} shadow-md overflow-hidden transition-all duration-300`}>
          <button
            onClick={() => toggleAccordion("timerClock")}
            className="w-full p-4.5 px-6 flex items-center justify-between hover:bg-slate-500/5 transition cursor-pointer text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="text-sm font-extrabold flex items-center gap-2">
                  <span>⏱️ Open Clock & Exam Duration (समय र घडी विकल्पहरू)</span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    {timeLimit ? `${Math.floor(timeLimit / 60)} min clock active` : "Free Unlimited"}
                  </span>
                </h3>
                <p className="text-xs text-slate-500">
                  Click to open 1m sprint, 2m warmup, 3m standard, 5m official PSC exam clock, or free practice
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-xs font-bold hidden sm:inline">
                {openAccordions.timerClock ? "Close Clock" : "Open Clock"}
              </span>
              {openAccordions.timerClock ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
          </button>

          {/* Clock Accordion Content */}
          {openAccordions.timerClock && (
            <div className="p-5 pt-1 border-t border-slate-200/80 dark:border-slate-800 bg-slate-500/5 space-y-4 animate-fade-in">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-3">
                {[
                  { val: null, label: "Free Practice", time: "∞", desc: "No time pressure", icon: "🌱" },
                  { val: 60, label: "1 Min Sprint", time: "60s", desc: "Quick speed test", icon: "⚡" },
                  { val: 120, label: "2 Min Warmup", time: "120s", desc: "Warmup cadence", icon: "🔥" },
                  { val: 180, label: "3 Min Standard", time: "180s", desc: "General exam test", icon: "🎯" },
                  { val: 300, label: "5 Min PSC Clock", time: "300s", desc: "Official 25 Marks", icon: "🏛️" },
                  { val: 600, label: "10 Min Master", time: "600s", desc: "High endurance", icon: "👑" },
                ].map((clockOpt) => {
                  const isSelected = timeLimit === clockOpt.val;
                  return (
                    <button
                      key={String(clockOpt.val)}
                      onClick={() => {
                        setTimeLimit(clockOpt.val);
                        resetTest(selectedItem);
                      }}
                      className={`p-3.5 rounded-2xl text-left border transition-all ${
                        isSelected
                          ? "bg-gradient-to-br from-emerald-600 to-teal-600 text-white border-emerald-500 shadow-lg shadow-emerald-500/25 ring-2 ring-emerald-400/40"
                          : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-emerald-400"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-base">{clockOpt.icon}</span>
                        <span className={`text-xs font-mono font-black px-2 py-0.5 rounded-lg ${isSelected ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}`}>
                          {clockOpt.time}
                        </span>
                      </div>
                      <p className={`text-xs font-extrabold ${isSelected ? "text-white" : "text-slate-800 dark:text-slate-200"}`}>
                        {clockOpt.label}
                      </p>
                      <p className={`text-[10px] ${isSelected ? "text-emerald-100" : "text-slate-400"}`}>
                        {clockOpt.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* 📂 ACCORDION 2: COMPREHENSIVE 120+ EXAM SETS ACCORDION BROWSER */}
        <div className={`rounded-3xl ${curTheme.card} ${curTheme.cardBorder} shadow-md overflow-hidden transition-all duration-300`}>
          <button
            onClick={() => toggleAccordion("setsBrowser")}
            className="w-full p-4.5 px-6 flex items-center justify-between hover:bg-slate-500/5 transition cursor-pointer text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                <FolderOpen size={20} />
              </div>
              <div>
                <h3 className="text-sm font-extrabold flex items-center gap-2">
                  <span>📂 Browse All 120+ Sets in Accordion (सबै सेटहरू Accordion मा हेर्नुहोस्)</span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400">
                    {dataset.length} Sets in Current Filter
                  </span>
                </h3>
                <p className="text-xs text-slate-500">
                  Open and select any question directly from Loksewa, NOC, NEB, TU, Banking, or Code collections
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-xs font-bold hidden sm:inline">
                {openAccordions.setsBrowser ? "Collapse Sets" : "Open Accordion"}
              </span>
              {openAccordions.setsBrowser ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
          </button>

          {/* Sets Accordion Content */}
          {openAccordions.setsBrowser && (
            <div className="p-5 pt-2 border-t border-slate-200/80 dark:border-slate-800 bg-slate-500/5 space-y-4 animate-fade-in">
              
              {/* Filter controls inside accordion */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <div className="relative w-full sm:w-80">
                  <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search sets by title or topic..."
                    className={`w-full pl-10 pr-4 py-2.5 rounded-2xl ${curTheme.card} ${curTheme.cardBorder} text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  />
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
                  <span className="text-[11px] font-bold text-slate-400 mr-1">Agency:</span>
                  {(["all", "Loksewa PSC", "NOC", "NEB", "TU", "Banking", "Code"] as const).map((a) => (
                    <button
                      key={a}
                      onClick={() => setAgency(a)}
                      className={`px-3 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                        agency === a
                          ? "bg-blue-600 text-white shadow-sm"
                          : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                      }`}
                    >
                      {a === "all" ? "All" : a}
                    </button>
                  ))}
                </div>
              </div>

              {/* Nested Accordion 2.1: English Typing Sets */}
              <div className="border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden bg-white/80 dark:bg-slate-900/80">
                <button
                  onClick={() => toggleAccordion("englishSets")}
                  className="w-full p-3.5 px-4 flex items-center justify-between bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  <span className="font-extrabold text-xs flex items-center gap-2">
                    <BookOpen size={15} className="text-blue-500" />
                    🇬🇧 English Typing Sets (Loksewa, NOC, NEB, TU, Banking, Computer Fundamentals)
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600">
                      {englishTypingData.length} Sets
                    </span>
                    {openAccordions.englishSets ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {openAccordions.englishSets && (
                  <div className="p-3 max-h-72 overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
                    {englishTypingData
                      .filter((item) => agency === "all" || item.source === agency)
                      .map((item) => {
                        const isCurrent = selectedItem.id === item.id;
                        return (
                          <div
                            key={item.id}
                            onClick={() => {
                              resetTest(item);
                              setMode("english");
                            }}
                            className={`p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                              isCurrent
                                ? "bg-blue-50 dark:bg-blue-950/50 border-blue-400 ring-2 ring-blue-400/20"
                                : "hover:bg-slate-50 dark:hover:bg-slate-800/40 border-slate-200/70 dark:border-slate-800"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${isCurrent ? "bg-blue-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600"}`}>
                                #{item.id}
                              </span>
                              <div>
                                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                                  {item.title}
                                </p>
                                <p className="text-[11px] text-slate-400 line-clamp-1">
                                  {item.text}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 flex-shrink-0">
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                                {item.source || "PSC"}
                              </span>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.difficulty === "easy" ? "bg-emerald-500/10 text-emerald-600" : item.difficulty === "medium" ? "bg-amber-500/10 text-amber-600" : "bg-rose-500/10 text-rose-600"}`}>
                                {item.difficulty.toUpperCase()}
                              </span>
                              {isCurrent ? (
                                <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
                                  <Check size={14} /> Active
                                </span>
                              ) : (
                                <button className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white text-[11px] font-bold transition">
                                  Select
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>

              {/* Nested Accordion 2.2: Nepali Typing Sets */}
              <div className="border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden bg-white/80 dark:bg-slate-900/80">
                <button
                  onClick={() => toggleAccordion("nepaliSets")}
                  className="w-full p-3.5 px-4 flex items-center justify-between bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  <span className="font-extrabold text-xs flex items-center gap-2">
                    <FileText size={15} className="text-emerald-500" />
                    🇳🇵 नेपाली युनिकोड तथा ऐन/नियम Sets (सरकारी टिप्पणी, पत्राचार, ऐन र कानुन)
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600">
                      {nepaliTypingData.length} Sets
                    </span>
                    {openAccordions.nepaliSets ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {openAccordions.nepaliSets && (
                  <div className="p-3 max-h-72 overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
                    {nepaliTypingData
                      .filter((item) => agency === "all" || item.source === agency)
                      .map((item) => {
                        const isCurrent = selectedItem.id === item.id;
                        return (
                          <div
                            key={item.id}
                            onClick={() => {
                              resetTest(item);
                              setMode("nepali");
                            }}
                            className={`p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                              isCurrent
                                ? "bg-emerald-50 dark:bg-emerald-950/50 border-emerald-400 ring-2 ring-emerald-400/20"
                                : "hover:bg-slate-50 dark:hover:bg-slate-800/40 border-slate-200/70 dark:border-slate-800"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${isCurrent ? "bg-emerald-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600"}`}>
                                #{item.id}
                              </span>
                              <div>
                                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                                  {item.title}
                                </p>
                                <p className="text-[11px] text-slate-400 line-clamp-1 font-sans">
                                  {item.text}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 flex-shrink-0">
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                                {item.source || "PSC"}
                              </span>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.difficulty === "easy" ? "bg-emerald-500/10 text-emerald-600" : item.difficulty === "medium" ? "bg-amber-500/10 text-amber-600" : "bg-rose-500/10 text-rose-600"}`}>
                                {item.difficulty.toUpperCase()}
                              </span>
                              {isCurrent ? (
                                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                                  <Check size={14} /> Active
                                </span>
                              ) : (
                                <button className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white text-[11px] font-bold transition">
                                  Select
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>

              {/* Nested Accordion 2.3: Code & Programming Sets */}
              <div className="border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden bg-white/80 dark:bg-slate-900/80">
                <button
                  onClick={() => toggleAccordion("codeSets")}
                  className="w-full p-3.5 px-4 flex items-center justify-between bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  <span className="font-extrabold text-xs flex items-center gap-2">
                    <Code2 size={15} className="text-purple-500" />
                    💻 Code & Syntax Typing Sets (C, SQL, HTML, Python, JS)
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600">
                      {codeTypingData.length} Sets
                    </span>
                    {openAccordions.codeSets ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {openAccordions.codeSets && (
                  <div className="p-3 max-h-72 overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
                    {codeTypingData.map((item) => {
                      const isCurrent = selectedItem.id === item.id;
                      return (
                        <div
                          key={item.id}
                          onClick={() => {
                            resetTest(item);
                            setMode("code");
                          }}
                          className={`p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                            isCurrent
                              ? "bg-purple-50 dark:bg-purple-950/50 border-purple-400 ring-2 ring-purple-400/20"
                              : "hover:bg-slate-50 dark:hover:bg-slate-800/40 border-slate-200/70 dark:border-slate-800"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${isCurrent ? "bg-purple-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600"}`}>
                              #{item.id}
                            </span>
                            <div>
                              <p className="text-xs font-bold font-mono text-slate-800 dark:text-slate-200">
                                {item.title}
                              </p>
                              <p className="text-[11px] text-slate-400 font-mono line-clamp-1">
                                {item.text}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.difficulty === "easy" ? "bg-emerald-500/10 text-emerald-600" : item.difficulty === "medium" ? "bg-amber-500/10 text-amber-600" : "bg-rose-500/10 text-rose-600"}`}>
                              {item.difficulty.toUpperCase()}
                            </span>
                            {isCurrent ? (
                              <span className="text-xs font-bold text-purple-600 flex items-center gap-1">
                                <Check size={14} /> Active
                              </span>
                            ) : (
                              <button className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-purple-600 hover:text-white text-[11px] font-bold transition">
                                Select
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Nested Accordion 2.4: 5-Minute PSC Full Exam Paragraphs */}
              <div className="border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden bg-white/80 dark:bg-slate-900/80">
                <button
                  onClick={() => toggleAccordion("examSets")}
                  className="w-full p-3.5 px-4 flex items-center justify-between bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  <span className="font-extrabold text-xs flex items-center gap-2">
                    <CheckSquare size={15} className="text-rose-500" />
                    📋 5-Minute PSC Practical Examination Paragraphs (Official 25 Marks)
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-600">
                      {examParagraphsData.length} Sets
                    </span>
                    {openAccordions.examSets ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {openAccordions.examSets && (
                  <div className="p-3 max-h-72 overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
                    {examParagraphsData.map((item) => {
                      const isCurrent = selectedItem.id === item.id;
                      return (
                        <div
                          key={item.id}
                          onClick={() => {
                            resetTest(item);
                            setMode("exam");
                            setTimeLimit(300); // Set to 5 min clock automatically
                          }}
                          className={`p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                            isCurrent
                              ? "bg-rose-50 dark:bg-rose-950/50 border-rose-400 ring-2 ring-rose-400/20"
                              : "hover:bg-slate-50 dark:hover:bg-slate-800/40 border-slate-200/70 dark:border-slate-800"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${isCurrent ? "bg-rose-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600"}`}>
                              #{item.id}
                            </span>
                            <div>
                              <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                                {item.title}
                              </p>
                              <p className="text-[11px] text-slate-400 line-clamp-1 font-sans">
                                {item.text}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-600">
                              5-MIN EXAM
                            </span>
                            {isCurrent ? (
                              <span className="text-xs font-bold text-rose-600 flex items-center gap-1">
                                <Check size={14} /> Active
                              </span>
                            ) : (
                              <button className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-rose-600 hover:text-white text-[11px] font-bold transition">
                                Select & Start
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>
          )}
        </div>

        {/* Test Selector Dropdown + Search Input Bar */}
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

        {/* Live Telemetry Scoreboard HUD with Advanced Checks */}
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
          {/* Net WPM */}
          <div className={`p-4 rounded-3xl ${curTheme.card} ${curTheme.cardBorder} text-center shadow-lg relative overflow-hidden`}>
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400" />
            <p className="text-3xl sm:text-4xl font-heading font-black text-blue-600 dark:text-blue-400 tracking-tight">{wpm}</p>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <Zap size={13} className="text-blue-500" /> Net WPM
            </p>
          </div>

          {/* CPM */}
          <div className={`p-4 rounded-3xl ${curTheme.card} ${curTheme.cardBorder} text-center shadow-lg relative overflow-hidden`}>
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-400" />
            <p className="text-3xl sm:text-4xl font-heading font-black text-indigo-600 dark:text-indigo-400 tracking-tight">{cpm}</p>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <BarChart3 size={13} className="text-indigo-500" /> CPM
            </p>
          </div>

          {/* Live Accuracy Check */}
          <div className={`p-4 rounded-3xl ${curTheme.card} ${curTheme.cardBorder} text-center shadow-lg relative overflow-hidden`}>
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400" />
            <p className={`text-3xl sm:text-4xl font-heading font-black tracking-tight ${accuracy >= 95 ? "text-emerald-600 dark:text-emerald-400" : accuracy >= 85 ? "text-amber-600 dark:text-amber-400" : "text-rose-600 dark:text-rose-400"}`}>
              {accuracy}%
            </p>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <Target size={13} className="text-emerald-500" /> Accuracy
            </p>
          </div>

          {/* Error Count */}
          <div className={`p-4 rounded-3xl ${curTheme.card} ${curTheme.cardBorder} text-center shadow-lg relative overflow-hidden`}>
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-500 to-pink-400" />
            <p className={`text-3xl sm:text-4xl font-heading font-black tracking-tight ${errorCount === 0 ? "text-slate-400" : "text-rose-600 dark:text-rose-400"}`}>
              {errorCount}
            </p>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <Flame size={13} className="text-rose-500" /> Errors
            </p>
          </div>

          {/* Live Streak Check */}
          <div className={`p-4 rounded-3xl ${curTheme.card} ${curTheme.cardBorder} text-center shadow-lg relative overflow-hidden`}>
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 to-amber-400" />
            <p className="text-3xl sm:text-4xl font-heading font-black text-orange-600 dark:text-orange-400 tracking-tight">{streak}</p>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <TrendingUp size={13} className="text-orange-500" /> Max: {maxStreak}
            </p>
          </div>

          {/* Clock Timer display */}
          <div className={`p-4 rounded-3xl ${curTheme.card} ${curTheme.cardBorder} text-center shadow-lg relative overflow-hidden col-span-2 sm:col-span-1`}>
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-400" />
            <p className="text-3xl sm:text-4xl font-heading font-black text-amber-600 dark:text-amber-400 tracking-tight">
              {timeLimit ? `${Math.max(0, timeLimit - timeElapsed)}s` : `${timeElapsed}s`}
            </p>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <Clock size={13} className="text-amber-500" /> {timeLimit ? "Clock Left" : "Duration"}
            </p>
          </div>
        </div>

        {/* Live PSC Qualification & Benchmark Check Bar */}
        <div className={`p-3.5 px-5 rounded-2xl ${curTheme.card} ${curTheme.cardBorder} flex flex-col sm:flex-row items-center justify-between gap-3 text-xs`}>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className={`p-2 rounded-xl flex items-center justify-center ${isPassing ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400" : "bg-amber-500/20 text-amber-600 dark:text-amber-400"}`}>
              {isPassing ? <Check size={18} /> : <Gauge size={18} />}
            </div>
            <div>
              <span className="font-extrabold flex items-center gap-1.5">
                Loksewa Standard Check:
                <strong className={isPassing ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"}>
                  {isPassing ? "QUALIFIED (उत्तीर्ण योग्य)" : "IN PROGRESS (अभ्यास जारी)"}
                </strong>
              </span>
              <p className="text-[11px] text-slate-500">
                Requirement: <strong>{requiredWpm} WPM</strong> with <strong>85%+ Accuracy</strong> · Current: {wpm} WPM ({accuracy}%)
              </p>
            </div>
          </div>

          {/* Missed Key diagnostic check */}
          {missedKeysSorted.length > 0 && (
            <div className="flex items-center gap-1.5 text-[11px] bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 px-3 py-1.5 rounded-xl text-rose-700 dark:text-rose-300">
              <AlertTriangle size={13} className="text-rose-500" />
              <span>Weak Keys:</span>
              <div className="flex items-center gap-1 font-mono font-bold">
                {missedKeysSorted.map(([k, count]) => (
                  <span key={k} className="bg-white dark:bg-rose-900/60 px-1.5 py-0.5 rounded border border-rose-200 shadow-2xs">
                    {k === " " ? "SPC" : k} ({count})
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Live Typing Passage Canvas */}
        <div className={`p-6 sm:p-8 rounded-[2.5rem] ${curTheme.card} ${curTheme.cardBorder} shadow-2xl relative overflow-hidden`}>
          
          {/* Header & Progress Bar */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
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
            className={`p-6 rounded-2xl ${curTheme.canvasBg} text-xl sm:text-2xl leading-relaxed select-none max-h-64 overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-slate-400 tracking-normal ${
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

        {/* Input Area with Action Bar */}
        <div className="relative">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => handleInput(e.target.value)}
            disabled={finished}
            placeholder={started ? "" : "⚡ Start typing here or on keyboard to begin test..."}
            className={`w-full ${curTheme.inputBg} ${curTheme.inputText} rounded-3xl p-6 text-xl sm:text-2xl placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 resize-none h-32 transition duration-200 shadow-xl ${
              mode === "code" ? "font-mono" : "font-sans"
            }`}
            autoFocus
          />

          <div className="absolute right-4 bottom-4 flex items-center gap-2">
            <button
              onClick={() => resetTest(selectedItem)}
              title="Restart current test (Esc)"
              className="p-2.5 sm:px-3.5 sm:py-2.5 rounded-2xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 border border-slate-200 dark:border-slate-700 transition-all shadow-md flex items-center gap-1.5 text-xs font-bold"
            >
              <RotateCcw size={14} /> <span className="hidden sm:inline">Restart</span>
            </button>
            <button
              onClick={() => resetTest()}
              className="px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white font-extrabold text-xs shadow-lg shadow-blue-500/25 transition-all flex items-center gap-1.5"
            >
              Next <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* ⌨️ VIRTUAL KEYBOARD CONTROLS BAR (SHOW / HIDE OPTION) */}
        <div className={`p-4 rounded-3xl ${curTheme.card} ${curTheme.cardBorder} flex flex-col md:flex-row items-center justify-between gap-3 shadow-md`}>
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            {/* Show / Hide Toggle Button */}
            <button
              onClick={() => setShowKeyboard(!showKeyboard)}
              className={`px-4 py-2 rounded-2xl text-xs font-extrabold flex items-center gap-2 transition-all shadow-sm ${
                showKeyboard
                  ? "bg-blue-600 text-white shadow-blue-500/20 ring-2 ring-blue-400/30"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              {showKeyboard ? <EyeOff size={15} /> : <Eye size={15} />}
              <span>{showKeyboard ? "Hide Keyboard (किबोर्ड लुकाउनुहोस्)" : "Show Keyboard (किबोर्ड देखाउनुहोस्)"}</span>
            </button>

            {/* Finger Guide Toggle */}
            {showKeyboard && (
              <button
                onClick={() => setShowFingerGuide(!showFingerGuide)}
                className={`px-3 py-2 rounded-2xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                  showFingerGuide
                    ? "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                <span>Finger Zones: {showFingerGuide ? "ON" : "OFF"}</span>
              </button>
            )}
          </div>

          {/* Keyboard Layout Selector (QWERTY / Nepali Unicode / Nepali Preeti) */}
          {showKeyboard && (
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto justify-end">
              <span className="text-[11px] font-bold text-slate-400 mr-1 hidden sm:inline">Layout:</span>
              {[
                { id: "qwerty", label: "English QWERTY" },
                { id: "nepali_unicode", label: "🇳🇵 नेपाली Unicode" },
                { id: "nepali_preeti", label: "🇳🇵 Preeti Map" },
              ].map((l) => (
                <button
                  key={l.id}
                  onClick={() => setKeyboardLayout(l.id as KeyboardLayout)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                    keyboardLayout === l.id
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ⌨️ INTERACTIVE VIRTUAL KEYBOARD DISPLAY */}
        {showKeyboard && (
          <div className={`p-4 sm:p-6 rounded-3xl ${curTheme.card} ${curTheme.cardBorder} shadow-2xl space-y-2.5 select-none transition-all duration-300 animate-fade-in overflow-x-auto`}>
            
            {/* Keyboard Status Header */}
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2 px-1">
              <div className="flex items-center gap-2">
                <Keyboard size={15} className="text-blue-500" />
                <span className="font-bold">
                  {keyboardLayout === "qwerty"
                    ? "Standard QWERTY Touch-Typing Visualizer"
                    : keyboardLayout === "nepali_unicode"
                    ? "नेपाली युनिकोड लेआउट (Nepali Unicode Layout)"
                    : "प्रिती किबोर्ड म्यापिङ (Preeti Keymap Reference)"}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-slate-400 hidden sm:inline">Target Key:</span>
                <span className="text-white text-xs font-mono font-extrabold px-3 py-1 rounded-xl bg-blue-600 shadow-md shadow-blue-500/30 animate-pulse">
                  {nextChar === " " ? "SPACEBAR" : nextChar || "FINISHED"}
                </span>
              </div>
            </div>

            {/* Keyboard Keycap Rows */}
            <div className="space-y-1.5 min-w-[620px]">
              {KEYBOARD_LAYOUT_DATA.map((row, rIdx) => (
                <div key={rIdx} className="flex justify-center gap-1 sm:gap-1.5">
                  {row.map((k, kIdx) => {
                    const isNext =
                      nextChar.toLowerCase() === k.key.toLowerCase() ||
                      (k.key === "Space" && nextChar === " ") ||
                      (keyboardLayout === "nepali_unicode" && k.nepaliUnicode === nextChar) ||
                      (keyboardLayout === "nepali_preeti" && k.nepaliPreeti === nextChar);

                    const isPressed =
                      pressedKey.toLowerCase() === k.key.toLowerCase() ||
                      (k.key === "Space" && pressedKey === " ") ||
                      (k.nepaliUnicode && pressedKey === k.nepaliUnicode);

                    const fingerData = FINGER_COLORS[k.finger];
                    const isSpace = k.key === "Space";

                    // Determine primary and secondary labels
                    let primaryLabel = k.key;
                    let subLabel: string | undefined = k.shiftKey;

                    if (keyboardLayout === "nepali_unicode" && k.nepaliUnicode && !isSpace) {
                      primaryLabel = k.nepaliUnicode;
                      subLabel = k.key.toUpperCase();
                    } else if (keyboardLayout === "nepali_preeti" && k.nepaliPreeti && !isSpace) {
                      primaryLabel = k.nepaliPreeti;
                      subLabel = k.key;
                    }

                    return (
                      <button
                        key={`${rIdx}-${kIdx}`}
                        onClick={() => handleVirtualKeyClick(k)}
                        className={`keycap relative py-2 sm:py-2.5 px-1 sm:px-2 text-center rounded-xl font-mono transition-all duration-75 flex flex-col items-center justify-center cursor-pointer active:scale-95 ${
                          k.width || "w-9 sm:w-12 h-11 sm:h-12"
                        } ${curTheme.keyBg} ${
                          showFingerGuide && !isPressed && !isNext
                            ? `border ${fingerData.border} ${fingerData.bg}`
                            : ""
                        } ${
                          isPressed
                            ? "!bg-emerald-500 !text-white shadow-lg shadow-emerald-500/40 ring-2 ring-emerald-300 scale-95 z-10"
                            : isNext
                            ? "!bg-blue-600 !text-white border-2 !border-blue-300 ring-4 ring-blue-400/30 animate-pulse shadow-lg shadow-blue-500/30 scale-105 z-10"
                            : ""
                        }`}
                      >
                        {/* Sub-label (Shift / English Key) */}
                        {subLabel && !isSpace && (
                          <span className={`text-[8px] sm:text-[9px] font-sans leading-none opacity-60 absolute top-1 right-1.5 ${isNext || isPressed ? "text-white" : ""}`}>
                            {subLabel}
                          </span>
                        )}

                        {/* Primary Label */}
                        <span className={`text-xs sm:text-sm font-bold leading-tight ${isNext || isPressed ? "text-white" : ""}`}>
                          {isSpace ? "SPACE" : primaryLabel}
                        </span>

                        {/* Finger dot indicator */}
                        {showFingerGuide && !isSpace && (
                          <span className={`w-1 h-1 rounded-full ${fingerData.dot} absolute bottom-1 left-1/2 -translate-x-1/2 opacity-70`} />
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Finger zones color legend */}
            {showFingerGuide && (
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center gap-3 sm:gap-4 flex-wrap text-[10px] text-slate-500 font-semibold">
                <span className="font-bold text-slate-700 dark:text-slate-300">Fingers:</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-pink-500" /> Pinky</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-500" /> Ring</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500" /> Middle</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-500" /> Index</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Thumbs</span>
              </div>
            )}
          </div>
        )}

        {/* 📋 ACCORDION 3: LOKSEWA EXAM RULES & BENCHMARKS ACCORDION */}
        <div className={`rounded-3xl ${curTheme.card} ${curTheme.cardBorder} shadow-md overflow-hidden transition-all duration-300`}>
          <button
            onClick={() => toggleAccordion("rulesGuide")}
            className="w-full p-4.5 px-6 flex items-center justify-between hover:bg-slate-500/5 transition cursor-pointer text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h3 className="text-sm font-extrabold flex items-center gap-2">
                  <span>📜 Loksewa PSC Exam Rules, Marking Scheme & Guidelines</span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-400">
                    Official 25 Marks Criteria
                  </span>
                </h3>
                <p className="text-xs text-slate-500">
                  Click to view Public Service Commission computer practical examination rules & calculations
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-xs font-bold hidden sm:inline">
                {openAccordions.rulesGuide ? "Collapse Rules" : "Open Rules"}
              </span>
              {openAccordions.rulesGuide ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
          </button>

          {openAccordions.rulesGuide && (
            <div className="p-6 pt-3 border-t border-slate-200/80 dark:border-slate-800 bg-slate-500/5 space-y-4 text-xs leading-relaxed animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <p className="font-extrabold text-sm text-blue-600 dark:text-blue-400 mb-1">🇬🇧 English Speed Standard</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                    <li>Minimum <strong>30 WPM</strong> required to qualify.</li>
                    <li>Gross Speed: 5 keystrokes count as 1 word.</li>
                    <li>Accuracy benchmark: Minimum <strong>85%</strong>.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <p className="font-extrabold text-sm text-emerald-600 dark:text-emerald-400 mb-1">🇳🇵 Nepali Speed Standard</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                    <li>Minimum <strong>22.5 WPM</strong> required to qualify.</li>
                    <li>Traditional or Romanized Unicode supported.</li>
                    <li>Errors are penalized according to PSC guidelines.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <p className="font-extrabold text-sm text-purple-600 dark:text-purple-400 mb-1">⏱️ 5-Minute Practical Test</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                    <li>Exam duration is strictly <strong>5 minutes (300 seconds)</strong>.</li>
                    <li>Total weightage in PSC stage II: <strong>25 Marks</strong>.</li>
                    <li>Use Esc key anytime to restart a fresh session.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

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
                  {isPassing ? "QUALIFIED ✅ (उत्तीर्ण)" : "NOT QUALIFIED ❌ (पुनः अभ्यास गर्नुहोस्)"}
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


