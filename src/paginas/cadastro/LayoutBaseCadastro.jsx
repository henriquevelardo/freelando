import { Col, Row } from "react-grid-system";
import { Outlet } from "react-router-dom";
import { Card } from "../../componentes/Card/Card";
import { CadastroUsuarioProvider } from "../../context/CadastroUsuario";


const LayoutBaseCadastro = () => {
  return (
    <CadastroUsuarioProvider>
      <Row justify="center">
        <Col
          xxx={6}
          xxl={6}
          xl={6}
          lg={6}
          md={8}
          sm={12}
          style={{ margin: "80px 0" }}
        >
          <Card borda="true">
            <Outlet />
          </Card>
        </Col>
      </Row>
    </CadastroUsuarioProvider>
  );
};

export default LayoutBaseCadastro;
