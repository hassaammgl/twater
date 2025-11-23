import { create,of } from 'zustand';
import { useColorScheme } from 'react-native';
import { Colors } from "@/constants/Colors";

type Theme = 'light' | 'dark';

interface ThemeStore {
  theme: Theme;
  colors: typeof Colors.light;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}


const useThemeStore = of<ThemeStore>((set) => ({
  theme: (useColorScheme() ?? 'light') as Theme,
  colors: Colors.light,

  setTheme: (theme) =>
    set({ theme, colors: Colors[theme] }),

  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
      colors: state.theme === 'light' ? Colors.dark : Colors.light,
    })),
}));