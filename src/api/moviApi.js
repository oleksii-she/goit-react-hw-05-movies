import axios from 'axios';

export const TrendingApiMovie = async () => {
  const responce = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day',
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
