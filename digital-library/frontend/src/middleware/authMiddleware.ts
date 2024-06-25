import { NextRequest, NextResponse } from 'next/server';

import { usePathname } from 'next/navigation';

const loggedInAsAdminPath = ['/admin/dashboard'];
const loggedInAsUserPath = ['/users/send-transfer'];
const loggedOutPath = ['/login'];

export default async function AuthMiddleware(
  req: NextRequest
): Promise<NextResponse> {
  const pathname = usePathname();

  if (
    !loggedInAsAdminPath.some((path) => pathname.startsWith(path)) &&
    !loggedInAsUserPath.some((path) => pathname.startsWith(path)) &&
    !loggedOutPath.some((path) => pathname.startsWith(path))
  ) {
    return NextResponse.next();
  } else {
    const userResponse = await fetch('/api/user', {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
      },
    });
  }

  return NextResponse.next();
}
