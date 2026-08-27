// src/hooks/useVisitorTracker.ts
import { useState, useEffect } from "react";

interface VisitorStats {
  totalVisits: number;
  myVisits: number;
  todayVisits: number;
  activeOnline: number;
  firstVisit: string;
  lastVisit: string;
  isFirstTime: boolean;
  userRank: string;
  loading: boolean;
}

const BASE_VISITS = 18450; // Starting realistic base count for the portal
const STORAGE_KEYS = {
  MY_VISITS: "samrita_user_visit_count",
  TOTAL_VISITS_CACHE: "samrita_total_visits_cache",
  FIRST_VISIT: "samrita_first_visit_time",
  LAST_VISIT: "samrita_last_visit_time",
  SESSION_SEEN: "samrita_session_counted",
};

export const useVisitorTracker = (): VisitorStats => {
  const [stats, setStats] = useState<VisitorStats>(() => {
    // Initial sync from localStorage
    let storedMyVisits = 1;
    let storedTotal = BASE_VISITS;
    let firstVisitStr = "";
    let lastVisitStr = "";

    try {
      storedMyVisits = parseInt(localStorage.getItem(STORAGE_KEYS.MY_VISITS) || "1", 10);
      storedTotal = parseInt(localStorage.getItem(STORAGE_KEYS.TOTAL_VISITS_CACHE) || `${BASE_VISITS}`, 10);
      firstVisitStr = localStorage.getItem(STORAGE_KEYS.FIRST_VISIT) || "";
      lastVisitStr = localStorage.getItem(STORAGE_KEYS.LAST_VISIT) || "";
    } catch {
      // Fallback in case localStorage is restricted
    }

    return {
      totalVisits: storedTotal,
      myVisits: storedMyVisits,
      todayVisits: Math.floor(storedMyVisits * 3 + 142),
      activeOnline: Math.floor(Math.random() * 15) + 18,
      firstVisit: firstVisitStr,
      lastVisit: lastVisitStr,
      isFirstTime: storedMyVisits <= 1,
      userRank: getUserRank(storedMyVisits),
      loading: true,
    };
  });

  useEffect(() => {
    const trackVisits = async () => {
      const now = new Date();
      const nowIso = now.toISOString();
      let myCount = 1;
      let firstTime = false;
      let firstVisitDate = "";

      try {
        const storedMy = localStorage.getItem(STORAGE_KEYS.MY_VISITS);
        const storedFirst = localStorage.getItem(STORAGE_KEYS.FIRST_VISIT);
        const sessionCounted = sessionStorage.getItem(STORAGE_KEYS.SESSION_SEEN);

        if (!storedMy) {
          firstTime = true;
          myCount = 1;
          firstVisitDate = now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
          localStorage.setItem(STORAGE_KEYS.FIRST_VISIT, firstVisitDate);
          localStorage.setItem(STORAGE_KEYS.MY_VISITS, "1");
        } else {
          firstVisitDate = storedFirst || "Recent";
          const currentVal = parseInt(storedMy, 10) || 1;
          
          // Increment visit on new browser session
          if (!sessionCounted) {
            myCount = currentVal + 1;
            localStorage.setItem(STORAGE_KEYS.MY_VISITS, myCount.toString());
            sessionStorage.setItem(STORAGE_KEYS.SESSION_SEEN, "true");
          } else {
            myCount = currentVal;
          }
        }
        localStorage.setItem(STORAGE_KEYS.LAST_VISIT, now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      } catch {
        myCount = 1;
      }

      // Try fetching real global counter from public CounterAPI with timeout
      let fetchedTotal = BASE_VISITS;
      try {
        const cachedTotal = parseInt(localStorage.getItem(STORAGE_KEYS.TOTAL_VISITS_CACHE) || `${BASE_VISITS}`, 10);
        fetchedTotal = cachedTotal;

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);

        // CounterAPI endpoint for Samrita Collection portal
        const response = await fetch(
          "https://api.counterapi.dev/v1/samrita-collection-nepal-loksewa-2026/site_visits/up",
          { signal: controller.signal }
        );
        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          if (data && typeof data.count === "number") {
            fetchedTotal = BASE_VISITS + data.count;
            localStorage.setItem(STORAGE_KEYS.TOTAL_VISITS_CACHE, fetchedTotal.toString());
          }
        } else {
          // Increment cached total by 1 if offline/fallback
          fetchedTotal = cachedTotal + 1;
          localStorage.setItem(STORAGE_KEYS.TOTAL_VISITS_CACHE, fetchedTotal.toString());
        }
      } catch {
        // Fallback gracefully without error
        const cachedTotal = parseInt(localStorage.getItem(STORAGE_KEYS.TOTAL_VISITS_CACHE) || `${BASE_VISITS}`, 10);
        fetchedTotal = cachedTotal + 1;
        try {
          localStorage.setItem(STORAGE_KEYS.TOTAL_VISITS_CACHE, fetchedTotal.toString());
        } catch {
          // safe ignore
        }
      }

      // Calculate dynamic active users based on time of day
      const currentHour = now.getHours();
      const baseActive = (currentHour >= 6 && currentHour <= 23) ? 28 : 12;
      const dynamicActive = baseActive + Math.floor(Math.random() * 16);
      const dynamicToday = Math.floor(180 + (now.getHours() * 18) + (now.getMinutes() % 15));

      setStats({
        totalVisits: fetchedTotal,
        myVisits: myCount,
        todayVisits: dynamicToday,
        activeOnline: dynamicActive,
        firstVisit: firstVisitDate || "Today",
        lastVisit: "Just now",
        isFirstTime: firstTime,
        userRank: getUserRank(myCount),
        loading: false,
      });
    };

    trackVisits();
  }, []);

  return stats;
};

function getUserRank(visits: number): string {
  if (visits <= 1) return "🌱 First-Time Aspirant (नयाँ आगन्तुक)";
  if (visits <= 4) return "📖 Active Learner (नियमित विद्यार्थी)";
  if (visits <= 10) return "⭐ Dedicated Aspirant (लगनशील परीक्षार्थी)";
  if (visits <= 25) return "🏆 Pro Loksewa Warrior (उत्कृष्ट अभ्यासकर्ता)";
  return "👑 Loksewa Master (सर्वोत्कृष्ट नियमित प्रयोगकर्ता)";
}
