import React from "react";
import { useState, useEffect } from "react";
import { JuegoContext } from "../../JuegoContext";


function Temporizador({ play }) {
    const [tiempo, setTiempo] = React.useState(10)
    const { cambioPantalla, setCambioPantalla, Reiniciar } = React.useContext(JuegoContext)

    useEffect(() => {
        const metronomo = setInterval(() => {
            setTiempo((antes) => antes > 0 && play == true ? antes - 1 : antes)
        }, 1000)
        return () => clearInterval(metronomo)

    }, [play])

    useEffect(() => {
        if (tiempo == 0) {
            return setCambioPantalla("Reiniciar")
        }
    }, [tiempo])

    return <span className="hud-value">{tiempo}s</span>
}

export { Temporizador }
