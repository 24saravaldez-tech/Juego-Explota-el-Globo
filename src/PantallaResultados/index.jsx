import React from 'react';
import './PantallaResultados.css';

export default function ResultsScreen() {
  return (
    <div className="results-card">
      <div className="results-header">
        <span className="medal-icon">🏆</span>
        <h2>¡Partida Finalizada!</h2>
        <p className="player-highlight">Excelente esfuerzo, Oliver</p>
      </div>

      {/* Tarjeta de Mensaje Dinámico */}
      <div className="feedback-message">
        <h3>"¡Eres un maestro explotando globos!"</h3> [cite: 94]
      </div>

      {/* Grid de Estadísticas */}
      <div className="stats-grid">
        <div className="stat-card total">
          <span className="stat-num">24</span>
          <span className="stat-title">Puntaje Final</span>
        </div>
        <div className="stat-card active-balloons">
          <span className="stat-num">18</span>
          <span className="stat-title">Globos Explotados</span> [cite: 83]
        </div>
        <div className="stat-card success-balloons">
          <span className="stat-num">16</span>
          <span className="stat-title">Positivos Explotados</span> [cite: 84]
        </div>
        <div className="stat-card black-balloons">
          <span className="stat-num">2</span>
          <span className="stat-title">Negros Explotados</span> [cite: 85]
        </div>
      </div>

      <div className="results-actions">
        <button className="btn-replay" type="button">
          🔄 Volver a Jugar
        </button>
      </div>
    </div>
  );
}