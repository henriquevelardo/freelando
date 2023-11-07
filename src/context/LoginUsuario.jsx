import { createContext, useContext, useEffect, useState } from "react";
import { useCadastroUsuarioContext } from "./CadastroUsuario";
import { useNavigate } from "react-router-dom";
import { ComunicaApiContextProvider, useComunicaApiContext } from "./ComunicaAPI";
import { recebeUsuariosCadastrados } from "../api/ConectAPI";


const inputLogin = {
  emailInserido: "",
  senhaInserida: "",
};

let usuariosCadastrados = []

export const LoginUsuarioContext = createContext({
  dadosInseridos: inputLogin,
  baseDeDados: usuariosCadastrados,
  setEmailInserido: () => null,
  setSenhaInserida: () => null,
  validaAcesso: () => null,
});

LoginUsuarioContext.displayName = "ContextoLogin";

export const useLoginUsuarioContext = () => {
  return useContext(LoginUsuarioContext);
};

export const LoginUsuarioProvider = ({ children }) => {
  const [resposta, setResposta] = useState()
  const { usuario } = useCadastroUsuarioContext();
  const [dadosInseridos, setDadosInseridos] = useState(inputLogin);
  

  const setEmailInserido = (emailInserido) => {
    setDadosInseridos((estadoAnterior) => {
      return {
        ...estadoAnterior,
        emailInserido,
      };
    });
  };
  const setSenhaInserida = (senhaInserida) => {
    setDadosInseridos((estadoAnterior) => {
      return {
        ...estadoAnterior,
        senhaInserida,
      };
    });
  };


  useEffect(() =>{
    const ComunicaApi = async() => {
     const resposta =  await recebeUsuariosCadastrados() 

     setResposta(resposta)
     
     usuariosCadastrados = resposta
   }
   ComunicaApi()
   })

  
  const validaAcesso = (dadosInseridos) => {
    
    const credenciais = usuariosCadastrados.some(usuario => {
      return dadosInseridos.emailInserido === usuario.email && dadosInseridos.senhaInserida === usuario.senha
    })
    
    return credenciais

  };

  const contexto = {
    dadosInseridos,
    setEmailInserido,
    setSenhaInserida,
    validaAcesso,
  };

  return (
    <ComunicaApiContextProvider>
      <LoginUsuarioContext.Provider value={contexto}>
        {children}
      </LoginUsuarioContext.Provider>
    </ComunicaApiContextProvider>
  );
};
