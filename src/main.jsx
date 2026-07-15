import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PantallaInicial } from './PantallaInicial' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PantallaInicial />
  </StrictMode>,
)
