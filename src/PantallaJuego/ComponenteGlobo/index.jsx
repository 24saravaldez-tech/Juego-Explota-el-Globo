
import React from 'react';
import './ComponenteGlobo.css';
import { JuegoContext } from '../../JuegoContext';

function Globo({ id, color, x, y, velocidad, onExplotar, onLlegoAlTecho, points, onClick }) {

  const estiloDinamico = {
    left: `${x}%`,
    right: `${y}%`,
    animationDuration: `${velocidad}s`
  };

  return (
    <div
      className={`balloon-wrapper ${color}`}
      style={estiloDinamico}
      onClick={() => onExplotar(id, color, points)}
      onAnimationEnd={() => onLlegoAlTecho(id)}
      id={`${points}`}
    >
      <div className="balloon-body">
        <div className="balloon-reflect"></div>
      </div>
      <div className="balloon-tie"></div>
      <div className="balloon-string"></div>
    </div>
  );
}


export { Globo }

