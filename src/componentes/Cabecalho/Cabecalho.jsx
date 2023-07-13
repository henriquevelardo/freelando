import styled from "@emotion/styled";

const CabecalhoEstilziado = styled.header`
    background: ${props => props.theme.cores.primarias.a};
    padding: ${props => props.theme.espacamentos.m};
`

export const Cabecalho = ({ children }) => {
    return (
        <CabecalhoEstilziado>
           {children}
        </CabecalhoEstilziado>
        
    )
}