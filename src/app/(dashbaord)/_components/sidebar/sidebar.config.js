import { BookmarkIcon, ChatBubbleBottomCenterIcon, DocumentTextIcon, HeartIcon, RectangleGroupIcon, Squares2X2Icon, UserIcon, UsersIcon } from "@heroicons/react/24/outline";

export const sidebarConfig = {
  admin: [
    { id: 1, children: "پروفایل", path: "/profile", Icon: UserIcon },
    { id: 2, children: "پنل ادمین", path: "/admin", Icon: RectangleGroupIcon },
    { id: 3, children: "پست ها", path: "/admin/posts", Icon: DocumentTextIcon },
    { id: 4, children: "نظرات", path: "/admin/comments", Icon: ChatBubbleBottomCenterIcon },
    { id: 5, children: "دسته‌بندی ها", path: "/admin/category", Icon: Squares2X2Icon },
    { id: 6, children: "کاربران", path: "/admin/users", Icon: UsersIcon },
    { id: 7, children: "مورد علاقه‌ها", path: "/profile/posts", Icon: HeartIcon },
    { id: 8, children: "بوکمارک ها", path: "/profile/comments", Icon: BookmarkIcon },

  ],
  user: [
    { id: 1, children: "پروفایل", path: "/profile", Icon: UserIcon },
    { id: 2, children: "مورد علاقه‌ها", path: "/profile/posts", Icon: HeartIcon },
    { id: 3, children: "بوکمارک ها", path: "/profile/comments", Icon: BookmarkIcon },
  ],
};