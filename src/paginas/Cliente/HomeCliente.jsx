import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import FiltroLateral from "../../componentes/FiltroLateral/FiltroLateral";

const HomeCliente = () => {
  return (
    <Row style={{margin: "80px auto"}}>
      <Col lg={4.3}>
        <div>
          <FiltroLateral>Filtre as características</FiltroLateral> 
        </div>
      </Col>
      <Col>
        <div style={{display:"flex", flexDirection: "column"}}>
          <Tipografia componente="h2" variante="h2">
            Boas Vindas!
          </Tipografia>
          <Tipografia componente="h3" variante="h3">
            Veja os projetos disponíveis hoje.
          </Tipografia>
        </div>
      </Col>
    </Row>
  );
};

export default HomeCliente;
