import { create } from 'zustand';
import type { Activity, Budget } from '@/types/types';

type Store = {
  activityArray: Activity[];
  setActivities: (activities: Activity[]) => void;
  removeActivity: (id: number) => void;
  budgetArray: Budget[];
  setBudgetArray: (budgets: Budget[]) => void;
  removeBudget: (id: number) => void;
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
  budgetArray: [],
  setBudgetArray: (budgets) => set({ budgetArray: budgets }),
  removeBudget: (id) => {
    set((state) => ({
      budgetArray: state.budgetArray.filter((item) => item.id !== id),
    }));
    localStorage.setItem('dataBudgets', JSON.stringify(get().budgetArray));
  },
}));
