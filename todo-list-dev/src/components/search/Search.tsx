import React from 'react';
import searchIcon from '../../assets/search.svg';
import { useTheme } from '../../hooks/useTheme';

interface SearchProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Search: React.FC<SearchProps> = ({ setSearchValue, searchValue }) => {
  const theme = useTheme();

  return (
    <div className={`search ${theme.isDark ? 'dark' : ''}`}>
      <input
        type='text'
        placeholder='Search note...'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <img src={searchIcon} alt='search' />
    </div>
  );
};
