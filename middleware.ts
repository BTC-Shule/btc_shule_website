import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isAdmin = req.cookies.get("btcshule_admin")?.value === "true";
  const { pathname } = req.nextUrl;

  // Login page
  if (pathname === "/admin" && isAdmin) {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  // Protect everything else
  if (pathname.startsWith("/admin") && pathname !== "/admin" && !isAdmin) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}


export const config = {
  matcher: ["/admin/:path*"],
};
