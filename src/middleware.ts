import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

import {routing} from './i18n/navigation';

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/tr' || pathname.startsWith('/tr/')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/tr/, '') || '/';
    return NextResponse.redirect(url);
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/', '/((?!_next|_vercel|.*\\..*).*)']
};
