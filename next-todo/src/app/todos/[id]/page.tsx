'use client';
import { Task } from '@/lib/types/task';
import { useStore } from '@/store/useStore';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import BackIcon from '@/assets/back.svg';
import { InputsEdit } from '@/components/inputs-edit/InputsEdit';
import { useNotePageStore } from '@/store/useNotePageStore';
interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const router = useRouter();
  const params = useParams();
  const { tasks, removeTask, toggleDone, editTask } = useStore();
  const { descriptionInput, titleInput, setError, isEditing, toggleIsEditing, setCurrentTask, currentTask } =
    useNotePageStore();

  React.useEffect(() => {
    const task = tasks.find((t) => {
      return t.id.toString() === params.id;
    });
    if (task) {
      setCurrentTask(task);
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
              <InputsEdit />
            ) : (
              <>
                <div className={`note-page__title ${currentTask.done ? 'done' : ''}`}>{currentTask.title}</div>
                <hr className="divider" />
                <div className={`note-page__description ${currentTask.done ? 'done' : ''}`}>
                  {currentTask.description}
                </div>
              </>
            )}
          </div>
          <div className="note-page__actions actions-note-page">
            <button className="actions-note-page__done btn" onClick={() => toggleDone(currentTask.id)}>
              {currentTask.done ? 'Undone' : 'Done'}
            </button>
            <button
              className="actions-note-page__edit btn btn--transparent"
              onClick={() => {
                if (isEditing) {
                  if (titleInput) {
                    setError(null);
                    editTask(titleInput, currentTask.id, descriptionInput);
                    toggleIsEditing();
                  } else {
                    setError('Title is required');
                  }
                } else {
                  toggleIsEditing();
                }
              }}
            >
              {isEditing ? 'Done' : 'Edit'}
            </button>
            <button
              className="actions-note-page__remove btn btn--transparent"
              onClick={() => {
                removeTask(currentTask.id);
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
