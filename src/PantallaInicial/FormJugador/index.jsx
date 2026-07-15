import React from "react";
// import { useState } from "react";
import { PantallaInicial } from "..";
import { JuegoContext } from "../../JuegoContext";

function FormJugador() {
    const { cambioPantalla, setCambioPantalla } = React.useContext(JuegoContext)

    const Play = () => {
        setCambioPantalla('Jugar')
    }

    return (
        <div className="start-form">
            <label htmlFor="playerName" className="form-label">Introduce tu nombre de jugador:</label>
            <input
                type="text"
                id="playerName"
                className="name-input"
                placeholder="Ej. Oliver"
                autoComplete="off"
            />
            <button className="btn-start" type="button" onClick={() => Play()}>
                ¡Comenzar Partida! 🚀
            </button>
        </div>
    )
}

export { FormJugador }