const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search task..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;