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
            onClick={() => {
              setIsDescriptionShown(false);
              setError((p) => ({ ...p, description: null }));
            }}
          />
          {errors && <div className="error">{errors.description}</div>}
        </div>
      )}
    </>
  );
};
