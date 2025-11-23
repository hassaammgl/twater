// import { supabase } from "@/lib/supabase";
// import type { User } from "@supabase/supabase-js";
// import { create } from "zustand";

// interface ProfileUser {
//   email?: string;
// }

// interface AuthState {
//   isLoading: boolean;
//   isAuthenticated: boolean;
//   user: User | null;
//   profileUser: ProfileUser | null;

//   setLoading: (v: boolean) => void;
//   setAuthenticated: (v: boolean) => void;
//   setUser: (u: User | null) => void;
//   setProfileUser: (u: ProfileUser | null) => void;

//   signup: (email: string, password: string) => Promise<void>;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => Promise<void>;
// }

// export const useAuth = create<AuthState>((set) => ({
//   isLoading: false,
//   isAuthenticated: false,
//   user: null,
//   profileUser: {},

//   setLoading: (v) => set({ isLoading: v }),
//   setAuthenticated: (v) => set({ isAuthenticated: v }),
//   setUser: (u) => set({ user: u }),
//   setProfileUser: (u) => {},

//   signup: async (email, password) => {
//     set({ isLoading: true });
//     const { data, error } = await supabase.auth.signUp({ email, password });
//     if (error) console.error("Signup error:", error);
//     else {
//       const { data: res, error } = await supabase
//         .from("users")
//         .insert({ email: data.user?.user_metadata.email });

//       console.log(res, error);

//       set({ isAuthenticated: !!data.session, user: data.user });
//     }
//     set({ isLoading: false });
//   },

//   login: async (email, password) => {
//     set({ isLoading: true });
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });
//     if (error) console.error("Login error:", error);
//     else set({ isAuthenticated: !!data.session, user: data.user });
//     set({ isLoading: false });
//   },

//   logout: async () => {
//     set({ isLoading: true });
//     const { error } = await supabase.auth.signOut();
//     if (error) console.error("Logout error:", error);
//     set({ isAuthenticated: false, user: null, isLoading: false });
//   },
// }));

// // Subscribe to auth changes
// supabase.auth.onAuthStateChange((_event, session) => {
//   useAuth.getState().setUser(session?.user ?? null);
//   useAuth.getState().setAuthenticated(!!session);
// });


import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";
import { create } from "zustand";
import { Alert } from "react-native";

interface ProfileUser {
  email?: string;
}

interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: User | null;
  profileUser: ProfileUser | null;

  setLoading: (v: boolean) => void;
  setAuthenticated: (v: boolean) => void;
  setUser: (u: User | null) => void;
  setProfileUser: (u: ProfileUser | null) => void;

  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
  isLoading: false,
  isAuthenticated: false,
  user: null,
  profileUser: {},

  setLoading: (v) => set({ isLoading: v }),
  setAuthenticated: (v) => set({ isAuthenticated: v }),
  setUser: (u) => set({ user: u }),
  setProfileUser: (u) => {},

  signup: async (email, password) => {
    try {
      set({ isLoading: true });

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        Alert.alert("Signup Failed", error.message);
        return;
      }

      await supabase.from("users").insert({
        email: data.user?.user_metadata.email,
      });

      set({
        isAuthenticated: !!data.session,
        user: data.user,
      });

      Alert.alert("Success", "Account created successfully!");
    } catch (err: any) {
      Alert.alert("Unexpected Error", err.message);
    } finally {
      set({ isLoading: false });
    }
  },

  login: async (email, password) => {
    try {
      set({ isLoading: true });

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        Alert.alert("Login Failed", error.message);
        return;
      }

      set({
        isAuthenticated: !!data.session,
        user: data.user,
      });

      Alert.alert("Success", "Logged in successfully!");
    } catch (err: any) {
      Alert.alert("Unexpected Error", err.message);
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    try {
      set({ isLoading: true });

      const { error } = await supabase.auth.signOut();

      if (error) {
        Alert.alert("Logout Failed", error.message);
        return;
      }

      set({
        isAuthenticated: false,
        user: null,
      });

      Alert.alert("Logged Out", "You have been signed out.");
    } catch (err: any) {
      Alert.alert("Unexpected Error", err.message);
    } finally {
      set({ isLoading: false });
    }
  },
}));

// Listen to auth state updates
supabase.auth.onAuthStateChange((_event, session) => {
  useAuth.getState().setUser(session?.user ?? null);
  useAuth.getState().setAuthenticated(!!session);
});
