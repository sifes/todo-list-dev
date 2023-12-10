'use client';
import { useStore } from '@/store/useStore';
import { useParams } from 'next/navigation';
import React from 'react';
import { EditInputs } from '@/components/edit-inputs/EditInputs';
import { useNotePageStore } from '@/store/useNotePageStore';
import { ActionsNotePage } from './../../../components/actions-note-page/ActionsNotePage';
import { BackBtn } from './../../../components/back-btn/BackBtn';
interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const params = useParams();
  const { tasks } = useStore();
  const { isEditing, setCurrentTask, currentTask } = useNotePageStore();

  React.useEffect(() => {
    const task = tasks.find((t) => {
      return t.id.toString() === params.id;
    });
    if (task) {
      setCurrentTask(task);
    }
  }, [isEditing]);

  return (
    <div className="wrapper">
      <div className="body">
        <h2 className="title">Just Do It!</h2>
        <div className="note-page">
          <BackBtn />
          <div className="note-page__body">
            {isEditing ? (
              <EditInputs />
            ) : (
              <>
                <div className={`note-page__title ${currentTask.done ? 'done' : ''}`}>{currentTask.title}</div>
                <hr className="divider" />
                <div className={`note-page__description ${currentTask.done ? 'done' : ''}`}>
                  {currentTask.description}
                </div>
              </>
            )}
          </div>
          <ActionsNotePage />
        </div>
      </div>
    </div>
  );
};

export default Page;
