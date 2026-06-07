"use server";

import { createCommentApi } from "@/services/commentService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import type { ServerActionState, CreateCommentInput } from "@/types";

type CreateCommentActionInput = {
  formData: FormData;
  postId: string;
  parentId?: string | null;
};

export async function createComment(
  prevState: ServerActionState,
  { formData, postId, parentId }: CreateCommentActionInput,
): Promise<ServerActionState> {
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);

  const rawFormData: CreateCommentInput = {
    postId,
    parentId,
    text: formData.get("text") as string,
  };

  try {
    const { message } = await createCommentApi(rawFormData, options);
    revalidatePath("/blogs/[slug]", "page");
    return { message, error: "" };
  } catch (err) {
    const error =
      (err as { response?: { data?: { message?: string } } })?.response?.data
        ?.message ?? "خطایی رخ داد";
    return { error, message: "" };
  }
}
