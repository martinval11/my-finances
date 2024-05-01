import { Link } from 'wouter';
import { ModeToggle } from './mode-toggle';

export const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-3 px-4 border-b">
      <h1 className="text-2xl font-bold">
        <Link href="/">My Finances</Link>
      </h1>

      <div className="flex items-center gap-4">
        <Link
          href="/budgets"
          className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline"
        >
          Budgets
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
};
