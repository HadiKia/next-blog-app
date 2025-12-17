"use client";

import { useAuth } from "@/context/AuthContext";
import NavLink from "./NavLink";
import { UserIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import Avatar from "@/ui/Avatar";

const UserSection = ({ onClick }) => {
  const { user, isLoading } = useAuth();

  if (isLoading)
    return (
      <div className="w-32 h-10 bg-secondary-100 lg:bg-secondary-200 rounded-md animate-pulse"></div>
    );

  if (user) {
    return (
      <NavLink path="/profile" onClick={onClick}>
        <div className="relative w-5 h-5 lg:w-6 lg:h-6 mb-1 lg:mb-0">
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
