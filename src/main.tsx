import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// components
import { ThemeProvider } from './components/theme-provider.tsx';
import { Nav } from './components/nav.tsx';

import './index.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Nav />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
