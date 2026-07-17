import React from "react";
import { JuegoContext } from "../../JuegoContext";

function FormJugador() {
    const { nombreJugador, onChange, Jugar, Reiniciar } = React.useContext(JuegoContext)

    return (
        <div className="start-form">
            <label htmlFor="playerName" className="form-label">Introduce tu nombre de jugador:</label>
            <input
                type="text"
                id="playerName"
                className="name-input"
                placeholder="Ej. Oliver"
                autoComplete="off"
                value={nombreJugador}
                onChange={onChange}
            />
            <button className="btn-start" type="button" onClick={Jugar}>
                ¡Comenzar Partida! 🚀
            </button>
        </div>
    )
}

export { FormJugador }
