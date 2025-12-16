"use client";

import {  SunIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";

const ThemeSwitcher = dynamic(() => import("./ThemeSwitcher"), {
  ssr: false,
  loading: () => (
    <div className="py-2 lg:py-4 blur-sm">
      <SunIcon className="w-6 h-6" />
    </div>
  ),
});

export default ThemeSwitcher;
