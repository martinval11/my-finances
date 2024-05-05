import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import App from './App';
import { ThemeProvider } from '@/components/theme-provider';
import { Nav } from '@/components/nav';

// styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Nav />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
