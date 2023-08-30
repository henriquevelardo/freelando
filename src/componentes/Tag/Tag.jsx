import styled from "@emotion/styled";
import { Tipografia } from "../Tipografia/Tipografia";

const TagEstilizada = styled.div`
  background-color: ${(props) => props.theme.cores.neutras.b};
  border: 1px solid;
  border-radius: 16px;
  padding: 0px 16px;
`;

const Tag = ({ children }) => {
  return (
    <TagEstilizada>
      <Tipografia componente="body" variante="body2">
        {children}
      </Tipografia>
    </TagEstilizada>
  );
};

export default Tag;
