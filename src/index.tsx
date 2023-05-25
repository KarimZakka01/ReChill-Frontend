import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router';
import { UserContextProvider } from '@services/userContext/UserContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  </React.StrictMode>
);
