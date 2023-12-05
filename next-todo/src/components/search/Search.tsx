import React from 'react';
import searchIcon from '../../assets/search.svg';

interface SearchProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Search: React.FC<SearchProps> = ({ setSearchValue, searchValue }) => {
  return (
    <div className={`search`}>
      <input
        type='text'
        placeholder='Search note...'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <img src={searchIcon.src} alt='search' />
    </div>
  );
};
