import { ModeToggle } from './mode-toggle';

export function Nav() {
  return (
    <nav className="flex items-center justify-between border-b p-3 px-4">
      <h1 className="text-2xl font-bold">My Finances</h1>

      <ModeToggle />
    </nav>
  );
}
