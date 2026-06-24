import { NextRequest, NextResponse } from 'next/server';

// We can't use 'jsonwebtoken' in Next.js Edge Middleware easily without 'jose' library.
// For now, we will do a basic check for the cookie's existence. The real validation
// happens on the backend API requests anyway. For a robust solution, we'd use 'jose' to decode it.

export function middleware(req: NextRequest) {
  const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');
  
  // Protect admin routes
  if (isAdminRoute && req.nextUrl.pathname !== '/admin/login' && req.nextUrl.pathname !== '/admin/signup') {
    const token = req.cookies.get('access_token')?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
    // Note: We are relying on the backend to actually verify the signature and role
    // when data is fetched. If they spoof a token, the backend will reject their API calls.
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
