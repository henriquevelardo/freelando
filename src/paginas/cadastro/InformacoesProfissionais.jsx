import { Col, Row } from "react-grid-system";
import CabecalhoCadastro from "./CabecalhoCadastro";
import DragAndDrop from "../../componentes/DragAndDrop/DragAndDrop";
import {
  CampoTexto,
  LabelEstilizada,
} from "../../componentes/CampoTexto/CampoTexto";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import linha from "../../assets/Line 1.png";
import Tag from "../../componentes/Tag/Tag";
import styled from "@emotion/styled";
import { ListaSuspensa } from "../../componentes/ListaSuspensa/ListaSuspensa";

const Habilidades = styled.div`
  display: flex;
  gap: 24px;
`;

const nivelIdioma = [
    { text: "Iniciante", value: "1" },
    { text: "Intermediário", value: "2" },
    { text: "Avancado", value: "3" },
  ];

const idiomas = [
    { text: "Português", value: "1" },
    { text: "Espanhol", value: "2" },
    { text: "Ingles", value: "3" },
  ];
  

const InformacoesProfissionais = () => {
  return (
    <form>
      <CabecalhoCadastro
        titulo="Crie seu cadastro"
        subtitulo="Melhore sua descricao para atrair mais clientes!"
      />
      <Row>
        <Col style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div>
            <LabelEstilizada>Sua foto</LabelEstilizada>
            <DragAndDrop />
          </div>
          <div>
            <CampoTexto titulo="Resumo" variante="grande" />
            <Tipografia componente="body2" variante="legenda">
              <div style={{ textAlign: "end", marginTop: "-8px" }}>
                Faça um resumo em até 70 caracteres. <br></br>
                Exemplo: Designer experiente em Identidade Visual
              </div>
            </Tipografia>
          </div>
        </Col>
      </Row>
      <img src={linha} width={"100%"} />
      <Row style={{ marginTop: "32px", marginBottom: "32px" }}>
        <Col>
          <CampoTexto titulo="Cite 3 habilidades que você considera principais:" />
          <Habilidades>
            <Tag>FullStack</Tag>
            <Tag>Front-End</Tag>
            <Tag>Back-End</Tag>
          </Habilidades>
        </Col>
      </Row>
      <img src={linha} width={"100%"} />
      <Row style={{ marginTop: "32px", marginBottom: "32px" }}>
        <Col lg={6} >
        <ListaSuspensa 
            titulo="Idioma"
            capa="Escolha o idioma"
            opcoes={idiomas}
        />
        </Col>
        <Col lg={6} >
        <ListaSuspensa 
            titulo="Nível"
            capa="Nivel de conhecimento"
            opcoes={nivelIdioma}
        />
        </Col>
      </Row>
    </form>
  );
};

export default InformacoesProfissionais;
