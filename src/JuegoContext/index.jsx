import React from "react"

const JuegoContext = React.createContext()

function JuegoProvider({ children }) {

    const [cambioPantalla, setCambioPantalla] = React.useState('Inicio')
    const [nombreJugador, setNombreJugador] = React.useState('')
    const [puntos, setPuntos] = React.useState(0)
    const [negros, setNegros] = React.useState(0)
    const [total, setTotal] = React.useState(0)
    const [totalPositivos, setTotalPositivos] = React.useState(0)

    const coloresValidos = [
        { id: 1, color: 'red', x: Math.random() * (90 - 5) + 5, y: Math.random() * (80 - 5) + 5, points: 1, velocidad: Math.random() * (8 - 4) + 4 },
        { id: 2, color: 'blue', x: Math.random() * (90 - 5) + 5, y: Math.random() * (80 - 5) + 5, points: 2, velocidad: Math.random() * (8 - 4) + 4 },
        { id: 3, color: 'green', x: Math.random() * (90 - 5) + 5, y: Math.random() * (80 - 5) + 5, points: 5, velocidad: Math.random() * (8 - 4) + 4 },
        { id: 4, color: 'black', x: Math.random() * (90 - 5) + 5, y: Math.random() * (80 - 5) + 5, points: -3, velocidad: Math.random() * (8 - 4) + 4 }
    ]

    const [tempBalloons, setTempBallons] = React.useState([
        { id: 1, color: 'red', x: Math.random() * (90 - 5) + 5, y: Math.random() * (80 - 5) + 5, points: 1, velocidad: Math.random() * (8 - 4) + 4 },
        { id: 2, color: 'blue', x: Math.random() * (90 - 5) + 5, y: Math.random() * (80 - 5) + 5, points: 2, velocidad: Math.random() * (8 - 4) + 4 },
        { id: 3, color: 'green', x: Math.random() * (90 - 5) + 5, y: Math.random() * (80 - 5) + 5, points: 5, velocidad: Math.random() * (8 - 4) + 4 },
        { id: 4, color: 'black', x: Math.random() * (90 - 5) + 5, y: Math.random() * (80 - 5) + 5, points: -3, velocidad: Math.random() * (8 - 4) + 4 }
    ]);



    const generadorBallons = (id, globos) => {
        let conjuntoBallons = [{ tempBalloons }]
        console.log('Yo soy temp', tempBalloons)

        if (id == 1) {
            conjuntoBallons.push(coloresValidos[0])
        }
        if (id == 2) {
            conjuntoBallons.push(coloresValidos[1])

        }
        if (id == 3) {
            conjuntoBallons.push(coloresValidos[2])

        }
        if (id == 4) {
            conjuntoBallons.push(coloresValidos[3])

        }

        return setTempBallons((prev) => [...prev, conjuntoBallons])

    }


    const explotarGlobo = (id, color, points) => {
        console.log('click en el globo');
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
        setTempBallons(globosActuales => globosActuales.filter(globo => globo.id !== id))
        generadorBallons(id, tempBalloons)
    }

    const eliminarPorTecho = (id) => {
        console.log('el globo subio');
        setTempBallons(globosActuales => globosActuales.filter(globo => globo.id !== id));
        generadorBallons(id, tempBalloons)
    };


    const onChange = (event) => {
        setNombreJugador(event.target.value)
    }

    const iniciar = () => {
        setCambioPantalla('Inicio')
    }

    const Jugar = () => {
        setPuntos(0)
        setTotal(0)
        setNegros(0)
        setTotalPositivos(0)
        setTempBallons(coloresValidos)
        setCambioPantalla('Jugar')
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
            ModalCambioNombre
        }}>
            {children}
        </JuegoContext.Provider>
    )
}

export { JuegoProvider, JuegoContext }
