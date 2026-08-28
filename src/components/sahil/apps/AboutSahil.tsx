import React, { useState } from 'react';
import { 
  User, GraduationCap, Award, Briefcase, Code, Download, 
  ExternalLink, Github, Mail, MapPin, Sparkles, Terminal, CheckCircle2, 
  FolderGit2, Cpu, Globe, Star
} from 'lucide-react';

export default function AboutSahil() {
  const [activeTab, setActiveTab] = useState<'about' | 'education' | 'skills' | 'projects' | 'resume'>('about');

  return (
    <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative overflow-hidden font-ubuntu">
      {/* Left Navigation Bar */}
      <div className="hidden md:flex flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black/40 bg-ub-cool-grey py-2">
        <button
          onClick={() => setActiveTab('about')}
          className={`w-full text-left px-3 py-2 flex items-center gap-2.5 transition-colors ${
            activeTab === 'about' ? 'bg-ub-orange text-white' : 'text-gray-300 hover:bg-white/5'
          }`}
        >
          <img className="w-4 h-4" alt="about icon" src="/themes/Yaru/status/about.svg" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
          <span>About Me</span>
        </button>

        <button
          onClick={() => setActiveTab('education')}
          className={`w-full text-left px-3 py-2 flex items-center gap-2.5 transition-colors ${
            activeTab === 'education' ? 'bg-ub-orange text-white' : 'text-gray-300 hover:bg-white/5'
          }`}
        >
          <img className="w-4 h-4" alt="education icon" src="/themes/Yaru/status/education.svg" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
          <span>Education</span>
        </button>

        <button
          onClick={() => setActiveTab('skills')}
          className={`w-full text-left px-3 py-2 flex items-center gap-2.5 transition-colors ${
            activeTab === 'skills' ? 'bg-ub-orange text-white' : 'text-gray-300 hover:bg-white/5'
          }`}
        >
          <img className="w-4 h-4" alt="skills icon" src="/themes/Yaru/status/skills.svg" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
          <span>Skills</span>
        </button>

        <button
          onClick={() => setActiveTab('projects')}
          className={`w-full text-left px-3 py-2 flex items-center gap-2.5 transition-colors ${
            activeTab === 'projects' ? 'bg-ub-orange text-white' : 'text-gray-300 hover:bg-white/5'
          }`}
        >
          <img className="w-4 h-4" alt="projects icon" src="/themes/Yaru/status/projects.svg" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
          <span>Projects</span>
        </button>

        <button
          onClick={() => setActiveTab('resume')}
          className={`w-full text-left px-3 py-2 flex items-center gap-2.5 transition-colors ${
            activeTab === 'resume' ? 'bg-ub-orange text-white' : 'text-gray-300 hover:bg-white/5'
          }`}
        >
          <img className="w-4 h-4" alt="resume icon" src="/themes/Yaru/status/download.svg" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
          <span>Resume</span>
        </button>

        <div className="mt-auto p-3 text-xs text-gray-400 border-t border-white/10">
          <p className="font-semibold text-white">Sahil's OS</p>
          <p className="text-[11px] text-gray-400">Ubuntu 20.04 LTS v2.0</p>
        </div>
      </div>

      {/* Mobile Top Tabs */}
      <div className="md:hidden flex overflow-x-auto absolute top-0 left-0 right-0 z-10 bg-ub-cool-grey border-b border-black/30 p-1 gap-1">
        {(['about', 'education', 'skills', 'projects', 'resume'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 text-xs rounded uppercase tracking-wider font-semibold whitespace-nowrap ${
              activeTab === tab ? 'bg-ub-orange text-white' : 'text-gray-300 bg-white/5'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content Pane */}
      <div className="flex flex-col w-full md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen p-6 pt-12 md:pt-6">
        {activeTab === 'about' && <AboutSection />}
        {activeTab === 'education' && <EducationSection />}
        {activeTab === 'skills' && <SkillsSection />}
        {activeTab === 'projects' && <ProjectsSection />}
        {activeTab === 'resume' && <ResumeSection />}
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="w-full max-w-3xl flex flex-col items-center animate-fade-in text-slate-100">
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-ub-orange shadow-xl bg-slate-800 flex items-center justify-center mb-4">
        <img 
          src="/images/logos/bitmoji.png" 
          alt="Sahil Avatar" 
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLElement).parentElement!.innerHTML = '<div class="text-3xl font-bold text-ub-orange">SG</div>';
          }}
        />
      </div>

      <div className="text-center space-y-1">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Hi, I'm <span className="text-ub-orange">Sahil</span> 👋
        </h2>
        <p className="text-base md:text-lg text-blue-400 font-medium">
          Full-Stack Developer & Tech Enthusiast
        </p>
      </div>

      {/* Divider */}
      <div className="my-6 relative w-48 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-ub-orange" />
      </div>

      {/* Bullet Points */}
      <ul className="w-full space-y-4 text-sm md:text-base leading-relaxed text-slate-300">
        <li className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/5">
          <span className="text-xl">🚀</span>
          <div>
            Passionate software developer who loves building fast, responsive web applications and scalable digital solutions with modern stacks like React, Next.js, TypeScript, Tailwind CSS, and Node.js.
          </div>
        </li>
        <li className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/5">
          <span className="text-xl">💻</span>
          <div>
            Experienced in frontend UI/UX architecture, backend API design, database modeling, and technical troubleshooting.
          </div>
        </li>
        <li className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/5">
          <span className="text-xl">⚡</span>
          <div>
            Built and maintained online examination portals, practice quiz platforms, real-time leaderboards, and interactive web tools.
          </div>
        </li>
        <li className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/5">
          <span className="text-xl">📫</span>
          <div>
            Let's connect! Email me at <a href="mailto:sahilsarda45669@gmail.com" className="text-ub-orange underline hover:text-orange-400 font-medium">sahilsarda45669@gmail.com</a>.
          </div>
        </li>
      </ul>

      {/* Highlights Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-6">
        <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl text-center">
          <p className="text-xl font-bold text-ub-orange">25+</p>
          <p className="text-xs text-slate-400">Projects Built</p>
        </div>
        <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl text-center">
          <p className="text-xl font-bold text-emerald-400">100%</p>
          <p className="text-xs text-slate-400">Commitment</p>
        </div>
        <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl text-center">
          <p className="text-xl font-bold text-sky-400">Full-Stack</p>
          <p className="text-xs text-slate-400">Specialization</p>
        </div>
        <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl text-center">
          <p className="text-xl font-bold text-amber-400">24/7</p>
          <p className="text-xs text-slate-400">Learner & Builder</p>
        </div>
      </div>
    </div>
  );
}

function EducationSection() {
  return (
    <div className="w-full max-w-3xl space-y-6 animate-fade-in">
      <div className="border-b border-white/10 pb-3">
        <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
          <GraduationCap className="text-ub-orange" /> Education & Academic Background
        </h3>
      </div>

      <div className="space-y-4">
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2 hover:border-ub-orange/50 transition">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="text-lg font-bold text-white">Diploma in Computer Engineering</h4>
            <span className="text-xs px-2.5 py-1 rounded bg-ub-orange/20 text-ub-orange font-semibold border border-ub-orange/30">
              Graduated with Distinction
            </span>
          </div>
          <p className="text-sm font-medium text-slate-300">National Examination Board (NEB), Nepal</p>
          <p className="text-xs text-slate-400">Focus on Software Engineering, Database Systems, Computer Networks & Web Technologies.</p>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2 hover:border-ub-orange/50 transition">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="text-lg font-bold text-white">Certifications & Specialized Training</h4>
            <span className="text-xs px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
              Verified
            </span>
          </div>
          <ul className="text-xs sm:text-sm text-slate-300 space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Full-Stack Web Development (React, Node, Express, Supabase)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Modern Frontend Architecture & Responsive UI Design</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Database Management Systems & Cloud Deployment</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <Globe className="w-4 h-4 text-sky-400" />,
      skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Next.js", "HTML5 & CSS3", "Framer Motion"]
    },
    {
      title: "Backend & Cloud",
      icon: <Cpu className="w-4 h-4 text-emerald-400" />,
      skills: ["Node.js", "Express.js", "Supabase", "REST APIs", "PostgreSQL", "Firebase", "Authentication"]
    },
    {
      title: "Tools & Workflow",
      icon: <Terminal className="w-4 h-4 text-amber-400" />,
      skills: ["Git & GitHub", "Vite", "VS Code", "Postman", "Linux / Bash", "Vercel", "npm / Bun"]
    }
  ];

  return (
    <div className="w-full max-w-3xl space-y-6 animate-fade-in">
      <div className="border-b border-white/10 pb-3">
        <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
          <Code className="text-ub-orange" /> Technical Stack & Skills
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center gap-2 font-bold text-sm text-white pb-2 border-b border-white/10">
              {cat.icon}
              <span>{cat.title}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span 
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-200 border border-slate-700 hover:border-ub-orange transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsSection() {
  const projects = [
    {
      name: "Interactive Loksewa & Exam Prep Portal",
      desc: "Full featured testing portal featuring live MCQ exams, instant scoring, timer-based tests, subjective questions, daily quiz challenges, and cloud synced leaderboard.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
      link: "/"
    },
    {
      name: "Ubuntu 20.04 Web Desktop OS",
      desc: "An authentic simulation of Ubuntu 20.04 operating system right in the browser, featuring draggable windows, custom bash terminal, file manager, calculator, settings, and apps.",
      tags: ["React", "Tailwind CSS", "WebOS", "Draggable Windows"],
      link: "/sahil"
    },
    {
      name: "Speed Typing Tutor & Practice",
      desc: "Interactive typing test tool with real-time WPM calculation, accuracy tracking, live key highlights, and multi-language support (English and Nepali).",
      tags: ["TypeScript", "Audio Feedback", "State Engine"],
      link: "/typing"
    },
    {
      name: "Cloud Admin Exam Management Suite",
      desc: "Real-time administrative control panel for creating question sets, viewing user submission logs, publishing daily MCQs, and managing users.",
      tags: ["Supabase Auth", "Row-Level Security", "CRUD"],
      link: "/admin-panel"
    }
  ];

  return (
    <div className="w-full max-w-3xl space-y-6 animate-fade-in">
      <div className="border-b border-white/10 pb-3">
        <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
          <FolderGit2 className="text-ub-orange" /> Featured Projects
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((proj, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-3 hover:border-ub-orange/60 transition group">
            <div className="space-y-2">
              <h4 className="font-bold text-white text-base group-hover:text-ub-orange transition flex items-center justify-between">
                <span>{proj.name}</span>
                <a href={proj.link} className="p-1 rounded bg-white/10 hover:bg-ub-orange text-white transition">
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">{proj.desc}</p>
            </div>
            <div className="flex flex-wrap gap-1 pt-2">
              {proj.tags.map((t) => (
                <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResumeSection() {
  return (
    <div className="w-full max-w-3xl space-y-6 animate-fade-in text-center">
      <div className="border-b border-white/10 pb-3 text-left">
        <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
          <Download className="text-ub-orange" /> Resume & CV
        </h3>
      </div>

      <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-4 flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-2xl bg-ub-orange/20 border border-ub-orange/40 flex items-center justify-center text-ub-orange">
          <Download className="w-8 h-8 animate-bounce" />
        </div>
        <div className="space-y-1">
          <h4 className="text-lg font-bold text-white">Sahil's Curriculum Vitae (CV)</h4>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Download the comprehensive resume detailing academic credentials, project portfolio, technical skill set, and work experience.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="/amrita-gupta-cv.pdf"
            download="Sahil_Resume.pdf"
            className="px-6 py-2.5 rounded-xl bg-ub-orange hover:bg-orange-600 text-white font-semibold text-sm shadow-lg shadow-orange-500/20 transition flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> Download PDF
          </a>
          <a
            href="mailto:sahilsarda45669@gmail.com"
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/10 transition flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-sky-400" /> Email Sahil
          </a>
        </div>
      </div>
    </div>
  );
}
