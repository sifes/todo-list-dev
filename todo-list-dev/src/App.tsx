import React from 'react';
import { AddButton } from './components/add-button/AddButton';
import { Note } from './components/note/Note';
import { Search } from './components/search/Search';
import { Select } from './components/select/Select';
import { ThemeToggle } from './components/theme-toggle/ThemeToggle';
import { useTheme } from './hooks/useTheme';
import { AddTaskPopup } from './components/add-task-popup/AddTaskPopup';
import { NoTasks } from './components/no-tasks/NoTasks';
import { useTasks } from './hooks/useTasks';

function App() {
  const { tasks } = useTasks();
  const [isPopupShown, setIsPopupShown] = React.useState<boolean>(false);
  const theme = useTheme();
  const [currentTasks, setCurrentTasks] = React.useState(tasks);
  const [searchValue, setSearchValue] = React.useState('');
  const [filter, setFilters] = React.useState<'all' | 'completed' | 'not-completed'>('all');

  React.useEffect(() => {
    setCurrentTasks(
      tasks.filter((task) => task.title.toLowerCase().includes(searchValue.toLowerCase())),
    );
  }, [searchValue, tasks]);
  React.useEffect(() => {
    setCurrentTasks(
      tasks.filter(
        (task) => task.isDone === (filter === 'completed' ? true : false) || filter === 'all',
      ),
    );
  }, [filter]);

  return (
    <div className={`wrapper ${theme.isDark ? 'dark' : ''}`}>
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

export default App;
