import type { ID, ISODateString } from "./api";

export type UserRole = "admin" | "user";

export type User = {
  _id: ID;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  avatar?: string;
  biography?: string;
  likedPosts?: ID[];
  bookmarkedPosts?: ID[];
  createdAt: ISODateString;
  updatedAt: ISODateString;
};

export type ProfileFormValues = {
  name: string;
  email: string;
  avatar?: File | string | null;
};

export type EditProfileInput = {
  id: ID;
  data: FormData;
};

export type UserListResponse = {
  users: User[];
};

export type UserProfileResponse = {
  user: User;
};
