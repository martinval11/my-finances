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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRef, useState } from 'react';

export function AddDataDialog() {
  const [opened, setOpened] = useState(false);
  const [type, setType] = useState('income');
  const nameRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  const { activityArray, setActivities } = useStore();

  const saveData = () => {
    const name = nameRef.current?.value;
    const quantity = quantityRef.current?.value;

    if (!name || !quantity) {
      return window.alert('Please fill in all fields');
    }

    const id = activityArray.length + 1;

    localStorage.setItem(
      'data',
      JSON.stringify([
        ...(localStorage.getItem('data')
          ? JSON.parse(localStorage.getItem('data')!)
          : []),
        { id, type, name, quantity },
      ])
    );

    setActivities([...activityArray, { id, type, name, quantity }]);
    setOpened(false);
  };

  return (
    <Dialog open={opened} onOpenChange={setOpened}>
      <DialogTrigger className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium border whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input bg-background hover:bg-accent hover:text-accent-foreground">
        Add data
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add data</DialogTitle>
        </DialogHeader>
        <div className="py-4 grid gap-4">
          <div className="items-center grid grid-cols-4 gap-4">
            <Label htmlFor="type-of-data" className="text-right">
              Type of data
            </Label>
            <Select onValueChange={setType}>
              <SelectTrigger id="type-of-data" className="col-span-3">
                <SelectValue placeholder="Select type of data" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="income">Income</SelectItem>
                <SelectItem value="expense">Expense</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="items-center grid grid-cols-4 gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              placeholder="Name of the your expense/income"
              className="col-span-3"
              autoComplete="off"
              ref={nameRef}
              required
            />
          </div>

          <div className="items-center grid grid-cols-4 gap-4">
            <Label htmlFor="quantity" className="text-right">
              Quantity
            </Label>
            <Input
              type="number"
              id="quantity"
              defaultValue="0"
              placeholder="0.00"
              className="col-span-3"
              min="1"
              ref={quantityRef}
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={saveData}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
