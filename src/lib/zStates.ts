import { create } from 'zustand';
import type { Activity } from '@/types/types';

type Store = {
  activityArray: Array<Activity>;
  setActivities: (activities: Array<Activity>) => void;
  removeActivity: (id: number) => void;
};

export const useStore = create<Store>()((set, get) => ({
  activityArray: [],
  setActivities: (activities) => set({ activityArray: activities }),
  removeActivity: (id) => {
    set((state) => ({
      activityArray: state.activityArray.filter((item) => item.id !== id),
    }));
    localStorage.setItem('data', JSON.stringify(get().activityArray));
  },
}));
