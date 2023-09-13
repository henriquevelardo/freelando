import styled from "@emotion/styled";
import { Tipografia } from "../Tipografia/Tipografia";

const TagEstilizada = styled.div`
  background-color: ${(props) => props.theme.cores.neutras.b};
  border: 1px solid;
  border-radius: 16px;
  padding: ${(props) => props.variante === "nivel" ? "0px 14px" : "0px 16px"};

  width: ${(props) => props.variante === "nivel" ? "100%" : ""} 
`;

const Tag = ({ children, variante }) => {
  return (
    <TagEstilizada variante={variante}>
      <Tipografia componente="body" variante="body2">
        {children}
      </Tipografia>
    </TagEstilizada>
  );
};

export default Tag;
