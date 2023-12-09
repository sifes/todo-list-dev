import React from 'react';
import closeIcon from '../../../assets/close.svg';

interface DescriptionProps {
  setError: React.Dispatch<
    React.SetStateAction<{
      title: string | null;
      description: string | null;
    }>
  >;
  setIsDescriptionShown: React.Dispatch<React.SetStateAction<boolean>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  isDescriptionShown: boolean;
  errors: {
    title: string | null;
    description: string | null;
  };
}

export const Description: React.FC<DescriptionProps> = ({
  isDescriptionShown,
  setIsDescriptionShown,
  description,
  setDescription,
  setError,
  errors,
}) => {
  return (
    <>
      {!isDescriptionShown ? (
        <div
          className={`content-popup__toggle btn`}
          onClick={() => {
            setIsDescriptionShown(true);
          }}
        >
          Add description
        </div>
      ) : (
        <div className="content-popup__description-wrapper">
          <input
            type="description"
            placeholder="Enter task description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="content-popup__input"
          />
          <img
            className="content-popup__close"
            src={closeIcon.src}
            alt="close"
            onClick={() => {
              setIsDescriptionShown(false);
              setError((p) => ({ ...p, description: null }));
            }}
          />
          {errors && <div className="content-popup__error">{errors.description}</div>}
        </div>
      )}
    </>
  );
};
