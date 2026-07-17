import React from "react";
import './modalCambioNombre.css';
import { JuegoContext } from "../JuegoContext";

function ModalCambioNombre() {

    const { nombreJugador, setNombreJugador, onChange, Jugar, Reiniciar } = React.useContext(JuegoContext)


    return (
        <div className="modal-overlay">
            <div className="modal-container">

                <button className="modal-close-btn" aria-label="Cerrar">&times;</button>

                <div className="modal-header">
                    <h2>Editar Perfil</h2>
                    <p>Si deseas cambiar tu nombre de jugador antes de volver a jugar, este es el momneto. De lo contrario, pudes mantener el actual</p>
                </div>

                <div className="modal-body">
                    <div className="input-group">
                        <label htmlFor="playerName">Nombre del Jugador</label>
                        <input
                            type="text"
                            id="playerName"
                            className="name-input"
                            placeholder="Ej. Oliver"
                            autoComplete="off"
                            value={nombreJugador}
                            onChange={onChange}
                        />
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="btn btn-secondary" onClick={Reiniciar}>Cancelar</button>
                    <button className="btn btn-primary" onClick={Jugar}>Guardar Cambios</button>
                </div>
            </div>
        </div>
    )
}


export { ModalCambioNombre }