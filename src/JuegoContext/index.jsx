import React from "react"
import { useRef } from "react"

const JuegoContext = React.createContext()

function JuegoProvider({ children }) {

    const [cambioPantalla, setCambioPantalla] = React.useState('Inicio')
    const [nombreJugador, setNombreJugador] = React.useState('')
    const [puntos, setPuntos] = React.useState(0)
    const [negros, setNegros] = React.useState(0)
    const [total, setTotal] = React.useState(0)
    const [totalPositivos, setTotalPositivos] = React.useState(0)
    const [totalNulos, setTotalNulos] = React.useState(0)

    const coloresValidos = [
        { color: 'red', points: 1, },
        { color: 'blue', points: 5, },
        { color: 'green', points: 2, },
        { color: 'black', points: -3, },
        // { color: 'yellow', points: 0, },
        // { color: 'white', points: 0, },
        // { color: 'pink', points: 0, },
        // { color: 'orange', points: 0, }
    ]

    const contadorId = React.useRef(0)

    function nuevoId() {
        contadorId.current = contadorId.current + 1
        return contadorId.current
    }

    const globosPorDefecto = [
        { id: nuevoId(), color: 'red', x: Math.random() * (90 - 5) + 5, y: Math.random() * (80 - 5) + 5, points: 1, velocidad: Math.random() * (8 - 4) + 4 },
        { id: nuevoId(), color: 'blue', x: Math.random() * (90 - 5) + 5, y: Math.random() * (80 - 5) + 5, points: 5, velocidad: Math.random() * (8 - 4) + 4 },
        { id: nuevoId(), color: 'green', x: Math.random() * (90 - 5) + 5, y: Math.random() * (80 - 5) + 5, points: 2, velocidad: Math.random() * (8 - 4) + 4 },
        { id: nuevoId(), color: 'black', x: Math.random() * (90 - 5) + 5, y: Math.random() * (80 - 5) + 5, points: -3, velocidad: Math.random() * (8 - 4) + 4 },
        // { id: nuevoId(), color: 'yellow', x: Math.random() * (90 - 5) + 5, y: Math.random() * (80 - 5) + 5, points: 0, velocidad: Math.random() * (8 - 4) + 4 },
        // { id: nuevoId(), color: 'white', x: Math.random() * (90 - 5) + 5, y: Math.random() * (80 - 5) + 5, points: 0, velocidad: Math.random() * (8 - 4) + 4 },
        // { id: nuevoId(), color: 'pink', x: Math.random() * (90 - 5) + 5, y: Math.random() * (80 - 5) + 5, points: 0, velocidad: Math.random() * (8 - 4) + 4 },
        // { id: nuevoId(), color: 'orange', x: Math.random() * (90 - 5) + 5, y: Math.random() * (80 - 5) + 5, points: 0, velocidad: Math.random() * (8 - 4) + 4 },
    ]

    const [tempBalloons, setTempBallons] = React.useState(globosPorDefecto);


    const generadorBallons = () => {
        let index = Math.floor(Math.random() * (4 - 0) + 0);
        let colorEscogido = coloresValidos[index];

        let globito = {
            id: nuevoId(),
            color: colorEscogido.color,
            points: colorEscogido.points,
            x: Math.random() * (90 - 5) + 5,
            y: Math.random() * (80 - 5) + 5,
            velocidad: Math.random() * (8 - 4) + 4
        }

        return globito

    }


    const explotarGlobo = (id, color, points) => {
        setPuntos((valores) => valores + parseInt(points))

        if (parseInt(points) == 1) {
            setTotal((cantidad) => cantidad + 1)
            setTotalPositivos((cantidad) => cantidad + 1)
        }
        if (parseInt(points) == 2) {
            setTotal((cantidad) => cantidad + 1)
            setTotalPositivos((cantidad) => cantidad + 1)
        }
        if (parseInt(points) == 5) {
            setTotal((cantidad) => cantidad + 1)
            setTotalPositivos((cantidad) => cantidad + 1)
        }
        if (parseInt(points) == -3) {
            setNegros((cantidad) => cantidad + 1)
            setTotal((cantidad) => cantidad + 1)
        }
        if (parseInt(points) == 0) {
            setTotal((cantidad) => cantidad + 1)
            setTotalNulos((cantidad) => cantidad + 1)
        }
        setTempBallons(globosActuales => globosActuales.filter(globo => globo.id !== id))
    }

    const eliminarPorTecho = (id) => {
        console.log('el globo subio');
        setTempBallons(globosActuales => globosActuales.filter(globo => globo.id !== id));
    };


    const onChange = (event) => {
        setNombreJugador(event.target.value)
    }

    const iniciar = () => {
        setCambioPantalla('Inicio')
    }

    const Jugar = (nombreJugador) => {
        if (nombreJugador.toString().trim() === '') {
            alert('Por Favor, ingresa un nombre en el campo. No se permiten espacios vacios!')
            return
        } else {
            setPuntos(0)
            setTotal(0)
            setNegros(0)
            setTotalPositivos(0)
            setTempBallons(globosPorDefecto)
            setCambioPantalla('Jugar')
        }
    }

    const Reiniciar = () => {
        setCambioPantalla('Reiniciar')
    }

    const ModalCambioNombre = () => {
        setCambioPantalla('ModalCambioNombre')
    }

    return (
        <JuegoContext.Provider value={{
            cambioPantalla,
            setCambioPantalla,
            nombreJugador,
            setNombreJugador,
            onChange,
            iniciar,
            Jugar,
            Reiniciar,
            puntos,
            setPuntos,
            negros,
            total,
            totalPositivos,
            tempBalloons,
            setTempBallons,
            explotarGlobo,
            eliminarPorTecho,
            ModalCambioNombre,
            generadorBallons
        }}>
            {children}
        </JuegoContext.Provider>
    )
}

export { JuegoProvider, JuegoContext }