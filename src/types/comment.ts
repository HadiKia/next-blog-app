import type { ID, ISODateString } from "./api";
import type { User } from "./user";

export type CommentStatus = 0 | 1 | 2;

export type CommentContent = {
  text: string;
};

export type Comment = {
  _id: ID;
  content: CommentContent;
  user?: User;
  post?: ID;
  status: CommentStatus;
  createdAt: ISODateString;
  updatedAt: ISODateString;
};

export type CreateCommentInput = {
  postId: ID;
  parentId?: ID;
  content: CommentContent;
};

export type UpdateCommentInput = {
  id: ID;
  data: {
    status: CommentStatus;
  };
};

export type CommentListResponse = {
  comments: Comment[];
  commentsCount: number;
};
