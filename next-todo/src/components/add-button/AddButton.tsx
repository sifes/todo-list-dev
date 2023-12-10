import React from 'react';
import addIcon from '../../assets/add.svg';
import { useTasksStore } from '@/store/useTasksStore';
interface AddButtonProps {}

export const AddButton: React.FC<AddButtonProps> = () => {
  const { toggleAddPopupShown } = useTasksStore();

  return (
    <button
      className="add-btn"
      onClick={() => {
        toggleAddPopupShown();
      }}
    >
      <img src={addIcon.src} alt="add task" />
    </button>
  );
};
