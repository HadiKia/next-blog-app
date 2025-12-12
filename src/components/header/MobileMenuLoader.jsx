"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";

const MobileMenu = dynamic(() => import("./MobileMenu"), {
  ssr: false,
  loading: () => <div className="p-2 blur-sm lg:hidden"><Bars3Icon className="w-6 h-6" /></div>,
});

export default MobileMenu;
