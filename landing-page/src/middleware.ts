import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { i18n } from './i18n.config';
import { serialize } from 'cookie';

import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  const url = request.nextUrl.clone();
  const token = url.searchParams.get('token') || '';
  const userEncoded = url.searchParams.get('user') || '';

  if (userEncoded != '' || token != '') {
    // console.log('USER DATA: ', userEncoded, typeof userEncoded);
    // Decode the user data from the query parameter
    const userString = decodeURIComponent(userEncoded);
    // console.log('User string: ', userString, typeof userString);
    const userJson = userEncoded;
    // const userJson = JSON.parse(userEncoded);
    // console.log('User Encoded Data stringify: ', userJson);
    // const userJson = userData;

    if (token) {
      const response = NextResponse.next();
      response.cookies.set('token', token, {
        httpOnly: false,
        secure: false,
        path: '/',
      });
      response.cookies.set('user_data', userJson, {
        path: '/',
      });
      return response;
    }
  }

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    );
  }
}

export function saveTokenToCookie(request: NextRequest) {}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
