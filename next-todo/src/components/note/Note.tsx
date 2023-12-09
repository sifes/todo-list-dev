import { useStore } from '@/store/useStore';
import React from 'react';
import expandIcon from '../../assets/expand.svg';
import { useRouter } from 'next/navigation';

interface NoteProps {
  title: string;
  id: number;
  done: boolean;
  description: string | undefined;
}

export const Note: React.FC<NoteProps> = (task) => {
  const { toggleDone, removeTask } = useStore();
  const router = useRouter();

  const [isDescriptionShown, setIsDescriptionShown] = React.useState(false);

  return (
    <li className="note hvr-glow hvr-underline-from-center" onClick={() => router.push(`/todos/${task.id}`)}>
      <input
        checked={task.done}
        onClick={(e) => e.stopPropagation()}
        onChange={() => toggleDone(task.id)}
        type="checkbox"
        className="note__checkbox"
      />
      <div className={`note__content content-note ${task.done ? 'done' : ''}`}>
        <h5 className="content-note__title">{task.title}</h5>
        {isDescriptionShown && <p className="content-note__description">{task.description}</p>}
      </div>
      <div className="note__actions actions-note">
        <button
          className="actions-note__delete"
          onClick={(e) => {
            e.stopPropagation();
            removeTask(task.id);
          }}
        ></button>
        {task.description && (
          <button
            className={`actions-note__expand ${isDescriptionShown ? 'expanded' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsDescriptionShown((p) => !p);
            }}
          >
            <img className="actions-note__expand-img" src={expandIcon.src} alt="see description" />
          </button>
        )}
      </div>
    </li>
  );
};
