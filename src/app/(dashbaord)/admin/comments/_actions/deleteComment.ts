"use server";

import { deleteCommentApi } from "@/services/commentService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import type { ServerActionState, ID } from "@/types";

type DeleteCommentInput = {
  commentId: ID;
  formData: FormData;
};

export default async function deleteComment(
  prevState: ServerActionState,
  { commentId }: DeleteCommentInput,
): Promise<ServerActionState> {
  const cookieStore = await cookies();

  try {
    const options = setCookieOnReq(cookieStore);
    const { message } = await deleteCommentApi(commentId, options);
    return { message, error: "" };
  } catch (err) {
    return {
      error:
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message ?? "خطا در حذف نظر",
      message: "",
    };
  }
}