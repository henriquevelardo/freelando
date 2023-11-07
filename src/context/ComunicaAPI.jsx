import { createContext, useContext, useEffect, useState } from "react";


export const ComunicaApiContext = createContext({
    recebeUsuariosCadastrados: () => null, 
});

ComunicaApiContext.displayName = "Comunicacao";

export const useComunicaApiContext = () => {
  return useContext(ComunicaApiContext);
};

export const ComunicaApiContextProvider = ({ children }) => {
    

    const recebeUsuariosCadastrados = async() => {

        const request = await fetch('https://my-json-server.typicode.com/henriquevelardo/freelando-api/usuarios')
        const resposta = await request.json()

        console.log(resposta)

        return resposta
    }

    

    const contexto = {
        recebeUsuariosCadastrados, 
    }

  return <ComunicaApiContext.Provider value={contexto}>{children}</ComunicaApiContext.Provider>;
};
