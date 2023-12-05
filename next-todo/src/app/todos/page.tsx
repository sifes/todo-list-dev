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
  const { tasks } = useStore();
  const [isPopupShown, setIsPopupShown] = React.useState<boolean>(false);
  const [currentTasks, setCurrentTasks] = React.useState(tasks);
  const [searchValue, setSearchValue] = React.useState('');
  const [filter, setFilters] = React.useState<'all' | 'completed' | 'not-completed'>('all');

  return (
    <div className={`wrapper`}>
      <div className='header'>
        <div className='title'>TODO LIST</div>
        <div className='actions'>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <Select setFilters={setFilters} />
          <ThemeToggle />
        </div>
      </div>
      <div className='body'>
        <ul className='list'>
          {currentTasks.length ? (
            currentTasks.map(function (task) {
              return <Note key={task.id} {...task} />;
            })
          ) : (
            <NoTasks />
          )}
        </ul>
        <AddButton setIsShown={setIsPopupShown} />
      </div>
      {isPopupShown && <AddTaskPopup isShown={isPopupShown} setIsShown={setIsPopupShown} />}
    </div>
  );
}
