import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Clone the current URL
  const url = request.nextUrl.clone();

  // Check if the request contains the 'access-token' cookie
  const accessTokenExist = request.cookies.get('token');

  // Check if the URL has the `access-token` parameter
  const accessToken = url.searchParams.get('token');
  const userData = url.searchParams.get('user')

  if (accessTokenExist) {
    console.log("IS THERE TOKEN IN COOKIE???\n");
    if (accessToken) {
      // Delete the 'token' query parameter
      url.searchParams.delete('token');
      url.searchParams.delete('user');
      url.searchParams.delete('step');

      console.log("DID IT ENTER HERE????");

      // Redirect to the same URL without the 'token' parameter
      return NextResponse.redirect(url);
    }
    console.log("WHAT NOW???");
    return NextResponse.next();
  } else {
    console.log("TOKEN NOT IN COOKIE BUT IN URL");

    if (accessToken) {
      // Delete the 'token' query parameter
      url.searchParams.delete('token');
      url.searchParams.delete('user');
      url.searchParams.delete('step');

      // Create a NextResponse object
      const response = NextResponse.redirect(url);

      const expires = new Date();
      expires.setDate(expires.getDate() + 28);

      response.cookies.set('token', accessToken, {
        path: '/',
        httpOnly: false,
        secure: false,
        expires: expires,
      });

      response.cookies.set('user_data', userData, {
        path: '/',
        httpOnly: false,
        secure: false,
        expires: expires,
      });

      // If you need to log or further manipulate the cookie
      const cookie = response.cookies.get('token');
      console.log('Set cookie:', cookie);

      // Return the modified response
      return response;
    } else {
      try {
        const returnUrl = process.env.NEXT_PUBLIC_COMMUNITIES_URL;
        const ssoLoginUrl = `${process.env.NEXT_PUBLIC_SSO_LOGIN_URL}?module=${encodeURIComponent(returnUrl)}`;
        console.log('Redirecting to SSO login URL:', ssoLoginUrl);
        
        return NextResponse.redirect(ssoLoginUrl);
      } catch (error) {
        console.error('Error:', error);
        url.pathname = '/login';
        console.log('URL: ', url);
        return NextResponse.redirect(url);
      }
    }
  }
}

export const config = {
  matcher: ['/'],
};