import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { getMovieReviews } from 'api/moviApi';
import { RejectedId } from 'components/rejected/rejected';
import { Box, Title, List, Item } from './reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    const movieReviewsApi = async () => {
      try {
        const resp = await getMovieReviews(movieId);
        if (resp.length >= 1) {
          setReviews(resp);
          setStatus('resolved');
        }
      } catch (error) {
        setStatus('rejected');
      }
    };
    movieReviewsApi();
  }, [movieId]);

  if (status === 'rejected' || reviews.length === 0) {
    return <RejectedId />;
  }

  return (
    <Box>
      <Title>Reviews</Title>
      <List>
        {reviews.map(({ id, author, content, updated_at }) => {
          return (
            <Item key={id}>
              <h2>{author}</h2> <p>{content}</p>
            </Item>
          );
        })}
      </List>
    </Box>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default Reviews;
