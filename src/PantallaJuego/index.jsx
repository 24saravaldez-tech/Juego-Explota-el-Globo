import React from 'react';
import './PantallaJuego.css';
import { Globo } from './ComponenteGlobo';
import { JuegoContext } from '../JuegoContext';
import { Temporizador } from './Temporizador';

function PantallaJuego() {
    const { nombreJugador, puntos, setPuntos, clickGlobo, tempBalloons, explotarGlobo, eliminarPorTecho } = React.useContext(JuegoContext)
    const [play, setPlay] = React.useState(false)

    return (
        <div className="pantalla-fondo pantalla-fondo--juego">
        <div className="game-layout">
            <header className="game-hud">
                <div className="hud-block">
                    <span className="hud-icon">👤</span>
                    <div className="hud-text">
                        <span className="hud-label">Jugador</span>
                        <span className="hud-value">{nombreJugador}</span>
                    </div>
                </div>

                <div className="hud-block timer-block">
                    <span className="hud-icon">⏱️</span>
                    <div className="hud-text">
                        <span className="hud-label">Tiempo Restante</span>
                        <Temporizador play={play} />
                    </div>
                    <div className="time-bar-container">
                        <div className="time-bar-fill" style={{ width: '80%' }}></div>
                    </div>
                </div>

                <div className="hud-block">
                    <span className="hud-icon">🏆</span>
                    <div className="hud-text">
                        <span className="hud-label">Puntaje</span>
                        <span className="hud-value">{puntos}</span>
                    </div>
                </div>
            </header>
            {play ? <main className="game-canvas" onClick={(e) => e.stopPropagation()}>
                {tempBalloons.map((globo) => (
                    <Globo
                        key={globo.id}
                        id={globo.id}
                        color={globo.color}
                        x={globo.x}
                        y={globo.y}
                        points={globo.points}
                        velocidad={globo.velocidad}
                        onExplotar={explotarGlobo}
                        onLlegoAlTecho={eliminarPorTecho}
                    />
                ))}
            </main>
                : <main className="game-canvas" onClick={(e) => e.stopPropagation()}/>}


            <footer>
                <button className="btn-start" type="button" onClick={() => setPlay(true)}>Play</button>
            </footer>
        </div>
        </div>
    );
}

export { PantallaJuego }