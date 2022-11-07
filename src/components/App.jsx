import { React, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

const Home = lazy(() => import('pages/home/home'));
const Movies = lazy(() => import('pages/movies/movies'));
const MovieDetails = lazy(() => import('pages/movieDetails/movieDetails'));
const Cast = lazy(() => import('./cast/cast'));
const Reviews = lazy(() => import('./reviews/reviews'));
const NotFound = lazy(() => import('pages/notFound/notFound'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
