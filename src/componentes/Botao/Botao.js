import styled from "@emotion/styled";
import seta from "../../paginas/cadastro/assets/arrow_back.png";

const BotaoPrimarioEstilizado = styled.button`
    background: ${props => props.theme.cores.primarias.b};
    color: ${props => props.theme.cores.branco};
    border-radius: ${props => props.theme.espacamentos.s};
    padding: ${props => props.theme.espacamentos.xs} ${props => props.theme.espacamentos.s};
    box-sizing: border-box;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    border: none;                   
    &:hover {
        background: ${props => props.theme.cores.dark.b};
    }
    &:focus {
        outline-color: ${props => props.theme.cores.dark.d};
    }
`
const BotaoSecundarioEstilizado = styled.button`
    background: ${props => props.theme.cores.neutras.d};
    color: ${props => props.theme.cores.primarias.b};
    border: 2px solid ${props => props.theme.cores.primarias.b};
    border-radius: ${props => props.theme.espacamentos.s};
    padding: ${props => props.theme.espacamentos.xs} ${props => props.theme.espacamentos.s};
    box-sizing: border-box;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    &:hover {
        border-color: ${props => props.theme.cores.dark.b};
        color: ${props => props.theme.cores.dark.b};
    }
    &:focus {
        outline-color: ${props => props.theme.cores.focus};
    }

    &:before {
        content: url(${seta});
        margin-right: 12px;
    }
`

export const Botao = ({ children, variante, type }) => {

    if(variante === "primaria"){
        return <BotaoPrimarioEstilizado type={type} >
            {children}
        </BotaoPrimarioEstilizado>
    }

    return(
        <BotaoSecundarioEstilizado >
            {children}
        </BotaoSecundarioEstilizado>
    )
}