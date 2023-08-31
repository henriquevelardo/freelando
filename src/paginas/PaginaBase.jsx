import { Outlet } from "react-router-dom";
import { Cabecalho } from "../componentes/Cabecalho/Cabecalho";
import { Rodape } from "../componentes/Rodape/Rodape";
import { Container } from "react-grid-system";
import Banner from "../componentes/Banner/Banner";
import bannerImage from "./Home/assets/Hero.png"

const PaginaBase = ({ banner }) => {
  return (
    <>
      <Cabecalho />
      {banner === true ? <Banner imagem={bannerImage} /> : ""}
      <Container>
        <Outlet />
      </Container>
      <Rodape>Desenvolvido por Henrique Velardo @freelando</Rodape>
    </>
  );
};

export default PaginaBase;
