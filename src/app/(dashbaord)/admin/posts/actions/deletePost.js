"use server";

import { deletePostApi } from "@/services/postServices";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";

export default async function deletePost(prevState, { postId }) {
  const cookieStore = await cookies();

  try {
    const options = setCookiesOnReq(cookieStore);
    const { message } = await deletePostApi(postId, options);

    return {
      message,
    };
  } catch (err) {
    return {
      error: err?.response?.data?.message || "خطا در حذف بلاگ",
    };
  }
}
