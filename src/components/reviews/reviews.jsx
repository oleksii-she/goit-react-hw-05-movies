import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { getMovieReviews } from 'api/moviApi';

export const Reviews = () => {
  const [reviews, setReviews] = useState;
  const { movieId } = useParams();

  useEffect(() => {
    const movieReviewsApi = async () => {
      try {
        const resp = await getMovieReviews(movieId);

        console.log(resp);
      } catch (error) {}
    };

    movieReviewsApi();
  }, [movieId]);

  return <h1>Reviews</h1>;
};
