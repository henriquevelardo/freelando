import styled from "@emotion/styled";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import concluidoCliente from "./assets/cliente-concluido.png";
import { Col, Row } from "react-grid-system";
import { Link, useNavigate } from "react-router-dom";
import { Botao } from "../../componentes/Botao/Botao";
import { useCadastroUsuarioContext } from "../../context/CadastroUsuario";
import { useEffect } from "react";
import concluidoProfissional from "../../assets/Rectangle 6.png"

const ImagemEstilizada = styled.img`
  max-width: 100%;
  border-radius: 16px;

`;

const Concluido = () => {

  const {
    usuario,
    setNomeCompleto,
    setUf,
    setCidade,
    setEmail,
    setSenha,
    setSenhaConfirmada,
    submeterUsuario,
    podeIncluirDados,
    podeConcluir,
    erroCadastro,
  } = useCadastroUsuarioContext();

  const navegar = useNavigate();

  useEffect(() => {
    if (!podeConcluir()) {
      navegar("/cadastro/dados-pessoais");
    }
  }, [navegar, podeIncluirDados]);

  return (
    <>
      <Tipografia variante="h2Centralizado" componente="h2">
        Seu perfil está completo!
      </Tipografia>
      <Tipografia variante="bodyCentralizado" componente="body">
        {usuario.perfil === "cliente" ? 
        "Agora é só começar a se conectar com os melhores freelancers do mercado!" : 
        "Parabéns! Agora é só comecar a trabalhar" }
      </Tipografia>
      {usuario.perfil === "cliente" ? <ImagemEstilizada src={concluidoCliente} /> : <ImagemEstilizada src={concluidoProfissional} />}
      
      <Row justify="center" style={{ marginTop: "32px" }}> 
        <Col lg={6} md={6} sm={6} style={{ textAlign: 'center' }}>
          <Link to="/">
            <Botao variante="secundaria">Voltar para home</Botao>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Concluido;
