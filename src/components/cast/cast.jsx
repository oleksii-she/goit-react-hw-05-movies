import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { getMovieCast } from 'api/moviApi';
import { RejectedId } from 'components/rejected/rejected';
const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    const movieCastApi = async () => {
      try {
        const resp = await getMovieCast(movieId);
        setCast(resp);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
      }
    };

    movieCastApi();
    const defaultImg =
      'https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png';
  }, [movieId]);
  if (status === 'rejected') {
    <RejectedId />;
  }
  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(el => (
          <li key={el.cast_id}>
            <div>
              <img
                src={
                  el.profile_path !== null
                    ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                    : 'https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png'
                }
                alt=""
              />
              <h2>{el.original_name}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  credits: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      original_name: PropTypes.string,
      profile_path: PropTypes.string,
    })
  ),
};

export default Cast;
