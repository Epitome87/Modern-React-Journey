import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => setSearchTerm(event.target.value);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(searchTerm);
  };

  return (
    <div className='search-bar ui segment'>
      <form className='ui form' onSubmit={handleFormSubmit}>
        <div className='field'>
          <label>Video Search</label>
          <input type='text' value={searchTerm} onChange={handleInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
