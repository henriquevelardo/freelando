import { createContext, useState } from "react";

export const DadosUsuario = createContext({
    
})
DadosUsuario.displayName = 'DadosUsuario'

export const DadosUsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(DadosUsuario)


    return (
        <DadosUsuario.Provider>
            { children }
        </DadosUsuario.Provider>
    )
}