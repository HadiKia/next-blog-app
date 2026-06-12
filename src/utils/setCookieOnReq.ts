import type { AxiosRequestConfig } from "axios";

type CookieStore = {
  get: (name: string) => { name: string; value: string } | undefined;
};

type CookieOptions = {
  headers: { Cookie: string };
};

export default function setCookieOnReq(cookies: CookieStore): CookieOptions {
  const accessToken = cookies.get("accessToken");
  const refreshToken = cookies.get("refreshToken");

  return {
    headers: {
      Cookie: `${accessToken?.name}=${accessToken?.value}; ${refreshToken?.name}=${refreshToken?.value}`,
    },
  };
}
