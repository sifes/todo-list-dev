import React from 'react';
import { useTheme } from '../../hooks/useTheme';
interface SelectProps {
  setFilters: React.Dispatch<React.SetStateAction<'all' | 'completed' | 'not-completed'>>;
}

export const Select: React.FC<SelectProps> = ({ setFilters }) => {
  const theme = useTheme();
  return (
    <select
      className={`select ${theme.isDark ? 'dark' : ''}`}
      onChange={(e) => {
        setFilters(e.target.value as 'all' | 'completed' | 'not-completed');
      }}
    >
      <option value='all'>All</option>
      <option value='completed'>Completed</option>
      <option value='not-completed'>Not Completed</option>
    </select>
  );
};
