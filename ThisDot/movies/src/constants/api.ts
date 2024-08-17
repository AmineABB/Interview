export const API_BASE_URL = 'https://0kadddxyh3.execute-api.us-east-1.amazonaws.com';

export const ENDPOINTS = Object.freeze({
  AUTH: `/auth/token`,
  HEALTHCHECK: `/healthcheck`,
  MOVIES: `/movies`,
  GENRES: '/genres/movies',
  MOVIE_DETAILS: (id: string) => `/movies/${id}`,
});