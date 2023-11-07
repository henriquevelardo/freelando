import { Col, Row } from "react-grid-system";
import CabecalhoCadastro from "../cadastro/CabecalhoCadastro";
import { CampoTexto } from "../../componentes/CampoTexto/CampoTexto";
import { Link, useNavigate } from "react-router-dom";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { Botao } from "../../componentes/Botao/Botao";
import login from "../../assets/login.svg";
import linha from "../../assets/Line 1.png";
import { Link as LinkPersonalizado } from "../../componentes/Link/Link";
import {
  LoginUsuarioProvider,
  useLoginUsuarioContext,
} from "../../context/LoginUsuario";
import { useComunicaApiContext } from "../../context/ComunicaAPI";
import { useEffect, useState } from "react";



const Login = () => {
  const { recebeUsuariosCadastrados } = useComunicaApiContext();
  const [acesso, setAcesso] = useState()
  const navegar = useNavigate();


  const { dadosInseridos, setEmailInserido, setSenhaInserida, validaAcesso } = useLoginUsuarioContext();

  const autenticacao = (evento) => {
    evento.preventDefault()

    const validaCredenciais = validaAcesso(dadosInseridos)
  
    setAcesso(validaCredenciais)

    console.log(acesso) 

    if(acesso) {
      navegar('/cliente')
    }
  }


  return (
    <form style={{ textAlign: "center" }} onSubmit={autenticacao}>
        <CabecalhoCadastro titulo="Efetuar Login" />
        <Row style={{ textAlign: "left" }}>
          <Col>
            <CampoTexto titulo="Email" onChange={setEmailInserido} />
          </Col>
        </Row>
        <Row style={{ textAlign: "left" }}>
          <Col>
            <CampoTexto titulo="Senha" onChange={setSenhaInserida} />

           {acesso === false ? <p>Negado</p> : ""}

            <div style={{ textAlign: "right", marginTop: "-8px" }}>
              <Tipografia componente="body" variante="legenda">
                <Link style={{ color: "#373737" }}>Esqueceu a senha?</Link>
              </Tipografia>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "32px" }}>
          <Col>
            <Botao variante="primaria" type="submit">
              Login
              <img src={login} style={{ marginLeft: "10px" }} />
            </Botao>
            <img src={linha} width={"100%"} style={{ marginTop: "40px" }} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Tipografia componente="body" variante="body2">
              Ainda não criou sua conta no Freelando?
            </Tipografia>
            <Link to="/cadastro">
              <LinkPersonalizado>Cadastre-se clicando aqui!</LinkPersonalizado>
            </Link>
          </Col>
        </Row>
    </form>
  );
};

export default Login;
