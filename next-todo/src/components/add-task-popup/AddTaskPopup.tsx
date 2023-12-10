import React from 'react';
import { useTasksStore } from '@/store/useTasksStore';
import { Description } from './components/Description';
import { Actions } from './components/Actions';
import { Title } from './components/Title';
import { Modal } from './components/Modal';
interface AddTaskPopupProps {}

export const AddTaskPopup: React.FC<AddTaskPopupProps> = () => {
  const [errors, setError] = React.useState<{
    title: string | null;
    description: string | null;
  }>({ title: null, description: null });
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [isDescriptionShown, setIsDescriptionShown] = React.useState<boolean>(false);

  return (
    <Modal>
      <h3 className="title">New Note</h3>
      <Title errors={errors} setTitle={setTitle} title={title} />
      <Description
        setIsDescriptionShown={setIsDescriptionShown}
        setDescription={setDescription}
        errors={errors}
        setError={setError}
        description={description}
        isDescriptionShown={isDescriptionShown}
      />
      <Actions title={title} setError={setError} description={description} isDescriptionShown={isDescriptionShown} />
    </Modal>
  );
};
