import React from 'react';
import noTasksIcon from '../../assets/no-tasks.svg';

interface NoTasksProps {}

export const NoTasks: React.FC<NoTasksProps> = ({}) => {
  return (
    <div className='no-tasks'>
      <img src={noTasksIcon} alt='no tasks' />
      <div className='title'>Empty...</div>
    </div>
  );
};
