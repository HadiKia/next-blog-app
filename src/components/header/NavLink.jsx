"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ path, icon: Icon, children, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  const baseClass =
    "flex items-center gap-x-2 py-2 lg:py-4 transition-colors duration-300 linear";
  const activeClass = isActive
    ? "text-primary-800 font-semibold"
    : "text-primary-500 hover:text-primary-700";

  return (
    <Link
      href={path}
      onClick={onClick}
      className={`${baseClass} ${activeClass}`}
    >
      {Icon && <Icon className="w-5 h-5 lg:w-6 lg:h-6 mb-1 " />}
      <span>{children}</span>
    </Link>
  );
};

export default NavLink;
