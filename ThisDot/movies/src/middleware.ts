import { NextResponse, type NextRequest } from 'next/server';
import { setAccessToken } from '@/services/authAPI';
import { COOKIES } from '@/constants/common';
 
export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const hasAccessToken = request.cookies.get(COOKIES.ACCESS_TOKEN);

  if (!hasAccessToken) {
    await setAccessToken(response);
  }

  return response
}