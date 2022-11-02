import React, { useState, useEffect } from 'react';
import { FormSearch } from 'components/searchForm/formSearch';
import { searchApiMovie } from 'api/moviApi';
import { HomeList } from 'components/homeList/homeList';
export const Movies = () => {
  const [searchValue, setSearchValue] = useState('');
  const [itemsData, setItemsData] = useState([]);
  useEffect(() => {
    if (searchValue === '') {
      return;
    }

    const respSearchMovie = async () => {
      try {
        console.log();
        const resp = await searchApiMovie(searchValue);
        console.log(resp);
        if (resp.length > 0) {
          setItemsData(resp);
        }
      } catch (error) {}
    };
    respSearchMovie(searchValue);
  }, [searchValue]);

  const onSubmit = value => {
    setSearchValue(value);
  };
  console.log(searchValue);
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
