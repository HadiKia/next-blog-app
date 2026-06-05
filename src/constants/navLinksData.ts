import { HomeIcon, NewspaperIcon } from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";

export type NavLinkItem = {
  id: number;
  children: string;
  path: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const navLinks: NavLinkItem[] = [
  { id: 1, children: "خانه", path: "/", Icon: HomeIcon },
  { id: 2, children: "بلاگ‌ها", path: "/blogs", Icon: NewspaperIcon },
];
