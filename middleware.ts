import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Allow login page + API
  if (pathname === '/admin' || pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  // Protect admin sub-routes
  if (pathname.startsWith('/admin')) {
    const token = req.cookies.get('admin_token')?.value
    if (token !== process.env.ADMIN_PASSWORD) {
      return NextResponse.redirect(new URL('/admin', req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
