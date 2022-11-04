import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'api/moviApi';
import React, { useState, useEffect } from 'react';
export const MovieDetails = () => {
  const [movies, setMovies] = useState('asda');
  const { movieId } = useParams();

  useEffect(() => {
    const movieDetaliesApi = async () => {
      try {
        const resp = await getMovieDetails(movieId);
        setMovies(resp);
      } catch (error) {}
    };
    movieDetaliesApi();
  }, [movieId]);

  const defaultImg =
    'https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png';

  return (
    <div>
      {movies && (
        <div>
          <img
            src={
              movies.poster_path !== null
                ? `https://image.tmdb.org/t/p/w500${movies.poster_path}`
                : defaultImg
            }
            alt={movies.original_title}
          />
          <h2>{movies.original_title}</h2>
          <p>{movies.overview}</p>
        </div>
      )}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

// backdrop_path
// :
// "/iEoz4xtCLXJFxZx44bFs6kV9u0v.jpg"
// belongs_to_collection
// :
// null
// budget
// :
// 100000
// genres
// :
// [{…}]
// homepage
// :
// "http://www.datalimite.com"
// id
// :
// 296317
// imdb_id
// :
// "tt3967902"
// original_language
// :
// "pt"
// original_title
// :
// "Data Limite Segundo Chico Xavier"
// overview
// :
// "UFO experts claim that after the explosion of the bombs on Hiroshima and Nagasaki, there was an increase in the number of sightings of UFO'S (Unidentified Flying Objects) worldwide. Just over two decades later, the Brazilian medium Chico Xavier confided to close friends that when man reached the moon on July 20, 1969, happened a meeting with the celestial beings of our solar system to check the progress of humanity. They decided to grant a period of 50 years for humanity to evolve morally and live in peace, without provoking a third world war. If we live in peace until the Deadline, humanity would be ready to enter a new era of its existence, and magnificent feats would be checked everywhere, including our brothers from other planets would be expressly authorized to present themselves publicly and officially to Earth's residents."
// popularity
// :
// 3.168
// poster_path
// :
// "/oM9UABUyiTDu5H5FuJwmDsJkk73.jpg"
// production_companies
// :
// (2) [{…}, {…}]
// production_countries
// :
// [{…}]
// release_date
// :
// "2014-08-14"
// revenue
// :
// 0
// runtime
// :
// 63
// spoken_languages
// :
// [{…}]
// status
// :
// "Released"
// tagline
// :
// ""
// title
// :
// "Data Limite segundo Chico Xavier"
