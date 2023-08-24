import styled from "@emotion/styled";
import { useCadastroUsuarioContext } from "../../context/CadastroUsuario";
import { useEffect, useState } from "react";
import { NaoPreenchido, NomeIncompleto } from "../ErroFormulario/ErroFormulario";

export const LabelEstilizada = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  position: relative;
`;
const InputEstiliziado = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-top: ${(props) => props.theme.espacamentos.xs};
  margin-bottom: ${(props) => props.theme.espacamentos.s};
  background: ${(props) => props.theme.cores.branco};
  border: 1px solid;
  border-color: ${(props) => props.theme.cores.neutras.a};
  border-radius: ${(props) => props.theme.espacamentos.s};
  height: 40px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;

export const CampoTexto = ({
  titulo,
  valor,
  tipo = "text",
  onChange,
  tamanhoMinimo,
  chave,
  usuario
}) => {
  

  const [mensagem, setMensagem] = useState(null)

  const valida = (valor, target, tamanhoMinimo) =>{
    const componenteDeErro = exibeErro(valor, target, tamanhoMinimo)
    setMensagem(componenteDeErro)
  }

  const exibeErro = (valor, target, tamanhoMinimo) => {
    if(valor === ""){
      return <NaoPreenchido />
    }
    if( target === "nomeCompleto" && valor.length < tamanhoMinimo){
     return <NomeIncompleto />
    }
  }

 
  return (
    <LabelEstilizada>
      {titulo}
      <InputEstiliziado
        value={valor}
        type={tipo}
        onChange={(evento) => onChange(evento.target.value)}
        minLength={tamanhoMinimo}
        chave={chave}
        onBlur={(evento) => valida(valor, evento.target.name, "8")}
        name={chave}
      />
      {mensagem}
    </LabelEstilizada>
  );
};
