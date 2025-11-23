import { Colors } from "@/constants/Colors";
import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";

type Theme = "light" | "dark";
export const useTheme = () => {
  const systemScheme = useColorScheme();
  const [theme, setThemeState] = useState<Theme>(
    systemScheme === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    if (systemScheme) {
      setThemeState(systemScheme === "dark" ? "dark" : "light");
    }
  }, [systemScheme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return {
    colors: Colors[theme],
    theme,
    toggleTheme,
    setTheme,
  };
};
