import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ImgBox, Img, Item, Average, Title } from './homeList.styled';

const genresInfo = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];
export const HomeItem = ({
  date,
  title,
  img,
  name,
  id,
  defaultImg,
  average,
  ganre,
}) => {
  const location = useLocation();

  genresInfo.forEach(el => {
    switch (el.id) {
      case ganre[0]:
        ganre[0] = el.name;
        break;
      case ganre[1]:
        ganre[1] = el.name;
        break;
      case ganre[2]:
        ganre[2] = el.name;
        break;
      case ganre[3]:
        ganre[3] = el.name;
        break;
      case ganre[4]:
        ganre[4] = el.name;
        break;

      default:
        break;
    }
  });
  const ganres = String(ganre).replaceAll(',', ', ');
  // if (ganre.length > 3) {
  //   return ganre.splice(0, 3);
  // }

  return (
    <Item>
      <ImgBox>
        <Average>{average.toFixed(1)}</Average>
        <picture>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <Img
              src={
                img !== null
                  ? `https://image.tmdb.org/t/p/w500${img}`
                  : defaultImg
              }
              alt=""
              height="574"
            />
          </Link>
        </picture>
      </ImgBox>

      <div>
        <Title>{title ?? name}</Title>
        <p>{date}</p>
        <p>{ganre}</p>
      </div>
    </Item>
  );
};

HomeItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
  defaultImg: PropTypes.string,
  average: PropTypes.number,
  date: PropTypes.string,
  ganre: PropTypes.array,
};
