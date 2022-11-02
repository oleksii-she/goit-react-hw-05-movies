import React, { useState, useEffect } from 'react';
import { TrendingApiMovie } from 'api/moviApi';
import { HomeList } from 'components/homeList/homeList';

export const Home = () => {
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    const respApiTrending = async () => {
      try {
        const resp = await TrendingApiMovie();

        setItemsData(resp.data.results);
      } catch (error) {}
    };
    respApiTrending();
  }, []);

  return <HomeList items={itemsData} />;
};
