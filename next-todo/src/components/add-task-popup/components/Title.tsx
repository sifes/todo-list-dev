import React from 'react';

interface TitleProps {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  errors: {
    title: string | null;
    description: string | null;
  };
}

export const Title: React.FC<TitleProps> = ({ errors, setTitle, title }) => {
  return (
    <div>
      <input
        type="title"
        placeholder="Enter task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
        className="content-popup__input"
      />
      {errors && <div className="content-popup__error">{errors.title}</div>}
    </div>
  );
};
