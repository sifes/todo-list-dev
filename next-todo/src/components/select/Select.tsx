import React from 'react';
interface SelectProps {
  setFilters: React.Dispatch<React.SetStateAction<'all' | 'completed' | 'not-completed'>>;
}

export const Select: React.FC<SelectProps> = ({ setFilters }) => {
  return (
    <select
      className={`select`}
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
