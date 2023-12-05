import { create } from 'zustand';

interface Task {
  id: number;
  title: string;
  isDone: boolean;
}

interface AppState {
  tasks: Task[];
  addTask: () => void;
  removeTask: () => void;
}

export const useStore = create<AppState>()((set) => ({
  tasks: [],
  addTask: () => {
    set((state) => ({ tasks: [...state.tasks, { id: 1, title: 'test', isDone: false }] }));
  },
  removeTask: () => {
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== 1) }));
  },
}));
