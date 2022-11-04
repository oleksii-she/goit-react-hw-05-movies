import axios from 'axios';

export const TrendingApiMovie = async () => {
  const responce = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day',
    {
      params: {
        api_key: 'bef2e1469ade062164db331fc6ab2f25',
      },
    }
  );

  return responce.data.results;
};

export const searchApiMovie = async value => {
  const responce = await axios.get(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params: {
        api_key: 'bef2e1469ade062164db331fc6ab2f25',
        query: `${value}`,
      },
    }
  );
  return responce.data.results;
};

export const getMovieDetails = async id => {
  const responce = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: 'bef2e1469ade062164db331fc6ab2f25',
    },
  });
  return responce.data;
};

export const getMovieCast = async id => {
  const responce = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    {
      params: {
        api_key: 'bef2e1469ade062164db331fc6ab2f25',
      },
    }
  );
  return responce.data.cast;
};

export const getMovieReviews = async id => {
  const responce = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews`,
    {
      params: {
        api_key: 'bef2e1469ade062164db331fc6ab2f25',
      },
    }
  );
  return responce.data.results;
};

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
