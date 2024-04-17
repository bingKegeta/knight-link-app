import { NextResponse, type NextRequest } from "next/server";
import { CheckPermissions } from "./app/components/server/actions";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("username")?.value;
  const { pathname } = request.nextUrl;
  const userRole = request.cookies.get('role')?.value || "";

  if (pathname === "/") {
    return;
  }
  
  if ((userRole !== 'admin' && userRole !== "superadmin") && pathname.startsWith('/create')) {
    return NextResponse.rewrite(new URL('/404', request.url)); 
  }
  
  // Redirect logged-in users to /home if they're not already there
  if ((currentUser && pathname === "/login") || (currentUser && pathname === "/") || (currentUser && pathname === "/register")) {
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
