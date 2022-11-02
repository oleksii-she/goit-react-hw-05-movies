import PropTypes from 'prop-types';
export const HomeItem = ({ title, img }) => {
  return (
    <li>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${img}`} alt="" />
      </div>
      <h2>{title}</h2>
    </li>
  );
};

HomeItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string,
};
