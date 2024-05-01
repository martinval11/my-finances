import { useStore } from '@/lib/zStates';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useRef, useState } from 'react';

export const AddBudgetDialog = () => {
  const [opened, setOpened] = useState(false);
  const budgetNameRef = useRef<HTMLInputElement>(null);
  const quantityGoalRef = useRef<HTMLInputElement>(null);

  const { budgetArray, setBudgetArray } = useStore();

  const saveBudgetData = () => {
    const name = budgetNameRef.current?.value;
    const quantityGoal = quantityGoalRef.current?.value;

    if (!name || !quantityGoal) {
      return alert('Please fill in all fields');
    }

    const id = budgetArray.length + 1;

    localStorage.setItem(
      'dataBudgets',
      JSON.stringify([
        ...(localStorage.getItem('dataBudgets')
          ? JSON.parse(localStorage.getItem('dataBudgets')!)
          : []),
        { id, name, quantityGoal },
      ])
    );

    setBudgetArray([...budgetArray, { id, name, quantityGoal }]);
    setOpened(false);
  };

  return (
    <Dialog open={opened} onOpenChange={setOpened}>
      <DialogTrigger className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium border whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input bg-background hover:bg-accent hover:text-accent-foreground">
        Add budget
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] rounded-md">
        <DialogHeader>
          <DialogTitle>Add Budget</DialogTitle>
        </DialogHeader>
        <div className="py-4 grid gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name of your budget</Label>
            <Input
              type="text"
              id="name"
              placeholder="Name of your budget goal"
              className="col-span-3"
              autoComplete="off"
              ref={budgetNameRef}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="quantity">Quantity Goal</Label>
            <Input
              type="number"
              id="quantity"
              defaultValue="0"
              placeholder="0.00"
              className="col-span-3"
              min="1"
              ref={quantityGoalRef}
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={saveBudgetData}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
