import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

export const useIsAdmin = () => {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!user) {
      setIsAdmin(false);
      return;
    }

    // Check local admin indicators
    if (
      user.email === "admin@loksewa.pro" ||
      user.email === "admin@loksewa.com" ||
      user.app_metadata?.role === "admin" ||
      sessionStorage.getItem("admin_session")
    ) {
      setIsAdmin(true);
      return;
    }

    // Try checking Supabase safely
    try {
      supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .maybeSingle()
        .then(({ data, error }) => {
          if (!error && data) {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
        })
        .catch(() => {
          setIsAdmin(false);
        });
    } catch {
      setIsAdmin(false);
    }
  }, [user]);

  return isAdmin;
};
