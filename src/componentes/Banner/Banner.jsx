import styled from "@emotion/styled";
import { Tipografia } from "../Tipografia/Tipografia";
import { Botao } from "../Botao/Botao";
import { Link } from "react-router-dom";

const BannerEstilizado = styled.section`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.cores.neutras.b};
  width: 100%;
  height: 600px;
  color: ${(props) => props.theme.cores.primarias.b};
`;

const ContainerEstilizado = styled.div`
  display: flex;
  align-items: center;
  margin-left: 90px;
  margin-right: 90px;
`;

const BannerClienteEstilizado = styled.div`
  background-image: url(${props => props.imagem});
  height: 246px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Banner = ({ imagem, visualizacao }) => {
  if (visualizacao === "cliente") {
    return (
      <BannerClienteEstilizado imagem={imagem}/>
    );
  }
  return (
    <BannerEstilizado url={imagem}>
      <ContainerEstilizado>
        <div>
          <Tipografia componente="h1" variante="h1">
            Uma ponte entre os freelas mais talentosos e os projetos mais
            interessantes!
          </Tipografia>
          <Link to={"/cadastro"}>
            <Botao variante="primaria"> Quero me cadastrar!</Botao>
          </Link>
        </div>
        <img src={imagem} />
      </ContainerEstilizado>
    </BannerEstilizado>
  );
};

export default Banner;
