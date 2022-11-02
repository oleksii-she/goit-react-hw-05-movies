import React, { useState, useEffect } from 'react';
import { TrendingApiMovie } from 'api/moviApi';
import { HomeList } from 'components/homeList/homeList';

export const Home = () => {
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    const respApiTrending = async () => {
      try {
        const resp = await TrendingApiMovie();

        setItemsData(resp);
      } catch (error) {}
    };
    respApiTrending();
  }, []);
  const onClickId = e => {
    console.log(e.currentTarget.id);
  };
  console.log(itemsData);
  return <HomeList items={itemsData} onClick={onClickId} />;
};
