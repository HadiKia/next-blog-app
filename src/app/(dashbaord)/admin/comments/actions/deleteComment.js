"use server";

import { deleteCommentApi } from "@/services/commentService";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";

export default async function deleteComment(prevState, { commentId }) {
  const cookieStore = await cookies();

  try {
    const options = setCookiesOnReq(cookieStore);
    const { message } = await deleteCommentApi(commentId, options);

    return { message };
  } catch (err) {
    return {
      error: err?.response?.data?.message || "خطا در حذف نظر",
    };
  }
}
