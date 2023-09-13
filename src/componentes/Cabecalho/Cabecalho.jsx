import styled from "@emotion/styled";
import logo from "../../assets/freelando.png";
import { Tipografia } from "../Tipografia/Tipografia";
import { Link } from "react-router-dom";

const CabecalhoEstilziado = styled.header`
  background: ${(props) => props.theme.cores.primarias.a};
  padding: ${(props) => props.theme.espacamentos.m};
  padding-right: ${(props) => props.theme.espacamentos.xl};
  padding-left: ${(props) => props.theme.espacamentos.xl};
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.cores.branco};
`;

export const Cabecalho = () => {
  return (
    <CabecalhoEstilziado>
      <Link to="/">
        <img src={logo} />
      </Link>
      <Link to="/login" style={{textDecoration: "none", color: "#F5F5F5" }}>
        <Tipografia variante="body" componente="h2">
          Login
        </Tipografia>
      </Link>
    </CabecalhoEstilziado>
  );
};
