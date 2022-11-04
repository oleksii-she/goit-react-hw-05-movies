import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { getMovieCast } from 'api/moviApi';
import { RejectedId } from 'components/rejected/rejected';
export const Cast = () => {
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
  }, [movieId]);
  if (status === 'rejected') {
    <RejectedId />;
  }
  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(el => (
          <li key={el.cast_id}>{el.original_name}</li>
        ))}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  credits: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      original_name: PropTypes.string.isRequired,
    })
  ),
};
