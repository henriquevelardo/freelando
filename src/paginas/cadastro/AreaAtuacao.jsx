import { useEffect } from "react";
import GrupoRadio from "../../componentes/GrupoRadio/GrupoRadio";
import { useCadastroUsuarioContext } from "../../context/CadastroUsuario";
import CabecalhoCadastro from "./CabecalhoCadastro";
import { Link, useNavigate } from "react-router-dom";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { Col, Row } from "react-grid-system";
import Tag from "../../componentes/Tag/Tag";
import { Botao } from "../../componentes/Botao/Botao";

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

const AreaAtuacao = () => {
  const { usuario, setInteresse, podeSelecionarInteresse } =
    useCadastroUsuarioContext();

  const navegar = useNavigate();

  useEffect(() => {
    if (!podeSelecionarInteresse()) {
      navegar("/cadastro");
    }
  }, [navegar, podeSelecionarInteresse]);


  return (
    <>
      <CabecalhoCadastro
        titulo="Crie seu cadastro"
        subtitulo="Qual área de atuacao?"
      />
      <GrupoRadio
        opcoes={opcoes}
        onChange={setInteresse}
        valorInteresse={usuario.interesse}
      />
      <Row style={{ textAlign: "center"}}>
        <Col>
          <Tipografia componente="h3" variante="h3">
            Nivel de experiência
          </Tipografia>

          <div style={{display: "flex", gap: "24px"}}>
            <Tag variante="nivel">Iniciante (1 a 3 anos)</Tag>
            <Tag variante="nivel">Intermediário (3 a 6 anos)</Tag>
            <Tag variante="nivel">Avancado (6 anos ou mais)</Tag>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "32px" }}>
        <Col lg={6} md={6} sm={6}>
          <Link to="/">
            <Botao variante="secundaria">Anterior</Botao>
          </Link>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "right" }}>
            <Link to="/cadastro/dados-pessoais" >
              <Botao variante="primaria">Proximo</Botao>
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AreaAtuacao;
