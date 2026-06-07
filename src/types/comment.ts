import type { ID, ISODateString } from "./api";
import type { User } from "./user";

export type CommentStatus = 0 | 1 | 2;

export type CommentContent = {
  text: string;
};

export type Comment = {
  _id: ID;
  content: CommentContent;
  user: User;
  post?: ID;
  parent?: ID | null;
  answers: Comment[];
  openToComment?: boolean;
  status: CommentStatus;
  createdAt: ISODateString;
  updatedAt: ISODateString;
};

export type CreateCommentInput = {
  postId: ID;
  parentId?: ID | null;
  text: string;
};

export type CreateCommentFormValues = {
  text: string;
};

export type UpdateCommentInput = {
  id: ID;
  data: {
    status: CommentStatus;
  };
};

export type UpdateCommentActionInput = {
  commentId: ID;
  formData: FormData;
};

export type CommentListResponse = {
  comments: Comment[];
  commentsCount: number;
};
