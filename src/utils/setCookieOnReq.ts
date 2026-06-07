import type { AxiosRequestConfig } from "axios";

type CookieStore = {
  get: (name: string) => { name: string; value: string } | undefined;
};

export default function setCookieOnReq(
  cookies: CookieStore,
): AxiosRequestConfig {
  const accessToken = cookies.get("accessToken");
  const refreshToken = cookies.get("refreshToken");

  return {
    withCredentials: true,
    headers: {
      Cookie: `${accessToken?.name}=${accessToken?.value}; ${refreshToken?.name}=${refreshToken?.value}`,
    },
  };
}
