import styled from "@emotion/styled";
import { useCadastroUsuarioContext } from "../../context/CadastroUsuario";
import { useEffect, useState } from "react";

export const LabelEstilizada = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  position: relative;
`;
const InputEstilziado = styled.input`
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
  chave
}) => {
  const { usuario, erroCadastro } = useCadastroUsuarioContext();
  const [estaPreenchido, setEstaPreenchido] = useState()
  

  const validaCadastro = (chave) => {
     if(usuario[`${chave}`] === "") {
       setEstaPreenchido(false)
     }else {
      setEstaPreenchido(true)
   }
  }
   
  return (
    <LabelEstilizada>
      {titulo}
      <InputEstilziado
        value={valor}
        type={tipo}
        onChange={(evento) => onChange(evento.target.value)}
        minLength={tamanhoMinimo}
        chave={chave}
        onBlur={() => validaCadastro(chave)}
        required 
      />
      {estaPreenchido === false ? <p>Não preencheu</p> : ""}
    </LabelEstilizada>
  );
};
