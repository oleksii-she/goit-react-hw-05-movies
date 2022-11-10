import React, { useState, useEffect, useMemo } from 'react';
import { TrendingApiMovie } from 'api/moviApi';
import { HomeList } from 'components/homeList/homeList';
import { RejectedId } from 'components/rejected/rejected';
import { Container, Pagination, Stack, PaginationItem } from '@mui/material';
import { useLocation, NavLink } from 'react-router-dom';
import { SortFilter } from 'components/SortFilter/SortFilter';

const Home = () => {
  const location = useLocation();

  const [itemsData, setItemsData] = useState([]);

  const [sortTypes, setSortTypes] = useState('default');
  const [page, setPage] = useState(
    parseInt(location.search?.split('=')[1] || 1)
  );
  const [pageQty, setPageQty] = useState(0);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const respApiTrending = async () => {
      try {
        const resp = await TrendingApiMovie(page);

        if (resp.results.length > 0) {
          setStatus('resolved');
          setItemsData(resp.results);
          setPageQty(resp.total_pages);
        }
        if (sortTypes === 'default') {
          setItemsData(resp.results);
        }
      } catch (error) {
        setStatus('rejected');
      }
    };
    respApiTrending();
  }, [page, pageQty, sortTypes]);

  useMemo(() => {
    switch (sortTypes) {
      case 'default':
        return itemsData;
      case 'A-z':
        return itemsData.sort((a, b) => a.title.localeCompare(b.title));
      case 'rating':
        return itemsData.sort((a, b) => b.vote_average - a.vote_average);
      case 'popularity':
        return itemsData.sort((a, b) => b.popularity - a.popularity);
      default:
        break;
    }
  }, [itemsData, sortTypes]);

  if (status === 'rejected') {
    return <RejectedId />;
  }

  return (
    <>
      <SortFilter onChange={setSortTypes} />

      <HomeList items={itemsData} />

      <Container>
        <Stack spacing={2}>
          {!!pageQty && (
            <Pagination
              count={pageQty}
              page={page}
              onChange={(_, num) => setPage(num)}
              sx={{ marginY: 3, marginX: 'auto' }}
              renderItem={item => (
                <PaginationItem
                  component={NavLink}
                  to={`/?page=${item.page}`}
                  {...item}
                />
              )}
            />
          )}
        </Stack>
      </Container>
    </>
  );
};

export default Home;
