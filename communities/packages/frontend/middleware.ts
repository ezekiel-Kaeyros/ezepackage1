import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { config as C } from "./utils"

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")
  if (!token) return NextResponse.redirect(new URL("https://sso.eze.ink/auth/login"))
  // Clone the current URL
  return NextResponse.next()
}


export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  api: {
    bodyParser: false, // Disable body parsing, apply middleware globally
  },
};
