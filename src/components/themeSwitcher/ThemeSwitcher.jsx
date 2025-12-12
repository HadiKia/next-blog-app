"use client";
import { useDarkMode } from "@/context/DarkModeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function ThemeSwitcher() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="text-secondary-500 lg:hover:text-secondary-700 grid place-items-center duration-300 ease-linear">
      {isDarkMode ? (
        <button onClick={() => toggleDarkMode()} className="py-2 lg:py-4">
          <MoonIcon className="w-6 h-6" />
        </button>
      ) : (
        <button onClick={() => toggleDarkMode()} className="py-2 lg:py-4">
          <SunIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
