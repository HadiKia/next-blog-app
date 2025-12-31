"use server";

import { updateCommentApi } from "@/services/commentService";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";

export default async function updateComment(
  prevState,
  { commentId, formData }
) {
  const cookieStore = await cookies();

  const data = {
    status: formData.get("status"),
  };

  try {
    const options = setCookiesOnReq(cookieStore);
    const { message } = await updateCommentApi(
      { id: commentId, data },
      options
    );

    return { message };
  } catch (err) {
    return {
      error: err?.response?.data?.message || "خطا در تغییر وضعیت",
    };
  }
}
