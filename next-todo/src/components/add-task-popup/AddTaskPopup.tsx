import React from 'react';

interface AddTaskPopupProps {
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddTaskPopup: React.FC<AddTaskPopupProps> = ({ setIsShown }) => {
  const [value, setValue] = React.useState<string>('');
  return (
    <div
      className={`add-task-popup`}
      onClick={() => {
        setIsShown(false);
      }}
    >
      <article
        className='add-task-content'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className='title'>New Note</div>
        <input
          type='text'
          placeholder='Input your note...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />
        <div className='actions'>
          <button
            className='cancel'
            onClick={() => {
              setIsShown(false);
            }}
          >
            Cancel
          </button>
          <button
            className='apply'
            onClick={() => {
              if (value) {
                setIsShown(false);
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
