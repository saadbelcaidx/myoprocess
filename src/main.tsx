import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import App from './App.tsx';
import PrivateHelp from './PrivateHelp.tsx';
import './index.css';

const path = window.location.pathname.replace(/\/+$/, '');
const Page = path === '/private-help' ? PrivateHelp : App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
    <Analytics />
  </StrictMode>
);
