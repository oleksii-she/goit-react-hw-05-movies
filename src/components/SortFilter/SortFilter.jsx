export const SortFilter = ({ items, onChange, page }) => {
  const sortAz = e => {
    switch (e.target.value) {
      case 'default':
        onChange([]);
        break;
      case 'alphabetically':
        const sortData = items.sort((a, b) => a.title.localeCompare(b.title));
        onChange(sortData);
        break;
      case 'rating from more':
        const sortVote = items.sort((a, b) => b.vote_average - a.vote_average);
        onChange(sortVote);
        break;
      case 'year from more':
        const sortYear = items.sort((a, b) => b.vote_average - a.vote_average);
        onChange(sortYear);
        break;
      default:
        break;
    }
  };
  return (
    <select name="sort" id="sort" onChange={sortAz}>
      <option value="default">default</option>
      <option value="alphabetically">alphabetically</option>
      <option value="rating from more">rating from more</option>
      <option value="year from more">year from more</option>
    </select>
  );
};
