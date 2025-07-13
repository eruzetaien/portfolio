import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import TransitionOverlay from './components/TransitionOverlay.tsx';
import './index.css';
import { router } from './routes/router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TransitionOverlay />
    <RouterProvider router={router} /> 
  </StrictMode>,
)
