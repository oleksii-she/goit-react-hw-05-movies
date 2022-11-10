import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { getMovieCast } from 'api/moviApi';
import { RejectedId } from 'components/rejected/rejected';
import { ContentBox, List, Item, Wrapper, Title } from './cast.styled';
const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    const movieCastApi = async () => {
      try {
        const resp = await getMovieCast(movieId);
        if (resp.length > 0) {
          setCast(resp);
          setStatus('resolved');
        }
        if (resp.length === 0) {
          setStatus('rejected');
        }
      } catch (error) {
        setStatus('rejected');
      }
    };

    movieCastApi();
  }, [movieId]);

  if (status === 'rejected') {
    return <RejectedId />;
  }
  return (
    <ContentBox>
      <Title>Cast</Title>
      <List>
        {cast.map(el => (
          <Item key={el.cast_id}>
            <div>
              <img
                src={
                  el.profile_path !== null
                    ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                    : 'https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png'
                }
                alt="el.original_name"
                height="574px"
                width="382px"
              />
            </div>
            <Wrapper>
              <h2>{el.original_name}</h2>
              <p>{el.character}</p>
            </Wrapper>
          </Item>
        ))}
      </List>
    </ContentBox>
  );
};

Cast.propTypes = {
  credits: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      original_name: PropTypes.string,
      profile_path: PropTypes.string,
      character: PropTypes.string,
    })
  ),
};

export default Cast;
