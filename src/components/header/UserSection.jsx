"use client";

import { useAuth } from "@/context/AuthContext";
import NavLink from "./NavLink";
import { UserIcon, UserPlusIcon } from "@heroicons/react/24/outline";

const UserSection = ({ onClick }) => {
  const { user, isLoading } = useAuth();

  if (isLoading)
    return (
      <div className="w-32 h-10 bg-secondary-100 lg:bg-secondary-200 rounded-md animate-pulse">
      </div>
    );

  if (user) {
    return (
      <NavLink path="/profile" icon={UserIcon} onClick={onClick}>
        {user.name}
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
