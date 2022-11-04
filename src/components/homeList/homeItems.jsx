import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
export const HomeItem = ({ title, img, name, id, defaultImg }) => {
  const location = useLocation();

  return (
    <li>
      <div>
        <Link to={`${id}`} state={{ from: location }}>
          <img
            src={
              img !== null
                ? `https://image.tmdb.org/t/p/w500${img}`
                : defaultImg
            }
            alt=""
            height="574"
          />
        </Link>
      </div>
      <h2>{title ?? name}</h2>
    </li>
  );
};

HomeItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
  defaultImg: PropTypes.string,
};