import React, { useState, useEffect } from 'react';
import { TrendingApiMovie } from 'api/moviApi';
import { HomeList } from 'components/homeList/homeList';
import { RejectedId } from 'components/rejected/rejected';
const Home = () => {
  const [itemsData, setItemsData] = useState([]);
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    const respApiTrending = async () => {
      try {
        const resp = await TrendingApiMovie();
        if (resp.length > 0) {
          setStatus('resolved');
          setItemsData(resp);
        }
      } catch (error) {
        setStatus('rejected');
      }
    };
    respApiTrending();
  }, []);

  if (status === 'rejected') {
    return <RejectedId />;
  }
  return <HomeList items={itemsData} />;
};

export default Home;
