"use client";

import { useAuth } from "@/context/AuthContext";
import NavLink from "./NavLink";
import { UserIcon, UserPlusIcon } from "@heroicons/react/24/outline";

const UserSection = ({ onClick }) => {
  const { user, isLoading } = useAuth();

  if (isLoading)
    return (
      <div className="flex items-center text-base lg:text-lg gap-x-2 py-2 lg:py-4 blur-sm">
        <UserIcon className="w-5 h-5 mb-1 lg:mb-0" />
        <span>حساب کاربری</span>
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
