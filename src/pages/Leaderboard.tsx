import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Trophy, Medal, Award, Crown } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

interface Row {
  user_id: string;
  full_name: string;
  attempts: number;
  best_pct: number;
  avg_pct: number;
  total_score: number;
}

const DEFAULT_LEADERS: Row[] = [
  { user_id: "demo_1", full_name: "Prakash Sharma", attempts: 18, best_pct: 96.0, avg_pct: 88.5, total_score: 1420 },
  { user_id: "demo_2", full_name: "Amrita Gupta", attempts: 16, best_pct: 94.0, avg_pct: 86.0, total_score: 1280 },
  { user_id: "demo_3", full_name: "Suman Shrestha", attempts: 14, best_pct: 92.0, avg_pct: 83.5, total_score: 1140 },
  { user_id: "demo_4", full_name: "Bikash Thapa", attempts: 12, best_pct: 88.0, avg_pct: 80.0, total_score: 960 },
  { user_id: "demo_5", full_name: "Anjali KC", attempts: 11, best_pct: 86.0, avg_pct: 78.5, total_score: 880 },
  { user_id: "demo_6", full_name: "Ramesh Adhikari", attempts: 9, best_pct: 84.0, avg_pct: 76.0, total_score: 720 },
];

const Leaderboard = () => {
  const { user } = useAuth();
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data, error } = await supabase.rpc("get_leaderboard");
        if (!error && Array.isArray(data) && data.length > 0) {
          const list = data.map((r: any) => ({
            user_id: r.user_id,
            full_name: r.full_name || "Anonymous",
            attempts: Number(r.attempts) || 0,
            best_pct: Number(r.best_pct) || 0,
            avg_pct: Number(r.avg_pct) || 0,
            total_score: Number(r.total_score) || 0,
          }));
          setRows(list);
        } else {
          // Fallback with local exam attempts and demo rankings
          let initialList = [...DEFAULT_LEADERS];
          try {
            const localAttempts = JSON.parse(localStorage.getItem("loksewa_local_attempts") || "[]");
            if (user && localAttempts.length > 0) {
              const myAttempts = localAttempts.filter((a: any) => a.user_id === user.id);
              if (myAttempts.length > 0) {
                const totalScore = myAttempts.reduce((s: number, a: any) => s + (Number(a.score) || 0), 0);
                const bestPct = Math.max(...myAttempts.map((a: any) => (a.total_questions ? (a.score / (a.total_questions * 2)) * 100 : 0)));
                const avgPct = myAttempts.reduce((s: number, a: any) => s + (a.total_questions ? (a.score / (a.total_questions * 2)) * 100 : 0), 0) / myAttempts.length;
                
                const myRow: Row = {
                  user_id: user.id,
                  full_name: user.user_metadata?.full_name || user.email?.split("@")[0] || "You",
                  attempts: myAttempts.length,
                  best_pct: bestPct,
                  avg_pct: avgPct,
                  total_score: totalScore,
                };
                initialList = [myRow, ...initialList.filter(l => l.user_id !== user.id)];
                initialList.sort((a, b) => b.total_score - a.total_score);
              }
            }
          } catch (e) {
            console.warn("Error parsing local attempts", e);
          }
          setRows(initialList);
        }
      } catch (err) {
        console.warn("RPC get_leaderboard fallback to default rankings:", err);
        setRows(DEFAULT_LEADERS);
      } finally {
        setLoading(false);
      }
    })();
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  const podiumIcon = (i: number) => {
    if (i === 0) return <Crown className="text-yellow-500" />;
    if (i === 1) return <Medal className="text-gray-400" />;
    if (i === 2) return <Award className="text-orange-500" />;
    return <span className="text-sm font-bold text-muted-foreground">#{i + 1}</span>;
  };

  const top3 = rows.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl animate-fade-in">
      <div className="text-center mb-8">
        <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-2" />
        <h1 className="text-4xl font-heading font-bold mb-2">Leaderboard</h1>
        <p className="text-muted-foreground">Top performers across all exams</p>
      </div>

      {rows.length === 0 ? (
        <p className="text-center text-muted-foreground py-12">No exam attempts yet. Be the first!</p>
      ) : (
        <>
          {/* Podium */}
          {top3.length > 0 && (
            <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8 items-end">
              {[1, 0, 2].map((idx) => {
                const r = top3[idx];
                if (!r) return <div key={idx} />;
                const heights = ["h-32", "h-40", "h-24"];
                const colors = ["from-gray-300 to-gray-400", "from-yellow-400 to-yellow-500", "from-orange-400 to-orange-500"];
                return (
                  <div key={r.user_id} className="flex flex-col items-center">
                    <div className="text-center mb-2">
                      <div className="text-3xl mb-1">{idx === 0 ? "🥇" : idx === 1 ? "🥈" : "🥉"}</div>
                      <p className="font-bold text-sm truncate max-w-[120px]">{r.full_name}</p>
                      <p className="text-xs text-muted-foreground">{r.total_score} pts</p>
                    </div>
                    <div className={`w-full ${heights[idx]} bg-gradient-to-t ${colors[idx]} rounded-t-xl flex items-start justify-center pt-2 text-white font-bold text-2xl`}>
                      {idx + 1}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Table */}
          <div className="bg-card rounded-2xl shadow-sm overflow-hidden border border-border">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr className="text-left text-sm">
                  <th className="px-4 py-3 w-16 text-center">Rank</th>
                  <th className="px-4 py-3">User</th>
                  <th className="px-4 py-3 text-center">Attempts</th>
                  <th className="px-4 py-3 text-center">Avg %</th>
                  <th className="px-4 py-3 text-center">Best %</th>
                  <th className="px-4 py-3 text-center">Total Score</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={r.user_id}
                    className={`border-t ${r.user_id === user?.id ? "bg-primary/10 font-semibold" : ""}`}
                  >
                    <td className="px-4 py-3 text-center">{podiumIcon(i)}</td>
                    <td className="px-4 py-3">
                      {r.full_name}
                      {r.user_id === user?.id && <span className="text-xs ml-2 text-primary font-bold">(You)</span>}
                    </td>
                    <td className="px-4 py-3 text-center">{r.attempts}</td>
                    <td className="px-4 py-3 text-center">{r.avg_pct.toFixed(1)}%</td>
                    <td className="px-4 py-3 text-center text-green-600">{r.best_pct.toFixed(1)}%</td>
                    <td className="px-4 py-3 text-center font-bold">{r.total_score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Leaderboard;
