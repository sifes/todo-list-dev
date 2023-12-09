'use client';
import { Task } from '@/lib/types/task';
import { useStore } from '@/store/useStore';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import BackIcon from '@/assets/back.svg';
interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const inputDescRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter();
  const params = useParams();
  const { tasks, removeTask, toggleDone, editTask } = useStore();
  const [task, setTask] = React.useState<Task>({} as Task);
  const [isEditing, setIsEditing] = React.useState<boolean>(false);

  const [errors, setError] = React.useState<{
    title: string | null;
  }>({ title: null });

  const [titleInput, setTitleInput] = React.useState<string>();
  const [descriptionInput, setDescriptionInput] = React.useState<string>();
  React.useEffect(() => {
    const task = tasks.find((t) => {
      return t.id.toString() === params.id;
    });
    if (task) {
      setTask(task);
      setTitleInput(task.title);
      setDescriptionInput(task.description);
    }
  }, [isEditing]);
  return (
    <div className="wrapper">
      <div className="body">
        <h2 className="title">Just Do It!</h2>
        <div className="note-page">
          <button className="note-page__back btn--transparent" onClick={() => router.push('/todos')}>
            <img src={BackIcon.src} alt="back to page with todos" />
          </button>
          <div className="note-page__body">
            {isEditing ? (
              <>
                <input
                  className="note-page__input"
                  type="text"
                  placeholder="Type something..."
                  autoFocus
                  defaultValue={task.title}
                  value={titleInput}
                  onChange={(e) => setTitleInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      if (titleInput) {
                        setError({ title: null });
                        if (inputDescRef.current) {
                          inputDescRef.current.focus();
                        }
                      } else {
                        setError({ title: 'Title is required' });
                      }
                    }
                  }}
                />
                {errors.title && <div className="note-page__error">{errors.title}</div>}
                <hr className="divider" />
                <input
                  className="note-page__input"
                  type="text"
                  ref={inputDescRef}
                  placeholder="Type something..."
                  defaultValue={task.description}
                  value={descriptionInput}
                  onChange={(e) => setDescriptionInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      if (titleInput) {
                        setError({ title: null });
                        editTask(titleInput, task.id, descriptionInput);
                        setIsEditing(false);
                      } else {
                        setError({ title: 'Title is required' });
                      }
                    }
                  }}
                />
              </>
            ) : (
              <>
                <div className={`note-page__title ${task.done ? 'done' : ''}`}>{task.title}</div>
                <hr className="divider" />
                <div className={`note-page__description ${task.done ? 'done' : ''}`}>{task.description}</div>
              </>
            )}
          </div>
          <div className="note-page__actions actions-note-page">
            <button className="actions-note-page__done btn" onClick={() => toggleDone(task.id)}>
              {task.done ? 'Undone' : 'Done'}
            </button>
            <button
              className="actions-note-page__edit btn btn--transparent"
              onClick={() => {
                if (isEditing) {
                  if (titleInput) {
                    setError({ title: null });
                    editTask(titleInput, task.id, descriptionInput);
                    setIsEditing(false);
                  } else {
                    setError({ title: 'Title is required' });
                  }
                } else {
                  setIsEditing((p) => !p);
                }
              }}
            >
              {isEditing ? 'Done' : 'Edit'}
            </button>
            <button
              className="actions-note-page__remove btn btn--transparent"
              onClick={() => {
                removeTask(task.id);
                router.replace('/todos');
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
