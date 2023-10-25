import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value)
  };


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate('/search-results', {state: {query: searchInput}})
      setSearchInput('')
    }
  }


  return (
    <>
        <Form.Control
          type="search"
          id="searchbar"
          name="searchInput"
          value={searchInput || ''}
          onChange={handleSearchInput}
          onKeyDown={handleKeyDown}
          className="searchbar"
      />
    </>
  );
};

export default Search;
