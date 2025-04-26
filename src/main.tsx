import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Headers from './Component/Header/Headers.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Headers />
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
