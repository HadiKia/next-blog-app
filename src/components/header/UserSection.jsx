"use client";

import { useAuth } from "@/context/AuthContext";
import NavLink from "./NavLink";
import { UserIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import Avatar from "@/ui/Avatar";

const UserSection = ({ onClick }) => {
  const { user, isLoading } = useAuth();

  if (isLoading)
    return (
      <div className="flex items-center gap-x-2">
        <div className="w-6 h-6 rounded-full bg-secondary-200 animate-pulse"></div>
        <div className="w-20 h-6 rounded bg-secondary-200 animate-pulse"></div>
      </div>
    );

  if (user) {
    return (
      <NavLink path="/profile" onClick={onClick}>
        <div className="relative w-5 h-5 lg:w-6 lg:h-6">
          <Avatar fill alt={user?.name || "-"} src={user.avatarUrl} />
        </div>
        <span>{user.name}</span>
      </NavLink>
    );
  }
  return (
    <div className="flex flex-col gap-y-2 lg:flex-row lg:items-center lg:gap-x-10">
      <NavLink path="/signin" icon={UserIcon} onClick={onClick}>
        ورود
      </NavLink>
      <NavLink path="/signup" icon={UserPlusIcon} onClick={onClick}>
        ثبت نام
      </NavLink>
    </div>
  );
};

export default UserSection;
