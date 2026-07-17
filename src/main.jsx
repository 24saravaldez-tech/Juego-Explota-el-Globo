import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PantallaInicial } from './PantallaInicial'
import { JuegoProvider } from './JuegoContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JuegoProvider>
      <PantallaInicial />
    </JuegoProvider>
  </StrictMode>,
)
