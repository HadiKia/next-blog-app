import type { ID, ISODateString } from "./api";
import type { Category } from "./category";
import type { User } from "./user";
import type { Comment } from "./comment";

export type PostType = "free" | "premium";

export type Post = {
  _id: ID;
  title: string;
  slug: string;
  briefText: string;
  text: string;
  readingTime: number;
  type: PostType;
  coverImage?: string;
  coverImageUrl: string;
  author: User;
  category: Category;
  comments?: Comment[];
  related: Post[];
  likes?: ID[];
  bookmarks?: ID[];
  likesCount?: number;
  bookmarksCount?: number;
  createdAt: ISODateString;
  updatedAt: ISODateString;
};

export type PostListItem = Omit<Post, "text" | "comments" | "related"> & {
  related?: Post[];
};

export type PostFormValues = {
  title: string;
  slug: string;
  briefText: string;
  text: string;
  readingTime: number;
  category: ID;
  coverImage: File | null;
};

export type CreatePostInput = FormData;

export type EditPostInput = {
  id: ID;
  data: FormData;
};

export type PostListResponse = {
  posts: Post[];
  totalPages?: number;
};

export type PostResponse = {
  post: Post;
};
