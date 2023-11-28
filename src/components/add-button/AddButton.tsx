import React from 'react';
import addIcon from '../../assets/add.svg';
interface AddButtonProps {
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddButton: React.FC<AddButtonProps> = ({ setIsShown }) => {
  return (
    <button
      className='add-btn'
      onClick={() => {
        setIsShown(true);
      }}
    >
      <img src={addIcon} alt='add task' />
    </button>
  );
};
