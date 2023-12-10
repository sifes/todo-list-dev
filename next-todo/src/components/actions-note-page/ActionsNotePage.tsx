import { useNotePageStore } from '@/store/useNotePageStore';
import { useTasksStore } from '@/store/useTasksStore';
import { useRouter } from 'next/navigation';
import React from 'react';

interface ActionsNotePageProps {}

export const ActionsNotePage: React.FC<ActionsNotePageProps> = ({}) => {
  const router = useRouter();
  const { removeTask, toggleDone, editTask } = useTasksStore();
  const { descriptionInput, titleInput, setError, isEditing, toggleIsEditing, currentTask } = useNotePageStore();
  return (
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
  );
};
