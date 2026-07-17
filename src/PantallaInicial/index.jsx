import React from 'react';
import './PantallaInicial.css';
import { PantallaJuego } from '../PantallaJuego';
import { JuegoContext } from '../JuegoContext';
import { PantallaRegistro } from '../PantallaRegistro';
import { PantallaResultados } from '../PantallaResultados';
import { ModalCambioNombre } from '../ModalCambioNombre';

function PantallaInicial() {
  const { cambioPantalla } = React.useContext(JuegoContext)

  if (cambioPantalla === 'Inicio') {
    return (
      <PantallaRegistro />
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
