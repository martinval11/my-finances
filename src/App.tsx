import { ActivitySection as Activity } from '@/components/activity/activity';
import { Balances } from '@/components/balances/balances';

const App = () => {
  return (
    <main className="max-w-xl p-4 mx-auto">
      <Balances />
      <Activity />
    </main>
  );
}

export default App;
