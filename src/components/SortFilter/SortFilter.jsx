export const SortFilter = ({ onChange }) => {
  const sortAz = e => {
    switch (e.target.value) {
      case 'default':
        return onChange('default');

      case 'A-z':
        return onChange('A-z');
      case 'rating':
        return onChange('rating');

      case 'popularity':
        return onChange('popularity');

      default:
        break;
    }
  };
  return (
    <select name="sort" id="sort" onChange={sortAz}>
      <option value="default">default</option>
      <option value="A-z">A-z</option>
      <option value="rating">rating more</option>
      <option value="popularity">popularity</option>
    </select>
  );
};

//   const sortData = items.sort((a, b) => a.title.localeCompare(b.title));

//   const sortVote = items.sort((a, b) => b.vote_average - a.vote_average);

//   const sortYear = items.sort((a, b) => b.vote_average - a.vote_average);
