import { useEffect } from 'react';
import clsx from 'clsx';

import { useStore } from '@/lib/zStates';

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import type { Budget } from '@/types/types';

export const BudgetCards = () => {
  const { budgetArray, setBudgetArray } = useStore();

  useEffect(() => {
    const budgetListLocalStorage = localStorage.getItem('dataBudgets') || '[]';
    const budgets = JSON.parse(budgetListLocalStorage);

    if (budgetListLocalStorage && budgets) {
      setBudgetArray(budgets);
    }
  }, []);

  return (
    <section className="mt-6">
      <h2 className="mb-3 text-lg font-bold">Activity</h2>

      <div className="flex flex-col gap-4">
        {budgetArray.map((item: Budget) => (
          <Card key={item.id}>
            <CardHeader className="flex flex-row items-center justify-between p-4 px-6 space-y-0">
              <CardTitle>{item.name}</CardTitle>
              <CardDescription className="px-2 text-lg font-bold rounded">
                Goal: ${item.quantityGoal}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex gap-2">
              <Button variant="secondary">Deposit</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
