"use client";
import { useState } from "react";
import NavLink from "@/components/header/NavLink";
import {
  ArrowLeftStartOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";
import { sidebarAdminLinks } from "@/constants/sidebarAdminLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        aria-label="openMenu"
        onClick={() => setOpen(true)}
        className="-ms-2 p-2 cursor-pointer text-secondary-500 lg:hidden absolute start-4 top-3 "
      >
        <Bars3Icon className="w-6 h-6" />
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm duration-300 ease-linear lg:hidden ${
          open ? "opacity-100 z-30" : "opacity-0 -z-10 absolute sr-only"
        }`}
      />

      <div
        className={` fixed lg:sticky start-0 inset-y-0 lg:inset-auto w-full max-w-xs lg:top-0 bg-secondary-0 lg:bg-secondary-100 flex flex-col px-4 lg:px-6 xl:px-8 transform transition-transform duration-300 ease-linear z-40 lg:translate-x-0
          ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between py-3 lg:py-5 mb-7 border-b border-secondary-200  ">
          <Link
            href="/"
            className="flex items-center gap-x-2 pt-3 pb-2 lg:py-2 text-lg lg:text-xl font-semibold text-secondary-700"
          >
            <HomeIcon className="w-5 h-5 lg:w-6 lg:h-6 mb-1" />
            نکست بلاگ
          </Link>
          <button
            onClick={() => setOpen(false)}
            className=" flex cursor-pointer items-center justify-center rounded-md p-2 text-secondary-500 lg:hidden"
            aria-label="closeMenu"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col gap-y-3 lg:gap-y-0">
          {sidebarAdminLinks.map(({ id, path, children, Icon }) => (
            <NavLink
              key={id}
              path={path}
              icon={Icon}
              onClick={() => setOpen(false)}
            >
              {children}
            </NavLink>
          ))}
        </div>

        <div className="border-t border-secondary-200 pt-4 pb-6 mt-auto lg:border-none lg:mt-0 lg:py-0 ">
          <button
            type="button"
            className="flex items-center gap-x-2 py-2 lg:py-4 text-base lg:text-lg text-secondary-500 hover:text-secondary-700 transition-colors duration-300 ease-linear"
          >
            <ArrowLeftStartOnRectangleIcon className="w-5 h-5 lg:w-6 lg:h-6 mb-1 lg:mb-0" />
            خروج
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
