// components/SearchBar.js
'use client';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
