import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCw, Home, Search, Globe, Lock, Star } from 'lucide-react';

export default function ChromeApp() {
  const [url, setUrl] = useState('https://amritagupta.com.np');
  const [inputUrl, setInputUrl] = useState('https://amritagupta.com.np');
  const [searchQuery, setSearchQuery] = useState('');

  const bookmarks = [
    { title: 'Online Exam Portal', url: '/' },
    { title: 'Typing Practice', url: '/typing' },
    { title: 'About Sahil', url: '/sahil' },
    { title: 'GitHub', url: 'https://github.com/vivek9patel' },
    { title: 'Google', url: 'https://www.google.com' }
  ];

  const handleNavigate = (target: string) => {
    let finalUrl = target.trim();
    if (!finalUrl.startsWith('http://') && !finalUrl.startsWith('https://') && !finalUrl.startsWith('/')) {
      finalUrl = 'https://' + finalUrl;
    }
    setUrl(finalUrl);
    setInputUrl(finalUrl);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleNavigate(inputUrl);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-slate-900 text-slate-100 font-sans select-none">
      {/* Chrome Top Tab & Navigation Bar */}
      <div className="bg-slate-950 border-b border-slate-800 p-2 space-y-2">
        {/* Tab */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-800 rounded-t-xl text-xs font-medium text-slate-200 border-t-2 border-ub-orange max-w-xs truncate shadow">
            <Globe className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
            <span className="truncate">{url}</span>
          </div>
        </div>

        {/* Address bar controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-slate-400">
            <button 
              onClick={() => handleNavigate('/')} 
              className="p-1.5 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition"
              title="Home"
            >
              <Home className="w-3.5 h-3.5" />
            </button>
            <button 
              onClick={() => handleNavigate(url)} 
              className="p-1.5 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition"
              title="Reload"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* URL Input */}
          <div className="flex-1 flex items-center gap-2 bg-slate-900 border border-slate-700/80 rounded-full px-3 py-1 text-xs">
            <Lock className="w-3 h-3 text-emerald-400 flex-shrink-0" />
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent border-none outline-none text-slate-100 placeholder-slate-500 font-mono text-xs focus:ring-0 p-0"
              placeholder="Search or enter web address"
            />
            <Star className="w-3.5 h-3.5 text-slate-500 hover:text-amber-400 cursor-pointer" />
          </div>
        </div>

        {/* Bookmarks Bar */}
        <div className="flex items-center gap-2 pt-0.5 overflow-x-auto text-[11px] text-slate-300">
          {bookmarks.map((bm, i) => (
            <button
              key={i}
              onClick={() => handleNavigate(bm.url)}
              className="px-2.5 py-0.5 rounded-md hover:bg-slate-800 flex items-center gap-1.5 whitespace-nowrap text-slate-300 hover:text-white transition"
            >
              <Globe className="w-3 h-3 text-sky-400" />
              <span>{bm.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Browser Viewport */}
      <div className="flex-1 bg-slate-950 relative overflow-hidden flex flex-col items-center justify-center">
        {url.startsWith('/') ? (
          <iframe
            src={url}
            title="Internal Page"
            className="w-full h-full border-none bg-white"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-ub-orange shadow-xl">
              <Globe className="w-8 h-8" />
            </div>
            <div className="space-y-1 max-w-md">
              <h3 className="text-xl font-bold text-white">Google Chrome Web Explorer</h3>
              <p className="text-xs text-slate-400">
                You are viewing <span className="text-ub-orange font-mono font-bold">{url}</span>. Due to browser security sandbox policies for iframes, click below to open in a new tab or explore internal site pages.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-xl bg-ub-orange hover:bg-orange-600 text-white font-semibold text-xs transition shadow-lg shadow-orange-500/20"
              >
                Open External Web Link
              </a>
              <button
                onClick={() => handleNavigate('/')}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs border border-slate-700 transition"
              >
                Go to Exam Portal Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
