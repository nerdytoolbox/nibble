import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NibbleApp from './NibbleApp.jsx'
import { NibbleProvider } from "./context/NibbleContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NibbleProvider>
      <NibbleApp />
    </NibbleProvider>
  </StrictMode>,
)
