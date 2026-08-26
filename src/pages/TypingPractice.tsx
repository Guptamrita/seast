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
  AlertCircle,
  Volume2,
  VolumeX,
  Sparkles,
  ChevronRight,
  ListFilter,
} from "lucide-react";

type Mode = "english" | "nepali" | "code" | "exam";

export default function TypingPractice() {
  const [mode, setMode] = useState<Mode>("english");
  const [selectedItem, setSelectedItem] = useState<TypingItem>(englishTypingData[0]);
  const [difficulty, setDifficulty] = useState<"all" | "easy" | "medium" | "hard">("all");
  const [input, setInput] = useState("");
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [cpm, setCpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [errorCount, setErrorCount] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timeLimit, setTimeLimit] = useState<number | null>(null); // null = infinite, or 60, 180, 300
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [bestWpm, setBestWpm] = useState<number>(() => {
    return Number(localStorage.getItem("loksewa_best_wpm")) || 0;
  });

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Get active dataset based on mode and difficulty
  const getDataset = useCallback(() => {
    let list: TypingItem[] = [];
    if (mode === "english") list = englishTypingData;
    else if (mode === "nepali") list = nepaliTypingData;
    else if (mode === "code") list = codeTypingData;
    else if (mode === "exam") list = examParagraphsData;

    if (difficulty !== "all") {
      list = list.filter((item) => item.difficulty === difficulty);
    }
    return list.length > 0 ? list : (mode === "english" ? englishTypingData : nepaliTypingData);
  }, [mode, difficulty]);

  // Load new test
  const resetTest = useCallback((item?: TypingItem) => {
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
  }, [getDataset]);

  useEffect(() => {
    resetTest();
  }, [mode, difficulty, resetTest]);

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
      osc.frequency.setValueAtTime(450, ctx.currentTime);
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

      // Check time limit
      if (timeLimit && elapsed >= timeLimit) {
        setFinished(true);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [started, finished, startTime, timeLimit]);

  // Handle typing input
  const handleInput = (val: string) => {
    if (finished) return;

    if (!started) {
      setStarted(true);
      setStartTime(Date.now());
    }

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

    // Standard word = 5 characters
    const grossWpm = Math.round(correct / 5 / elapsedMinutes);
    const calculatedCpm = Math.round((correct / elapsedSeconds) * 60);

    setWpm(grossWpm);
    setCpm(calculatedCpm);

    // Check completion
    if (val.length >= targetText.length) {
      setFinished(true);
      if (grossWpm > bestWpm) {
        setBestWpm(grossWpm);
        localStorage.setItem("loksewa_best_wpm", grossWpm.toString());
      }
    }
  };

  const dataset = getDataset();
  const targetText = selectedItem.text;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-8 px-4 sm:px-6 lg:px-8 selection:bg-blue-600 selection:text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 p-6 rounded-3xl shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Keyboard size={28} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                ⌨️ Typing Speed Master
              </h1>
              <p className="text-xs sm:text-sm text-slate-400">
                100+ Loksewa Exam Texts, Nepali Unicode & Code Snippets
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? "Mute typing sound" : "Enable typing sound"}
              className={`p-2.5 rounded-2xl border transition ${
                soundEnabled
                  ? "bg-blue-600/20 text-blue-400 border-blue-500/30"
                  : "bg-slate-800 text-slate-400 border-slate-700 hover:text-white"
              }`}
            >
              {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>

            <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 px-4 py-2 rounded-2xl text-xs">
              <Trophy size={16} className="text-amber-400" />
              <span className="text-slate-400 font-medium">Best:</span>
              <span className="font-bold text-amber-300">{bestWpm} WPM</span>
            </div>
          </div>
        </div>

        {/* Mode Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800">
          {[
            { id: "english", label: "🇬🇧 English (50+)", desc: "Sentences & Words" },
            { id: "nepali", label: "🇳🇵 नेपाली (25+)", desc: "Unicode & Preeti" },
            { id: "code", label: "💻 Code Typing", desc: "C / JS / SQL" },
            { id: "exam", label: "📋 Exam 5-Min", desc: "Full Exam Paragraphs" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setMode(tab.id as Mode)}
              className={`py-3 px-4 rounded-xl text-xs font-bold transition-all text-left flex flex-col justify-center ${
                mode === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              <span className="text-sm font-extrabold">{tab.label}</span>
              <span className={`text-[10px] font-normal ${mode === tab.id ? "text-blue-100" : "text-slate-500"}`}>
                {tab.desc}
              </span>
            </button>
          ))}
        </div>

        {/* Filter Controls & Test Selector */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/80 border border-slate-800 p-4 rounded-2xl text-xs">
          {/* Test dropdown list */}
          <div className="flex items-center gap-2 flex-1 min-w-[200px]">
            <ListFilter size={15} className="text-blue-400 flex-shrink-0" />
            <select
              value={selectedItem.id}
              onChange={(e) => {
                const found = dataset.find((item) => item.id === Number(e.target.value));
                if (found) resetTest(found);
              }}
              className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded-xl px-3 py-2 text-xs font-medium focus:outline-none focus:border-blue-500"
            >
              {dataset.map((item, idx) => (
                <option key={item.id} value={item.id}>
                  Test #{idx + 1}: {item.title} ({item.difficulty})
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl border border-slate-700">
            {(["all", "easy", "medium", "hard"] as const).map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`px-3 py-1 rounded-lg text-xs capitalize transition ${
                  difficulty === d
                    ? "bg-blue-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Timer Mode Filter */}
          <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl border border-slate-700">
            <Timer size={14} className="text-slate-400 ml-2 mr-1" />
            {[
              { val: null, label: "Free" },
              { val: 60, label: "1m" },
              { val: 180, label: "3m" },
              { val: 300, label: "5m" },
            ].map((t) => (
              <button
                key={String(t.val)}
                onClick={() => {
                  setTimeLimit(t.val);
                  resetTest(selectedItem);
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                  timeLimit === t.val
                    ? "bg-indigo-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Scoreboard HUD */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-center">
            <p className="text-3xl font-extrabold text-blue-400">{wpm}</p>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-1">WPM (Words)</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-center">
            <p className="text-3xl font-extrabold text-indigo-400">{cpm}</p>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-1">CPM (Chars)</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-center">
            <p className={`text-3xl font-extrabold ${accuracy >= 95 ? "text-emerald-400" : accuracy >= 80 ? "text-amber-400" : "text-rose-400"}`}>
              {accuracy}%
            </p>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-1">Accuracy</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-center">
            <p className={`text-3xl font-extrabold ${errorCount === 0 ? "text-slate-300" : "text-rose-400"}`}>
              {errorCount}
            </p>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-1">Errors</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-center col-span-2 sm:col-span-1">
            <p className="text-3xl font-extrabold text-amber-400">
              {timeLimit ? `${Math.max(0, timeLimit - timeElapsed)}s` : `${timeElapsed}s`}
            </p>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-1">
              {timeLimit ? "Remaining" : "Time Taken"}
            </p>
          </div>
        </div>

        {/* Text Display Canvas with Highlighting */}
        <div className="relative bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden backdrop-blur-md">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-slate-800">
            <span className="font-bold text-white flex items-center gap-1.5">
              <Sparkles size={14} className="text-blue-400" />
              {selectedItem.title}
            </span>
            <span className="text-[11px] bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700 capitalize">
              Difficulty: {selectedItem.difficulty}
            </span>
          </div>

          <div className={`text-lg sm:text-xl leading-relaxed select-none max-h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-700 ${mode === "code" ? "font-mono text-base" : "font-sans"}`}>
            {targetText.split("").map((char, idx) => {
              let style = "text-slate-400/50";
              let bg = "";

              if (idx < input.length) {
                if (input[idx] === char) {
                  style = "text-emerald-400 font-medium";
                } else {
                  style = "text-rose-300 font-bold underline decoration-rose-500 decoration-2";
                  bg = "bg-rose-950/60 rounded px-0.5";
                }
              } else if (idx === input.length) {
                style = "text-white bg-blue-600/40 rounded px-0.5 animate-pulse border-b-2 border-blue-400";
              }

              return (
                <span key={idx} className={`${style} ${bg}`}>
                  {char}
                </span>
              );
            })}
          </div>
        </div>

        {/* Typing Input Box */}
        <div className="relative">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => handleInput(e.target.value)}
            disabled={finished}
            placeholder={started ? "" : "Click here and start typing to begin test..."}
            className={`w-full bg-slate-900 border-2 border-slate-700/80 rounded-2xl p-5 text-lg sm:text-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 resize-none h-32 transition duration-200 shadow-inner ${
              mode === "code" ? "font-mono" : "font-sans"
            }`}
            autoFocus
          />

          <div className="absolute right-4 bottom-4 flex items-center gap-2">
            <button
              onClick={() => resetTest(selectedItem)}
              title="Restart current test"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
            >
              <RotateCcw size={16} />
            </button>
            <button
              onClick={() => resetTest()}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition flex items-center gap-1"
            >
              Next Test <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Completion Modal / Result Card */}
        {finished && (
          <div className="bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 border-2 border-emerald-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle2 size={32} />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">🎉 Test Completed!</h2>
              <p className="text-sm text-slate-400 mt-1">Here is your performance summary:</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                <p className="text-2xl font-extrabold text-blue-400">{wpm}</p>
                <p className="text-xs text-slate-400">Net WPM</p>
              </div>
              <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                <p className="text-2xl font-extrabold text-indigo-400">{cpm}</p>
                <p className="text-xs text-slate-400">CPM Speed</p>
              </div>
              <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                <p className="text-2xl font-extrabold text-emerald-400">{accuracy}%</p>
                <p className="text-xs text-slate-400">Accuracy</p>
              </div>
              <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                <p className="text-2xl font-extrabold text-amber-400">{timeElapsed}s</p>
                <p className="text-xs text-slate-400">Time Taken</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => resetTest(selectedItem)}
                className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition"
              >
                Retry Same Test
              </button>
              <button
                onClick={() => resetTest()}
                className="px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition"
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
