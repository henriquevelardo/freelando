import { createContext, useContext, useState } from "react";
import { useCadastroUsuarioContext } from "./CadastroUsuario";

const inputLogin = {
  emailInserido: "",
  senhaInserida: "",
};

export const LoginUsuarioContext = createContext({
  dadosInseridos: inputLogin,
  setEmailInserido: () => null,
  setSenhaInserida: () => null,
})

LoginUsuarioContext.displayName = 'ContextoLogin'

export const useLoginUsuarioContext = () => {
    return useContext(LoginUsuarioContext)
}

export const LoginUsuarioProvider = ({ children }) => {
  const { email, senha } = useCadastroUsuarioContext();
  const [dadosInseridos, setDadosInseridos] = useState(inputLogin)

  const setEmailInserido = (email) => {
    setDadosInseridos((estadoAnterior) => {
        return {
            ...estadoAnterior,
            email
        }
    })
  }
  const setSenhaInserida = (senha) => {
    setDadosInseridos((estadoAnterior) => {
        return {
            ...estadoAnterior,
            senha
        }
    })

  }

  return (
    <LoginUsuarioContext.Provider value={ { dadosInseridos, setEmailInserido, setSenhaInserida } } >
        { children }
    </LoginUsuarioContext.Provider>
  )

};
