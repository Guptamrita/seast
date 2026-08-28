import React, { useState } from 'react';
import { Delete, RotateCcw, Equal } from 'lucide-react';

export default function CalcApp() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleDigit = (digit: string) => {
    if (display === '0' && digit !== '.') {
      setDisplay(digit);
    } else {
      setDisplay(prev => prev + digit);
    }
  };

  const handleOperator = (op: string) => {
    setEquation(display + ' ' + op + ' ');
    setDisplay('0');
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  const handleCalculate = () => {
    try {
      const fullExpr = equation + display;
      // Safe numeric calculation
      const sanitized = fullExpr.replace(/×/g, '*').replace(/÷/g, '/');
      // eslint-disable-next-line no-eval
      const res = Function(`'use strict'; return (${sanitized})`)();
      setDisplay(String(res));
      setEquation('');
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-ub-cool-grey text-white p-4 font-ubuntu select-none items-center justify-center">
      <div className="w-full max-w-xs bg-ub-grey border border-black/40 rounded-2xl p-4 shadow-2xl space-y-4">
        {/* Screen */}
        <div className="bg-black/40 rounded-xl p-3 text-right">
          <div className="text-[11px] text-gray-400 h-4 font-mono">{equation}</div>
          <div className="text-2xl font-bold text-white font-mono truncate">{display}</div>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-2 text-sm font-bold">
          <button onClick={handleClear} className="p-3 rounded-xl bg-slate-800 text-rose-400 hover:bg-slate-700">C</button>
          <button onClick={() => setDisplay(prev => prev.slice(0, -1) || '0')} className="p-3 rounded-xl bg-slate-800 text-amber-400 hover:bg-slate-700">⌫</button>
          <button onClick={() => handleOperator('%')} className="p-3 rounded-xl bg-slate-800 text-sky-400 hover:bg-slate-700">%</button>
          <button onClick={() => handleOperator('÷')} className="p-3 rounded-xl bg-ub-orange text-white hover:bg-orange-600">÷</button>

          <button onClick={() => handleDigit('7')} className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700">7</button>
          <button onClick={() => handleDigit('8')} className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700">8</button>
          <button onClick={() => handleDigit('9')} className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700">9</button>
          <button onClick={() => handleOperator('×')} className="p-3 rounded-xl bg-ub-orange text-white hover:bg-orange-600">×</button>

          <button onClick={() => handleDigit('4')} className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700">4</button>
          <button onClick={() => handleDigit('5')} className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700">5</button>
          <button onClick={() => handleDigit('6')} className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700">6</button>
          <button onClick={() => handleOperator('-')} className="p-3 rounded-xl bg-ub-orange text-white hover:bg-orange-600">-</button>

          <button onClick={() => handleDigit('1')} className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700">1</button>
          <button onClick={() => handleDigit('2')} className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700">2</button>
          <button onClick={() => handleDigit('3')} className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700">3</button>
          <button onClick={() => handleOperator('+')} className="p-3 rounded-xl bg-ub-orange text-white hover:bg-orange-600">+</button>

          <button onClick={() => handleDigit('0')} className="p-3 col-span-2 rounded-xl bg-slate-800 hover:bg-slate-700">0</button>
          <button onClick={() => handleDigit('.')} className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700">.</button>
          <button onClick={handleCalculate} className="p-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500">=</button>
        </div>
      </div>
    </div>
  );
}
