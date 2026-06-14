"use server";

import { deleteCategoryApi } from "@/services/categoryService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import type { ServerActionState, ID } from "@/types";

type DeleteCategoryInput = {
  categoryId: ID;
  formData: FormData;
};

export default async function deleteCategory(
  prevState: ServerActionState,
  { categoryId }: DeleteCategoryInput,
): Promise<ServerActionState> {
  const cookieStore = await cookies();

  try {
    const options = setCookieOnReq(cookieStore);
    const { message } = await deleteCategoryApi(categoryId, options);
    return { message, error: "" };
  } catch (err) {
    return {
      error:
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message ?? "خطا در حذف دسته‌بندی",
      message: "",
    };
  }
}