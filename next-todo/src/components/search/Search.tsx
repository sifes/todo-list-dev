import React from 'react';
import searchIcon from '../../assets/search.svg';
import { useStore } from '@/store/useStore';

interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
  const { searchValue, setSearchValue } = useStore();

  return (
    <div className={`search`}>
      <input
        type="text"
        placeholder="Search note..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <img src={searchIcon.src} alt="search" />
    </div>
  );
};
