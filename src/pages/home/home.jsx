import React, { useState, useEffect } from 'react';
import { TrendingApiMovie } from 'api/moviApi';
import { HomeList } from 'components/homeList/homeList';
import { RejectedId } from 'components/rejected/rejected';
import { Container, Pagination, Stack, PaginationItem } from '@mui/material';
import { useLocation, NavLink } from 'react-router-dom';
import { SortFilter } from 'components/SortFilter/SortFilter';

const Home = () => {
  const location = useLocation();

  const [itemsData, setItemsData] = useState([]);
  const [sortItems, setSortItems] = useState([]);
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
        if (sortItems === []) {
          return setItemsData(resp.results);
        }
      } catch (error) {
        setStatus('rejected');
      }
    };
    respApiTrending();
  }, [page, pageQty, sortItems]);

  const filter = sortData => {
    setSortItems(sortData);
  };

  if (status === 'rejected') {
    return <RejectedId />;
  }
  return (
    <>
      <SortFilter items={itemsData} onChange={filter} page={page} />
      <HomeList items={sortItems.length > 0 ? sortItems : itemsData} />

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
