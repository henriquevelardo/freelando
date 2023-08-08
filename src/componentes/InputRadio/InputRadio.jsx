import styled from "@emotion/styled";
import { useState } from "react";

const LabelEstilizada = styled.label`
  display:flex;
  font-size: 16px;
  cursor: pointer;
  align-items: center;
  column-gap: 12px;
  
  &:hover {
    &:before {
        border-color: ${props => (props.theme.cores.focus)};
    }
}

  &:before {
    content: ' ';
    height: 20px;
    width: 20px;
    border: 1px solid ${props => props.theme.cores.neutras.a};
    border-radius: 50%;
    border-color: inherit;
    background-color: ${props => ( props.checked ? props.theme.cores.primarias.b : props.theme.cores.branco)};
    border-color: ${props => (props.checked ? props.theme.cores.primarias.b : 'inherit')};
  }



`;

const InputEstilizada = styled.input`
    appearence: none;
    opacity: 0;
    &:focus + label {
        border-radius: 16px;
        border: 1px solid;
        border-color: ${props => props.theme.cores.focus};
    }
`;



const InputRadio = ({ label, valor }) => {
    const [checked, setChecked] = useState(false);
    const seleciona = () => {
        setChecked(!checked)
    }


  return (
    <div>
      <InputEstilizada type="radio"  />
      <LabelEstilizada onClick={seleciona} checked={checked}>{label}</LabelEstilizada>
    </div>
  );

  
};

export default InputRadio;
