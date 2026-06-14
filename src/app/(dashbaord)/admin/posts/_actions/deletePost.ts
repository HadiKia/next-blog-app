"use server";

import { deletePostApi } from "@/services/postServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import type { ServerActionState, ID } from "@/types";

type DeletePostInput = {
  postId: ID;
  formData: FormData;
};

export default async function deletePost(
  prevState: ServerActionState,
  { postId }: DeletePostInput,
): Promise<ServerActionState> {
  const cookieStore = await cookies();

  try {
    const options = setCookieOnReq(cookieStore);
    const { message } = await deletePostApi(postId, options);
    return { message, error: "" };
  } catch (err) {
    return {
      error:
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message ?? "خطا در حذف بلاگ",
      message: "",
    };
  }
}
