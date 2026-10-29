import DailyMCQCard from "@/components/DailyMCQCard";
import { Link } from "react-router-dom";
import { Calendar, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";

const DailyMCQPage = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      <SEO
        title="Daily MCQ Question Challenge & Solutions"
        description="Daily fresh Loksewa Computer Operator MCQ challenge with instant explanation, correct answer key, and daily streak rewards."
        canonical="https://amritagupta.com.np/daily-mcq"
      />
      <div className="container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0284c7] shadow-md mb-3 text-white">
            <Calendar className="text-white" size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-[#0c2854] tracking-tight">Daily MCQ</h1>
          <p className="text-slate-500 font-medium mt-2 flex items-center justify-center gap-1.5 text-sm">
            <Sparkles size={14} className="text-amber-500" /> A fresh question every day — answer fast, climb the daily list!
          </p>
        </div>

        <DailyMCQCard />

        <div className="mt-8 bg-card rounded-2xl p-5 shadow-sm">
          <h3 className="font-bold mb-2">How it works</h3>
          <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
            <li>Admin posts a new question every day.</li>
            <li>You get <strong>one attempt</strong> per question.</li>
            <li>After answering, you see the correct option, the explanation, and who else got it right.</li>
            <li>Build your streak — answer daily to unlock badges 🔥</li>
          </ul>
          <Link to="/leaderboard" className="inline-block mt-4 text-sm text-primary font-semibold hover:underline">View full leaderboard →</Link>
        </div>
      </div>
    </div>
  );
};

export default DailyMCQPage;
