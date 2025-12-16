import {
    BookmarkIcon,
  HeartIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";

export const sidebarUserLinks = [
  { id: 1, children: "داشبورد", path: "/profile", Icon: RectangleGroupIcon },
  { id: 2, children: "مورد علاقه‌ها", path: "/profile/posts", Icon: HeartIcon },
  { id: 3, children: "بوکمارک ها", path: "/profile/comments", Icon: BookmarkIcon },
];
