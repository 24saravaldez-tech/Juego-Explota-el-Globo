import React from 'react';
import './PantallaResultados.css';
import { JuegoContext } from '../JuegoContext';


function PantallaResultados() {
  const { nombreJugador, Jugar, puntos, Reiniciar, ModalCambioNombre, negros, total, totalPositivos } = React.useContext(JuegoContext)
 
  let mensaje = ''
  if (puntos < 0) {
    mensaje = '¡Cuidado con los globos negros!'
  } else if (puntos >= 0 && puntos < 10) {
    mensaje = '¡Buen intento!'
  } else if (puntos >= 10 && puntos < 24) {
    mensaje = '¡Muy bien!'
  } else if (puntos > 25) {
    mensaje = '¡Eres un maestro explotando globos!'
  }

  return (
    <div className="results-card">
      <div className="results-header">
        <span className="medal-icon">🏆</span>
        <h2>¡Partida Finalizada!</h2>
        <p className="player-highlight">Excelente esfuerzo, {nombreJugador}</p>
      </div>

      <div className="feedback-message">
        <h3>{mensaje}</h3>
      </div>

      <div className="stats-grid">
        <div className="stat-card total">
          <span className="stat-num">{parseInt(puntos)}</span>
          <span className="stat-title">Puntaje Final</span>
        </div>
        <div className="stat-card active-balloons">
          <span className="stat-num">{total}</span>
          <span className="stat-title">Globos Explotados</span>
        </div>
        <div className="stat-card success-balloons">
          <span className="stat-num">{totalPositivos}</span>
          <span className="stat-title">Positivos Explotados</span>
        </div>
        <div className="stat-card black-balloons">
          <span className="stat-num">{negros}</span>
          <span className="stat-title">Negros Explotados</span>
        </div>
      </div>

      <div className="results-actions">
        <button className="btn-replay" type="button" onClick={ModalCambioNombre}>
          🔄 Volver a Jugar
        </button>
      </div>
    </div>
  );
}

export { PantallaResultados }
