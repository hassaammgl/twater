import { supabase } from "@/lib/supabase";
import type { Session, User } from "@supabase/supabase-js";
import { Alert } from "react-native";

export const register = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    console.error(error);
  }
  return {
    session: data.session,
    user: data.user?.user_metadata.email,
  };
};

export const login = async (email: string, password: string) => {};

export const logout = async () => {
  //   Alert.prompt("Confirmation", "Are u really want to log out");
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error signing out:", error);
  }
};
