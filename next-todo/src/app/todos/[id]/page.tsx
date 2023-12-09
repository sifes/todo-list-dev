'use client';
import { Task } from '@/lib/types/task';
import { useStore } from '@/store/useStore';
import { useParams } from 'next/navigation';
import React from 'react';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const inputDescRef = React.useRef<HTMLInputElement>(null);
  const { tasks, removeTask, toggleDone, editTask } = useStore();
  const params = useParams();
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
    }
  }, [isEditing]);
  return (
    <div className="wrapper">
      <div className="body">
        <h2 className="title">Just Do It!</h2>
        <div className="note-page">
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
              <div className="note-page__title">{task.title}</div>
              <div className="note-page__body">{task.description}</div>
            </>
          )}
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
            <button className="actions-note-page__remove btn btn--transparent" onClick={() => removeTask(task.id)}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
