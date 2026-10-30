import { useState } from "react";
import { Copy, Check, Printer, ArrowLeft, Keyboard } from "lucide-react";
import { Link } from "react-router-dom";
import { PracticalSetData } from "@/data/allPracticalSets";

interface PracticalSetPaperProps {
  data: PracticalSetData;
  onBack: () => void;
}

export default function PracticalSetPaper({ data, onBack }: PracticalSetPaperProps) {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyAll = () => {
    let fullText = `${data.title}\n\n`;
    fullText += `${data.nepaliTyping.title}\n\n${data.nepaliTyping.paragraphs.join("\n\n")}\n\n`;
    fullText += `${data.englishTyping.title}\n\n${data.englishTyping.paragraphs.join("\n\n")}\n\n`;
    fullText += `${data.wordTasks.title}\n` + data.wordTasks.tasks.map((t, i) => `${i + 1}. ${t}`).join("\n") + "\n\n";
    fullText += `${data.excelTasks.title}\n` + data.excelTasks.instructions.join("\n") + "\n\n";
    fullText += `${data.powerPointTasks.title}\n` + data.powerPointTasks.tasks.map((t, i) => `${i + 1}. ${t}`).join("\n") + "\n\n";
    fullText += `${data.accessTasks.title}\n` + data.accessTasks.tasks.map((t, i) => `${i + 1}. ${t}`).join("\n");

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs print:hidden">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#0284c7] bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition"
        >
          <ArrowLeft size={16} /> Back to Sets
        </button>

        <div className="flex items-center gap-2 flex-wrap">
          <Link
            to="/typing"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 px-3.5 py-2 rounded-xl transition shadow-xs"
          >
            <Keyboard size={14} /> Practice on Typing Master
          </Link>

          <button
            onClick={handleCopyAll}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition border border-slate-200"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-600" />
                <span className="text-emerald-600">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy Questions</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#0284c7] hover:bg-[#0369a1] px-3.5 py-2 rounded-xl transition shadow-xs"
          >
            <Printer size={14} /> Print PDF View
          </button>
        </div>
      </div>

      {/* ── Document Paper (Authentic PDF Representation) ─────────────── */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-12 max-w-4xl mx-auto relative overflow-hidden font-sans text-slate-900 leading-relaxed print:border-none print:shadow-none print:p-0">
        
        {/* Subtle Watermark matching PDF */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.06] rotate-[-35deg] text-slate-900 text-6xl sm:text-8xl font-black">
          samrita collections
        </div>

        <div className="relative z-10 space-y-10">
          
          {/* Document Header Title (Underlined blue like in PDF) */}
          <div className="text-center pt-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#2563eb] border-b-2 border-[#2563eb] inline-block pb-1 tracking-tight">
              {data.title}
            </h1>
          </div>

          {/* ── 1. Nepali Typing ─────────────────────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {data.nepaliTyping.title}
            </h2>

            <div className="text-slate-800 text-justify space-y-4 text-base sm:text-[17px] leading-[1.85] font-normal">
              {data.nepaliTyping.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>

          {/* ── 2. English Typing ────────────────────────────────────── */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {data.englishTyping.title}
            </h2>

            <div className="text-slate-800 text-justify space-y-4 text-base sm:text-[16px] leading-[1.8] font-normal">
              {data.englishTyping.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>

          {/* ── 3. MS Word Tasks ─────────────────────────────────────── */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {data.wordTasks.title}
            </h2>

            <ol className="list-decimal list-outside pl-6 space-y-2 text-base text-slate-800 font-medium">
              {data.wordTasks.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ol>

            {/* Special Diagram for Set 4 (Cycle Diagram: frog -> insects -> plants -> animal -> human) */}
            {data.wordTasks.specialElement === "cycle-diagram" && (
              <div className="my-6 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 max-w-lg mx-auto flex flex-col items-center">
                <span className="text-xs uppercase font-bold text-slate-400 mb-4 tracking-wider">
                  Cycle Diagram
                </span>
                <div className="relative w-72 h-72 flex items-center justify-center">
                  {/* Circular Node Placement */}
                  {/* Top: frog */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#3b82f6] text-white px-4 py-3 rounded-full text-xs font-bold shadow-sm">
                    frog
                  </div>
                  {/* Right: insects */}
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#3b82f6] text-white px-3.5 py-3 rounded-full text-xs font-bold shadow-sm">
                    insects
                  </div>
                  {/* Bottom Right: plants */}
                  <div className="absolute bottom-4 right-10 bg-[#3b82f6] text-white px-3.5 py-3 rounded-full text-xs font-bold shadow-sm">
                    plants
                  </div>
                  {/* Bottom Left: animal */}
                  <div className="absolute bottom-4 left-10 bg-[#3b82f6] text-white px-3.5 py-3 rounded-full text-xs font-bold shadow-sm">
                    animal
                  </div>
                  {/* Left: human */}
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#3b82f6] text-white px-3.5 py-3 rounded-full text-xs font-bold shadow-sm">
                    human
                  </div>

                  {/* Flow Arrow Indicators */}
                  <div className="absolute top-12 right-12 text-[#93c5fd] font-black text-xl rotate-45">➔</div>
                  <div className="absolute bottom-16 right-4 text-[#93c5fd] font-black text-xl rotate-[135deg]">➔</div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[#93c5fd] font-black text-xl rotate-180">➔</div>
                  <div className="absolute bottom-16 left-4 text-[#93c5fd] font-black text-xl rotate-[-135deg]">➔</div>
                  <div className="absolute top-12 left-12 text-[#93c5fd] font-black text-xl rotate-[-45deg]">➔</div>
                </div>
              </div>
            )}

            {/* Special Diagram for Set 5 (Pyramid, Equation, Symbols, Bullets) */}
            {data.wordTasks.specialElement === "pyramid-equation" && (
              <div className="my-6 space-y-6">
                {/* Pyramid Chart */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 max-w-md mx-auto">
                  <span className="text-xs uppercase font-bold text-slate-400 mb-3 block text-center tracking-wider">
                    Pyramid Structure Chart
                  </span>
                  <div className="flex flex-col items-center gap-1.5 text-white font-bold text-xs text-center">
                    <div className="w-32 bg-[#1d4ed8] py-2.5 rounded-t-lg shadow-xs">
                      Top Management
                    </div>
                    <div className="w-48 bg-[#2563eb] py-2.5 shadow-xs">
                      Middle Management
                    </div>
                    <div className="w-64 bg-[#3b82f6] py-2.5 shadow-xs">
                      Front-line Staff
                    </div>
                    <div className="w-80 bg-[#60a5fa] py-2.5 rounded-b-lg shadow-xs">
                      Customers
                    </div>
                  </div>
                </div>

                {/* Quadratic Equation */}
                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/60 max-w-md mx-auto text-center space-y-2">
                  <span className="text-xs uppercase font-bold text-blue-600 block tracking-wider">
                    Equation
                  </span>
                  <div className="font-serif text-xl sm:text-2xl text-slate-900 font-bold inline-flex items-center justify-center gap-2">
                    <span>𝑥 =</span>
                    <div className="inline-flex flex-col items-center">
                      <span className="border-b-2 border-slate-800 px-2 pb-0.5">
                        −𝑏 ± √(𝑏² − 4𝑎𝑐)
                      </span>
                      <span className="pt-0.5">2𝑎</span>
                    </div>
                  </div>
                </div>

                {/* Symbols & Date */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 max-w-md mx-auto text-center">
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-1">
                    Symbols & Date/Time
                  </span>
                  <p className="text-base font-bold text-slate-800">
                    ® &nbsp; ™ &nbsp; © &nbsp;&nbsp; 10/30/2026 &nbsp;&nbsp; 11:48 AM
                  </p>
                </div>

                {/* Custom Bullets */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 max-w-md mx-auto">
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-2">
                    Custom Bullet Points
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-sm font-medium text-slate-800">
                    <p>❖ Computer</p>
                    <p>❖ Monitor</p>
                    <p>☞ LED</p>
                    <p>❖ Keyboard</p>
                    <p>✓ Mouse</p>
                    <p>☞ Wired</p>
                    <p>☞ wireless</p>
                    <p>✓ printer</p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* ── 4. MS Excel Tasks ────────────────────────────────────── */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {data.excelTasks.title}
            </h2>

            {/* Table if present */}
            {data.excelTasks.table && (
              <div className="overflow-x-auto my-3">
                <table className="w-full border-collapse border border-slate-400 text-sm text-left">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-400 font-bold">
                      {data.excelTasks.table.headers.map((h, i) => (
                        <th
                          key={i}
                          className={`border border-slate-400 px-3 py-2 ${
                            i === 0 ? "text-center w-16" : ""
                          }`}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.excelTasks.table.rows.map((row, ri) => (
                      <tr key={ri} className="hover:bg-slate-50/60">
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className={`border border-slate-400 px-3 py-1.5 ${
                              ci === 0 ? "text-center font-medium" : ""
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Instructions */}
            {data.excelTasks.instructions && data.excelTasks.instructions.length > 0 && (
              <div className="space-y-1.5 pt-1 text-sm sm:text-base text-slate-800 font-medium">
                {data.excelTasks.instructions.map((ins, i) => (
                  <p key={i}>{ins}</p>
                ))}
              </div>
            )}
          </section>

          {/* ── 5. PowerPoint Tasks ──────────────────────────────────── */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {data.powerPointTasks.title}
            </h2>

            <ol className="list-decimal list-outside pl-6 space-y-2 text-base text-slate-800 font-medium">
              {data.powerPointTasks.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ol>

            {data.powerPointTasks.table && (
              <div className="overflow-x-auto my-3">
                <table className="w-full border-collapse border border-slate-400 text-sm text-left">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-400 font-bold">
                      {data.powerPointTasks.table.headers.map((h, i) => (
                        <th key={i} className="border border-slate-400 px-3 py-2">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.powerPointTasks.table.rows.map((row, ri) => (
                      <tr key={ri} className="hover:bg-slate-50/60">
                        {row.map((cell, ci) => (
                          <td key={ci} className="border border-slate-400 px-3 py-1.5">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          {/* ── 6. MS Access Tasks ───────────────────────────────────── */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {data.accessTasks.title}
            </h2>

            {data.accessTasks.table && (
              <div className="overflow-x-auto my-3 max-w-md">
                <table className="w-full border-collapse border border-slate-400 text-sm text-left">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-400 font-bold">
                      {data.accessTasks.table.headers.map((h, i) => (
                        <th key={i} className="border border-slate-400 px-4 py-2">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.accessTasks.table.rows.map((row, ri) => (
                      <tr key={ri} className="hover:bg-slate-50/60">
                        {row.map((cell, ci) => (
                          <td key={ci} className="border border-slate-400 px-4 py-1.5 font-medium">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="space-y-1.5 text-base text-slate-800 font-medium">
              {data.accessTasks.tasks.map((task, i) => (
                <p key={i}>{task}</p>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
