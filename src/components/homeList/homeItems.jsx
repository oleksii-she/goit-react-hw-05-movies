import PropTypes from 'prop-types';
export const HomeItem = ({ title, img, name, onClick, id }) => {
  return (
    <li onClick={onClick} id={id}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${img}`}
          alt=""
          height="574"
        />
      </div>
      <h2>{title ?? name}</h2>
    </li>
  );
};

HomeItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
};
