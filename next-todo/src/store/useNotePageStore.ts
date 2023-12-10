import { NotePageStore } from '@/lib/types/store';
import { create } from 'zustand';
import { Task } from './../lib/types/task';

export const useNotePageStore = create<NotePageStore>()((set) => ({
  currentTask: {} as Task,
  titleInput: '',
  descriptionInput: '',
  error: {
    title: null,
  },
  isEditing: false,
  setCurrentTask: (task: Task) => set(() => ({ currentTask: task })),
  setTitleInput: (value) => set(() => ({ titleInput: value })),
  setDescriptionInput: (value) => set(() => ({ descriptionInput: value })),
  setError: (value) => set(() => ({ error: { title: value } })),
  toggleIsEditing: () => set((state) => ({ isEditing: !state.isEditing })),
}));
