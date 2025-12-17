"use client";

import ThemeSwitcher from "@/components/themeSwitcher/ThemeSwitcherLoader";
import { useAuth } from "@/context/AuthContext";
import Avatar from "@/ui/Avatar";
import Link from "next/link";

const Header = () => {
  const { user, isLoading } = useAuth();
  return (
    <div className="sticky top-0 z-[1] pe-4 ps-14 lg:px-8 flex items-center justify-between h-16 lg:h-20 bg-secondary-100 border-b border-secondary-200 duration-300 ease-linear lg:border-none">
      {isLoading ? (
        <div className="animate-pulse flex items-center gap-x-1 lg:gap-x-2 flex-1 justify-center lg:justify-start">
          <div className="h-6 w-24 rounded-md bg-secondary-200 lg:w-40 lg:h-11"></div>
        </div>
      ) : (
        <div className="flex items-center gap-x-1 lg:gap-x-2 flex-1 justify-center lg:justify-start">
          <span className="text-sm text-primary-700 lg:text-xl lg:font-medium">
            سلام،
          </span>
          <h6 className="text-primary-700 font-medium text-base lg:text-xl">
            {user?.name}
          </h6>
        </div>
      )}

      <div className="flex items-center gap-x-4 lg:gap-x-8">
        {isLoading ? (
          <div className="animate-pulse w-6 h-6 bg-secondary-200 rounded-full"></div>
        ) : (
          <Link href="/profile" className="relative w-6 h-6">
            <Avatar fill alt={user?.name || "-"} src={user.avatarUrl} />
          </Link>
        )}
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
