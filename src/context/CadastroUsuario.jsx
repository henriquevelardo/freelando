import { useContext, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const usuarioInicial = {
  perfil: "",  
  interesse: "",
  nomeCompleto: "",
  uf: "",
  cidade: "",
  email: "",
  senha: "",
  senhaConfirmada: "",
};

const possiveisErros = {
    campoObrigatorio: "Por gentileza, esse campo não pode estar vazio"
}


export const CadastroUsuarioContext = createContext({
    usuario: usuarioInicial,
    setPerfil: () => null,
    setInteresse: () => null,
    setNomeCompleto: () => null,
    setUf: () => null,
    setCidade: () => null,
    setEmail: () => null,
    setSenha: () => null,
    setSenhaConfirmada: () => null,
    submeterUsuario: () => null,
    podeSelecionarInteresse: () => null, 
    podeIncluirDados: () => null,
    imprimiErro: () => null,
})

export const useCadastroUsuarioContext = () => {
    return useContext(CadastroUsuarioContext)
}

export const CadastroUsuarioProvider = ({ children }) => {
    const navegar = useNavigate()
    const [usuario, setUsuario] = useState(usuarioInicial)
    const [erros, setErros] = useState(null) 


    const setPerfil = (perfil) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                perfil
            }
        })
    }
    const setInteresse = (interesse) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                interesse
            }
        })
    }
    const setNomeCompleto = (nomeCompleto) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                nomeCompleto
            }
        })
    }
    const setUf = (uf) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                uf
            }
        })
    }
    const setCidade = (cidade) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                cidade
            }
        })
    }
    const setEmail = (email) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                email
            }
        })
    }
    const setSenha = (senha) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                senha
            }
        })
    }
    const setSenhaConfirmada = (senhaConfirmada) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                senhaConfirmada
            }
        })
    }
    const submeterUsuario = () => {
        console.log(usuario)
        navegar("/cadastro/concluido")
    }

    const podeSelecionarInteresse = () => {
        return !!usuario.perfil
    }

    const podeIncluirDados = () => {
        return !!usuario.interesse
    }   

    const imprimiErro = () => {
        return erros
    }

    const contexto = {
        usuario,
        erros,
        setPerfil, 
        setInteresse,
        setNomeCompleto,
        setUf,
        setCidade,
        setEmail,
        setSenha,
        setSenhaConfirmada,
        submeterUsuario,
        podeSelecionarInteresse,
        podeIncluirDados,
        imprimiErro
    }

    return (
        <CadastroUsuarioContext.Provider value={contexto}>
            { children }
        </CadastroUsuarioContext.Provider>
    )

}