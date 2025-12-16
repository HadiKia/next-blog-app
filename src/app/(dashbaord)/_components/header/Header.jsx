"use client";

import ThemeSwitcher from "@/components/themeSwitcher/ThemeSwitcherLoader";
import { useAuth } from "@/context/AuthContext";
import Avatar from "@/ui/Avatar";
import Link from "next/link";

const Header = () => {
  const { user, isLoading } = useAuth();
  return (
    <div className="sticky top-0 z-[1] pe-4 ps-14 lg:px-10 flex items-center justify-between h-16 lg:h-20 bg-secondary-100 border-b border-secondary-200 duration-300 ease-linear lg:border-none">
      {isLoading ? (
        <div className="animate-pulse flex flex-col gap-y-1 ">
          <div className="h-3 w-10 rounded bg-secondary-200 lg:hidden"></div>
          <div className="h-5 w-20 rounded-md bg-secondary-200 lg:w-40 lg:h-11"></div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-2">
          <span className="text-xs text-primary-700 lg:text-xl lg:font-medium">
            سلام،
          </span>
          <h6 className="text-primary-700 font-medium text-base lg:text-xl">
            {user?.name}
          </h6>
        </div>
      )}

      <div className="flex items-center gap-x-4 lg:gap-x-8">
        {isLoading ? (
          <div className="animate-pulse w-8 h-8 bg-secondary-200 rounded-full"></div>
        ) : (
          <Link href="/profile">
            <Avatar width={32} alt={user?.name || "-"} src={user.avatarUrl} />
          </Link>
        )}
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
