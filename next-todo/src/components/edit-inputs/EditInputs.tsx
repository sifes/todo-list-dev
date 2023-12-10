import { useNotePageStore } from '@/store/useNotePageStore';
import { useStore } from '@/store/useStore';
import React from 'react';

interface InputsEditProps {}

export const EditInputs: React.FC<InputsEditProps> = () => {
  const inputDescRef = React.useRef<HTMLInputElement>(null);
  const { editTask } = useStore();
  const {
    descriptionInput,
    setDescriptionInput,
    setTitleInput,
    titleInput,
    error,
    setError,
    toggleIsEditing,
    currentTask,
  } = useNotePageStore();

  return (
    <>
      <input
        className="note-page__input"
        type="text"
        placeholder="Type something..."
        autoFocus
        defaultValue={currentTask.title}
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (titleInput) {
              setError(null);
              if (inputDescRef.current) {
                inputDescRef.current.focus();
              }
            } else {
              setError('Title is required');
            }
          }
        }}
      />
      {error.title && <div className="note-page__error">{error.title}</div>}
      <hr className="divider" />
      <input
        className="note-page__input"
        type="text"
        ref={inputDescRef}
        placeholder="Type something..."
        defaultValue={currentTask.description}
        value={descriptionInput}
        onChange={(e) => setDescriptionInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (titleInput) {
              setError(null);
              editTask(titleInput, currentTask.id, descriptionInput);
              toggleIsEditing();
            } else {
              setError('Title is required');
            }
          }
        }}
      />
    </>
  );
};
