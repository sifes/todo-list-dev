import { useTasksStore } from '@/store/useTasksStore';
import React from 'react';
interface SelectProps {}

export const Select: React.FC<SelectProps> = () => {
  const { setFilter } = useTasksStore();
  return (
    <select className="select" onChange={(e) => setFilter(e.target.value as 'all' | 'completed' | 'not-completed')}>
      <option className="select__option" value="all">
        All
      </option>
      <option className="select__option" value="completed">
        Completed
      </option>
      <option className="select__option" value="not-completed">
        Not Completed
      </option>
    </select>
  );
};
