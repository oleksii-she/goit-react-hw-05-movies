import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FormSearch } from 'components/searchForm/formSearch';
import { searchApiMovie } from 'api/moviApi';
import { Pagination, Stack } from '@mui/material';
import { HomeList } from 'components/homeList/homeList';
import toast from 'react-hot-toast';

const Movies = () => {
  const [itemsData, setItemsData] = useState([]);
  const [page, setPage] = useState(1);

  const [pageQty, setPageQty] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query', 1) ?? '';

  useEffect(() => {
    const respSearchMovie = async () => {
      if (query === '') {
        return;
      }
      try {
        const resp = await searchApiMovie(query, page);

        if (resp.results.length > 0) {
          setItemsData(resp.results);
          setPageQty(resp.total_pages);
        } else {
          toast.error(`Sorry, but nothing was found for your query ${query}`, {
            position: 'top-right',
          });
          setSearchParams({});
        }
      } catch (error) {}
    };
    respSearchMovie();
  }, [query, setSearchParams, pageQty, page]);

  const onSubmit = query => {
    const nextParams = query !== '' ? { query } : {};
    setPage(1);
    setSearchParams(nextParams);
  };

  return (
    <>
      <FormSearch onSubmitSearchValue={onSubmit} />
      <HomeList items={itemsData} />

      <Stack spacing={2}>
        {!!pageQty && (
          <Pagination
            count={pageQty}
            page={page}
            onChange={(_, num) => setPage(num)}
            sx={{ marginY: 3, marginX: 'auto' }}
            // renderItem={item => (
            //   <PaginationItem
            //     component={Link}
            //     to={`${searchParams}&page=${item.page}`}
            //     {...item}
            //   />
            // )}
          />
        )}
      </Stack>
    </>
  );
};

export default Movies;
