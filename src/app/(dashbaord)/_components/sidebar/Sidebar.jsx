"use client";

import { useAuth } from "@/context/AuthContext";
import { sidebarConfig } from "./sidebar.config";
import SidebarLinks from "./SidebarLinks";
import SidebarSkeleton from "./SidebarSkeleton";

export default function Sidebar() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <SidebarSkeleton />;

  if (!user) return null;

  const links = sidebarConfig[user.role];

  return <SidebarLinks links={links} />;
}
