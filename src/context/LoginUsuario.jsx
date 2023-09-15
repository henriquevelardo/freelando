import { createContext, useContext, useState } from "react";
import { useCadastroUsuarioContext } from "./CadastroUsuario";
import { useNavigate } from "react-router-dom";

const inputLogin = {
  emailInserido: "",
  senhaInserida: "",
};

export const LoginUsuarioContext = createContext({
  dadosInseridos: inputLogin,
  setEmailInserido: () => null,
  setSenhaInserida: () => null,
  validaAcesso: () => null, 
})

LoginUsuarioContext.displayName = 'ContextoLogin'

export const useLoginUsuarioContext = () => {
    return useContext(LoginUsuarioContext)
}

export const LoginUsuarioProvider = ({ children }) => {
  const navegar = useNavigate()
  const { usuario } = useCadastroUsuarioContext();
  const [dadosInseridos, setDadosInseridos] = useState(inputLogin)

  const setEmailInserido = (emailInserido) => {
    setDadosInseridos((estadoAnterior) => {
        return {
            ...estadoAnterior,
            emailInserido,
        }
    })
  }
  const setSenhaInserida = (senhaInserida) => {
    setDadosInseridos((estadoAnterior) => {
        return {
            ...estadoAnterior,
            senhaInserida
        }
    })

  }

  const validaAcesso = (dadosInseridos) => {
    if (usuario.email === dadosInseridos.emailInserido){
      console.log("email autenticado!")
      if(usuario.senha === dadosInseridos.senhaInserida){
        console.log("Senha autenticado, usuário confirmado!")

        navegar('/cliente')
      }
    }

  }

const contexto = {
  dadosInseridos, 
  setEmailInserido, 
  setSenhaInserida, 
  validaAcesso
}

  return (
    <LoginUsuarioContext.Provider value={contexto} >
        { children }
    </LoginUsuarioContext.Provider>
  )

};
