import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.scss';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { TasksProvider } from './context/TasksContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TasksProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </TasksProvider>
  </React.StrictMode>,
);
