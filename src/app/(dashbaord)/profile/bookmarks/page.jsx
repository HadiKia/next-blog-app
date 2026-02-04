"use client";

import { useAuth } from "@/context/AuthContext";
import { bookmarkPostApi } from "@/services/postServices";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import ProfilePostList from "../_components/ProfilePostList";

export default function BookmarksPage() {
  const { user } = useAuth();

  return (
    <ProfilePostList
      title="بوکمارک‌ها"
      postIds={user?.bookmarkedPosts}
      actionApi={bookmarkPostApi}
      ActionIcon={BookmarkIcon}
      actionClassName="text-secondary-700"
    />
  );
}
