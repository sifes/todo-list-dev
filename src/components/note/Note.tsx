import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useTasks } from '../../hooks/useTasks';

interface NoteProps {
  title: string;
  id: number;
  isDone: boolean;
}

export const Note: React.FC<NoteProps> = (task) => {
  const theme = useTheme();
  const { deleteTask, changeTaskIsDone } = useTasks();

  return (
    <li className={`note ${theme.isDark ? 'dark' : ''}`} onClick={() => changeTaskIsDone(task)}>
      <input
        checked={task.isDone}
        onChange={() => changeTaskIsDone(task)}
        onClick={() => changeTaskIsDone(task)}
        type='checkbox'
        className='checkbox'
      />
      <div className={`text ${task.isDone ? 'done' : ''}`}>{task.title}</div>
      <div className='actions'>
        <button
          className='btn-delete'
          onClick={(e) => {
            e.stopPropagation();
            deleteTask(task);
          }}
        ></button>
      </div>
    </li>
  );
};
