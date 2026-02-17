import { BookmarkIcon, ChatBubbleLeftEllipsisIcon, HeartIcon, NewspaperIcon, RectangleGroupIcon, Squares2X2Icon, UserGroupIcon, UserIcon } from "@heroicons/react/24/outline";

export const sidebarConfig = {
  admin: [
    { id: 1, children: "پروفایل", path: "/profile", Icon: UserIcon },
    { id: 2, children: "پنل ادمین", path: "/admin", Icon: RectangleGroupIcon },
    { id: 3, children: "بلاگ ها", path: "/admin/posts", Icon: NewspaperIcon },
    { id: 4, children: "نظرات", path: "/admin/comments", Icon: ChatBubbleLeftEllipsisIcon },
    { id: 5, children: "دسته‌بندی ها", path: "/admin/categories", Icon: Squares2X2Icon },
    { id: 6, children: "کاربران", path: "/admin/users", Icon: UserGroupIcon },
    { id: 7, children: "مورد علاقه‌ها", path: "/profile/favorites", Icon: HeartIcon },
    { id: 8, children: "بوکمارک ها", path: "/profile/bookmarks", Icon: BookmarkIcon },

  ],
  user: [
    { id: 1, children: "پروفایل", path: "/profile", Icon: UserIcon },
    { id: 2, children: "مورد علاقه‌ها", path: "/profile/favorites", Icon: HeartIcon },
    { id: 3, children: "بوکمارک ها", path: "/profile/bookmarks", Icon: BookmarkIcon },
  ],
};