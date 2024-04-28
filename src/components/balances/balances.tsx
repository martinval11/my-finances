import { useMemo } from 'react';

import { useStore } from '@/lib/zStates';
import { AddDataDialog } from './components/addDataDialog';

import type { Activity } from '@/types/types';

// Custom hook to calculate totals
const useFinancialTotals = (activities: Array<Activity>) => {
  return useMemo(() => {
    let income = 0;
    let expenses = 0;

    activities.forEach((item) => {
      const amount = parseFloat(item.quantity);
      if (item.type === 'income') {
        income += amount;
      } else if (item.type === 'expense') {
        expenses += amount;
      }
    });

    return { income, expenses, currentBalance: income - expenses };
  }, [activities]);
}

export function Balances() {
  const { activityArray } = useStore();
  const { income, expenses, currentBalance } =
    useFinancialTotals(activityArray);

  return (
    <section className="flex flex-col gap-2">
      <article className="flex items-center justify-between p-4 px-6 mt-4 mb-4 rounded bg-secondary">
        <div>
          <strong>Income</strong>
          <div id="income-counter" className="text-xl">
            ${income.toLocaleString()}
          </div>
        </div>
        <div>
          <strong>Expenses</strong>
          <div id="expenses-counter" className="text-xl">
            ${expenses.toLocaleString()}
          </div>
        </div>
        <div>
          <strong>Current Balance</strong>
          <div id="current-balance-counter" className="text-xl">
            ${currentBalance.toLocaleString()}
          </div>
        </div>
      </article>
      <AddDataDialog />
    </section>
  );
}
