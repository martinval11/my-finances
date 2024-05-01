import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Switch } from 'wouter';

// components
import App from './App';
import { ThemeProvider } from '@/components/theme-provider';
import { Nav } from '@/components/nav';

// styles
import './index.css';
import BudgetsPage from './pages/budgets/page';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Nav />

      <Switch>
        <Route path="/" component={App} />
        <Route path="/budgets" component={BudgetsPage} />
      </Switch>
    </ThemeProvider>
  </React.StrictMode>
);
