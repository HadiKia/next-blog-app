"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import useLocalStorageState from "@/hooks/useLocalStorageState";

type DarkModeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

type DarkModeProviderProps = {
  children: ReactNode;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined,
);

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState<boolean>(
    "isDarkMode",
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false,
  );

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode(): DarkModeContextType {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  return context;
}