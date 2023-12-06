import { useStore } from '@/store/useStore';
import React from 'react';

interface NoteProps {
  title: string;
  id: number;
  done: boolean;
  description: string;
}

export const Note: React.FC<NoteProps> = (task) => {
  const { toggleDone, removeTask } = useStore();

  return (
    <li className={`note`}>
      <input
        checked={task.done}
        onChange={() => toggleDone(task.id)}
        onClick={() => toggleDone(task.id)}
        type="checkbox"
        className="checkbox"
      />
      <div className={`text ${task.done ? 'done' : ''}`}>
        <h5>{task.title}</h5>
      </div>
      <div className="actions">
        <button
          className="btn-delete"
          onClick={(e) => {
            e.stopPropagation();
            removeTask(task.id);
          }}
        ></button>
      </div>
    </li>
  );
};
