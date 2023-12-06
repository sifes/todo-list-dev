import React from 'react';
import { useStore } from '@/store/useStore';
import closeIcon from '../../assets/close.svg';
interface AddTaskPopupProps {}

export const AddTaskPopup: React.FC<AddTaskPopupProps> = () => {
  const { toggleAddPopupShown, addTask } = useStore();

  const [errors, setError] = React.useState<{
    title: string | null;
    description: string | null;
  }>({ title: null, description: null });
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [isDescriptionShown, setIsDescriptionShown] = React.useState<boolean>(false);

  return (
    <div
      className={`add-task-popup`}
      onClick={() => {
        toggleAddPopupShown();
      }}
    >
      <article
        className="add-task-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="title">New Note</div>
        <input
          type="title"
          placeholder="Enter task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        {errors && <div className="error">{errors.title}</div>}
        {!isDescriptionShown ? (
          <div
            className={`description-toggle btn ${isDescriptionShown ? 'shown' : ''}`}
            onClick={() => {
              setIsDescriptionShown(true);
            }}
          >
            Add description
          </div>
        ) : (
          <div className="description-wrapper">
            <input
              type="description"
              placeholder="Enter task description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <img
              className="close"
              src={closeIcon.src}
              alt="close"
              onClick={(e) => {
                setIsDescriptionShown(false);
                setError((p) => ({ ...p, description: null }));
              }}
            />
            {errors && <div className="error">{errors.description}</div>}
          </div>
        )}
        <div className="actions">
          <button
            className="cancel btn btn--transparent"
            onClick={() => {
              toggleAddPopupShown();
              setError((p) => ({ title: null, description: null }));
            }}
          >
            Cancel
          </button>
          <button
            className="apply btn"
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
      </article>
    </div>
  );
};
