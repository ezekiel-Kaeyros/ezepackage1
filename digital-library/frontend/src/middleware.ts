import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { i18n } from './i18n.config';

import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { getUserCookies } from './cookies/cookies';

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

  // Redirect if there is no locale
  if (pathnameIsMissingLocale && !request.cookies.get('user_data')) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale}${
          pathname.startsWith('/') ? '' : `/${locale}/login`
        }${pathname}`,
        request.url
      )
    );
  }

  // Authentication middleware ------------------------------

  // const privateAdminPaths = [
  //   '/fr/admin/manage-users',
  //   '/en/admin/manage-users',
  //   '/fr/admin/dashboard',
  //   '/en/admin/dashboard',
  //   '/fr/settings',
  //   '/en/settings',
  //   '/fr/plan',
  //   '/en/plan',
  //   '/en/admin/manage-users/[id]',
  //   '/fr/admin/manage-users/[id]',
  //   '/fr/settings/notification',
  //   '/en/settings/notification',
  //   '/fr/user/send-transfer',
  //   '/en/user/send-transfer',
  //   '/en/settings/clients',
  //   '/fr/settings/clients',
  //   '/fr/user/history',
  //   '/en/user/history',
  // ];

  // const privateUserPaths = [
  //   '/fr/settings/notification',
  //   '/en/settings/notification',
  //   '/fr/user/history',
  //   '/en/user/history',
  //   '/fr/user/send-transfer',
  //   '/en/user/send-transfer',
  //   '/fr/settings',
  //   '/en/settings',
  //   '/fr/plan',
  //   '/en/plan',
  //   '/en/settings/clients',
  //   '/fr/settings/clients',
  //   '/fr/user/manage-clients',
  //   '/en/user/manage-clients',
  // ];

  // const publicPath = [
  //   '/fr/login',
  //   '/en/login',
  //   '/fr/register',
  //   '/en/register',
  //   '/fr/confirmation',
  //   '/en/confirmation',
  //   // '/fr/plan',
  //   // '/en/plan',
  //   '/en/forgotten-password',
  //   '/fr/forgotten-password',
  // ];

  // const locale = getLocale(request);

  // // console.log(request.cookies.get('user_data'), 'this is my request');
  // if (!request.cookies.get('user_data') && !publicPath.includes(pathname)) {
  //   return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
  // } else if (
  //   request.cookies.get('user_data') &&
  //   publicPath.includes(pathname)
  // ) {
  //   let user = JSON.parse(request.cookies.get('user_data')?.value!);
  //   // console.log(user, 'this is ht user');

  //   if (user && user?.roles[0] === 'admin') {
  //     return NextResponse.redirect(
  //       new URL(`/${locale}/admin/dashboard`, request.url)
  //     );
  //   } else {
  //     return NextResponse.redirect(
  //       new URL(`/${locale}/user/send-transfer`, request.url)
  //     );
  //   }
  // } else if (
  //   request.cookies.get('user_data') &&
  //   !publicPath.includes(pathname)
  // ) {
  //   let user = JSON.parse(request.cookies.get('user_data')?.value!);
  //   if (
  //     user &&
  //     user?.roles &&
  //     user?.roles[0] === 'admin' &&
  //     !privateAdminPaths.includes(pathname) &&
  //     !pathname.includes('/en/admin/manage-users/') &&
  //     !pathname.includes('/fr/admin/manage-users/') &&
  //     !pathname.includes('/en/user/history/') &&
  //     !pathname.includes('/fr/user/history/')
  //   ) {
  //     return NextResponse.redirect(
  //       new URL(`/${locale}/admin/dashboard`, request.url)
  //     );
  //   } else if (
  //     user &&
      
  //     user?.roles &&
  //     user?.roles[0] === 'user' &&
  //     !privateUserPaths.includes(pathname) &&
  //     !pathname.includes('/en/user/history/') &&
  //     !pathname.includes('/fr/user/history/') &&
  //     !pathname.includes('/en/user/manage-clien') &&
  //     !pathname.includes('/fr/user/manage-client') &&
  //     !pathname.includes('/fr/onboarding') &&
  //     !pathname.includes('/en/onboarding')
  //   ) {
  //     return NextResponse.redirect(
  //       new URL(`/${locale}/user/send-transfer`, request.url)
  //     );
  //   }
  // } else {
  //   return NextResponse.next();
  // }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  // matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\.png$).*)',
    '/fr/user/send-transfer',
    '/en/admin/manage-users/:path*',
    '/fr/admin/manage-users/:path*',
  ],
};
