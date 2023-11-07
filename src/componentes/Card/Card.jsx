import styled from "@emotion/styled";

const DivEstilizada = styled.div`
  padding: ${(props) => props.theme.espacamentos.l};
  background: ${(props) => props.fundo === "laranja" ? props.theme.cores.secundarias.b : props.theme.cores.secundarias.a};
  border: 1px solid;
  border-color: ${(props) => props.fundo === "laranja" ? props.theme.cores.primarias.b :props.theme.cores.primarias.a};
  border-radius: ${(props) => props.theme.espacamentos.s};
`;
const CardEstilizado = styled.div`
  display: flex;
  flex-direction: ${(props) => props.fundo === "verde" ? "row" : "column"};
  align-items: center;
  padding: ${(props) => props.theme.espacamentos.m};
  background: ${(props) => (props.fundo === "verde" ? props.theme.cores.secundarias.c : props.theme.cores.secundarias.a)};
  border-color: ${(props) => props.theme.cores.primarias.a};
  border-radius: ${(props) => props.theme.espacamentos.s};
  width: ${(props) => props.fundo === "verde" ? "50%" : "20%"};
  height: ${(props) => props.fundo === "verde" ? "90px" : "150px"};
`;

export const Card = ({ children, variante, fundo }) => {

 if (variante === "card"){
    return <CardEstilizado fundo={fundo}>{children}</CardEstilizado>
 }
  return <DivEstilizada fundo={fundo}>{children}</DivEstilizada>;
};
