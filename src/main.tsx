import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homescreen from './pages/Homescreen.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Homescreen />
  </StrictMode>,
)
