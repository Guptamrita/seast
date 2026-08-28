import React, { useState } from 'react';
import { Trash2, RotateCcw, AlertTriangle, FileText } from 'lucide-react';
import { toast } from 'sonner';

export default function TrashApp() {
  const [items, setItems] = useState([
    { id: 1, name: 'old_resume_v1.docx', size: '24 KB', date: '2 days ago' },
    { id: 2, name: 'unused_draft_ideas.txt', size: '12 KB', date: '1 week ago' },
    { id: 3, name: 'bugs_fixed_archive.log', size: '48 KB', date: '2 weeks ago' },
  ]);

  const handleEmpty = () => {
    setItems([]);
    toast.success('Trash emptied!');
  };

  const handleRestore = (id: number) => {
    setItems(items.filter(i => i.id !== id));
    toast.success('Item restored!');
  };

  return (
    <div className="w-full h-full flex flex-col bg-ub-cool-grey text-white font-ubuntu select-none">
      {/* Top Header */}
      <div className="bg-ub-grey px-4 py-3 border-b border-black/40 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trash2 className="w-4 h-4 text-ub-orange" />
          <span className="text-sm font-bold">Trash ({items.length} items)</span>
        </div>
        {items.length > 0 && (
          <button
            onClick={handleEmpty}
            className="px-3 py-1 bg-rose-600/80 hover:bg-rose-600 text-white rounded-lg text-xs font-semibold transition"
          >
            Empty Trash
          </button>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto windowMainScreen">
        {items.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-2">
            <Trash2 className="w-12 h-12 text-slate-600" />
            <p className="text-sm font-semibold">Trash is Empty</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {items.map((item) => (
              <div key={item.id} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between group hover:border-ub-orange/40 transition">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-sky-400" />
                  <div>
                    <p className="text-xs font-bold text-white truncate max-w-[130px]">{item.name}</p>
                    <p className="text-[10px] text-slate-400">{item.size} • {item.date}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRestore(item.id)}
                  title="Restore file"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/20 text-slate-300 hover:text-white transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
