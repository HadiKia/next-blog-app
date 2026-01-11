"use server";

import { deleteUserApi } from "@/services/authService";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";

export default async function deleteUser(prevState, { userId }) {
  const cookieStore = await cookies();

  try {
    const options = setCookiesOnReq(cookieStore);
    const { message } = await deleteUserApi(userId, options);

    return { message };
  } catch (err) {
    return {
      error: err?.response?.data?.message || "خطا در حذف کاربر",
    };
  }
}
