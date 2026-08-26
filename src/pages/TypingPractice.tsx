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
  RefreshCw,
  Eye,
  EyeOff,
  Clock,
  ShieldCheck,
  Target,
  FileText,
} from "lucide-react";

type Mode = "english" | "nepali" | "code" | "exam";
type AgencyFilter = "all" | "Loksewa PSC" | "NOC" | "NEB" | "TU" | "Banking" | "Code";

const KEYBOARD_ROWS = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
  ["Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
  ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"],
  ["Space"],
];

export default function TypingPractice() {
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
  const [rawWpm, setRawWpm] = useState(0);
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
  const resetTest = useCallback((item?: TypingItem) => {
    const dataset = getDataset();
    const target = item || dataset[Math.floor(Math.random() * dataset.length)] || dataset[0];
    setSelectedItem(target);
    setInput("");
    setStarted(false);
    setFinished(false);
    setWpm(0);
    setRawWpm(0);
    setCpm(0);
    setAccuracy(100);
    setErrorCount(0);
    setTimeElapsed(0);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, [getDataset]);

  useEffect(() => {
    resetTest();
  }, [mode, agency, difficulty, resetTest]);

  // Keyboard shortcut listener (Tab + Enter for instant restart)
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
      osc.frequency.setValueAtTime(480, ctx.currentTime);
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

    // Loksewa standard Gross & Net Words calculation:
    // 5 characters = 1 standard word
    const grossWords = Math.round(correct / 5 / elapsedMinutes);
    const rawTotalWords = Math.round(val.length / 5 / elapsedMinutes);
    const calculatedCpm = Math.round((correct / elapsedSeconds) * 60);

    setWpm(grossWords);
    setRawWpm(rawTotalWords);
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

  // Loksewa Exam qualification criteria (Nepali: >= 22.5 WPM, English: >= 30 WPM)
  const requiredWpm = mode === "nepali" ? 22.5 : 30;
  const isPassing = wpm >= requiredWpm && accuracy >= 85;
  const loksewaScore = Math.max(
    0,
    Math.min(25, Math.round((wpm / 40) * 25 * (accuracy / 100)))
  );

  // Performance Tier
  const getPerformanceBadge = () => {
    if (wpm >= 50 && accuracy >= 95)
      return { label: "S+ Rank (Expert Operator)", color: "from-amber-400 to-orange-500", text: "text-amber-400" };
    if (wpm >= 35 && accuracy >= 90)
      return { label: "A Rank (Loksewa Qualified)", color: "from-emerald-400 to-teal-500", text: "text-emerald-400" };
    if (wpm >= 25)
      return { label: "B Rank (Good Speed)", color: "from-blue-400 to-indigo-500", text: "text-blue-400" };
    return { label: "C Rank (Keep Practicing)", color: "from-slate-400 to-gray-500", text: "text-slate-400" };
  };

  const perf = getPerformanceBadge();

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 py-10 px-4 sm:px-6 lg:px-8 font-sans selection:bg-blue-600 selection:text-white relative overflow-hidden">
      
      {/* Dynamic Background Ambient Lights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto space-y-7">
        
        {/* Top Header Card — Glassmorphic Luxury */}
        <div className="relative bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90 border border-slate-800/90 p-6 sm:p-7 rounded-[2rem] shadow-2xl backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4.5 w-full md:w-auto">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-xl shadow-blue-500/25 ring-4 ring-blue-500/10">
              <Keyboard size={32} className="animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Speed Test Pro
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                  <ShieldCheck size={12} /> PSC Standard
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight">
                Loksewa, NOC & NEB Typing Master
              </h1>
              <p className="text-xs sm:text-sm text-slate-400">
                120+ Authentic Real Exam Texts · English, Nepali & Technical Coding
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-end md:self-center">
            {/* Keyboard visual toggle */}
            <button
              onClick={() => setShowKeyboard(!showKeyboard)}
              title={showKeyboard ? "Hide On-screen Keyboard" : "Show On-screen Keyboard"}
              className={`p-3 rounded-2xl border transition-all ${
                showKeyboard
                  ? "bg-indigo-600/20 text-indigo-400 border-indigo-500/40 shadow-lg shadow-indigo-500/10"
                  : "bg-slate-800/80 text-slate-400 border-slate-700/80 hover:text-white hover:bg-slate-800"
              }`}
            >
              {showKeyboard ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>

            {/* Sound Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? "Mute mechanical click" : "Enable mechanical click"}
              className={`p-3 rounded-2xl border transition-all ${
                soundEnabled
                  ? "bg-blue-600/20 text-blue-400 border-blue-500/40 shadow-lg shadow-blue-500/10"
                  : "bg-slate-800/80 text-slate-400 border-slate-700/80 hover:text-white hover:bg-slate-800"
              }`}
            >
              {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>

            {/* Best Score Badge */}
            <div className="flex items-center gap-2.5 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 px-4 py-2.5 rounded-2xl">
              <Trophy size={18} className="text-amber-400" />
              <div>
                <p className="text-[10px] uppercase font-bold text-amber-300/80 leading-none">Best Speed</p>
                <p className="text-sm font-extrabold text-amber-300 leading-tight">{bestWpm} WPM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Category Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-slate-900/60 p-2 rounded-3xl border border-slate-800/80 backdrop-blur-md">
          {[
            { id: "english", label: "🇬🇧 English Typing", count: "50+ Passages", desc: "PSC, NOC, NEB, TU Sets" },
            { id: "nepali", label: "🇳🇵 नेपाली युनिकोड", count: "50+ Passages", desc: "सरकारी पत्राचार, ऐन, नियम" },
            { id: "code", label: "💻 Code Typing", count: "20+ Snippets", desc: "C, SQL, HTML, JS, Python" },
            { id: "exam", label: "📋 Full 5-Min Exam", count: "10+ Exam Sets", desc: "PSC 25 Marks Standard" },
          ].map((tab) => {
            const active = mode === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setMode(tab.id as Mode)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 relative overflow-hidden group ${
                  active
                    ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/25 ring-2 ring-blue-400/30"
                    : "bg-slate-900/40 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent hover:border-slate-700/50"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-base font-extrabold tracking-tight text-white">{tab.label}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${active ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"}`}>
                    {tab.count}
                  </span>
                </div>
                <p className={`text-xs ${active ? "text-blue-100" : "text-slate-500"}`}>{tab.desc}</p>
              </button>
            );
          })}
        </div>

        {/* Agency Pills & Filter Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 bg-slate-900/70 border border-slate-800/80 p-4 rounded-3xl backdrop-blur-md">
          {/* Agency Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none">
            <span className="text-slate-400 flex items-center gap-1.5 mr-1 font-bold text-xs flex-shrink-0">
              <Building2 size={14} className="text-blue-400" /> Agency:
            </span>
            {(["all", "Loksewa PSC", "NOC", "NEB", "TU", "Banking", "Code"] as const).map((a) => {
              const active = agency === a;
              return (
                <button
                  key={a}
                  onClick={() => setAgency(a)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                    active
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20"
                      : "bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700/80 border border-slate-700/60"
                  }`}
                >
                  {a === "all" ? "🌐 All Exams" : a}
                </button>
              );
            })}
          </div>

          {/* Difficulty & Timer Mode Filters */}
          <div className="flex items-center gap-2.5 flex-wrap w-full lg:w-auto justify-end">
            <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-2xl border border-slate-700/70">
              {(["all", "easy", "medium", "hard"] as const).map((d) => (
                <button
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`px-3 py-1 rounded-xl text-xs capitalize font-bold transition-all ${
                    difficulty === d
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-2xl border border-slate-700/70">
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
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Test Selector & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <ListFilter size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 pointer-events-none" />
            <select
              value={selectedItem.id}
              onChange={(e) => {
                const found = dataset.find((item) => item.id === Number(e.target.value));
                if (found) resetTest(found);
              }}
              className="w-full bg-slate-900/90 border border-slate-800 text-slate-100 rounded-2xl pl-11 pr-4 py-3 text-xs font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 shadow-lg cursor-pointer transition"
            >
              {dataset.map((item, idx) => (
                <option key={item.id} value={item.id} className="bg-slate-900 py-1">
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
              placeholder="Search 120+ passages..."
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 shadow-lg transition"
            />
          </div>
        </div>

        {/* Real-time HUD Telemetry Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
          <div className="bg-gradient-to-b from-slate-900 to-slate-900/60 border border-slate-800 p-4.5 rounded-3xl text-center shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
            <p className="text-3xl sm:text-4xl font-heading font-black text-blue-400 tracking-tight">{wpm}</p>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <Zap size={13} className="text-blue-400" /> Net WPM
            </p>
          </div>

          <div className="bg-gradient-to-b from-slate-900 to-slate-900/60 border border-slate-800 p-4.5 rounded-3xl text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-400" />
            <p className="text-3xl sm:text-4xl font-heading font-black text-indigo-400 tracking-tight">{cpm}</p>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <BarChart3 size={13} className="text-indigo-400" /> CPM (Chars)
            </p>
          </div>

          <div className="bg-gradient-to-b from-slate-900 to-slate-900/60 border border-slate-800 p-4.5 rounded-3xl text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />
            <p className={`text-3xl sm:text-4xl font-heading font-black tracking-tight ${accuracy >= 95 ? "text-emerald-400" : accuracy >= 80 ? "text-amber-400" : "text-rose-400"}`}>
              {accuracy}%
            </p>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <Target size={13} className="text-emerald-400" /> Accuracy
            </p>
          </div>

          <div className="bg-gradient-to-b from-slate-900 to-slate-900/60 border border-slate-800 p-4.5 rounded-3xl text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-pink-400" />
            <p className={`text-3xl sm:text-4xl font-heading font-black tracking-tight ${errorCount === 0 ? "text-slate-300" : "text-rose-400"}`}>
              {errorCount}
            </p>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <Flame size={13} className="text-rose-400" /> Errors
            </p>
          </div>

          <div className="bg-gradient-to-b from-slate-900 to-slate-900/60 border border-slate-800 p-4.5 rounded-3xl text-center shadow-lg relative overflow-hidden col-span-2 sm:col-span-1">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-yellow-400" />
            <p className="text-3xl sm:text-4xl font-heading font-black text-amber-400 tracking-tight">
              {timeLimit ? `${Math.max(0, timeLimit - timeElapsed)}s` : `${timeElapsed}s`}
            </p>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <Clock size={13} className="text-amber-400" /> {timeLimit ? "Remaining" : "Duration"}
            </p>
          </div>
        </div>

        {/* Live Typing Canvas & Progress Bar */}
        <div className="relative bg-gradient-to-b from-slate-900/95 to-slate-900/80 border border-slate-800 rounded-[2.5rem] p-7 sm:p-9 shadow-2xl overflow-hidden backdrop-blur-2xl">
          
          {/* Progress Bar Header */}
          <div className="flex items-center justify-between text-xs text-slate-400 mb-5 pb-4 border-b border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <span className="font-extrabold text-white text-sm flex items-center gap-2">
                <Sparkles size={16} className="text-blue-400" />
                {selectedItem.title}
              </span>
              {selectedItem.source && (
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
                  {selectedItem.source}
                </span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold text-slate-400">
                Progress: <strong className="text-white font-extrabold">{progressPercent}%</strong>
              </span>
              <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-200"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Letter by Letter Highlighting Canvas */}
          <div
            className={`text-xl sm:text-2xl leading-relaxed select-none max-h-72 overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-slate-700 tracking-normal ${
              mode === "code" ? "font-mono text-base" : mode === "nepali" ? "font-sans leading-loose text-2xl" : "font-sans"
            }`}
          >
            {targetText.split("").map((char, idx) => {
              let style = "text-slate-500/40";
              let bg = "";

              if (idx < input.length) {
                if (input[idx] === char) {
                  style = "text-emerald-400 font-semibold";
                } else {
                  style = "text-rose-200 font-bold underline decoration-rose-500 decoration-2";
                  bg = "bg-rose-950/70 rounded px-0.5";
                }
              } else if (idx === input.length) {
                style = "text-white bg-blue-600/50 rounded px-1 animate-pulse border-b-2 border-cyan-400 shadow-sm shadow-blue-500/50";
              }

              return (
                <span key={idx} className={`${style} ${bg} transition-colors duration-75`}>
                  {char}
                </span>
              );
            })}
          </div>
        </div>

        {/* Typing Input Canvas */}
        <div className="relative">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => handleInput(e.target.value)}
            disabled={finished}
            placeholder={started ? "" : "⚡ Start typing here to begin examination..."}
            className={`w-full bg-slate-900/90 border-2 border-slate-700/80 rounded-3xl p-6 text-xl sm:text-2xl text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 resize-none h-36 transition duration-200 shadow-2xl backdrop-blur-md ${
              mode === "code" ? "font-mono" : "font-sans"
            }`}
            autoFocus
          />

          <div className="absolute right-5 bottom-5 flex items-center gap-2.5">
            <button
              onClick={() => resetTest(selectedItem)}
              title="Restart current test (Esc)"
              className="p-3 rounded-2xl bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all shadow-lg flex items-center gap-1.5 text-xs font-bold"
            >
              <RotateCcw size={15} /> Restart
            </button>
            <button
              onClick={() => resetTest()}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs shadow-xl shadow-blue-500/25 transition-all flex items-center gap-1.5"
            >
              Next Test <ChevronRight size={15} />
            </button>
          </div>
        </div>

        {/* Interactive Virtual Keyboard (When Toggled) */}
        {showKeyboard && (
          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-3xl shadow-xl space-y-2 select-none animate-fade-in backdrop-blur-md">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="font-bold flex items-center gap-1.5 text-slate-300">
                <Keyboard size={14} className="text-blue-400" /> Interactive Touch-Typing Visualizer
              </span>
              <span className="text-[11px] text-blue-400 font-semibold">
                Next Key: <strong className="text-white text-xs uppercase px-2 py-0.5 rounded bg-blue-600/30 border border-blue-500/40 font-mono">{nextChar === " " ? "SPACE" : nextChar || "DONE"}</strong>
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
                          ? "w-72 bg-slate-800 text-slate-300"
                          : isWide
                          ? "w-20 bg-slate-800/80 text-slate-400 text-[10px]"
                          : "w-10 bg-slate-800 text-slate-200"
                      } ${
                        isPressed
                          ? "keycap-active bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 ring-2 ring-emerald-400"
                          : isNext
                          ? "bg-blue-600/40 text-cyan-300 border border-cyan-400/60 ring-2 ring-cyan-400/30 animate-pulse"
                          : "border border-slate-700/60"
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
          <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border-2 border-emerald-500/40 rounded-[2.5rem] p-8 sm:p-10 shadow-2xl text-center space-y-7 animate-fade-in relative overflow-hidden backdrop-blur-2xl">
            <div className="w-20 h-20 rounded-3xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/30">
              <CheckCircle2 size={42} />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold mb-2">
                <Award size={14} className={perf.text} />
                <span className={perf.text}>{perf.label}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-white">
                Exam Practice Completed!
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Loksewa PSC Benchmark Result ({mode === "nepali" ? "Nepali Standard: 22.5 WPM" : "English Standard: 30 WPM"}):{" "}
                <span className={isPassing ? "text-emerald-400 font-extrabold" : "text-rose-400 font-extrabold"}>
                  {isPassing ? "QUALIFIED ✅" : "NOT QUALIFIED ❌"}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5 max-w-3xl mx-auto">
              <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80">
                <p className="text-3xl font-black text-blue-400">{wpm}</p>
                <p className="text-xs text-slate-400 font-bold mt-1">Net WPM</p>
              </div>
              <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80">
                <p className="text-3xl font-black text-indigo-400">{cpm}</p>
                <p className="text-xs text-slate-400 font-bold mt-1">CPM Speed</p>
              </div>
              <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80">
                <p className="text-3xl font-black text-emerald-400">{accuracy}%</p>
                <p className="text-xs text-slate-400 font-bold mt-1">Accuracy</p>
              </div>
              <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80">
                <p className="text-3xl font-black text-amber-400">{timeElapsed}s</p>
                <p className="text-xs text-slate-400 font-bold mt-1">Duration</p>
              </div>
              <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 col-span-2 sm:col-span-1">
                <p className="text-3xl font-black text-purple-400">{loksewaScore} / 25</p>
                <p className="text-xs text-slate-400 font-bold mt-1">PSC Score</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => resetTest(selectedItem)}
                className="px-7 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all shadow-lg"
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
