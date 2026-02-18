"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const normalizePath = (url) => {
  const segments = url.split("/").filter(Boolean);

  return segments.length > 1
    ? segments.slice(1).join("/")
    : (segments[0] ?? "");
};

const NavLink = ({ path, icon: Icon, children, onClick, className }) => {
  const pathname = usePathname();

  const currentPath = normalizePath(pathname);
  const targetPath = normalizePath(path);

  const isActive =
    currentPath === targetPath || currentPath.startsWith(targetPath + "/");

  const baseClass =
    "flex items-center text-base lg:text-lg gap-x-2 py-2 lg:py-4 transition-colors duration-300 ease-linear";

  const activeClass = isActive
    ? "text-primary-700 font-semibold"
    : "text-secondary-500 hover:text-secondary-700";

  return (
    <Link
      href={path}
      onClick={onClick}
      className={`${baseClass} ${activeClass}`}
    >
      {Icon && <Icon className="w-5 h-5 lg:w-6 lg:h-6" />}
      {children}
    </Link>
  );
};

export default NavLink;
