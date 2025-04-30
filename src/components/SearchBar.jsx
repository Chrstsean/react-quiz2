import React from 'react';

const SearchBar = ({ query, setQuery, handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded px-4 py-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
