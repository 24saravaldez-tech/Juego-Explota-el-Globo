import React from "react"
import { FormJugador } from "./FormJugador"



function PantallaRegistro() {
    return (
        <div className="start-card">
            <div className="start-header">
                <h1 className="game-title">🎈 Explota los Globos</h1>
                <p className="game-subtitle">¡Pon a prueba tus reflejos y consigue la máxima puntuación!</p>
            </div>

            <div className="start-content">
                <FormJugador />

                <div className="instructions-panel">
                    <h3>Tabla de Puntos</h3>
                    <p className="rules-text">Haz clic en los globos antes de que desaparezcan. ¡Cuidado con el color negro!</p>

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
    )
}

export { PantallaRegistro }