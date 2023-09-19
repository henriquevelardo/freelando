import { Outlet } from "react-router-dom";
import { Cabecalho } from "../componentes/Cabecalho/Cabecalho";
import { Rodape } from "../componentes/Rodape/Rodape";
import { Container } from "react-grid-system";
import Banner from "../componentes/Banner/Banner";


const PaginaBase = ({ banner, url, visualizacao }) => {
  return (
    <>
      <Cabecalho />
      {banner === true ? <Banner imagem={url} visualizacao={visualizacao} /> : ""}
      <Container>
        <Outlet />
      </Container>
      <Rodape>Desenvolvido por Henrique Velardo @freelando</Rodape>
    </>
  );
};

export default PaginaBase;
