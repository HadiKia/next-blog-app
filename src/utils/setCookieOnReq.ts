type CookieStore = {
  get: (name: string) => { name: string; value: string } | undefined;
};

export default function setCookieOnReq(cookies: CookieStore): RequestInit {
  const accessToken = cookies.get("accessToken");
  const refreshToken = cookies.get("refreshToken");

  const options: RequestInit = {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: `${accessToken?.name}=${accessToken?.value}; ${refreshToken?.name}=${refreshToken?.value}`,
    },
  };
  return options;
}
