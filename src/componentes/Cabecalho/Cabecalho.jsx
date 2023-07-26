import styled from "@emotion/styled";
import logo from "../../assets/freelando.png"
import { Tipografia } from "../Tipografia/Tipografia";

const CabecalhoEstilziado = styled.header`
    background: ${props => props.theme.cores.primarias.a};
    padding: ${props => props.theme.espacamentos.m};
    padding-right: ${props => props.theme.espacamentos.xl};
    padding-left: ${props => props.theme.espacamentos.xl};
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.cores.branco}
`

export const Cabecalho = () => {
    return (
        <CabecalhoEstilziado>
           <img src={logo}/>
           <Tipografia variante="body" componente="h2">Login</Tipografia>
        </CabecalhoEstilziado>
        
    )
}