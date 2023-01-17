import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import { getMovieDetails } from 'api/moviApi';

import React, { useState, useEffect, Suspense } from 'react';
import {
  ContentBox,
  LinkActiveDetalies,
  ListLink,
  Item,
  BoxText,
} from './movieDetails.styled';

const MovieDetails = () => {
  const [movies, setMovies] = useState('');
  const [toMovie, setToMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();

  useEffect(() => {
    setToMovie(location.state?.from);
    const movieDetaliesApi = async () => {
      try {
        const resp = await getMovieDetails(movieId);
        setMovies(resp);
      } catch (error) {}
    };
    movieDetaliesApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId, setToMovie]);

  const defaultImg =
    'https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png';

  return (
    <div>
      <div>
        <Link to={toMovie}>go to back</Link>
      </div>
      {movies && (
        <ContentBox>
          <div>
            <img
              src={
                movies.poster_path !== null
                  ? `https://image.tmdb.org/t/p/w500${movies.poster_path}`
                  : defaultImg
              }
              alt={movies.original_title}
            />
          </div>
          <BoxText>
            <h2>{movies.original_title}</h2>
            <p>{movies.overview}</p>
            <ListLink>
              <Item>
                <LinkActiveDetalies to="cast">Cast</LinkActiveDetalies>
              </Item>
              <Item>
                <LinkActiveDetalies to="reviews">Reviews</LinkActiveDetalies>
              </Item>
            </ListLink>
          </BoxText>
        </ContentBox>
      )}

      <Suspense fallback={<BeatLoader color="#36d7b7" />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
