import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import cliente from "./assets/cliente.png";
import freela from "./assets/freela.png";
import { Link } from "../../componentes/Link/Link";
import { Link as RouterLink } from "react-router-dom";
import CabecalhoCadastro from "./CabecalhoCadastro";
import { useCadastroUsuarioContext } from "../../context/CadastroUsuario";

const SelecaoCliente = () => {
  const { setPerfil } = useCadastroUsuarioContext();

  return (
    <div style={{ textAlign: "center" }}>
      <CabecalhoCadastro
        titulo="Crie seu cadastro"
        subtitulo="Como podemos te ajudar?"
      />
      <Row>
        <Col md={6} sm={12}>
          <RouterLink
            to="interesses"
            onClick={() => setPerfil("cliente")}
            style={{ textDecoration: "none", color: "#373737" }}
          >
            <img src={cliente} alt="" />
            <Tipografia variante="body" componente="body">
              Sou cliente e preciso de um freela!
            </Tipografia>
          </RouterLink>
        </Col>
        <Col md={6} sm={12}>
          <RouterLink to="area-atuacao" onClick={() => setPerfil("profissional")} style={{ textDecoration: "none", color: "#373737" }}>
            <img src={freela} alt="" />
            <Tipografia variante="body" componente="body">
              Sou um freela e preciso de clientes!
            </Tipografia>
          </RouterLink>
        </Col>
      </Row>
      <div>
        <Tipografia variante="body2" componente="body2">
          Já tem conta?
        </Tipografia>
        <RouterLink to="/login">
          <Link>Faça login!</Link>
        </RouterLink>
      </div>
    </div>
  );
};

export default SelecaoCliente;
