import styled from "@emotion/styled";

const RodapeEstilizado = styled.footer`
  background: ${(props) => props.theme.cores.primarias.a};
  padding: ${(props) => props.theme.espacamentos.xl};
  padding-right: ${(props) => props.theme.espacamentos.xl};
  padding-left: ${(props) => props.theme.espacamentos.xl};
  color: ${(props) => props.theme.cores.branco};
`;

export const Rodape = ({ children }) => {
  return <RodapeEstilizado>{children}</RodapeEstilizado>;
};
