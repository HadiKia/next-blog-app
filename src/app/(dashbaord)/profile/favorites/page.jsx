"use client";

import { useAuth } from "@/context/AuthContext";
import { likePostApi } from "@/services/postServices";
import { HeartIcon } from "@heroicons/react/24/solid";
import ProfilePostList from "../_components/ProfilePostList";

export default function FavoritesPage() {
  const { user } = useAuth();

  return (
    <ProfilePostList
      title="مورد علاقه‌ها"
      postIds={user?.likedPosts}
      actionApi={likePostApi}
      ActionIcon={HeartIcon}
      actionClassName="text-error-500"
    />
  );
}
