import { useState } from "react";
import { LabelEstilizada } from "../CampoTexto/CampoTexto";
import styled from "@emotion/styled";
import { Tipografia } from "../Tipografia/Tipografia";
import upload from "../../assets/upload.svg";

const AreaDropEstilizada = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-color: ${(props) => props.theme.cores.neutras.b};
  width: 100%;
  height: 120px;
  border: dashed 2px ${(props) => props.theme.cores.neutras.a};
  border-radius: 6px;
  text-align: center;
  color: ${(props) => props.theme.cores.neutras.a};
  margin-top: 8px;

  &.areaDrop {
    display: flex;
    align-items: center;
  }
`;

const DragAndDrop = ({ children }) => {
  const [dragging, setDragging] = useState(false);
  const [arquivos, setArquivos] = useState([]);

  const arrastandoArquivos = (evento) => {
    evento.preventDefault();
    setDragging(true);
  };

  const parandoDeArrastar = (evento) => {
    evento.preventDefault();
    setDragging(false);
  };

  const soltandoArquivo = (evento) => {
    evento.preventDefault();
    setDragging(false);

    const droppedFiles = Array.from(evento.dataTransfer.arquivos);
    setArquivos(droppedFiles);
  };

  return (
    <>
      <AreaDropEstilizada
        className={`areaDrop ${dragging ? "dragging" : ""}`}
        onDragEnter={arrastandoArquivos}
        onDragLeave={parandoDeArrastar}
        onDragOver={(evento) => evento.preventDefault()}
        onDrop={soltandoArquivo}
      >
        <img src={upload} style={{ width: "24px" }} />
        <Tipografia componente="body2" variante="body2">
          Arraste os arquivos para esta área ou clique para fazer o upload.
        </Tipografia>
        <ul style={{ margin: "2px" }}>
          {arquivos.map((arquivo, index) => (
            <li key={index}>{arquivo.name}</li>
          ))}
        </ul>
      </AreaDropEstilizada>
    </>
  );
};

export default DragAndDrop;
