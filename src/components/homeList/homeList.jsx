import { HomeItem } from './homeItems';
import PropTypes from 'prop-types';
import { ListStyled } from './homeList.styled';
const defaultImg =
  'https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png';
export const HomeList = ({ items }) => {
  return (
    <ListStyled>
      {items.map(
        ({
          id,
          release_date,
          original_title,
          poster_path,
          name,
          vote_average,
          genre_ids,
        }) => {
          return (
            <HomeItem
              key={id}
              title={original_title}
              img={poster_path}
              name={name}
              id={id}
              defaultImg={defaultImg}
              average={vote_average}
              date={release_date}
              ganre={genre_ids}
            />
          );
        }
      )}
    </ListStyled>
  );
};

HomeList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      original_title: PropTypes.string,
      name: PropTypes.string,
      vote_average: PropTypes.number,
      release_date: PropTypes.string,
      genre_ids: PropTypes.array,
    })
  ),
};

// adult: false;
// backdrop_path: '/mqsPyyeDCBAghXyjbw4TfEYwljw.jpg';
// genre_ids: (4)[(28, 18, 36, 10752)];
// id: 49046;
// media_type: 'movie';
// original_language: 'de';
// original_title: 'Im Westen nichts Neues';
// overview: 'Paul Baumer and his friends Albert and Muller, egged on by romantic dreams of heroism, voluntarily enlist in the German army. Full of excitement and patriotic fervour, the boys enthusiastically march into a war they believe in. But once on the Western Front, they discover the soul-destroying horror of World War I.';
// popularity: 314.415;
// poster_path: '/2IRjbi9cADuDMKmHdLK7LaqQDKA.jpg';
// release_date: '2022-10-07';
// title: 'All Quiet on the Western Front';
// video: false;
// vote_average: 7.931;
// vote_count: 289;
// display: flex;
// flex-wrap: wrap;
// column-gap: 30px;
// row-gap: 15px;
