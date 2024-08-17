import { fetchMovieDetails } from '@/services/moviesAPI';
import { useAccessToken } from '@/hooks/useAccessToken';
import { MovieDetails } from '@/components/MovieDetails';

type MovieDetailsProps = {
  params: {
    id: string;
  }
}

export default async function MovieDetailsPage({ params }: MovieDetailsProps) {
  const token = useAccessToken();
  const { id } = params;
  const data = await fetchMovieDetails({ token, id });

  return <MovieDetails item={data} />
}
