import { cookies } from 'next/headers';
import { COOKIES } from '@/constants/common';

export const useAccessToken = () => cookies().get(COOKIES.ACCESS_TOKEN)?.value as string;