import { useRef, useState } from 'react';
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

type EditActivityDialogProps = {
  id: number;
  name: string;
  quantity: string;
  typePredefined: string;
}

export function EditActivityDialog({
  id,
  name,
  quantity,
  typePredefined,
}: EditActivityDialogProps) {
  const [opened, setOpened] = useState(false);
  const [type, setType] = useState(typePredefined);
  const nameRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  const { activityArray, setActivities } = useStore();

  const saveEditedData = () => {
    const name = nameRef.current?.value;
    const quantity = quantityRef.current?.value;

    if (!name || !quantity) {
      return window.alert('Please fill in all fields');
    }

    activityArray.find((item) => {
      if (item.id === id) {
        item.name = name;
        item.quantity = quantity;
        item.type = type;
      }
    });

    localStorage.setItem('data', JSON.stringify([...activityArray]));

    setActivities([...activityArray]);
    setOpened(false);
  };

  return (
    <Dialog open={opened} onOpenChange={setOpened}>
      <DialogTrigger className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium border whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input bg-background hover:bg-accent hover:text-accent-foreground">
        Edit
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] rounded-md">
        <DialogHeader>
          <DialogTitle>Edit data</DialogTitle>
        </DialogHeader>
        <div className="py-4 grid gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="type-of-data">Type of data</Label>
            <Select onValueChange={setType} defaultValue={type}>
              <SelectTrigger id="type-of-data" className="col-span-3">
                <SelectValue placeholder="Select type of data" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="income">Income</SelectItem>
                <SelectItem value="expense">Expense</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Name of the your expense/income"
              className="col-span-3"
              autoComplete="off"
              defaultValue={name}
              ref={nameRef}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              type="number"
              id="quantity"
              defaultValue={quantity}
              placeholder="0.00"
              className="col-span-3"
              min="1"
              ref={quantityRef}
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={saveEditedData}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
