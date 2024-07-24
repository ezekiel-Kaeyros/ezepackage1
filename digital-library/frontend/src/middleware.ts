import { NextResponse } from 'next/server';
import { i18n } from './i18n.config';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import type { NextRequest } from 'next/server';
import { config as C } from "@/utils"

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: string[] = [...i18n.locales]; // Create a mutable copy of the readonly array
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")
  if (!token) return NextResponse.redirect(`${C.ssoUrl}/auth/login`)
  const pathname = request.nextUrl.pathname;

  // Locale-based redirection logic
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : `/${locale}/login`}${pathname}`,
        request.url
      )
    );
  }

  // Token-based redirection logic
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\.png$).*)',
    '/fr/user/send-transfer',
    '/en/admin/manage-users/:path*',
    '/fr/admin/manage-users/:path*',
  ],
  api: {
    bodyParser: false,
  },
};
