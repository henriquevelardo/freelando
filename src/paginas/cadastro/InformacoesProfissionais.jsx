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
import lixeira from "../../assets/lixeira.png";
import IconeAdicionar from "../../assets/ícone add.png";
import { Link } from "react-router-dom";
import { Botao } from "../../componentes/Botao/Botao";

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
            <Tag variante="habilidade">
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                FullStack <img src={lixeira} />
              </div>
            </Tag>
            <Tag variante="habilidade">
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                Front-End <img src={lixeira} />
              </div>
            </Tag>
            <Tag variante="habilidade">
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                Back-End <img src={lixeira} />
              </div>
            </Tag>
          </Habilidades>
        </Col>
      </Row>
      <img src={linha} width={"100%"} />
      <Row style={{ marginTop: "32px", marginBottom: "32px" }}>
        <Col lg={6}>
          <ListaSuspensa
            titulo="Idioma"
            capa="Escolha o idioma"
            opcoes={idiomas}
          />
        </Col>
        <Col lg={6}>
          <ListaSuspensa
            titulo="Nível"
            capa="Nivel de conhecimento"
            opcoes={nivelIdioma}
          />
        </Col>
      </Row>
      <Row>
        <Col
          lg={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={IconeAdicionar} style={{ width: "24px", height: "24px" }} />
          <Tipografia componente="body" variante="body2">
            Adicionar idiomas
          </Tipografia>
        </Col>
        <Col>
          <Tipografia componente="body" variante="body2">
            {" "}
            Português | Nível Nativo
          </Tipografia>
        </Col>
      </Row>
      <img src={linha} width={"100%"} />
      <Row style={{marginTop:"32px" , marginBottom:"32px", gap:"8px"}}>
        <Col lg={12}>
          <CampoTexto
            titulo="Portifólio"
            valor="Cole o link do seu portifólio"
          />
        </Col>
        <Col>
          <CampoTexto
            titulo="Linkedin"
            valor="Cole o link do seu Linkedin"
          />
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={6}>
          <Link>
            <Botao variante="secundaria">Anterior</Botao>
          </Link>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "right" }}>
            <Link to="/cadastro/concluido">
              <Botao variante="primaria">Proximo</Botao>
            </Link>
          </div>
        </Col>
      </Row>
    </form>
  );
};

export default InformacoesProfissionais;
