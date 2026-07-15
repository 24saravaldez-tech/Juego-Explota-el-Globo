import React, { use, useContext } from 'react';
import './PantallaInicial.css';
import { FormJugador } from './FormJugador';
import { PantallaJuego } from '../PantallaJuego';
import { JuegoContext } from '../JuegoContext';


function PantallaInicial() {
  const {cambioPantalla, setCambioPantalla} = useContext(JuegoContext)

  if (cambioPantalla === 'Inicio') {

    return (

      <div className="start-card">
        <div className="start-header">
          <h1 className="game-title">🎈 Explota los Globos</h1>
          <p className="game-subtitle">¡Pon a prueba tus reflejos y consigue la máxima puntuación!</p>
        </div>

        <div className="start-content">

          <FormJugador />

          {/* Columna Derecha: Tabla de Puntos */}
          <div className="instructions-panel">
            <h3>Tabla de Puntos</h3>
            <p className="rules-text">Haz clic en los globos antes de que desaparezcan. ¡Cuidado con el color negro! [cite: 5, 6]</p>

            <div className="points-grid">
              <div className="points-item">
                <span className="balloon-dot red"></span>
                <span className="points-label">Rojo: <strong>+1</strong></span>
              </div>
              <div className="points-item">
                <span className="balloon-dot green"></span>
                <span className="points-label">Verde: <strong>+2</strong></span>
              </div>
              <div className="points-item">
                <span className="balloon-dot blue"></span>
                <span className="points-label">Azul: <strong>+5</strong></span>
              </div>
              <div className="points-item">
                <span className="balloon-dot black"></span>
                <span className="points-label">Negro: <strong>-3</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  } else if (cambioPantalla === 'Jugar') {
    return (
      <PantallaJuego />
    )
  }

}

export { PantallaInicial }