import { NextResponse } from 'next/server';
import { default as C } from './utils/config'
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
    if (accessToken) {
      // Delete the 'token' query parameter
      url.searchParams.delete('token');
      url.searchParams.delete('user');
      url.searchParams.delete('step');


      // Redirect to the same URL without the 'token' parameter
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  } else {
    if (accessToken) {
      // Delete the 'token' query parameter
      url.searchParams.delete('token');
      url.searchParams.delete('user');
      url.searchParams.delete('step');

      // Create a NextResponse object
      const response = NextResponse.redirect(url);

      const expires = new Date();
      expires.setDate(expires.getDate() + 28);

      if (process.env.NEXT_PUBLIC_ENV == 'development') {
        response.cookies.set('token', accessToken, {
          httpOnly: false,
          secure: false,
          path: '/'
        });

        response.cookies.set('user_data', userData, {
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

        response.cookies.set('user_data', userData, {
          httpOnly: false,
          secure: false,
          path: '/',
          domain: '.eze.ink'
        });
      }

      // If you need to log or further manipulate the cookie
      const cookie = response.cookies.get('token');

      // Return the modified response
      return response;
    } else {
      try {
        const returnUrl = C.communitiesUrl;
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
  api: {
    bodyParser: false, // Disable body parsing, apply middleware globally
  },
};
