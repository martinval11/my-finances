import { ModeToggle } from './mode-toggle';

export const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-3 px-4 border-b">
      <h1 className="text-2xl font-bold">My Finances</h1>

      <ModeToggle />
    </nav>
  );
};
