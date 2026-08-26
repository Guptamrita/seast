import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Session, User } from "@supabase/supabase-js";

export type AuthContextType = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  isLocalMode: boolean;
  signIn: (email: string, password: string) => Promise<{ error?: { message: string } | null; user?: User | null }>;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error?: { message: string } | null; user?: User | null }>;
  signInDemo: (asAdmin?: boolean) => Promise<{ error?: { message: string } | null; user?: User | null }>;
  signOut: () => Promise<void>;
};

const LOCAL_USERS_KEY = "loksewa_local_users";
const LOCAL_SESSION_KEY = "loksewa_local_session";

interface LocalUserRecord {
  id: string;
  email: string;
  passwordHash: string;
  fullName: string;
  role?: string;
  createdAt: string;
}

// Simple hash for local storage
const hashString = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash.toString(16);
};

const makeMockUser = (id: string, email: string, fullName: string, role = "user"): User => {
  return {
    id,
    app_metadata: { provider: "email", providers: ["email"], role },
    user_metadata: { full_name: fullName, name: fullName },
    aud: "authenticated",
    confirmation_sent_at: new Date().toISOString(),
    confirmed_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    email,
    email_confirmed_at: new Date().toISOString(),
    is_anonymous: false,
    phone: "",
    role: "authenticated",
    updated_at: new Date().toISOString(),
  } as unknown as User;
};

const makeMockSession = (user: User): Session => {
  return {
    access_token: "local_token_" + Math.random().toString(36).substring(2),
    refresh_token: "local_refresh_" + Math.random().toString(36).substring(2),
    expires_in: 86400 * 30,
    expires_at: Math.floor(Date.now() / 1000) + 86400 * 30,
    token_type: "bearer",
    user,
  };
};

const Ctx = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  isLocalMode: false,
  signIn: async () => ({ error: null }),
  signUp: async () => ({ error: null }),
  signInDemo: async () => ({ error: null }),
  signOut: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLocalMode, setIsLocalMode] = useState(false);

  // Restore local session if available
  const restoreLocalSession = (): boolean => {
    try {
      const stored = localStorage.getItem(LOCAL_SESSION_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed?.user) {
          setUser(parsed.user);
          setSession(parsed);
          setIsLocalMode(true);
          return true;
        }
      }
    } catch (e) {
      console.warn("Failed to parse local session", e);
    }
    return false;
  };

  useEffect(() => {
    let mounted = true;

    const initAuth = async () => {
      // First check local session
      const hadLocal = restoreLocalSession();

      // Try Supabase auth safely
      try {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, s) => {
          if (!mounted) return;
          if (s) {
            setSession(s);
            setUser(s.user ?? null);
            setIsLocalMode(false);
          }
        });

        // Supabase getSession with timeout
        const sessionPromise = supabase.auth.getSession();
        const timeoutPromise = new Promise<{ data: { session: null } }>((resolve) =>
          setTimeout(() => resolve({ data: { session: null } }), 2000)
        );

        const result = await Promise.race([sessionPromise, timeoutPromise]).catch(() => ({ data: { session: null } }));
        
        if (mounted && result.data?.session) {
          setSession(result.data.session);
          setUser(result.data.session.user ?? null);
          setIsLocalMode(false);
        } else if (!hadLocal && mounted) {
          // If no supabase session and no local session, check local storage again
          restoreLocalSession();
        }

        return () => {
          subscription?.unsubscribe();
        };
      } catch (err) {
        console.warn("Supabase auth unreachable, falling back to local mode", err);
        setIsLocalMode(true);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    initAuth();

    return () => {
      mounted = false;
    };
  }, []);

  const getLocalUsers = (): LocalUserRecord[] => {
    try {
      const u = localStorage.getItem(LOCAL_USERS_KEY);
      return u ? JSON.parse(u) : [];
    } catch {
      return [];
    }
  };

  const saveLocalUsers = (users: LocalUserRecord[]) => {
    localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
  };

  const setLocalActiveSession = (u: User) => {
    const s = makeMockSession(u);
    localStorage.setItem(LOCAL_SESSION_KEY, JSON.stringify(s));
    setUser(u);
    setSession(s);
    setIsLocalMode(true);
  };

  const signUp = async (
    email: string,
    pass: string,
    fullName: string
  ): Promise<{ error?: { message: string } | null; user?: User | null }> => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = fullName.trim() || cleanEmail.split("@")[0] || "User";

    // 1. Try Supabase first if online
    try {
      const { data, error } = await supabase.auth.signUp({
        email: cleanEmail,
        password: pass,
        options: {
          emailRedirectTo: window.location.origin,
          data: { full_name: cleanName },
        },
      });

      if (!error && data?.user) {
        if (data.session) {
          setSession(data.session);
          setUser(data.user);
          setIsLocalMode(false);
        }
        return { error: null, user: data.user };
      }

      // If Supabase returned a valid API error (like user already registered), check message
      if (error && !error.message.toLowerCase().includes("fetch") && !error.message.toLowerCase().includes("network")) {
        // Legitimate Supabase error (e.g. User already registered)
        return { error };
      }
    } catch (e: any) {
      console.warn("Supabase signUp network error, falling back to local storage:", e);
    }

    // 2. Local Mode Sign Up fallback
    const users = getLocalUsers();
    const existing = users.find((u) => u.email.toLowerCase() === cleanEmail);
    if (existing) {
      return { error: { message: "An account with this email already exists." } };
    }

    const newLocalUser: LocalUserRecord = {
      id: "local_usr_" + Math.random().toString(36).substring(2, 11),
      email: cleanEmail,
      passwordHash: hashString(pass),
      fullName: cleanName,
      createdAt: new Date().toISOString(),
    };

    users.push(newLocalUser);
    saveLocalUsers(users);

    const mockUser = makeMockUser(newLocalUser.id, newLocalUser.email, newLocalUser.fullName);
    setLocalActiveSession(mockUser);

    return { error: null, user: mockUser };
  };

  const signIn = async (
    email: string,
    pass: string
  ): Promise<{ error?: { message: string } | null; user?: User | null }> => {
    const cleanEmail = email.trim().toLowerCase();

    // 1. Try Supabase first
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password: pass,
      });

      if (!error && data?.user && data?.session) {
        setSession(data.session);
        setUser(data.user);
        setIsLocalMode(false);
        localStorage.removeItem(LOCAL_SESSION_KEY);
        return { error: null, user: data.user };
      }

      if (error && !error.message.toLowerCase().includes("fetch") && !error.message.toLowerCase().includes("network")) {
        // If not a network/fetch error, check if this user exists in local storage before rejecting
        const users = getLocalUsers();
        const localUser = users.find((u) => u.email.toLowerCase() === cleanEmail);
        if (!localUser) {
          return { error };
        }
      }
    } catch (e: any) {
      console.warn("Supabase signIn fetch error, falling back to local storage:", e);
    }

    // 2. Local Mode Sign In fallback
    const users = getLocalUsers();
    const found = users.find((u) => u.email.toLowerCase() === cleanEmail);
    if (!found) {
      // If no local user exists, auto-create one for seamless local experience or check password
      const newUser: LocalUserRecord = {
        id: "local_usr_" + Math.random().toString(36).substring(2, 11),
        email: cleanEmail,
        passwordHash: hashString(pass),
        fullName: cleanEmail.split("@")[0] || "User",
        createdAt: new Date().toISOString(),
      };
      users.push(newUser);
      saveLocalUsers(users);
      const mockUser = makeMockUser(newUser.id, newUser.email, newUser.fullName);
      setLocalActiveSession(mockUser);
      return { error: null, user: mockUser };
    }

    if (found.passwordHash !== hashString(pass)) {
      return { error: { message: "Invalid login credentials. Please check your password." } };
    }

    const mockUser = makeMockUser(found.id, found.email, found.fullName, found.role);
    setLocalActiveSession(mockUser);
    return { error: null, user: mockUser };
  };

  const signInDemo = async (asAdmin = false) => {
    const demoEmail = asAdmin ? "admin@loksewa.pro" : "demo.student@loksewa.pro";
    const demoName = asAdmin ? "Admin Officer" : "Loksewa Aspirant";
    const demoUser = makeMockUser(
      asAdmin ? "local_admin_001" : "local_demo_001",
      demoEmail,
      demoName,
      asAdmin ? "admin" : "user"
    );
    setLocalActiveSession(demoUser);
    return { error: null, user: demoUser };
  };

  const signOut = async () => {
    try {
      localStorage.removeItem(LOCAL_SESSION_KEY);
      await supabase.auth.signOut().catch(() => {});
    } catch (e) {
      console.warn("Sign out error", e);
    } finally {
      setUser(null);
      setSession(null);
      setIsLocalMode(false);
    }
  };

  return (
    <Ctx.Provider
      value={{
        user,
        session,
        loading,
        isLocalMode,
        signIn,
        signUp,
        signInDemo,
        signOut,
      }}
    >
      {children}
    </Ctx.Provider>
  );
};

export const useAuth = () => useContext(Ctx);
