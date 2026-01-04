"use server";

import { deleteCategoryApi } from "@/services/categoryService";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";

export default async function deleteCategory(prevState, { categoryId }) {
  const cookieStore = await cookies();

  try {
    const options = setCookiesOnReq(cookieStore);
    const { message } = await deleteCategoryApi(categoryId, options);

    return { message };
  } catch (err) {
    return {
      error: err?.response?.data?.message || "خطا در حذف دسته‌بندی",
    };
  }
}
