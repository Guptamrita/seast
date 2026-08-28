import React, { useState } from 'react';
import { Send, FileText, CheckCircle2, Mail, User, MessageSquare, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function GeditApp({ onClose }: { onClose?: () => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error('Please fill in Name, Email and Message!');
      return;
    }
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSent(true);
      toast.success('Message sent to Sahil successfully!');
      setTimeout(() => {
        if (onClose) onClose();
      }, 1500);
    }, 1000);
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#010D1A] text-white font-mono select-none">
      {/* Top Gedit Bar */}
      <div className="bg-[#003B70] px-4 py-2 flex items-center justify-between border-b border-black/30 text-xs">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-amber-400" />
          <span className="font-bold text-white tracking-wider">contact_sahil.txt</span>
          <span className="text-[10px] text-blue-200 bg-blue-900/50 px-1.5 py-0.5 rounded">Gedit 3.36</span>
        </div>
        <div className="text-[11px] text-blue-200">
          Target: <span className="text-white font-bold">sahilsarda45669@gmail.com</span>
        </div>
      </div>

      {/* Editor Body */}
      <div className="flex-1 p-6 overflow-y-auto windowMainScreen flex flex-col justify-center max-w-2xl mx-auto w-full">
        {sent ? (
          <div className="text-center space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10 animate-fade-in">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
            <h3 className="text-lg font-bold text-white">Thank You, {name}!</h3>
            <p className="text-xs text-slate-300">Your message has been delivered to Sahil. He will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-slate-300 font-medium">Your Name *</label>
                <div className="flex items-center gap-2 bg-[#021B33] border border-blue-900/60 rounded-lg px-3 py-2">
                  <User className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full bg-transparent border-none outline-none text-white text-xs p-0 focus:ring-0"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-slate-300 font-medium">Your Email *</label>
                <div className="flex items-center gap-2 bg-[#021B33] border border-blue-900/60 rounded-lg px-3 py-2">
                  <Mail className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. john@example.com"
                    className="w-full bg-transparent border-none outline-none text-white text-xs p-0 focus:ring-0"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-slate-300 font-medium">Subject</label>
              <div className="flex items-center gap-2 bg-[#021B33] border border-blue-900/60 rounded-lg px-3 py-2">
                <MessageSquare className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Collaboration / Project Query"
                  className="w-full bg-transparent border-none outline-none text-white text-xs p-0 focus:ring-0"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-slate-300 font-medium">Message Body *</label>
              <textarea
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your note here..."
                className="w-full bg-[#021B33] border border-blue-900/60 rounded-lg p-3 text-white text-xs focus:outline-none focus:border-blue-500 transition resize-none font-mono"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-2.5 rounded-xl bg-ub-orange hover:bg-orange-600 text-white font-bold text-xs shadow-lg shadow-orange-500/20 transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSending ? 'Transmitting...' : 'Send Message'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
