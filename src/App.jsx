import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import { lazy, Suspense } from 'react';
import Container from './components/container/Container';
import Loader from 'components/loader/Loader';

const HomePage = lazy(() =>
  import('./pages/HomePage')
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage')
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage/MovieDetailsPage'
  )
);
const NotFoundView = lazy(() =>
  import('./pages/NotFound')
);

export default function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView path="*" />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
}
