import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FormSearch } from 'components/searchForm/formSearch';
import { searchApiMovie } from 'api/moviApi';
import { HomeList } from 'components/homeList/homeList';
import { RejectedId } from 'components/rejected/rejected';

const Movies = () => {
  const [itemsData, setItemsData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const respSearchMovie = async () => {
      try {
        const resp = await searchApiMovie(query);
        if (resp.length > 0) {
          setItemsData(resp);
        }
      } catch (error) {}
    };
    respSearchMovie();
  }, [query]);

  const onSubmit = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <FormSearch onSubmitSearchValue={onSubmit} />
      <HomeList items={itemsData} />
    </>
  );
};

export default Movies;
