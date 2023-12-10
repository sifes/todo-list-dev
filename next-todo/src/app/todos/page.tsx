'use client';
import { AddButton } from '@/components/add-button/AddButton';
import { AddTaskPopup } from '@/components/add-task-popup/AddTaskPopup';
import { NoTasks } from '@/components/no-tasks/NoTasks';
import { Note } from '@/components/note/Note';
import { Search } from '@/components/search/Search';
import { Select } from '@/components/select/Select';
import { ThemeToggle } from '@/components/theme-toggle/ThemeToggle';
import React from 'react';
import { useTasksStore } from '@/store/useTasksStore';

export default function TodosPage() {
  const { searchValue, shownTasks, filterTasks, tasks, isAddPopupShown, filter } = useTasksStore();

  React.useEffect(() => {
    filterTasks();
  }, [filter, tasks, searchValue]);

  React.useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      useTasksStore.setState((state) => ({ ...state, tasks: parsedTasks }));
    }
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem('tasks')?.length && tasks.length) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <div className="wrapper">
      <div className="header">
        <div className="header__title title">TODO LIST</div>
        <div className="header__actions">
          <Search />
          <Select />
          <ThemeToggle />
        </div>
      </div>
      <div className="body">
        <ul className="list">
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
