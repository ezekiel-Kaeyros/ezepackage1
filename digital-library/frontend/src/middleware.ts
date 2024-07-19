import { NextResponse } from 'next/server';
import { i18n } from './i18n.config';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { default as C } from './utils/config';
import type { NextRequest } from 'next/server';

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: string[] = [...i18n.locales]; // Create a mutable copy of the readonly array
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
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
  const accessTokenExist = request.cookies.get('token');
  const accessToken = url.searchParams.get('token');
  const userData = url.searchParams.get('user');

  if (accessTokenExist) {
    if (accessToken) {
      url.searchParams.delete('token');
      url.searchParams.delete('user');
      url.searchParams.delete('step');
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  } else {
    if (accessToken) {
      url.searchParams.delete('token');
      url.searchParams.delete('user');
      url.searchParams.delete('step');

      const response = NextResponse.redirect(url);
      const expires = new Date();
      expires.setDate(expires.getDate() + 28);

      const userDataValue = userData || '';

      console.log("IS IT HERE????")

      console.log("NODE ENV: ", process.env.NODE_ENV)
      if (process.env.NODE_ENV === 'development') {
        response.cookies.set('token', accessToken, {
          httpOnly: false,
          secure: false,
          path: '/'
        });

        response.cookies.set('user_data', userDataValue, {
          httpOnly: false,
          secure: false,
          path: '/'
        });
      } else {
        response.cookies.set('token', accessToken, {
          httpOnly: false,
          secure: false,
          path: '/',
          domain: '.eze.ink'
        });

        response.cookies.set('user_data', userDataValue, {
          httpOnly: false,
          secure: false,
          path: '/',
          domain: '.eze.ink'
        });
      }

      return response;
    } else {
      try {
        const returnUrl = C.livingLibraryUrl;
        const ssoLoginUrl = `${C.ssoLoginUrl}?module=${encodeURIComponent(returnUrl)}`;
        return NextResponse.redirect(ssoLoginUrl);
      } catch (error) {
        url.pathname = '/login';
        return NextResponse.redirect(url);
      }
    }
  }
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
