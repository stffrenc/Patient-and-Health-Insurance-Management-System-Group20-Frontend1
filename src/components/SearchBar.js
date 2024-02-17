// src/components/SearchBar.js
import React from 'react';
import './SearchBar.css'; // Make sure to import the CSS file

function SearchBar() {
  // Add your search handling logic here
  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Perform search');
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <div className="search-container">
        <input className="search-input" type="text" placeholder="Search..." />
        <button className="search-icon" type="submit">
          🔍 {/* You can replace this with an actual icon */}
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
