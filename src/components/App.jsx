import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Home } from '../pages/home/home';
import { Movies } from '../pages/movies/movies';
import { MovieDetails } from '../pages/movieDetails/movieDetails';
import { Cast } from './cast/cast';
import { Reviews } from './reviews/reviews';
import { NotFound } from '../pages/notFound/notFound';
import { SharedLayout } from './SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
};
