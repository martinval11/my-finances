import { useState, useEffect } from 'react';

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
  const [data, setData] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem('data');

    if (localData) {
      setData(JSON.parse(localData));
    }
  }, []);

  return (
    <section className="mt-6">
      <h2 className="text-lg font-bold mb-3">Activity</h2>

      <div className="flex flex-col gap-4">
        {data.map((item: Data) => (
          <Card key={item.name}>
            <CardHeader className="flex justify-between flex-row items-center p-4 px-6 space-y-0">
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
