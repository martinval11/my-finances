import { AddBudgetDialog } from './components/addBudgetDialog';
import { BudgetCards } from './components/budgetCards';

const BudgetsPage = () => {
  return (
    <main className="max-w-xl p-4 mx-auto">
      <h1>Budgets</h1>
      <AddBudgetDialog />
      <BudgetCards />
    </main>
  );
};

export default BudgetsPage;
