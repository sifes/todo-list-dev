import { AppState } from '@/lib/types/store';
import { create } from 'zustand';

export const useStore = create<AppState>()((set) => ({
  tasks: [],
  shownTasks: [],
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
    set((state) => {
      const task = state.tasks.find((t) => t.id === id);
      if (task) {
        task.done = !task.done;
      }
      return { tasks: [...state.tasks] };
    });
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
  editTask: (title, id, description) => {
    set((state) => {
      const task = state.tasks.find((t) => t.id === id);
      if (task) {
        task.title = title;
        task.description = description;
      }
      return { tasks: [...state.tasks] };
    });
  },
  filterTasks: () => {
    set((state) => {
      let shownTasks = [...state.tasks];
      if (state.filter === 'completed') {
        shownTasks = shownTasks.filter((t) => t.done);
      } else if (state.filter === 'not-completed') {
        shownTasks = shownTasks.filter((t) => !t.done);
      }
      if (state.searchValue) {
        shownTasks = shownTasks.filter((t) => t.title.toLowerCase().includes(state.searchValue.toLowerCase()));
      }
      return { shownTasks };
    });
  },
}));
