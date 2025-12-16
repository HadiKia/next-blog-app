"use client";

import dynamic from "next/dynamic";

const ThemeSwitcher = dynamic(() => import("./ThemeSwitcher"), {
  ssr: false,
  loading: () => (
    <div className="w-8 h-8 rounded-full bg-secondary-200 animate-pulse"></div>
  ),
});

export default ThemeSwitcher;
