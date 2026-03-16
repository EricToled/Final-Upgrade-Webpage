import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Skip static files and api routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return;
  }

  // Detect language from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') || '';
  const preferredLocale = acceptLanguage.toLowerCase().includes('es')
    ? 'es'
    : defaultLocale;

  // Redirect to locale-prefixed path
  const locale = preferredLocale;
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|images|videos|.*\\..*).*)'],
};
