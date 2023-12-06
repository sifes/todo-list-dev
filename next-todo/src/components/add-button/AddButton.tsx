import React from 'react';
import addIcon from '../../assets/add.svg';
import { useStore } from '@/store/useStore';
interface AddButtonProps {}

export const AddButton: React.FC<AddButtonProps> = () => {
  const { toggleAddPopupShown } = useStore();

  return (
    <button
      className='add-btn'
      onClick={() => {
        toggleAddPopupShown();
      }}
    >
      <img src={addIcon.src} alt='add task' />
    </button>
  );
};
