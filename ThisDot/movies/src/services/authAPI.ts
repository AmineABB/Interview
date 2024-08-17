import type { NextResponse } from 'next/server';
import { ENDPOINTS } from '@/constants/api';
import { COOKIES } from '@/constants/common';
import { fetcher } from '@/utils/customFetch';

export const setAccessToken = async (response: NextResponse) => {
  const { token } = await fetcher({ url: ENDPOINTS.AUTH });
  if (token) {
    response.cookies.set(COOKIES.ACCESS_TOKEN, token);
  }
}