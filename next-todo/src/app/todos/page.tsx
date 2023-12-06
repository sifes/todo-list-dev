'use client';
import { AddButton } from '@/components/add-button/AddButton';
import { AddTaskPopup } from '@/components/add-task-popup/AddTaskPopup';
import { NoTasks } from '@/components/no-tasks/NoTasks';
import { Note } from '@/components/note/Note';
import { Search } from '@/components/search/Search';
import { Select } from '@/components/select/Select';
import { ThemeToggle } from '@/components/theme-toggle/ThemeToggle';
import React from 'react';
import { useStore } from '@/store/useStore';

export default function TodosPage() {
  const { tasks, isAddPopupShown, filter } = useStore();
  const [shownTasks, setShownTasks] = React.useState(tasks);

  React.useEffect(() => {
    if (filter === 'all') {
      setShownTasks(tasks);
    } else if (filter === 'completed') {
      setShownTasks(tasks.filter((task) => task.done));
    } else {
      setShownTasks(tasks.filter((task) => !task.done));
    }
  }, [filter, tasks]);

  return (
    <div className={`wrapper`}>
      <div className='header'>
        <div className='title'>TODO LIST</div>
        <div className='actions'>
          <Search />
          <Select />
          <ThemeToggle />
        </div>
      </div>
      <div className='body'>
        <ul className='list'>
          {shownTasks.length ? (
            shownTasks.map(function (task) {
              return <Note key={task.id} {...task} />;
            })
          ) : (
            <NoTasks />
          )}
        </ul>
        <AddButton />
      </div>
      {isAddPopupShown && <AddTaskPopup />}
    </div>
  );
}
