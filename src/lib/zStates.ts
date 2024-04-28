import { create } from 'zustand';
import type { Activity } from '@/types/types';

type Store = {
  activityArray: Array<Activity>;
  addActivity: () => void;
};

export const useStore = create<Store>()((set) => ({
  activityArray: [],
  addActivity: () => {
    set((state) => ({
      activityArray: [...state.activityArray],
    }));
  },
}));
