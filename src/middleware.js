import { NextResponse } from "next/server";
import { middlewareAuth } from "./utils/middlewareAuth";

const accessControl = [
  {
    path: "/signin",
    authRequired: false,
    redirectIfAuthed: "/",
  },
  {
    path: "/signup",
    authRequired: false,
    redirectIfAuthed: "/",
  },
  {
    path: "/profile",
    authRequired: true,
  },
  {
    path: "/admin",
    authRequired: true,
    role: "admin",
    redirectIfUnauthorizedRole: "/profile",
  },
];

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  const matchedRoute = accessControl.find(
    (route) => pathname === route.path || pathname.startsWith(route.path + "/")
  );

  if (!matchedRoute) {
    return NextResponse.next();
  }

  let user;
  if (matchedRoute.authRequired || matchedRoute.redirectIfAuthed) {
    user = await middlewareAuth(req);
  }

  if (matchedRoute.redirectIfAuthed && user) {
    return NextResponse.redirect(
      new URL(matchedRoute.redirectIfAuthed, req.nextUrl)
    );
  }

  if (matchedRoute.authRequired && !user) {
    return NextResponse.redirect(new URL("/signin", req.nextUrl));
  }

  if (matchedRoute.role && user.role !== matchedRoute.role) {
    return NextResponse.redirect(
      new URL(matchedRoute.redirectIfUnauthorizedRole || "/", req.nextUrl)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/signin", "/signup", "/profile/:path*", "/admin/:path*"],
};
