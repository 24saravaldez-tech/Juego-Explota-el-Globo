import React from "react"

const JuegoContext = React.createContext()

function JuegoProvider({children}) {

    const [cambioPantalla, setCambioPantalla] = React.useState('Inicio')

    const iniciarJuego = () => {
        setCambioPantalla('Inicio')
    }

    const Jugar = () => {
        setCambioPantalla('Jugar')
    }

    const Reiniciar = () => {
        setCambioPantalla('Reiniciar')
    }

    return (
        <>
        <JuegoContext.Provider value={{
            cambioPantalla,
            setCambioPantalla,
            iniciarJuego,
            Jugar, 
            Reiniciar
        }}>
            {children}

        </JuegoContext.Provider>
        </>
    )

}

export {JuegoProvider, JuegoContext}