
import React from 'react';
import './ComponenteGlobo.css';
import { JuegoContext } from '../../JuegoContext';

function Globo({ id, color, x, y, velocidad, onExplotar, onLlegoAlTecho, points }) {

  const estiloDinamico = {
    left: `${x}%`,
    animationDuration: `${velocidad}s`
  };

  return (
    <div
      className={`balloon-wrapper ${color}`}
      style={estiloDinamico}
      onAnimationEnd={() => onLlegoAlTecho(id)}
      id={`${points}`}
      onClick={() => onExplotar(id, color, points)}
    >
      <div className="balloon-body" >
        <div className="balloon-reflect"></div>
      </div>
      <div className="balloon-tie"></div>
      <div className="balloon-string"></div>
    </div>
  );
}


export { Globo }

