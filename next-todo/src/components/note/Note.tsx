import React from 'react';

interface NoteProps {
  title: string;
  id: number;
  isDone: boolean;
}

export const Note: React.FC<NoteProps> = (task) => {
  return (
    <li className={`note`}>
      <input
        checked={task.isDone}
        // onChange={() => changeTaskIsDone(task)}
        // onClick={() => changeTaskIsDone(task)}
        type='checkbox'
        className='checkbox'
      />
      <div className={`text ${task.isDone ? 'done' : ''}`}>{task.title}</div>
      <div className='actions'>
        <button
          className='btn-delete'
          onClick={(e) => {
            e.stopPropagation();
          }}
        ></button>
      </div>
    </li>
  );
};
