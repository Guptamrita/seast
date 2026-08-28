import React, { useState, useRef, useEffect } from 'react';

interface TerminalRow {
  command: string;
  output: React.ReactNode;
  directory: string;
}

export default function TerminalApp({ openApp }: { openApp?: (id: string) => void }) {
  const [inputVal, setInputVal] = useState('');
  const [currentDir, setCurrentDir] = useState('~');
  const [history, setHistory] = useState<TerminalRow[]>([
    {
      command: 'welcome',
      directory: '~',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400 font-bold">Welcome to Sahil's Ubuntu 20.04.6 LTS Terminal!</p>
          <p className="text-xs text-slate-400">
            Type <span className="text-ub-orange font-bold">help</span> to see available commands, or <span className="text-sky-400 font-bold">neofetch</span> for system information.
          </p>
        </div>
      )
    }
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandList, setCommandList] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    const [cmd, ...args] = trimmed.split(' ');
    const fullCmd = trimmed;

    if (trimmed.length > 0) {
      setCommandList(prev => [...prev, trimmed]);
    }
    setHistoryIndex(-1);

    if (!cmd) {
      setHistory(prev => [...prev, { command: '', output: null, directory: currentDir }]);
      setInputVal('');
      return;
    }

    let out: React.ReactNode = null;

    switch (cmd.toLowerCase()) {
      case 'help':
        out = (
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
            <p className="font-bold text-white mb-1">Available Commands:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1">
              <div><span className="text-ub-orange font-semibold">about</span> - About Sahil</div>
              <div><span className="text-ub-orange font-semibold">skills</span> - View technical skills</div>
              <div><span className="text-ub-orange font-semibold">projects</span> - View featured projects</div>
              <div><span className="text-ub-orange font-semibold">contact</span> - Get in touch</div>
              <div><span className="text-ub-orange font-semibold">neofetch</span> - Show system banner</div>
              <div><span className="text-ub-orange font-semibold">clear</span> - Clear terminal screen</div>
              <div><span className="text-ub-orange font-semibold">ls</span> - List directory files</div>
              <div><span className="text-ub-orange font-semibold">cd</span> - Change directory</div>
              <div><span className="text-ub-orange font-semibold">cat</span> - Read file contents</div>
              <div><span className="text-ub-orange font-semibold">whoami</span> - Display current user</div>
              <div><span className="text-ub-orange font-semibold">date</span> - Display current time</div>
              <div><span className="text-ub-orange font-semibold">repo</span> - View source repository</div>
              <div><span className="text-ub-orange font-semibold">sudo</span> - Run as root</div>
            </div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'about':
      case 'about-sahil':
        out = (
          <div className="text-slate-300 space-y-1 text-xs sm:text-sm">
            <p className="text-white font-bold text-base">Sahil — Full-Stack Developer & Tech Builder</p>
            <p>Passionate about web technologies, system architectures, and crafting responsive applications.</p>
            <p>Email: <a href="mailto:sahilsarda45669@gmail.com" className="text-ub-orange underline">sahilsarda45669@gmail.com</a></p>
            {openApp && (
              <button 
                onClick={() => openApp('about-sahil')}
                className="mt-1 px-2 py-0.5 rounded bg-ub-orange text-white text-xs font-semibold"
              >
                Open GUI App
              </button>
            )}
          </div>
        );
        break;

      case 'skills':
        out = (
          <div className="text-xs sm:text-sm space-y-1 text-slate-300">
            <p className="text-emerald-400 font-bold">Languages & Core:</p>
            <p>JavaScript (ES6+), TypeScript, HTML5, CSS3, C++, Python, SQL</p>
            <p className="text-sky-400 font-bold mt-2">Frameworks & Libraries:</p>
            <p>React.js, Next.js, Tailwind CSS, Framer Motion, Express.js, Node.js</p>
            <p className="text-amber-400 font-bold mt-2">Tools & Platforms:</p>
            <p>Git, GitHub, Supabase, Vercel, Vite, Linux/Bash, VS Code</p>
          </div>
        );
        break;

      case 'projects':
        out = (
          <div className="text-xs sm:text-sm space-y-1 text-slate-300">
            <p className="text-white font-bold">Featured Projects:</p>
            <p>1. <span className="text-ub-orange font-bold">Loksewa & Online Exam Portal:</span> Interactive MCQ & quiz simulator with live timer and scoring.</p>
            <p>2. <span className="text-ub-orange font-bold">Ubuntu 20.04 WebOS:</span> Full desktop operating system experience in the browser.</p>
            <p>3. <span className="text-ub-orange font-bold">Typing Practice Simulator:</span> Real-time WPM, accuracy, and typing tutor.</p>
            <p>4. <span className="text-ub-orange font-bold">Admin Exam Suite:</span> Cloud database question bank and ranking platform.</p>
          </div>
        );
        break;

      case 'contact':
      case 'email':
        out = (
          <div className="text-xs sm:text-sm space-y-1 text-slate-300">
            <p className="text-white font-bold">Contact Info:</p>
            <p>Email: <a href="mailto:sahilsarda45669@gmail.com" className="text-sky-400 underline">sahilsarda45669@gmail.com</a></p>
            <p>Location: Bara, Nepal</p>
          </div>
        );
        break;

      case 'neofetch':
        out = (
          <div className="font-mono text-xs text-slate-200 flex flex-col sm:flex-row gap-4 my-2">
            <div className="text-ub-orange font-bold select-none leading-none">
              <pre className="text-[10px] sm:text-xs">
{`            .-/+oossssoo+/-.
        \`:+ssssssssssssssssss+:\`
      -+ssssssssssssssssssyyssss+-
    .ossssssssssssssssssdMMMNysssso.
   /ssssssssssshdmmNNmmyNMMMMhssssss/
  +ssssssssshmydMMMMMMMNddddyssssssss+
 /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/
.ssssssssdMMMNhsssssssssshNMMMdssssssss.
+sssshhhyNMMNyssssssssssssyNMMMysssssss+
ossyNMMMNyMMhsssssssssssssshmmmhssssssso
ossyNMMMNyMMhsssssssssssssshmmmhssssssso
+sssshhhyNMMNyssssssssssssyNMMMysssssss+
.ssssssssdMMMNhsssssssssshNMMMdssssssss.
 /sssssssshNMMMyhhyyyyhdNMMMNhssssssss/
  +sssssssssdmydMMMMMMMMddddyssssssss+
   /ssssssssssshdmNNNNmyNMMMMhssssss/
    .ossssssssssssssssssdMMMNysssso.
      -+sssssssssssssssssyyyssss+-
        \`:+ssssssssssssssssss+:\`
            .-/+oossssoo+/-.`}
              </pre>
            </div>
            <div className="space-y-0.5 text-xs">
              <p><span className="text-ub-orange font-bold">sahil@ubuntu</span></p>
              <p className="text-slate-500">----------------------</p>
              <p><span className="text-sky-400 font-bold">OS:</span> Ubuntu 20.04.6 LTS (Focal Fossa)</p>
              <p><span className="text-sky-400 font-bold">Host:</span> Sahil-Portfolio WebStation 2.0</p>
              <p><span className="text-sky-400 font-bold">Kernel:</span> 5.15.0-89-generic</p>
              <p><span className="text-sky-400 font-bold">Uptime:</span> 99.9% uptime</p>
              <p><span className="text-sky-400 font-bold">Shell:</span> bash 5.0.17</p>
              <p><span className="text-sky-400 font-bold">Resolution:</span> 1920x1080</p>
              <p><span className="text-sky-400 font-bold">DE:</span> GNOME 3.36.8</p>
              <p><span className="text-sky-400 font-bold">WM:</span> Mutter</p>
              <p><span className="text-sky-400 font-bold">Theme:</span> Yaru-dark [GTK2/3]</p>
              <p><span className="text-sky-400 font-bold">Icons:</span> Yaru [GTK2/3]</p>
              <p><span className="text-sky-400 font-bold">Terminal:</span> x-terminal-emulator</p>
              <p><span className="text-sky-400 font-bold">CPU:</span> Apple M-Series / Web Virtual CPU (8) @ 3.200GHz</p>
              <p><span className="text-sky-400 font-bold">Memory:</span> 4096MiB / 16384MiB</p>
            </div>
          </div>
        );
        break;

      case 'whoami':
        out = <p className="text-emerald-400 font-bold">sahil (Full-Stack Engineer)</p>;
        break;

      case 'date':
        out = <p className="text-slate-300">{new Date().toString()}</p>;
        break;

      case 'pwd':
        out = <p className="text-slate-300">{currentDir === '~' ? '/home/sahil' : `/home/sahil/${currentDir}`}</p>;
        break;

      case 'ls':
        out = (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs sm:text-sm font-semibold">
            <span className="text-sky-400">Desktop/</span>
            <span className="text-sky-400">Documents/</span>
            <span className="text-sky-400">Downloads/</span>
            <span className="text-sky-400">Projects/</span>
            <span className="text-emerald-400">about-sahil.txt</span>
            <span className="text-emerald-400">skills.json</span>
            <span className="text-emerald-400">resume.pdf</span>
            <span className="text-amber-400">contact.sh*</span>
          </div>
        );
        break;

      case 'cat':
        if (args[0] === 'about-sahil.txt' || args[0] === 'about') {
          out = <p className="text-slate-300">Sahil: Software Engineer, Full-Stack Developer, and creator of modern web apps.</p>;
        } else if (args[0] === 'skills.json' || args[0] === 'skills') {
          out = <pre className="text-emerald-400 text-xs">{JSON.stringify({ frontend: ["React", "Next.js", "TypeScript", "Tailwind"], backend: ["Node", "Express", "Supabase", "PostgreSQL"] }, null, 2)}</pre>;
        } else if (args[0]) {
          out = <p className="text-rose-400">cat: {args[0]}: Permission denied or binary file</p>;
        } else {
          out = <p className="text-rose-400">Usage: cat &lt;filename&gt;</p>;
        }
        break;

      case 'repo':
        out = (
          <p className="text-slate-300">
            GitHub Repository: <a href="https://github.com/vivek9patel/vivek9patel.github.io.git" target="_blank" rel="noreferrer" className="text-ub-orange underline">vivek9patel/vivek9patel.github.io</a>
          </p>
        );
        break;

      case 'sudo':
        out = <p className="text-rose-400">sahil is in the sudoers file. This incident will be reported to Santa Claus 🎅</p>;
        break;

      default:
        out = (
          <p className="text-rose-400 text-xs sm:text-sm">
            Command not found: '{cmd}'. Type <span className="text-white font-bold">'help'</span> to see available commands.
          </p>
        );
    }

    setHistory(prev => [
      ...prev,
      {
        command: fullCmd,
        output: out,
        directory: currentDir
      }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandList.length === 0) return;
      const nextIdx = historyIndex === -1 ? commandList.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setInputVal(commandList[nextIdx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandList.length === 0 || historyIndex === -1) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx >= commandList.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIdx);
        setInputVal(commandList[nextIdx]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const possible = ['help', 'about', 'skills', 'projects', 'contact', 'neofetch', 'clear', 'ls', 'whoami', 'date', 'repo'];
      const match = possible.find(p => p.startsWith(inputVal.toLowerCase()));
      if (match) setInputVal(match);
    }
  };

  return (
    <div 
      onClick={handleFocus}
      className="w-full h-full bg-slate-950 text-slate-100 p-4 font-mono text-xs sm:text-sm overflow-y-auto select-text cursor-text windowMainScreen leading-relaxed"
    >
      {history.map((row, idx) => (
        <div key={idx} className="mb-2 space-y-1">
          {row.command !== 'welcome' && (
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-emerald-400 font-bold">sahil@ubuntu</span>
              <span className="text-slate-400">:</span>
              <span className="text-sky-400 font-bold">{row.directory}</span>
              <span className="text-slate-400 font-bold">$</span>
              <span className="text-white">{row.command}</span>
            </div>
          )}
          {row.output && <div className="pl-0 sm:pl-2">{row.output}</div>}
        </div>
      ))}

      {/* Active prompt row */}
      <div className="flex items-center gap-1.5">
        <span className="text-emerald-400 font-bold">sahil@ubuntu</span>
        <span className="text-slate-400">:</span>
        <span className="text-sky-400 font-bold">{currentDir}</span>
        <span className="text-slate-400 font-bold">$</span>
        <div className="flex-1 relative flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm p-0 m-0 shadow-none focus:ring-0"
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
        </div>
      </div>
      <div ref={bottomRef} />
    </div>
  );
}
