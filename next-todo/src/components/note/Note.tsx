import { useStore } from '@/store/useStore';
import React from 'react';
import expandIcon from '../../assets/expand.svg';

interface NoteProps {
  title: string;
  id: number;
  done: boolean;
  description: string;
}

export const Note: React.FC<NoteProps> = (task) => {
  const { toggleDone, removeTask, tasks } = useStore();

  const [isDescriptionShown, setIsDescriptionShown] = React.useState(false);

  return (
    <li className="note hvr-glow hvr-underline-from-center">
      <input checked={task.done} onChange={() => toggleDone(task.id)} type="checkbox" className="checkbox" />
      <div className={`note-content ${task.done ? 'done' : ''}`}>
        <h5 className="title">{task.title}</h5>
        {isDescriptionShown && <p className="description">{task.description}</p>}
      </div>
      <div className="actions">
        <button
          className="btn-delete"
          onClick={(e) => {
            e.stopPropagation();
            removeTask(task.id);
          }}
        ></button>
        {task.description && (
          <button
            className={`btn-expand ${isDescriptionShown ? 'expanded' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsDescriptionShown((p) => !p);
            }}
          >
            <img src={expandIcon.src} alt="see more" />
          </button>
        )}
      </div>
    </li>
  );
};
