import { create } from 'zustand';

type Activity = {
  type: string;
  name: string;
  quantity: string;
};

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
