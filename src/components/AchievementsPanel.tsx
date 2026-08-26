import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Flame, Award, Star, Zap, Crown, Target, Sparkles } from "lucide-react";

interface Props {
  scorePct: number;
  correct: number;
  total: number;
}

const BADGES = [
  { code: "first_exam", label: "First Steps", desc: "Completed your first exam", icon: "🎯", color: "from-blue-400 to-cyan-500" },
  { code: "score_60", label: "Solid Pass", desc: "Scored 60%+ in an exam", icon: "✅", color: "from-green-400 to-emerald-500" },
  { code: "score_80", label: "High Achiever", desc: "Scored 80%+ in an exam", icon: "🏆", color: "from-amber-400 to-orange-500" },
  { code: "score_90", label: "Elite Scorer", desc: "Scored 90%+ in an exam", icon: "👑", color: "from-yellow-400 to-orange-600" },
  { code: "score_100", label: "Perfect Score", desc: "Got 100% — flawless!", icon: "💯", color: "from-purple-500 to-pink-500" },
  { code: "streak_3", label: "On Fire", desc: "3-day streak", icon: "🔥", color: "from-orange-400 to-red-500" },
  { code: "streak_7", label: "Week Warrior", desc: "7-day streak", icon: "⚡", color: "from-red-500 to-pink-600" },
  { code: "streak_30", label: "Unstoppable", desc: "30-day streak", icon: "🚀", color: "from-indigo-500 to-purple-600" },
  { code: "exams_10", label: "Dedicated", desc: "Took 10 exams", icon: "📚", color: "from-teal-400 to-cyan-500" },
  { code: "exams_50", label: "Veteran", desc: "Took 50 exams", icon: "🎖️", color: "from-purple-500 to-indigo-600" },
];

const AchievementsPanel = ({ scorePct, correct, total }: Props) => {
  const { user } = useAuth();
  const [streak, setStreak] = useState<{ current: number; longest: number } | null>(null);
  const [newBadges, setNewBadges] = useState<string[]>([]);
  const [ownedCodes, setOwnedCodes] = useState<Set<string>>(new Set());
  const [ran, setRan] = useState(false);

  useEffect(() => {
    if (!user || ran) return;
    setRan(true);
    (async () => {
      let currentStreak = 1;
      let longestStreak = 1;
      let attemptsCount = 1;
      let owned = new Set<string>();

      try {
        const storedBadges = JSON.parse(localStorage.getItem(`loksewa_badges_${user.id}`) || "[]");
        owned = new Set(storedBadges);

        const localAttempts = JSON.parse(localStorage.getItem("loksewa_local_attempts") || "[]");
        attemptsCount = localAttempts.filter((a: any) => a.user_id === user.id).length || 1;
      } catch {}

      try {
        // 1) update streak
        const { data: streakData } = await supabase.rpc("update_streak");
        const s = (streakData as any[])?.[0];
        if (s) {
          currentStreak = s.current_streak ?? 1;
          longestStreak = s.longest_streak ?? 1;
        }

        // 2) count attempts
        const { count } = await supabase
          .from("exam_attempts").select("id", { count: "exact", head: true }).eq("user_id", user.id);
        if (count !== null && count !== undefined) attemptsCount = count;

        // 3) existing badges
        const { data: ownedRows } = await supabase
          .from("user_badges").select("badge_code").eq("user_id", user.id);
        if (ownedRows) {
          ownedRows.forEach((r: any) => owned.add(r.badge_code));
        }
      } catch (e) {
        console.warn("Supabase achievements check skipped/fallback to local", e);
      }

      setStreak({ current: currentStreak, longest: longestStreak });
      setOwnedCodes(owned);

      // 4) compute newly earned badges
      const earn: string[] = [];
      const add = (c: string) => { if (!owned.has(c)) earn.push(c); };
      if (attemptsCount >= 1) add("first_exam");
      if (scorePct >= 60) add("score_60");
      if (scorePct >= 80) add("score_80");
      if (scorePct >= 90) add("score_90");
      if (scorePct >= 100) add("score_100");
      if (currentStreak >= 3) add("streak_3");
      if (currentStreak >= 7) add("streak_7");
      if (currentStreak >= 30) add("streak_30");
      if (attemptsCount >= 10) add("exams_10");
      if (attemptsCount >= 50) add("exams_50");

      if (earn.length) {
        const updated = new Set(owned);
        earn.forEach(c => updated.add(c));
        setNewBadges(earn);
        setOwnedCodes(updated);

        try {
          localStorage.setItem(`loksewa_badges_${user.id}`, JSON.stringify(Array.from(updated)));
        } catch {}

        try {
          await supabase.from("user_badges").insert(earn.map(c => ({ user_id: user.id, badge_code: c })));
        } catch {}
      }
    })();
  }, [user, ran, scorePct]);

  if (!user) return null;

  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-amber-950/30 dark:via-orange-950/30 dark:to-rose-950/30 rounded-2xl p-6 my-6 border-2 border-amber-200/60 shadow-md">
      <h2 className="text-lg font-heading font-bold mb-4 flex items-center gap-2">
        <Sparkles className="text-amber-500" size={20} /> Your Achievements
      </h2>

      {/* Streak */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
        <div className="bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-xl p-3 text-center shadow">
          <Flame className="mx-auto mb-1" size={22} />
          <p className="text-2xl font-bold">{streak?.current ?? "…"}</p>
          <p className="text-xs opacity-90">Day Streak</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl p-3 text-center shadow">
          <Crown className="mx-auto mb-1" size={22} />
          <p className="text-2xl font-bold">{streak?.longest ?? "…"}</p>
          <p className="text-xs opacity-90">Longest Streak</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-xl p-3 text-center shadow">
          <Target className="mx-auto mb-1" size={22} />
          <p className="text-2xl font-bold">{scorePct.toFixed(0)}%</p>
          <p className="text-xs opacity-90">This Score</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-xl p-3 text-center shadow">
          <Award className="mx-auto mb-1" size={22} />
          <p className="text-2xl font-bold">{ownedCodes.size}</p>
          <p className="text-xs opacity-90">Badges Earned</p>
        </div>
      </div>

      {newBadges.length > 0 && (
        <div className="bg-white/80 rounded-xl p-4 mb-4 border-2 border-yellow-400/50 animate-pulse-slow">
          <p className="font-bold text-sm mb-2 flex items-center gap-1"><Zap className="text-yellow-500" size={16} />🎉 New Badge{newBadges.length > 1 ? "s" : ""} Unlocked!</p>
          <div className="flex flex-wrap gap-2">
            {newBadges.map(code => {
              const b = BADGES.find(x => x.code === code);
              if (!b) return null;
              return (
                <div key={code} className={`bg-gradient-to-r ${b.color} text-white px-3 py-2 rounded-xl shadow-md flex items-center gap-2`}>
                  <span className="text-2xl">{b.icon}</span>
                  <div>
                    <p className="text-sm font-bold leading-tight">{b.label}</p>
                    <p className="text-xs opacity-90 leading-tight">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Badge collection */}
      <div>
        <p className="text-xs font-semibold text-muted-foreground mb-2">BADGE COLLECTION ({ownedCodes.size}/{BADGES.length})</p>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {BADGES.map(b => {
            const owned = ownedCodes.has(b.code);
            return (
              <div
                key={b.code}
                title={`${b.label} — ${b.desc}`}
                className={`rounded-xl p-2.5 text-center text-xs ${owned ? `bg-gradient-to-br ${b.color} text-white shadow` : "bg-muted text-muted-foreground opacity-50 grayscale"}`}
              >
                <div className="text-2xl">{b.icon}</div>
                <p className="font-semibold leading-tight mt-1 truncate">{b.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AchievementsPanel;
