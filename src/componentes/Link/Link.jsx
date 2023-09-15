import styled from "@emotion/styled"

const LinkEstilizado = styled.p`
    color: ${props => props.theme.cores.primarias.b};
    text-decoration: underline;
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
        font-size: 20px;
        
      }

`





export const Link = ({ children }) => {

    return (
        <LinkEstilizado>{children}</LinkEstilizado>
    )
}
