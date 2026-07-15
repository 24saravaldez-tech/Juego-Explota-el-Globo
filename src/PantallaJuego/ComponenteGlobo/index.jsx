import React from 'react';
import './ComponenteGlobo.css';

export default function Balloon({ color, x, y }) {
  // Recibe la posición (x, y) en porcentaje y el color como props [cite: 112]
  const inlineStyle = {
    left: `${x}%`,
    top: `${y}%`,
  };

  return (
    <div 
      className={`balloon-wrapper ${color}`} 
      style={inlineStyle}
    >
      <div className="balloon-body">
        {/* Un sutil reflejo de luz para dar volumen al globo */}
        <div className="balloon-reflect"></div>
      </div>
      <div className="balloon-tie"></div>
      <div className="balloon-string"></div>
    </div>
  );
}
