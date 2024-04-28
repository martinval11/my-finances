import { useState, useEffect } from 'react';
import { useStore } from '@/lib/zStates';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Data = {
  name: string;
  quantity: string;
};

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
        {activityArray.map((item: Data) => (
          <Card key={item.name}>
            <CardHeader className="flex flex-row items-center justify-between p-4 px-6 space-y-0">
              <CardTitle>{item.name}</CardTitle>
              <CardDescription className="text-lg">
                {item.quantity}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
