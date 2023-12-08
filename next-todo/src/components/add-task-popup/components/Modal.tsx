import { useStore } from '@/store/useStore';
import React from 'react';

interface ModalProps {
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
  const { toggleAddPopupShown } = useStore();
  const [mouseHeld, setMouseHeld] = React.useState(false);

  const handleMouseDown = () => {
    setMouseHeld(() => true);
  };

  const handleMouseUp = () => {
    setMouseHeld(() => false);
  };

  const handleClose = () => {
    if (!mouseHeld) {
      toggleAddPopupShown();
    }
  };

  return (
    <div className="add-task-popup" onClick={handleClose}>
      <article
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className="add-task-content"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </article>
    </div>
  );
};
