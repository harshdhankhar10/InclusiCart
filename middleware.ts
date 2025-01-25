import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";



export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const adminPaths = ["/api/admin"];
  const userPaths = ["/api/user/dashboard"];

  const pathname = req.nextUrl.pathname;
  const isAdminRoute = adminPaths.some((path) => pathname.startsWith(path));
  

  if (isAdminRoute) {
    if (!token) {
      return NextResponse.json({ error: "Unauthorized: No token found" }, { status: 401 });
    }
    if (token.role !== 'ADMIN') {
      return NextResponse.json({ error: "Forbidden: Admin role required" }, { status: 403 });
    }


  }

  if (userPaths.some((path) => pathname.startsWith(path))) {
    if (!token) {
      return NextResponse.json({ error: "Unauthorized: No token found" }, { status: 401 });
    }
  }


  return NextResponse.next();
}

export const config = {
  matcher: ["/api/admin/:path*", "/api/user/dashboard/:path*"],
};
