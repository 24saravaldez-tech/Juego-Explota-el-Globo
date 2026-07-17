import React from 'react';
import './PantallaInicial.css';
import { PantallaJuego } from '../PantallaJuego';
import { JuegoContext } from '../JuegoContext';
import { PantallaRegistro } from '../PantallaRegistro';
import { PantallaResultados } from '../PantallaResultados';
import { ModalCambioNombre } from '../ModalCambioNombre';

const DURACION_TRANSICION_MS = 800

function PantallaInicial() {
  const { cambioPantalla } = React.useContext(JuegoContext)
  const [transicionando, setTransicionando] = React.useState(false)
  const pantallaPreviaRef = React.useRef(cambioPantalla)

  React.useEffect(() => {
    if (pantallaPreviaRef.current === 'Inicio' && cambioPantalla === 'Jugar') {
      setTransicionando(true)
      const idTimeout = setTimeout(() => setTransicionando(false), DURACION_TRANSICION_MS)
      pantallaPreviaRef.current = cambioPantalla
      return () => clearTimeout(idTimeout)
    }
    pantallaPreviaRef.current = cambioPantalla
  }, [cambioPantalla])

  if (cambioPantalla === 'Inicio' || transicionando) {
    return (
      <PantallaRegistro saliendo={transicionando} />
    )

  } else if (cambioPantalla === 'Jugar') {
    return (
      <PantallaJuego />
    )

  } else if (cambioPantalla === 'Reiniciar') {
    return (
      <PantallaResultados />
    )

  } else if (cambioPantalla === 'ModalCambioNombre'){
    return (
      <ModalCambioNombre />
    )
  }
}

export { PantallaInicial }