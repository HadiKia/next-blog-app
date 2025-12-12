"use client";

import { useAuth } from "@/context/AuthContext";
import NavLink from "./NavLink";
import { UserIcon, UserPlusIcon } from "@heroicons/react/24/outline";

const UserSection = ({ onClick }) => {
  const { user, isLoading } = useAuth();

  if (isLoading)
    return (
      <div className="-mx-2 lg:mx-0 px-2 lg:px-0 py-2 lg:py-4 flex items-center gap-x-2 blur-sm">
        <UserIcon className="w-5 h-5 mb-1" />
        <span>نام و نام خانوادگی</span>
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
    <div className="flex flex-col gap-y-2 lg:flex-row lg:items-center lg:gap-x-6">
      <NavLink path="/signin" icon={UserIcon} onClick={onClick}>
        ورود
      </NavLink>
      <span className="hidden lg:block h-10 w-[1px] bg-secondary-300 rounded-full"></span>
      <NavLink path="/signup" icon={UserPlusIcon} onClick={onClick}>
        ثبت نام
      </NavLink>
    </div>
  );
};

export default UserSection;
