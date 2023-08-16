import styled from "@emotion/styled";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import concluidoCliente from "./assets/cliente-concluido.png";
import { Col, Row } from "react-grid-system";
import { Link } from "react-router-dom";
import { Botao } from "../../componentes/Botao/Botao";


const ImagemEstilizada = styled.img`
  max-width: 100%;
  border-radius: 16px;

`;

const Concluido = () => {
  return (
    <>
      <Tipografia variante="h2Centralizado" componente="h2">
        Seu perfil está completo!
      </Tipografia>
      <Tipografia variante="bodyCentralizado" componente="body">
        Agora é só começar a se conectar com os melhores freelancers do mercado!
      </Tipografia>
      <ImagemEstilizada src={concluidoCliente} />
      <Row justify="center" style={{ marginTop: "32px" }}> 
        <Col lg={6} md={6} sm={6} style={{ textAlign: 'center' }}>
          <Link to="/cadastro/interesses">
            <Botao variante="secundaria">Voltar para home</Botao>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Concluido;
