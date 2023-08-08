import { Outlet } from "react-router-dom";
import { Cabecalho } from "../componentes/Cabecalho/Cabecalho";
import { Rodape } from "../componentes/Rodape/Rodape";
import { Container } from "react-grid-system";

const PaginaBase = () => {
  return (
    <>
      <Cabecalho />
      <Container>
        <Outlet />
      </Container>
      <Rodape>Todos os direitos reservados 2023 @freelando</Rodape>
    </>
  );
};

export default PaginaBase;
