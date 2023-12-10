import React from 'react';
import searchIcon from '../../assets/search.svg';
import { useTasksStore } from '@/store/useTasksStore';

interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
  const { searchValue, setSearchValue } = useTasksStore();

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search note..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="search__input"
      />
      <img src={searchIcon.src} alt="search" className="search__image" />
    </div>
  );
};
