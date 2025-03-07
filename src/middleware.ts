import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const url = req.nextUrl.pathname;

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    // Decode JWT Token
    const decoded = jwt.verify(token, SECRET_KEY) as { role: string };
    const userRole = decoded.role;

    // Role-based route protection
    if (url.startsWith("/admin") && userRole !== "admin") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
    if (url.startsWith("/landlord") && userRole !== "landlord") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
    if (url.startsWith("/tenant") && userRole !== "tenant") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/landlord/:path*", "/tenant/:path*"],
};
