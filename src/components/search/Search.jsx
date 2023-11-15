import React, { useState } from 'react';
import { Collapse, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Search = ({ searchbarVisible, setSearchVisible }) => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate('/search-results', { state: { query: searchInput } });
      setSearchInput('');
      setSearchVisible(false);
    } else if (e.key === 'Escape') {
      setSearchInput('');
      setSearchVisible(false);
    }
  };

  return (
    <Collapse in={searchbarVisible}>
      <div className="searchbar">
        <Form.Control
          type="search"
          name="searchInput"
          value={searchInput || ''}
          onChange={handleSearchInput}
          onKeyDown={handleKeyDown}
          className="searchbar"
          autoFocus
        />
      </div>
    </Collapse>
  );
};

export default Search;
