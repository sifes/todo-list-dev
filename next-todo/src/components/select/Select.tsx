import { useStore } from '@/store/useStore';
import React from 'react';
interface SelectProps {}

export const Select: React.FC<SelectProps> = () => {
  const { setFilter } = useStore();
  return (
    <select
      className={`select`}
      onChange={(e) => {
        setFilter(e.target.value as 'all' | 'completed' | 'not-completed');
      }}
    >
      <option value='all'>All</option>
      <option value='completed'>Completed</option>
      <option value='not-completed'>Not Completed</option>
    </select>
  );
};
