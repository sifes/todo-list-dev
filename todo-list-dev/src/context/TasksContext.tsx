import React, { createContext, ReactNode } from 'react';

interface Task {
  title: string;
  isDone: boolean;
  id: number;
}

interface TasksContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
  changeTaskTitle: (task: Task) => void;
  changeTaskIsDone: (task: Task) => void;
}

export const TasksContext = createContext<TasksContextProps | undefined>(undefined);

export const TasksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  function addTask(task: Task) {
    setTasks((p) => [...p, task]);
  }
  function deleteTask(task: Task) {
    setTasks((p) => p.filter((item) => item.id !== task.id));
  }
  function changeTaskTitle(task: Task) {
    setTasks((p) =>
      p.map((item) => {
        if (item.id === task.id) {
          return { ...item, title: task.title };
        }
        return item;
      }),
    );
  }
  function changeTaskIsDone(task: Task) {
    setTasks((p) =>
      p.map((item) => {
        if (item.id === task.id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      }),
    );
  }

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, deleteTask, changeTaskTitle, changeTaskIsDone }}
    >
      {children}
    </TasksContext.Provider>
  );
};
