import { setAccessToken } from '@/services/authAPI';
import { fetcher } from '@/utils/customFetch';
import { ENDPOINTS } from '@/constants/api';
import { COOKIES } from '@/constants/common';

jest.mock('@/utils/customFetch', () => ({
  fetcher: jest.fn(),
}));

describe('setAccessToken', () => {
  it('sets the access token in cookies when a token is returned', async () => {
    const mockToken = 'mockToken123';
    const mockResponse = {
      cookies: {
        set: jest.fn(),
      },
    };

    fetcher.mockResolvedValue({ token: mockToken });

    await setAccessToken(mockResponse);

    expect(fetcher).toHaveBeenCalledWith({ url: ENDPOINTS.AUTH });
    expect(mockResponse.cookies.set).toHaveBeenCalledWith(COOKIES.ACCESS_TOKEN, mockToken);
  });

  it('does not set the access token in cookies when no token is returned', async () => {
    const mockResponse = {
      cookies: {
        set: jest.fn(),
      },
    };

    fetcher.mockResolvedValue({ token: undefined });

    await setAccessToken(mockResponse);

    expect(fetcher).toHaveBeenCalledWith({ url: ENDPOINTS.AUTH });
    expect(mockResponse.cookies.set).not.toHaveBeenCalled();
  });

  it('handles errors from fetcher', async () => {
    const mockResponse = {
      cookies: {
        set: jest.fn(),
      },
    };

    const expectedError = new Error('Network error');

    fetcher.mockRejectedValue(expectedError);

    await expect(setAccessToken(mockResponse)).rejects.toEqual(expectedError);

    expect(fetcher).toHaveBeenCalledWith({ url: ENDPOINTS.AUTH });
    expect(mockResponse.cookies.set).not.toHaveBeenCalled();
  });
});
