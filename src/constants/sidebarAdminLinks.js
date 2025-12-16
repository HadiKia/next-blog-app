import {
  ChatBubbleBottomCenterIcon,
  DocumentTextIcon,
  RectangleGroupIcon,
  Squares2X2Icon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const sidebarAdminLinks = [
  { id: 1, children: "داشبورد", path: "/admin", Icon: RectangleGroupIcon },
  { id: 2, children: "پست ها", path: "/admin/posts", Icon: DocumentTextIcon },
  { id: 3, children: "نظرات", path: "/admin/comments", Icon: ChatBubbleBottomCenterIcon },
  { id: 4, children: "دسته‌بندی ها", path: "/admin/category", Icon: Squares2X2Icon },
  { id: 5, children: "کاربران", path: "/admin/users", Icon: UsersIcon },
];
