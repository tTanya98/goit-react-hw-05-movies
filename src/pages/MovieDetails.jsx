import { Suspense } from 'react'; 
import { useEffect, useState } from 'react'; 
import { useParams, Outlet, useLocation, Link } from 'react-router-dom'; 
import { fetchMovieById } from '../services/api'; 
import MovieCard from '../components/MovieCard/MovieCard';
import { Button, Container } from './MovieDetails.styled';
import { LoadingIndicator } from 'components/SharedLayout/LoadingDots';

const MovieDelails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        const movieData = await fetchMovieById(movieId);
        setSelectedMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSelectedMovie(movieId);
  }, [movieId]);

  return (
    <main>
      <Container>

        <Link to={location?.state?.from ?? '/'}>
          <Button type="button">
            Go back
          </Button>
        </Link>

        <MovieCard movie={selectedMovie} /> 

        <Suspense fallback={<LoadingIndicator />}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};

export default MovieDelails;