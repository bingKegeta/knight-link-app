import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("username")?.value;
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return;
  }

  // Redirect logged-in users to /home if they're not already there
  if (currentUser && pathname === "/login") {
    return Response.redirect(new URL("/home", request.url));
  }

  // Redirect non-logged-in users to /login if they're trying to access any other path
  if (!currentUser && pathname !== "/login" && pathname !== "/register") {
    return Response.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
