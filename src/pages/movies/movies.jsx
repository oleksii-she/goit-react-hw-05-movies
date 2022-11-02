import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FormSearch } from 'components/searchForm/formSearch';
import { searchApiMovie } from 'api/moviApi';
import { HomeList } from 'components/homeList/homeList';

export const Movies = () => {
  // const [searchValue, setSearchValue] = useState('');
  const [itemsData, setItemsData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  console.log(query);
  useEffect(() => {
    console.log('asdas');
    const respSearchMovie = async () => {
      try {
        const resp = await searchApiMovie(query);
        if (resp.length > 0) {
          setItemsData(resp);
        }
      } catch (error) {}
    };
    respSearchMovie(query);
  }, [searchParams]);

  const onSubmit = query => {
    const nextParams = query !== '' ? { query } : {};

    setSearchParams(nextParams);
    // setSearchValue(query);
  };
  console.log(itemsData);
  const onClickId = e => {
    console.log(e.currentTarget.id);
  };

  return (
    <>
      <FormSearch onSubmitSearchValue={onSubmit} />
      <HomeList items={itemsData} onClick={onClickId} />
    </>
  );
};
