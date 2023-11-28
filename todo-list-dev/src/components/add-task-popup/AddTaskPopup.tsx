import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useTasks } from '../../hooks/useTasks';

interface AddTaskPopupProps {
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddTaskPopup: React.FC<AddTaskPopupProps> = ({ setIsShown }) => {
  const theme = useTheme();
  const { addTask } = useTasks();
  const [value, setValue] = React.useState<string>('');
  return (
    <div
      className={`add-task-popup ${theme.isDark ? 'dark' : ''}`}
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
                addTask({
                  id: Date.now(),
                  title: value,
                  isDone: false,
                });
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
