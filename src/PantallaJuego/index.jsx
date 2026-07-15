import React from 'react';
import './PantallaJuego.css';
import { PantallaInicial } from '../PantallaInicial';

function PantallaJuego() {


    
    const tempBalloons = [
        { id: 1, color: 'red', x: 20, y: 30 },
        { id: 2, color: 'blue', x: 70, y: 15 },
        { id: 3, color: 'green', x: 45, y: 60 },
        { id: 4, color: 'black', x: 80, y: 70 }
    ];

    return (
        <div className="game-layout">
            {/* HUD Superior (Barra de estado) */}
            <header className="game-hud">
                <div className="hud-block">
                    <span className="hud-icon">👤</span>
                    <div className="hud-text">
                        <span className="hud-label">Jugador</span>
                        <span className="hud-value">Oliver</span>
                    </div>
                </div>

                <div className="hud-block timer-block">
                    <span className="hud-icon">⏱️</span>
                    <div className="hud-text">
                        <span className="hud-label">Tiempo Restante</span>
                        <span className="hud-value">30s</span>
                    </div>
                    {/* Barra de progreso visual del tiempo */}
                    <div className="time-bar-container">
                        <div className="time-bar-fill" style={{ width: '80%' }}></div>
                    </div>
                </div>

                <div className="hud-block">
                    <span className="hud-icon">🏆</span>
                    <div className="hud-text">
                        <span className="hud-label">Puntaje</span>
                        <span className="hud-value">0</span>
                    </div>
                </div>
            </header>

            {/* Canvas del Juego */}
            <main className="game-canvas">
                {/* Aquí renderizarás dinámicamente tu array de globos activos */}
                {tempBalloons.map((balloon) => (
                    <Balloon
                        key={balloon.id}
                        color={balloon.color}
                        x={balloon.x}
                        y={balloon.y}
                    />
                ))}
            </main>
        </div>
    );
}

export { PantallaJuego }