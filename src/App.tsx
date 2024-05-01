import { ActivitySection as Activity } from './components/activity/activity';
import { Balances } from './components/balances/balances';

export default function App() {
  return (
    <main className="max-w-xl p-4 mx-auto">
      <Balances />
      <Activity />
    </main>
  );
}
