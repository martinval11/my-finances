import { useEffect } from 'react';
import clsx from 'clsx';

import { useStore } from '@/lib/zStates';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import type { Activity } from '@/types/types';

export function Activity() {
  const { activityArray, addActivity } = useStore();

  useEffect(() => {
    const localData = localStorage.getItem('data');

    if (localData) {
      activityArray.push(...JSON.parse(localData));
      addActivity();
    }
  }, []);

  return (
    <section className="mt-6">
      <h2 className="mb-3 text-lg font-bold">Activity</h2>

      <div className="flex flex-col gap-4">
        {activityArray.map((item: Activity) => (
          <Card key={item.name}>
            <CardHeader
              className={clsx(
                'flex flex-row items-center justify-between p-4 px-6 space-y-0',
                item.type === 'income' ? 'text-green-500' : 'text-red-500'
              )}
            >
              <CardTitle>{item.name}</CardTitle>
              <CardDescription
                className={clsx(
                  'text-lg font-bold px-2 rounded',
                  item.type === 'income'
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                )}
              >
                {item.type === 'income' ? '+' : '-'} ${item.quantity}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
