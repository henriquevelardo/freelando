import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import GrupoRadio from "../../componentes/GrupoRadio/GrupoRadio";
import { Botao } from "../../componentes/Botao/Botao";
import { Col, Row } from "react-grid-system";
import { Link } from "react-router-dom";
import CabecalhoCadastro from "./CabecalhoCadastro";

const opcoes = [
  {
    valor: 1,
    label: "TI e Programação",
  },
  {
    valor: 2,
    label: "Design e Multimídia",
  },
  {
    valor: 3,
    label: "Revisão",
  },
  {
    valor: 4,
    label: "Traducão",
  },
  {
    valor: 5,
    label: "Transcricão",
  },
  {
    valor: 6,
    label: "Marketing",
  },
];

const Interesses = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
      <CabecalhoCadastro 
        titulo="Crie seu cadastro"
        subtitulo="Qual a área de interesse?"
      />
      </div>
      <GrupoRadio opcoes={opcoes} />
      <Row style={{ marginTop: "32px" }}>
        <Col lg={6} md={6} sm={6}>
          <Link to="/cadastro">
            <Botao variante="secundaria">Anterior</Botao>
          </Link>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "right" }}>
            <Link to="/cadastro/dados-pessoais">
              <Botao variante="primaria">Proximo</Botao>
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Interesses;
