import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import { getAllUsersApi } from "./authService";
import { getAllCommentsApi } from "./commentService";
import { getPosts } from "./postServices";
import type { DashboardCardData } from "@/types";

type ApiError = {
  response?: {
    data?: {
      message?: string;
    };
  };
};

export async function fetchCardData(): Promise<DashboardCardData> {
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);

  try {
    const data = await Promise.all([
      getAllUsersApi(options),
      getAllCommentsApi(options),
      getPosts(),
    ]);

    const numberOfUsers = Number(data[0].users.length ?? "0");
    const numberOfComments = Number(data[1].commentsCount ?? "0");
    const numberOfPosts = Number(data[2].posts.length ?? "0");

    return {
      numberOfUsers,
      numberOfComments,
      numberOfPosts,
    };
  } catch (error) {
    const err = error as ApiError;
    console.log(err.response?.data?.message);
    throw new Error("خطا در بارگذاری اطلاعات");
  }
}
