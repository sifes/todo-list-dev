import { Task } from './task';

type Filter = 'all' | 'completed' | 'not-completed';

export interface AppState {
  tasks: Task[];
  isAddPopupShown: boolean;
  filter: Filter;
  searchValue: string;
  addTask: (task: Omit<Task, 'id' | 'done'>) => void;
  removeTask: (id: number) => void;
  toggleDone: (id: number) => void;
  toggleAddPopupShown: () => void;
  setFilter: (filter: Filter) => void;
  setSearchValue: (value: string) => void;
  editTask: (title: string, id: number, description?: string) => void;
}
