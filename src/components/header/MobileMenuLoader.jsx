"use client";

import dynamic from "next/dynamic";

const MobileMenu = dynamic(() => import("./MobileMenu"), {
  ssr: false,
  loading: () =>  <div className="me-2 p-2 w-6 h-6 rounded-md bg-secondary-200 lg:hidden animate-pulse"></div>,
});

export default MobileMenu;
