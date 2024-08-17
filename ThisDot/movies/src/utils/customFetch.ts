import { API_BASE_URL } from '@/constants/api';

type Fetcher = {
  url: string;
  token?: string;
  options?: RequestInit
}

export const fetcher = async ({ url, token, options = {} }: Fetcher) => {
  const { headers = {}, ...restOptions } = options
  const res = await fetch(`${API_BASE_URL}${url}`, {
    ...restOptions,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...headers,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  return res.json();
};