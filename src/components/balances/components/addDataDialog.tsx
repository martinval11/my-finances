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
  const [typeOfData, setTypeOfData] = useState('income');
  const nameRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  const saveData = () => {
    const name = nameRef.current?.value;
    const quantity = quantityRef.current?.value;

    console.table({ typeOfData, name, quantity });

    localStorage.setItem(
      'data',
      JSON.stringify([
        ...localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')!) : [],
        { typeOfData, name, quantity },
      ])
    );
  };

  return (
    <Dialog>
      <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
        Add data
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add data</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type-of-data" className="text-right">
              Type of data
            </Label>
            <Select onValueChange={setTypeOfData}>
              <SelectTrigger id="type-of-data" className="col-span-3">
                <SelectValue placeholder="Select type of data" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="income">Income</SelectItem>
                <SelectItem value="expense">Expense</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
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

          <div className="grid grid-cols-4 items-center gap-4">
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
