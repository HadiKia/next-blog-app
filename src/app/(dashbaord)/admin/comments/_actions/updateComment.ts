"use server";

import { updateCommentApi } from "@/services/commentService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import type { ServerActionState, ID, CommentStatus } from "@/types";

type UpdateCommentInput = {
  commentId: ID;
  formData: FormData;
};

export default async function updateComment(
  prevState: ServerActionState,
  { commentId, formData }: UpdateCommentInput,
): Promise<ServerActionState> {
  const cookieStore = await cookies();

  const data = {
    status: Number(formData.get("status")) as CommentStatus,
  };

  try {
    const options = setCookieOnReq(cookieStore);
    const { message } = await updateCommentApi({ id: commentId, data }, options);
    return { message, error: "" };
  } catch (err) {
    return {
      error:
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message ?? "خطا در تغییر وضعیت",
      message: "",
    };
  }
}