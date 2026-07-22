import React from "react";
import { useState, useEffect } from "react";
import { JuegoContext } from "../../JuegoContext";

function Temporizador() {
    const [tiempo, setTiempo] = React.useState(30)
    const { setCambioPantalla, setTempBallons, generadorBallons } = React.useContext(JuegoContext)

    useEffect(() => {

        const metronomo = setInterval(() => {
            setTiempo((antes) => antes > 0 ? antes - 1 : antes)
        }, 1000)


        const temporizadorGlobos = setInterval(() => {
            setTempBallons((anteriores) => [...anteriores, generadorBallons()])
        }, 500)
        return () => {clearInterval(metronomo); clearInterval(temporizadorGlobos)}
    }, [])

    useEffect(() => {
        if (tiempo == 0) {
            setTempBallons([])
            return setCambioPantalla("Reiniciar")
        }
    }, [tiempo])

    return <span className="hud-value">{tiempo}s</span>
}

export { Temporizador }