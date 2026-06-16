"use server";

import { deleteUserApi } from "@/services/authService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import type { ServerActionState, ID } from "@/types";

type DeleteUserInput = {
  userId: ID;
  formData: FormData;
};

export default async function deleteUser(
  prevState: ServerActionState,
  { userId }: DeleteUserInput,
): Promise<ServerActionState> {
  const cookieStore = await cookies();

  try {
    const options = setCookieOnReq(cookieStore);
    const { message } = await deleteUserApi(userId, options);
    return { message, error: "" };
  } catch (err) {
    return {
      error:
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message ?? "خطا در حذف کاربر",
      message: "",
    };
  }
}