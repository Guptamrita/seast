import { useState, useEffect, useCallback } from "react";
import { INITIAL_TU_NOTICES, TuNotice } from "@/data/tuNoticesData";

const STORAGE_KEY = "tu_last_seen_notice_id";
const CACHE_KEY = "tu_cached_notices";

export function useTuNotices() {
  const [notices, setNotices] = useState<TuNotice[]>(() => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      // fallback to initial
    }
    return INITIAL_TU_NOTICES;
  });

  const [loading, setLoading] = useState(false);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);
  const [hasNew, setHasNew] = useState(false);
  const [newCount, setNewCount] = useState(0);

  // Check if there are new notices compared to stored last-seen
  const calculateNewStatus = useCallback((currentNotices: TuNotice[]) => {
    if (!currentNotices || currentNotices.length === 0) {
      setHasNew(false);
      setNewCount(0);
      return;
    }

    const lastSeenId = localStorage.getItem(STORAGE_KEY);
    if (!lastSeenId) {
      // If user has never visited, mark the most recent (e.g. top 1) as new
      setHasNew(true);
      setNewCount(1);
      return;
    }

    const latestId = currentNotices[0]?.id;
    if (latestId && latestId !== lastSeenId) {
      // Find how many new items appear before lastSeenId
      const lastIndex = currentNotices.findIndex((n) => n.id === lastSeenId);
      const count = lastIndex > 0 ? lastIndex : 1;
      setHasNew(true);
      setNewCount(count);
    } else {
      setHasNew(false);
      setNewCount(0);
    }
  }, []);

  const markAsSeen = useCallback(() => {
    if (notices.length > 0 && notices[0]?.id) {
      localStorage.setItem(STORAGE_KEY, notices[0].id);
      setHasNew(false);
      setNewCount(0);
      window.dispatchEvent(new Event("tu_notices_seen"));
    }
  }, [notices]);

  const fetchLiveNotices = useCallback(async () => {
    setLoading(true);
    try {
      // 1. Try our Vercel Serverless Function /api/notices
      let data: any = null;
      try {
        const res = await fetch("/api/notices", { cache: "no-store" });
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.notices) && json.notices.length > 0) {
            data = json.notices;
          }
        }
      } catch (err) {
        // Continue to fallback
      }

      if (data && data.length > 0) {
        setNotices(data);
        localStorage.setItem(CACHE_KEY, JSON.stringify(data));
        calculateNewStatus(data);
      } else {
        // Fallback to static list
        calculateNewStatus(notices);
      }
      setLastChecked(new Date());
    } catch (e) {
      console.warn("Failed to fetch live TU notices, using cached/default:", e);
      calculateNewStatus(notices);
    } finally {
      setLoading(false);
    }
  }, [calculateNewStatus, notices]);

  // Initial check & auto-fetch
  useEffect(() => {
    calculateNewStatus(notices);
    fetchLiveNotices();

    const handleSeenEvent = () => {
      calculateNewStatus(notices);
    };
    window.addEventListener("tu_notices_seen", handleSeenEvent);
    window.addEventListener("storage", handleSeenEvent);

    return () => {
      window.removeEventListener("tu_notices_seen", handleSeenEvent);
      window.removeEventListener("storage", handleSeenEvent);
    };
  }, []);

  return {
    notices,
    loading,
    hasNew,
    newCount,
    lastChecked,
    refresh: fetchLiveNotices,
    markAsSeen,
  };
}
