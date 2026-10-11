import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import App from './App.tsx';
import PrivateHelp from './PrivateHelp.tsx';
import './index.css';

const SKOOL_DM = 'https://www.skool.com/@saadbelcaid?g=ssmasters';

function GoSkool() {
  useEffect(() => {
    const t = setTimeout(() => window.location.replace(SKOOL_DM), 150);
    return () => clearTimeout(t);
  }, []);
  return null;
}

const path = window.location.pathname.replace(/\/+$/, '');
const Page =
  path === '/private-help' ? PrivateHelp :
  path === '/go-skool' ? GoSkool :
  App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
    <Analytics />
  </StrictMode>
);
