import { AddDataDialog } from './components/addDataDialog';

export function Balances() {
  return (
    <section className="flex flex-col gap-2">
      <article className="flex justify-between items-center p-4 px-6 bg-secondary mt-4 mb-4 rounded">
        <div>
          <strong>Income</strong>
          <div id="income-counter" className="text-xl">
            0.00
          </div>
        </div>
        <div>
          <strong>Expenses</strong>
          <div id="expenses-counter" className="text-xl">
            0.00
          </div>
        </div>
        <div>
          <strong>Current Balance</strong>
          <div id="current-balance-counter" className="text-xl">
            0.00
          </div>
        </div>
      </article>
      <AddDataDialog />
    </section>
  );
}
