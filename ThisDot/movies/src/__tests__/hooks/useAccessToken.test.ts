import { renderHook } from '@testing-library/react';
import { useAccessToken } from '@/hooks/useAccessToken';
import { cookies } from 'next/headers';

jest.mock('next/headers', () => ({
  cookies: jest.fn(),
}));

describe('useAccessToken Hook', () => {
  it('returns the access token if it is present', () => {
    const mockAccessToken = 'mockAccessToken123';
    cookies.mockReturnValue({
      get: () => ({ value: mockAccessToken }),
    });

    const { result } = renderHook(() => useAccessToken());

    expect(result.current).toBe(mockAccessToken);
  });

  it('returns undefined if the access token is not present', () => {
    cookies.mockReturnValue({
      get: () => undefined,
    });

    const { result } = renderHook(() => useAccessToken());

    expect(result.current).toBeUndefined();
  });
});
