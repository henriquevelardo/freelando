import { Col, Row } from "react-grid-system";
import CabecalhoCadastro from "../cadastro/CabecalhoCadastro";
import { CampoTexto } from "../../componentes/CampoTexto/CampoTexto";
import { Link } from "react-router-dom";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";

const Login = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <CabecalhoCadastro titulo="Efetuar Login" />
      <Row style={{ textAlign: "left" }}>
        <Col>
          <CampoTexto titulo="Email" />
        </Col>
      </Row>
      <Row style={{ textAlign: "left" }}>
        <Col>
          <CampoTexto titulo="Senha" />

          <div style={{textAlign: "right", marginTop: "-12px"}}>
            <Tipografia componente="body" variante="legenda">
              <Link style={{color:"#373737"}}>Esqueceu a senha?</Link>
            </Tipografia>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
