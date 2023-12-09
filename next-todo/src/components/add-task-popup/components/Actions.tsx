import { useStore } from '@/store/useStore';
import React from 'react';

interface ActionsProps {
  setError: React.Dispatch<
    React.SetStateAction<{
      title: string | null;
      description: string | null;
    }>
  >;
  title: string;
  description: string;
  isDescriptionShown: boolean;
}

export const Actions: React.FC<ActionsProps> = ({ setError, isDescriptionShown, description, title }) => {
  const { toggleAddPopupShown, addTask } = useStore();

  return (
    <div className="content-popup__actions">
      <button
        className="content-popup__cancel btn btn--transparent"
        onClick={() => {
          toggleAddPopupShown();
          setError(() => ({ title: null, description: null }));
        }}
      >
        Cancel
      </button>
      <button
        className="content-popup__apply btn"
        onClick={() => {
          if (!title || (isDescriptionShown && !description)) {
            setError((p) => ({ ...p, title: 'Title is required' }));
            if (isDescriptionShown && !description) {
              setError((p) => ({ ...p, description: 'Description is required' }));
            }
          } else {
            addTask({ title, description });
            toggleAddPopupShown();
          }
        }}
      >
        Apply
      </button>
    </div>
  );
};
