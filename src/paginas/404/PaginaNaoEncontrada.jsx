import { Col, Row } from "react-grid-system";
import CabecalhoCadastro from "../cadastro/CabecalhoCadastro";
import erro404 from "./assets/erro 404.png";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { Botao } from "../../componentes/Botao/Botao";
import { Link } from "react-router-dom";

const PaginaNaoEncontrada = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <CabecalhoCadastro titulo="Ops... Página não encontrada :(" />

      <Row>
        <Col>
            <img src={erro404} style={{ maxWidth: "100%" }}/>
        </Col>
      </Row>

      <Row style={{ marginBottom: "16px", marginTop: "16px"}}>
        <Col>
            <Tipografia componente="body" variante="body1" >
                Não encontramos a página que você está buscando, mas temos muitas outras para você navegar!
            </Tipografia>
        </Col>
      </Row>

      <Row>
        <Col>
            <Botao>
                <Link to="/" style={{textDecoration: "none", color: "inherit"}}>Voltar para home</Link>
            </Botao>
        </Col>
      </Row>
    </div>
  );
};

export default PaginaNaoEncontrada;
