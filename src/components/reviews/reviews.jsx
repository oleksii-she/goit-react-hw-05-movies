import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { getMovieReviews } from 'api/moviApi';
import { RejectedId } from 'components/rejected/rejected';
export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    const movieReviewsApi = async () => {
      try {
        const resp = await getMovieReviews(movieId);
        if (resp) {
          console.log(resp);
          setStatus('resolved');
        }
      } catch (error) {
        setStatus('rejected');
      }
    };
    console.log(status);
    movieReviewsApi();
  }, [movieId]);
  if (status === 'rejected' || reviews.length === 0) {
    return <RejectedId />;
  }
  return <h1>Reviews</h1>;
};
