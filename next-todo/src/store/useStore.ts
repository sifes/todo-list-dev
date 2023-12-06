import { AppState } from '@/app/lib/types/store';
import { create } from 'zustand';

export const useStore = create<AppState>()((set) => ({
  tasks: [],
  searchValue: '',
  filter: 'all',
  isAddPopupShown: false,
  addTask: (task) => {
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), done: false, ...task }],
    }));
  },
  removeTask: (id) => {
    set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) }));
  },
  toggleDone: (id) => {
    set((state) => ({
      tasks: state.tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    }));
  },
  toggleAddPopupShown: () => {
    set((state) => ({
      isAddPopupShown: !state.isAddPopupShown,
    }));
  },
  setFilter: (filter) => {
    set(() => ({
      filter: filter,
    }));
  },
  setSearchValue: (value) => {
    set(() => ({
      searchValue: value,
    }));
  },
}));
