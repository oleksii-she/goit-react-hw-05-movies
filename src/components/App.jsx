import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Home } from '../pages/home/home';
import { Movies } from '../pages/movies/movies';
import { MovieDetails } from '../pages/movieDetails/movieDetails';
import { Cast } from '../pages/cast/cast';
import { Reviews } from '../pages/reviews/reviews';
import { NotFound } from '../pages/notFound/notFound';

import { StyledLink, Header, Nav, Section } from './app.styled';
export const App = () => {
  return (
    <div>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <Section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Section>
    </div>
  );
};
