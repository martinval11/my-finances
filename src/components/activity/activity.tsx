import { useState, useEffect } from 'react';
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

import type { Activity } from '@/types/types';

export function Activity() {
  const { activityArray } = useStore();
  const [activityState, setActivityState] = useState(activityArray);

  const removeActivityCard = (id: number) => {
    setActivityState((prev) => prev.filter((item) => item.id !== id));
    localStorage.setItem(
      'data',
      JSON.stringify(activityArray.filter((item) => item.id !== id))
    );
  };

  useEffect(() => {
    const localData = localStorage.getItem('data');

    if (localData) {
      const parsedData = JSON.parse(localData);
      setActivityState([...parsedData]);
    }
  }, []);

  return (
    <section className="mt-6">
      <h2 className="mb-3 text-lg font-bold">Activity</h2>

      <div className="flex flex-col gap-4">
        {activityState.map((item: Activity) => (
          <Card key={item.id}>
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
            <CardFooter className="flex gap-2">
              <Button variant="outline">Edit</Button>
              <Button
                id={item.id + ''}
                onClick={(event) => {
                  const target = event.target as HTMLButtonElement;
                  removeActivityCard(Number(target.id));
                }}
                variant="secondary"
              >
                Remove
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
