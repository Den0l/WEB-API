import React from 'react';
import styled from 'styled-components';

const Header = ({ query, setQuery, gettingFilms }) => {
  return (
    <SearchBar onSubmit={gettingFilms}>
      <input 
        type="text" 
        placeholder="Search for movies..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </SearchBar>
  );
};

export default Header;

const SearchBar = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  
  input {
    width: 300px;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px;
    border: none;
    background-color: #007BFF;
    color: white;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
