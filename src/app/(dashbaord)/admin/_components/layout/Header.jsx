"use client";

import ThemeSwitcher from "@/components/themeSwitcher/ThemeSwitcherLoader";
import { useAuth } from "@/context/AuthContext";
import Avatar from "@/ui/Avatar";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { user, isLoading } = useAuth();
  return (
    <div className="sticky top-0 z-[1] pe-4 ps-14 lg:px-10 flex items-center justify-between h-16 lg:h-20 bg-secondary-100 border-b border-secondary-200 duration-300 ease-linear lg:border-none">
      {isLoading ? (
        <div className="blur-sm flex flex-col lg:flex-row lg:items-center lg:gap-x-2">
          <span className="text-xs text-primary-700 lg:text-xl lg:font-medium">
            سلام،
          </span>
          <span className="text-primary-700 font-medium text-lg lg:text-xl">
            نام کاربری
          </span>
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
          <div className="blur-sm relative aspect-square rounded-full w-8 h-8">
            <Image
              src="/images/avatar.png"
              fill
              alt="avatar"
              className="rounded-full"
              quality={50}
            />
          </div>
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
